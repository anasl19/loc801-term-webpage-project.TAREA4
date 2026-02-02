# Loc801 Terminology Webpage Project

This repository contains a bilingual webpage about terminology and generative AI for localization practice.

## File Structure

```
loc801-term-webpage-project/
├── index.html                          # Landing page with language redirect
├── TerminologyWebpage_en-US.html       # English source content
├── TerminologyWebpage_es-MX.html       # Spanish localized content (to be created)
├── language-switcher.js                # Handles language picker on content pages
├── terminology-quiz_en-US.js           # English quiz logic
├── terminology-quiz_es-MX.js           # Spanish quiz logic (OPTIONAL - bonus)
├── styles.css                          # Shared styles
└── SemanticTriangle_en-US.png          # Image (OPTIONAL - bonus)
```

## About index.html

**Why is there an index.html file?**

GitHub Pages automatically serves `index.html` as the homepage when someone visits your repository URL (`https://username.github.io/loc801-term-webpage-project/`). This file detects the visitor's browser language and automatically redirects them to the appropriate language version of the content.

**Do you need to modify it?** No. This file is provided for you and works automatically once you create your Spanish translation.

**Do you need to test it locally?** No. During local development, open `TerminologyWebpage_en-US.html` directly. The `index.html` redirect is designed specifically for GitHub Pages deployment.

## Assignment Instructions

### Your Task
Fork this repository and localize the English content into Mexican Spanish.

### Required Elements

The Loc801 assignment asks that you translate the following in **TerminologyWebpage_es-MX.html**:

1. **Structural Components**
   - HTML `lang` attribute (change to `es-MX`)
   - File name (must be `TerminologyWebpage_es-MX.html`)

2. **Core HTML Content**
   - Main page title
   - All headings (h1, h2, h3)
   - All paragraph text
   - Navigation elements
   - Lists (both ordered and unordered)
   - Figure captions

3. **Metadata and SEO**
   - Page title tag (`<title>`)
   - Meta description

4. **Interactive Elements**
   - Language selector label
   - Quiz question text
   - Button text

5. **Accessibility Elements**
   - Image alt text

Follow the LOC NOTES embedded in the HTML comments for guidance.

### Optional Bonus Elements

For extra practice, you may also translate:

6. **JavaScript Content (terminology-quiz_es-MX.js)**
   - Quiz feedback messages
   - Correct/incorrect answer responses
   - Dynamic content messages
   - User error messages

7. **Image Content (SemanticTriangle_es-MX.png)**
   - Recreate the semantic triangle image with Spanish labels

### What You DON'T Need to Modify

- `index.html` (GitHub Pages redirect logic)
- `language-switcher.js` (works automatically)
- `styles.css` (unless you're interested in working with stying)
- `TerminologyWebpage_en-US.html` (keep as source reference)

### Testing Your Work

**Local Testing (During Development):**
1. Open `TerminologyWebpage_en-US.html` directly in your browser or with Live Server
2. Use the language picker at the top to switch between English and Spanish versions
3. Test both the content and the quiz in each language
4. Note: You don't need to test `index.html` locally - it's designed for GitHub Pages

**GitHub Pages Testing (Final):**
1. Enable GitHub Pages in your forked repo settings (Settings → Pages → Deploy from main branch)
2. Visit: `https://yourusername.github.io/loc801-term-webpage-project/`
3. Test the automatic language redirect
4. Click the language picker to switch between versions
5. Test the quiz in both languages

**Troubleshooting:**
- If you have a Spanish browser and see a 404 error on GitHub Pages, make sure you've committed `TerminologyWebpage_es-MX.html`
- If the language picker doesn't work, check that both HTML files reference `language-switcher.js`
- If you want to bypass the redirect, go directly to the specific file: `/TerminologyWebpage_en-US.html` or `/TerminologyWebpage_es-MX.html`

### Submission

Submit the link to your GitHub Pages site:
`https://yourusername.github.io/loc801-term-webpage-project/`

Your instructor will test:
- Automatic language detection
- Language switcher functionality
- Translation quality and cultural appropriateness
- All required elements from the checklist

## Translation Quality Guidelines

To receive full credit, your translation must demonstrate:

- **Grammatical accuracy** - Correct Spanish grammar and syntax
- **Technical precision** - Accurate translation of terminology and localization concepts
- **Cultural appropriateness** - Follows Mexican Spanish conventions and cultural norms
- **Formatting preservation** - Special characters, HTML structure, and styling maintained
- **Inclusive language** - Uses gender-neutral constructions where appropriate in Spanish

## Common Issues to Avoid

- ❌ Leaving English text in alt attributes
- ❌ Missing translations in nested HTML elements
- ❌ Not accounting for text expansion (Spanish is typically 15-30% longer)
- ❌ Breaking HTML/CSS formatting during translation
- ❌ Forgetting to update the `lang` attribute to `es-MX`
- ❌ Translating technical file names or code references

## Additional Resources

For questions about this assignment, refer to the full assignment page on the Loc801 course website here: https://loc801.locessentials.com/t3/terminology-webpage-project.html (instructions are also available in Spanish)

## License and Attribution

This project is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).

**Original English content:** Copyright © 2025 Alaina Brandt

**For students:** When completing this assignment, you should:
- Credit yourself as the translator on the Spanish page (e.g., "Traducido por [Your Name]")
- Maintain attribution to the original author (Alaina Brandt) on the English page
- Include a link to this repository in your forked version

This ensures proper attribution while allowing you to showcase your translation work in your professional portfolio.