package staging

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"math/big"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"gopkg.in/yaml.v3"
)

type MaterialPackageInput struct {
	StagingDir     string
	ClassID        int
	ChapterName    string
	SubchapterName string
	Title          string
}

type ArticlePackageInput struct {
	StagingDir   string
	Title        string
	CategoryName string
}

type ExamPackageInput struct {
	StagingDir      string
	Title           string
	ClassID         int
	QuestionIDs     []string
	TokenValues     []string
	DurationMin     int
	QuestionCount   int
	SelectedClassID string
	Description     string
	ExamSourceID    string
}

type stagingIndex struct {
	Entries map[string]string `json:"entries"`
}

func WriteMaterialPackage(input MaterialPackageInput) ([]string, error) {
	if input.StagingDir == "" {
		input.StagingDir = "content-staging"
	}
	classSourceID := fmt.Sprintf("class-%d", input.ClassID)
	chapterSlug := slugify(input.ChapterName)
	subchapterSlug := slugify(input.SubchapterName)
	materialSlug := slugify(input.Title)
	if materialSlug == "" {
		materialSlug = subchapterSlug
	}
	classDoc := docText(map[string]any{
		"kind":      "class",
		"source_id": classSourceID,
		"name":      fmt.Sprintf("Kelas %d", input.ClassID),
		"slug":      fmt.Sprintf("kelas-%d", input.ClassID),
		"order":     input.ClassID,
	}, "")
	chapterSourceID := fmt.Sprintf("chapter-%s", chapterSlug)
	chapterDoc := docText(map[string]any{
		"kind":            "chapter",
		"source_id":       chapterSourceID,
		"class_source_id": classSourceID,
		"name":            input.ChapterName,
		"slug":            chapterSlug,
		"order":           1,
	}, "")
	subchapterSourceID := fmt.Sprintf("subchapter-%s", subchapterSlug)
	subchapterDoc := docText(map[string]any{
		"kind":              "subchapter",
		"source_id":         subchapterSourceID,
		"chapter_source_id": chapterSourceID,
		"name":              input.SubchapterName,
		"slug":              subchapterSlug,
		"order":             1,
	}, "")
	materialSourceID := fmt.Sprintf("material-%s", materialSlug)
	materialBody := generateMaterialMarkdown(input.Title)
	materialDoc := docText(map[string]any{
		"kind":                 "material",
		"source_id":            materialSourceID,
		"subchapter_source_id": subchapterSourceID,
		"title":                fallbackTitle(input.Title, input.SubchapterName),
		"order":                1,
	}, materialBody)
	exampleSourceID := fmt.Sprintf("example-%s", materialSlug)
	exampleDoc := docText(map[string]any{
		"kind":               "example",
		"source_id":          exampleSourceID,
		"material_source_id": materialSourceID,
		"title":              "Contoh Soal: " + fallbackTitle(input.Title, input.SubchapterName),
		"order":              1,
		"solution":           "$$(-8) + 12 = 4$$\n\nKarena bilangan positif lebih besar, maka hasilnya positif.",
	}, "Berapakah hasil dari $(-8) + 12$?")
	exerciseSourceID := fmt.Sprintf("exercise-%s", materialSlug)
	exerciseDoc := docText(map[string]any{
		"kind":                 "exercise",
		"source_id":            exerciseSourceID,
		"subchapter_source_id": subchapterSourceID,
		"title":                "Latihan: " + fallbackTitle(input.Title, input.SubchapterName),
		"order":                1,
		"solution":             "1. $(-12) \\div 4 = -3$\n\n2. $(-5) \\times (-3) = 15$ (negatif × negatif = positif)",
	}, "1. Hitung: $(-12) \\div 4 = \\dots$\n\n2. Tentukan hasil dari $(-5) \\times (-3)$")

	files := map[string]string{
		filepath.Join(input.StagingDir, "classes", classSourceID+".md"):          classDoc,
		filepath.Join(input.StagingDir, "chapters", chapterSourceID+".md"):       chapterDoc,
		filepath.Join(input.StagingDir, "subchapters", subchapterSourceID+".md"): subchapterDoc,
		filepath.Join(input.StagingDir, "materials", materialSourceID+".md"):     materialDoc,
		filepath.Join(input.StagingDir, "examples", exampleSourceID+".md"):       exampleDoc,
		filepath.Join(input.StagingDir, "exercises", exerciseSourceID+".md"):     exerciseDoc,
	}
	if err := writeDocsAndIndex(input.StagingDir, files); err != nil {
		return nil, err
	}
	return sortedKeys(files), nil
}

