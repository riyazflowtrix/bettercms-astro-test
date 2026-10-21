---
title: 'Rich text kitchen sink: every formatting option in one post'
description: A Markdown post with every rich text element, inline images, tables and code, for testing the editor.
pubDate: 2026-10-15
updatedDate: 2026-10-18
author: Aisha Khan
cover: ../../assets/blog-cover-1.jpg
coverAlt: Purple gradient cover image
tags: [guide, editor]
featured: true
---

This post exists to test the **rich text editor**. Every block below is a different element. Edit each one in BetterCMS, publish, and check the Markdown diff in GitHub.

## Inline formatting

Plain text, **bold text**, _italic text_, **_bold and italic_**, ~~strikethrough~~, `inline code`, and a [link to the home page](/). Here is an [external link](https://astro.build "Astro website") with a title attribute.

A line with a hard break at the end\
and the next line right after it.

Special characters: é ü ñ ç, 中文字符, عربى (RTL), emoji 🚀🔥✅, and symbols © ® ™ € £ ₹ & < >.

## Headings

### Heading level 3

#### Heading level 4

##### Heading level 5

## Lists

Unordered list:

- First item
- Second item with **bold**
  - Nested item one
  - Nested item two
- Third item

Ordered list:

1. Connect the repository
2. Edit the content
3. Publish the change

Task list:

- [x] Write the post
- [ ] Review the post

## Images inside rich text

An image from the content folder (relative path, optimised by Astro):

![Inline image stored next to the post](./inline-chart.png)

An image from `/public` (absolute path, not optimised):

![Inline image from the public folder](/images/inline-public.jpg)

An image wrapped in a link:

[![Clickable gallery image](/images/gallery-3.jpg)](/about)

An image with a caption using raw HTML:

<figure>
  <img src="/images/gallery-1.jpg" alt="Figure with caption" />
  <figcaption>This caption is written in raw HTML inside Markdown.</figcaption>
</figure>

## Quotes

> Good tools disappear. The team should only notice the work.
>
> — Aisha Khan

## Code blocks

```js
// A fenced code block with syntax highlighting
export function greet(name) {
  return `Hello, ${name}!`;
}
```

```bash
npm create astro@latest
```

## Tables

| Plan       | Price | Editors   |
| ---------- | ----: | --------- |
| Starter    |   $19 | 2         |
| Team       |   $49 | Unlimited |
| Enterprise |   N/A | Unlimited |

## Horizontal rule

Text above the rule.

---

Text below the rule.

## Embedded HTML

<details>
  <summary>Click to expand (HTML inside Markdown)</summary>
  <p>This collapsible block is raw HTML. Check that the editor does not strip or escape it.</p>
</details>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Embedded video" frameborder="0" allowfullscreen></iframe>

## Footnotes

Here is a sentence with a footnote.[^1]

[^1]: And this is the footnote text.
