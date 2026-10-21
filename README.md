# BetterCMS Astro test site (Lumen Studio)

A dummy Astro 7 marketing site for testing BetterCMS import, editing and publishing. "Lumen Studio" is a made-up company. Every page is built to cover a different kind of editable content.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where each kind of content lives

| What to test | Where it is | Source |
| --- | --- | --- |
| Text from a JSON data file | Hero, stats, features, nav, footer, announcement bar | `src/data/site.json` |
| FAQ entries (JSON collection) | Home, Pricing, FAQ pages | `src/data/faqs.json` |
| FAQ passed as props | FAQ page (last group), MDX post | `src/pages/faq.astro`, `components-in-mdx.mdx` |
| FAQ answers with HTML, lists, images, unicode, long text | FAQ page | `faqs.json`, `faq.astro` |
| Testimonials (YAML collection) | Home | `src/data/testimonials.yaml` |
| Text hardcoded in `.astro` markup | About intro, How it works tabs, pricing table | `about.astro`, `index.astro`, `pricing.astro` |
| Arrays defined in page frontmatter | Team, timeline, plans, offices | `about.astro`, `pricing.astro`, `contact.astro` |
| Popups (click to open) | Demo + offer popup (Home), team bios (About), sales form (Pricing), success (Contact), MDX popup | `components/Modal.astro` |
| Timed popup | Newsletter popup, 5s after load, once per session | `components/NewsletterPopup.astro` |
| Cookie banner | Every page, until accepted | `components/CookieBanner.astro` |
| Dismissible announcement bar | Every page | `components/AnnouncementBar.astro` + `site.json` |
| Image lightbox popup | About page gallery | `components/Gallery.astro` |
| Tabs, tooltips, billing toggle | Home, Pricing | `Tabs.astro`, `Tooltip.astro`, `pricing.astro` |
| Rich text: every Markdown element | `/blog/rich-text-kitchen-sink` | `src/content/blog/rich-text-kitchen-sink.md` |
| Images inside rich text (relative, `/public`, linked, `<figure>`) | Kitchen sink post | same |
| Components inside rich text (MDX) | `/blog/components-in-mdx` | `src/content/blog/components-in-mdx.mdx` |
| Blog frontmatter (title, dates, author, cover image, tags, featured, draft) | Blog list + posts | `src/content/blog/*` |
| Draft post (should be hidden) | Not rendered | `src/content/blog/draft-post.md` |
| Standalone Markdown page | `/privacy` | `src/pages/privacy.md` |
| Optimised images (`astro:assets`) | Hero, features, blog covers | `src/assets/` |
| Plain images from `/public` | Team, gallery, popups, inline | `public/images/` |
| SEO meta (title, description, OG image, canonical) | Every page | `layouts/BaseLayout.astro` |
| Forms | Contact, newsletter (popup + footer), sales popup | `contact.astro`, `NewsletterForm.astro` |

## Quick test checklist

- [ ] Import the repo into BetterCMS and check all 10 pages are detected
- [ ] Edit hero title (JSON), an About paragraph (hardcoded), and a testimonial (YAML); publish and check the diffs
- [ ] Open each popup in the editor and edit its text and image
- [ ] Add, edit, reorder and delete an FAQ entry
- [ ] Edit every element in the kitchen sink post, publish, and diff the Markdown
- [ ] Replace an inline image and a cover image; check alt text and paths
- [ ] Edit text inside an MDX `<Callout>` and check the component code survives
- [ ] Flip `draft` on the draft post and check it appears
- [ ] Edit SEO fields and check the meta tags after build