func WriteArticlePackage(input ArticlePackageInput) ([]string, error) {
	if input.StagingDir == "" {
		input.StagingDir = "content-staging"
	}
	categorySlug := slugify(input.CategoryName)
	categorySourceID := fmt.Sprintf("category-%s", categorySlug)
	articleSlug := slugify(input.Title)
	articleSourceID := fmt.Sprintf("article-%s", articleSlug)
	articleBody := generateArticleMarkdown(input.Title)
	files := map[string]string{
		filepath.Join(input.StagingDir, "categories", categorySourceID+".md"): docText(map[string]any{
			"kind":      "category",
			"source_id": categorySourceID,
			"name":      input.CategoryName,
			"slug":      categorySlug,
		}, ""),
		filepath.Join(input.StagingDir, "articles", articleSourceID+".md"): docText(map[string]any{
			"kind":               "article",
			"source_id":          articleSourceID,
			"category_source_id": categorySourceID,
			"title":              input.Title,
			"slug":               articleSlug,
			"published":          false,
		}, articleBody),
	}
	if err := writeDocsAndIndex(input.StagingDir, files); err != nil {
		return nil, err
	}
	return sortedKeys(files), nil
}

func WriteExamPackage(input ExamPackageInput) ([]string, error) {
	if input.StagingDir == "" {
		input.StagingDir = "content-staging"
	}
	examSlug := slugify(input.Title)
	if input.ExamSourceID == "" {
		input.ExamSourceID = fmt.Sprintf("exam-%s", examSlug)
	}
	description := input.Description
	if description == "" {
		description = fmt.Sprintf("Ujian %s — %d soal pilihan ganda", input.Title, input.QuestionCount)
	}
	duration := input.DurationMin
	if duration == 0 {
		duration = 30
	}
	meta := map[string]any{
		"kind":                   "exam",
		"source_id":              input.ExamSourceID,
		"title":                  input.Title,
		"description":            description,
		"duration_min":           duration,
		"question_ids":           input.QuestionIDs,
		"tokens":                 input.TokenValues,
		"random_questions":       true,
		"random_options":         true,
		"show_score_after":       true,
		"show_explanation_after": true,
		"is_active":              true,
	}
	if input.SelectedClassID != "" {
		meta["class_id"] = input.SelectedClassID
	} else {
		meta["class_source_id"] = fmt.Sprintf("class-%d", input.ClassID)
	}
	files := map[string]string{
		filepath.Join(input.StagingDir, "exams", input.ExamSourceID+".md"): docText(meta, ""),
	}
	if err := writeDocsAndIndex(input.StagingDir, files); err != nil {
		return nil, err
	}
	return sortedKeys(files), nil
}

func UpdateExamTokensByRecordID(stagingDir, statePath, examRecordID string, addTokens, removeTokens []string) error {
	sourceID, err := LookupSourceIDByRecordID(statePath, "exams", examRecordID)
	if err != nil {
		return err
	}
	path, err := lookupStagingPath(stagingDir, "exam", sourceID)
	if err != nil {
		return err
	}
	doc, err := os.ReadFile(path)
	if err != nil {
		return err
	}
	meta, body, err := splitDocument(string(doc))
	if err != nil {
		return err
	}
	var fm map[string]any
	if err := yaml.Unmarshal([]byte(meta), &fm); err != nil {
		return err
	}
	tokens := stringSlice(fm["tokens"])
	set := make(map[string]struct{}, len(tokens))
	for _, token := range tokens {
		set[token] = struct{}{}
	}
	for _, token := range addTokens {
		if token == "" {
			continue
		}
		set[token] = struct{}{}
	}
	for _, token := range removeTokens {
		delete(set, token)
	}
	tokens = tokens[:0]
	for token := range set {
		tokens = append(tokens, token)
	}
	sort.Strings(tokens)
	fm["tokens"] = tokens
	return writeDocument(path, fm, body)
}

