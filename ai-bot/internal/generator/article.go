package generator

import (
	"fmt"

	"gezyclass/ai-bot/internal/pocketbase"
)

type ArticleInput struct {
	Title        string
	CategoryName string
}

func CreateArticle(client *pocketbase.Client, input ArticleInput) error {
	fmt.Printf("📝 Creating article: %s (Category: %s)\n", input.Title, input.CategoryName)

	categorySlug := pocketbase.Slugify(input.CategoryName)
	category, err := client.GetOrCreate("categories", map[string]interface{}{
		"name": input.CategoryName,
		"slug": categorySlug,
	}, fmt.Sprintf("slug='%s'", categorySlug))
	if err != nil {
		return fmt.Errorf("failed to get/create category: %w", err)
	}
	categoryID := category["id"].(string)
	fmt.Printf("  ✓ Category: %s (%s)\n", input.CategoryName, categoryID)

	content := generateArticleContent(input)

	article, err := client.Create("articles", map[string]interface{}{
		"title":       input.Title,
		"slug":        pocketbase.Slugify(input.Title),
		"excerpt":     excerpt(content, 200),
		"content":     content,
		"category_id": categoryID,
		"published":   false,
	})
	if err != nil {
		return fmt.Errorf("failed to create article: %w", err)
	}

	fmt.Printf("  ✓ Article created: %s (%s)\n", input.Title, article["id"])
	fmt.Println("  ℹ Article saved as draft (published=false). Use PocketBase Admin to publish.")
	return nil
}

func generateArticleContent(input ArticleInput) string {
	return fmt.Sprintf(`# %s

## Pendahuluan

%s adalah topik yang menarik untuk dibahas. Artikel ini akan membahas secara lengkap tentang konsep ini.

## Pembahasan

### Poin Utama

Matematika adalah ilmu yang sangat berguna dalam kehidupan sehari-hari. Berikut beberapa poin penting:

1. **Konsep Dasar:** Memahami konsep dasar sangat penting.
2. **Penerapan:** Terapkan dalam soal-soal latihan.

### Contoh:

$$
a^2 + b^2 = c^2
$$

Rumus di atas adalah teorema Pythagoras.

## Kesimpulan

%s sangat penting dipahami oleh siswa SMP. Dengan latihan rutin, pemahaman akan semakin baik.

## Tips

- Latihan soal setiap hari
- Pahami konsep, bukan hafalan
- Diskusikan dengan teman
`, input.Title, input.Title, input.Title)
}

func excerpt(content string, maxLen int) string {
	if len(content) <= maxLen {
		return content
	}
	return content[:maxLen] + "..."
}
