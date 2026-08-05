package generator

import (
	"fmt"
	"math/rand"

	"gezyclass/ai-bot/internal/pocketbase"
)

type ExamInput struct {
	Title         string
	ClassID       int
	QuestionCount int
	TokenCount    int
	DurationMin   int
}

func CreateExam(client *pocketbase.Client, input ExamInput) error {
	fmt.Printf("📝 Creating exam: %s (Kelas %d, %d soal, %d token)\n",
		input.Title, input.ClassID, input.QuestionCount, input.TokenCount)

	// 1. Get class
	classSlug := fmt.Sprintf("kelas-%d", input.ClassID)
	classes, err := client.List("classes", fmt.Sprintf("slug='%s'", classSlug))
	if err != nil || len(classes) == 0 {
		return fmt.Errorf("class not found: %s", classSlug)
	}
	classID := classes[0]["id"].(string)
	fmt.Printf("  ✓ Class: %s (%s)\n", classes[0]["name"], classID)

	// 2. Get available questions
	questions, err := client.List("questions", fmt.Sprintf("class_id='%s' && type='pg'", classID))
	if err != nil {
		return fmt.Errorf("failed to list questions: %w", err)
	}
	if len(questions) < input.QuestionCount {
		return fmt.Errorf("not enough questions: need %d, have %d", input.QuestionCount, len(questions))
	}

	// Shuffle and pick
	rand.Shuffle(len(questions), func(i, j int) {
		questions[i], questions[j] = questions[j], questions[i]
	})
	selected := questions[:input.QuestionCount]
	fmt.Printf("  ✓ Selected %d questions\n", len(selected))

	// 3. Create exam
	duration := input.DurationMin * 60
	if duration == 0 {
		duration = 1800 // default 30 min
	}
	exam, err := client.Create("exams", map[string]interface{}{
		"title":                  input.Title,
		"class_id":               classID,
		"description":            fmt.Sprintf("Ujian %s — %d soal pilihan ganda", input.Title, input.QuestionCount),
		"duration":               duration,
		"random_questions":       true,
		"random_options":         true,
		"show_score_after":       true,
		"show_explanation_after": true,
		"is_active":              true,
	})
	if err != nil {
		return fmt.Errorf("failed to create exam: %w", err)
	}
	examID := exam["id"].(string)
	fmt.Printf("  ✓ Exam created: %s\n", examID)

	// 4. Link questions
	for i, q := range selected {
		_, err := client.Create("exam_questions", map[string]interface{}{
			"exam_id":     examID,
			"question_id": q["id"],
			"order_num":   i + 1,
			"points":      10,
		})
		if err != nil {
			fmt.Printf("  ⚠ Failed to link question %d: %v\n", i+1, err)
		}
	}
	fmt.Printf("  ✓ %d questions linked\n", len(selected))

	// 5. Generate tokens
	tokens := generateTokens(input.Title, input.TokenCount)
	for _, token := range tokens {
		_, err := client.Create("exam_tokens", map[string]interface{}{
			"exam_id": examID,
			"token":   token,
			"is_used": false,
		})
		if err != nil {
			fmt.Printf("  ⚠ Failed to create token %s: %v\n", token, err)
		} else {
			fmt.Printf("  ✓ Token: %s\n", token)
		}
	}

	fmt.Println("\n✅ Exam complete!")
	fmt.Printf("   Access: https://class.gezytech.web.id/cbt/\n")
	fmt.Printf("   Tokens:\n")
	for _, t := range tokens {
		fmt.Printf("     - %s\n", t)
	}
	return nil
}

func AddTokens(client *pocketbase.Client, examID string, count int) ([]string, error) {
	// Get exam title
	exams, err := client.List("exams", fmt.Sprintf("id='%s'", examID))
	if err != nil || len(exams) == 0 {
		return nil, fmt.Errorf("exam not found: %s", examID)
	}
	title := exams[0]["title"].(string)

	tokens := generateTokens(title, count)
	for _, token := range tokens {
		_, err := client.Create("exam_tokens", map[string]interface{}{
			"exam_id": examID,
			"token":   token,
			"is_used": false,
		})
		if err != nil {
			fmt.Printf("  ⚠ Failed to create token %s: %v\n", token, err)
		} else {
			fmt.Printf("  ✓ Token: %s\n", token)
		}
	}
	return tokens, nil
}

func DeleteToken(client *pocketbase.Client, token string) error {
	records, err := client.List("exam_tokens", fmt.Sprintf("token='%s'", token))
	if err != nil {
		return fmt.Errorf("failed to find token: %w", err)
	}
	if len(records) == 0 {
		return fmt.Errorf("token not found: %s", token)
	}
	t := records[0]
	if t["is_used"].(bool) {
		return fmt.Errorf("token %s already used, cannot delete", token)
	}

	// Delete via do (PocketBase API)
	_, err = client.Delete("exam_tokens", t["id"].(string))
	if err != nil {
		return fmt.Errorf("failed to delete token: %w", err)
	}
	fmt.Printf("  ✓ Token deleted: %s\n", token)
	return nil
}

func generateTokens(title string, count int) []string {
	const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	var tokens []string
	seen := make(map[string]bool)
	for len(tokens) < count {
		length := 4 + rand.Intn(3) // 4-6 characters
		token := make([]byte, length)
		for j := range token {
			token[j] = charset[rand.Intn(len(charset))]
		}
		s := string(token)
		if !seen[s] {
			seen[s] = true
			tokens = append(tokens, s)
		}
	}
	return tokens
}