func LookupSourceIDByRecordID(statePath, collection, recordID string) (string, error) {
	state, err := LoadState(statePath)
	if err != nil {
		return "", err
	}
	for key, record := range state.Records {
		if record.Collection == collection && record.RecordID == recordID {
			parts := strings.SplitN(key, ":", 2)
			if len(parts) == 2 {
				return parts[1], nil
			}
		}
	}
	return "", fmt.Errorf("no source id found for %s record %s", collection, recordID)
}

func RemoveTokenFromExamByRecordID(stagingDir, statePath, examRecordID, token string) error {
	return UpdateExamTokensByRecordID(stagingDir, statePath, examRecordID, nil, []string{token})
}

func AddTokensToExamByRecordID(stagingDir, statePath, examRecordID string, tokens []string) error {
	return UpdateExamTokensByRecordID(stagingDir, statePath, examRecordID, tokens, nil)
}

func RemoveTokenFromAnyExam(stagingDir, token string) (string, error) {
	index, err := loadIndex(stagingDir)
	if err != nil {
		return "", err
	}
	for key, path := range index.Entries {
		if !strings.HasPrefix(key, "exam:") {
			continue
		}
		raw, err := os.ReadFile(path)
		if err != nil {
			return "", err
		}
		meta, body, err := splitDocument(string(raw))
		if err != nil {
			return "", err
		}
		var fm map[string]any
		if err := yaml.Unmarshal([]byte(meta), &fm); err != nil {
			return "", err
		}
		tokens := stringSlice(fm["tokens"])
		next := make([]string, 0, len(tokens))
		removed := false
		for _, existing := range tokens {
			if existing == token {
				removed = true
				continue
			}
			next = append(next, existing)
		}
		if !removed {
			continue
		}
		fm["tokens"] = next
		if err := writeDocument(path, fm, body); err != nil {
			return "", err
		}
		return strings.TrimPrefix(key, "exam:"), nil
	}
	return "", fmt.Errorf("token %s not found in staging exams", token)
}

func GenerateTokens(count int) ([]string, error) {
	const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	if count < 0 {
		count = 0
	}
	tokens := make([]string, 0, count)
	seen := make(map[string]struct{})
	for len(tokens) < count {
		length := 4 + len(tokens)%3
		token := make([]byte, length)
		for i := range token {
			n, err := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
			if err != nil {
				return nil, err
			}
			token[i] = charset[n.Int64()]
		}
		value := string(token)
		if _, ok := seen[value]; ok {
			continue
		}
		seen[value] = struct{}{}
		tokens = append(tokens, value)
	}
	return tokens, nil
}

func writeDocsAndIndex(stagingDir string, files map[string]string) error {
	for path, content := range files {
		if err := writeString(path, content); err != nil {
			return err
		}
	}
	index, err := loadIndex(stagingDir)
	if err != nil {
		return err
	}
	for path, content := range files {
		kind, sourceID, err := docIdentity(content)
		if err != nil {
			return err
		}
		index.Entries[keyFor(kind, sourceID)] = path
	}
	return saveIndex(stagingDir, index)
}

func lookupStagingPath(stagingDir, kind, sourceID string) (string, error) {
	index, err := loadIndex(stagingDir)
	if err != nil {
		return "", err
	}
	if path := index.Entries[keyFor(kind, sourceID)]; path != "" {
		return path, nil
	}
	return "", fmt.Errorf("no staging file found for %s:%s", kind, sourceID)
}

func loadIndex(stagingDir string) (stagingIndex, error) {
	index := stagingIndex{Entries: map[string]string{}}
	raw, err := os.ReadFile(filepath.Join(stagingDir, ".staging-index.json"))
	if err != nil {
		if os.IsNotExist(err) {
			return index, nil
		}
		return index, err
	}
	if err := json.Unmarshal(raw, &index); err != nil {
		return index, err
	}
	if index.Entries == nil {
		index.Entries = map[string]string{}
	}
	return index, nil
}

