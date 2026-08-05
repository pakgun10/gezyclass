package generator

import (
	"fmt"

	"gezyclass/ai-bot/internal/pocketbase"
)

type MaterialInput struct {
	ClassID        int
	ChapterName    string
	SubchapterName string
	Title          string
}

func CreateMaterial(client *pocketbase.Client, input MaterialInput) error {
	fmt.Printf("📚 Creating material: %s (Kelas %d, Bab: %s, Sub: %s)\n",
		input.Title, input.ClassID, input.ChapterName, input.SubchapterName)

	// 1. Get or create class
	className := fmt.Sprintf("Kelas %d", input.ClassID)
	classSlug := fmt.Sprintf("kelas-%d", input.ClassID)
	class, err := client.GetOrCreate("classes", map[string]interface{}{
		"name":  className,
		"slug":  classSlug,
		"order": input.ClassID,
	}, fmt.Sprintf("slug='%s'", classSlug))
	if err != nil {
		return fmt.Errorf("failed to get/create class: %w", err)
	}
	classID := class["id"].(string)
	fmt.Printf("  ✓ Class: %s (%s)\n", className, classID)

	// 2. Get or create chapter
	chapterSlug := pocketbase.Slugify(input.ChapterName)
	chapter, err := client.GetOrCreate("chapters", map[string]interface{}{
		"class_id": classID,
		"name":     input.ChapterName,
		"slug":     chapterSlug,
		"order":    1,
	}, fmt.Sprintf("slug='%s' && class_id='%s'", chapterSlug, classID))
	if err != nil {
		return fmt.Errorf("failed to get/create chapter: %w", err)
	}
	chapterID := chapter["id"].(string)
	fmt.Printf("  ✓ Chapter: %s (%s)\n", input.ChapterName, chapterID)

	// 3. Get or create subchapter
	subchapterSlug := pocketbase.Slugify(input.SubchapterName)
	subchapter, err := client.GetOrCreate("subchapters", map[string]interface{}{
		"chapter_id": chapterID,
		"name":       input.SubchapterName,
		"slug":       subchapterSlug,
		"order":      1,
	}, fmt.Sprintf("slug='%s' && chapter_id='%s'", subchapterSlug, chapterID))
	if err != nil {
		return fmt.Errorf("failed to get/create subchapter: %w", err)
	}
	subchapterID := subchapter["id"].(string)
	fmt.Printf("  ✓ Subchapter: %s (%s)\n", input.SubchapterName, subchapterID)

	// 4. Generate material content with LaTeX
	title := input.Title
	if title == "" {
		title = input.SubchapterName
	}
	content := generateMaterialContent(input)

	// 5. Create material
	material, err := client.Create("materials", map[string]interface{}{
		"subchapter_id": subchapterID,
		"title":         title,
		"content":       content,
		"order":         1,
	})
	if err != nil {
		return fmt.Errorf("failed to create material: %w", err)
	}
	fmt.Printf("  ✓ Material created: %s (%s)\n", title, material["id"])

	// 6. Also create an example
	example, err := client.Create("examples", map[string]interface{}{
		"material_id": material["id"],
		"title":       "Contoh Soal: " + title,
		"question":    "Berapakah hasil dari $(-8) + 12$?",
		"solution":    "$$(-8) + 12 = 4$$\n\nKarena bilangan positif lebih besar, maka hasilnya positif.",
		"order":       1,
	})
	if err != nil {
		fmt.Printf("  ⚠ Failed to create example: %v\n", err)
	} else {
		fmt.Printf("  ✓ Example created: %s\n", example["id"])
	}

	// 7. Create an exercise
	exercise, err := client.Create("exercises", map[string]interface{}{
		"subchapter_id": subchapterID,
		"title":         "Latihan: " + title,
		"question":      "1. Hitung: $(-12) \\div 4 = \\dots$\n\n2. Tentukan hasil dari $(-5) \\times (-3)$",
		"solution":      "1. $(-12) \\div 4 = -3$\n\n2. $(-5) \\times (-3) = 15$ (negatif × negatif = positif)",
		"order":         1,
	})
	if err != nil {
		fmt.Printf("  ⚠ Failed to create exercise: %v\n", err)
	} else {
		fmt.Printf("  ✓ Exercise created: %s\n", exercise["id"])
	}

	fmt.Println("\n✅ Material complete!")
	fmt.Println("   Run: cd /var/www/class.gezytech.web.id/hugo && hugo --minify")
	fmt.Println("   Then: cp -r public/* /var/www/class.gezytech.web.id/public/")
	return nil
}

func generateMaterialContent(input MaterialInput) string {
	return fmt.Sprintf(`## Tujuan Pembelajaran

Setelah mempelajari materi ini, siswa diharapkan dapat memahami konsep %s serta menerapkannya dalam kehidupan sehari-hari.

## Pendahuluan

%s merupakan salah satu konsep penting dalam matematika yang sering kita jumpai dalam kehidupan sehari-hari. Mari kita pelajari bersama!

## Materi

### Definisi

%s adalah ...

### Sifat-sifat

Berikut adalah beberapa sifat penting:

1. **Sifat Komutatif:** $a + b = b + a$
2. **Sifat Asosiatif:** $(a + b) + c = a + (b + c)$
3. **Sifat Distributif:** $a \\times (b + c) = a \\times b + a \\times c$

### Contoh Penerapan

**Contoh 1 — Suhu:**
Suhu di puncak gunung pada pagi hari adalah $-5^{\circ}C$. Pada siang hari suhu naik $8^{\circ}C$. Berapa suhu di puncak gunung pada siang hari?

$$-5 + 8 = 3^{\circ}C$$

**Contoh 2 — Kedalaman Laut:**
Seekor penyelam berada di kedalaman $-30$ meter. Ia naik sejauh $12$ meter. Berapa posisinya sekarang?

$$-30 + 12 = -18 \text{ meter}$$

## Rangkuman

1. %s memiliki sifat komutatif, asosiatif, dan distributif.
2. Operasi dasar: penjumlahan, pengurangan, perkalian, pembagian.
3. Perhatikan tanda positif dan negatif!

## Latihan Soal

1. Hitunglah $(-15) + 23 = \dots$
2. Tentukan hasil dari $(-8) \\times 7 = \dots$
3. Jika suhu mula-mula $-2^{\circ}C$ dan turun $5^{\circ}C$, berapa suhu akhirnya?

## Kunci Jawaban

1. $$(-15) + 23 = 8$$
2. $$(-8) \\times 7 = -56$$
3. $$-2 - 5 = -7^{\circ}C$$
`, input.Title, input.Title, input.Title, input.Title)
}