func saveIndex(stagingDir string, index stagingIndex) error {
	if err := os.MkdirAll(stagingDir, 0o755); err != nil {
		return err
	}
	raw, err := json.MarshalIndent(index, "", "  ")
	if err != nil {
		return err
	}
	tmp := filepath.Join(stagingDir, ".staging-index.json.tmp")
	if err := os.WriteFile(tmp, raw, 0o644); err != nil {
		return err
	}
	return os.Rename(tmp, filepath.Join(stagingDir, ".staging-index.json"))
}

func writeString(path, content string) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	tmp := path + ".tmp"
	if err := os.WriteFile(tmp, []byte(content), 0o644); err != nil {
		return err
	}
	return os.Rename(tmp, path)
}

func writeDocument(path string, meta map[string]any, body string) error {
	return writeString(path, docText(meta, body))
}

func docText(meta map[string]any, body string) string {
	metaBytes, _ := yaml.Marshal(meta)
	metaText := string(metaBytes)
	var b strings.Builder
	b.WriteString("---\n")
	b.WriteString(metaText)
	if !strings.HasSuffix(metaText, "\n") {
		b.WriteString("\n")
	}
	b.WriteString("---\n")
	if body != "" {
		b.WriteString(strings.TrimRight(body, "\n"))
		b.WriteString("\n")
	}
	return b.String()
}

func docIdentity(text string) (kind, sourceID string, err error) {
	if !strings.HasPrefix(text, "---\n") {
		return "", "", fmt.Errorf("missing front matter")
	}
	rest := strings.TrimPrefix(text, "---\n")
	end := strings.Index(rest, "\n---\n")
	if end < 0 {
		return "", "", fmt.Errorf("unterminated front matter")
	}
	metaText := rest[:end]
	var meta map[string]any
	if err := yaml.Unmarshal([]byte(metaText), &meta); err != nil {
		return "", "", err
	}
	return stringValue(meta["kind"]), stringValue(meta["source_id"]), nil
}

func splitDocument(text string) (meta string, body string, err error) {
	if !strings.HasPrefix(text, "---\n") {
		return "", "", fmt.Errorf("missing front matter")
	}
	rest := strings.TrimPrefix(text, "---\n")
	end := strings.Index(rest, "\n---\n")
	if end < 0 {
		return "", "", fmt.Errorf("unterminated front matter")
	}
	return rest[:end], rest[end+len("\n---\n"):], nil
}

func keyFor(kind, sourceID string) string { return kind + ":" + sourceID }

func slugify(s string) string {
	s = strings.ToLower(strings.TrimSpace(s))
	s = strings.ReplaceAll(s, " ", "-")
	s = strings.ReplaceAll(s, "_", "-")
	var b strings.Builder
	lastDash := false
	for _, r := range s {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			b.WriteRune(r)
			lastDash = false
			continue
		}
		if !lastDash {
			b.WriteByte('-')
			lastDash = true
		}
	}
	return strings.Trim(b.String(), "-")
}

func fallbackTitle(primary, fallback string) string {
	if strings.TrimSpace(primary) != "" {
		return primary
	}
	return fallback
}

func generateMaterialMarkdown(title string) string {
	return fmt.Sprintf(`## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan dapat memahami konsep %s.

## Pendahuluan

%s merupakan salah satu konsep penting dalam matematika.

## Materi

### Definisi

%s adalah ...

### Sifat-sifat

1. **Sifat Komutatif:** $a + b = b + a$
2. **Sifat Asosiatif:** $(a + b) + c = a + (b + c)$
3. **Sifat Distributif:** $a \\times (b + c) = a \\times b + a \\times c$

## Rangkuman

1. %s memiliki sifat komutatif, asosiatif, dan distributif.
2. Operasi dasar meliputi penjumlahan, pengurangan, perkalian, dan pembagian.
`, title, title, title, title)
}

func generateArticleMarkdown(title string) string {
	return fmt.Sprintf(`# %s

## Pendahuluan

%s adalah topik yang menarik untuk dibahas.

## Pembahasan

### Poin Utama

1. Konsep dasar.
2. Penerapan dalam soal.
`, title, title)
}

func sortedKeys(files map[string]string) []string {
	out := make([]string, 0, len(files))
	for path := range files {
		out = append(out, path)
	}
	sort.Strings(out)
	return out
}
