# Posting to The Swansen Report

Every story is one Markdown file in `src/content/posts/`. Commit it to the `main` branch on GitHub and Cloudflare rebuilds the site; the story is live in a minute or two.

## The story file

Name it `YYYY-MM-DD-short-headline.md` (the part after the date becomes the URL: `/news/2026-11-23-short-headline/`).

```markdown
---
title: Bayfield County board delays vote on data center zoning
description: One-sentence summary shown on the front page, in search results and in RSS.
date: 2026-11-23
beat: bayfield-county        # bayfield-county | south-shore | statewide
dateline: Washburn           # optional; printed as "WASHBURN —" before the first paragraph
tags: [Data centers, Zoning]
updated: 2026-11-24          # optional; shows "Updated ..." under the byline
draft: true                  # optional; drafts are hidden on the live site
---

Story text in plain Markdown. **Bold**, *italic*, [links](https://example.com),
> block quotes for pull quotes

## Sources

- Primary source, with a link
- Second source
```

Notes:

- `author` defaults to Paul Swansen; add `author: Someone Else` to override.
- A `## Sources` heading at the end is styled as the sources block automatically.
- The newest story becomes the front-page lead.
- Images: put them in `public/images/` and use `![Caption](/images/file.jpg)`.

## Three ways to post

1. **GitHub website.** Open the repo → `src/content/posts` → *Add file* → *Create new file*, paste the story, *Commit changes*.
2. **Claude Code.** Ask Claude to write the finished story to `src/content/posts/` and push it.
3. **On your Mac.** `npm run new -- "Headline"` creates a draft file with today's date. Edit it, set `draft: false`, then commit and push. `npm run dev` previews the site at http://localhost:4321 (drafts included).

## Changing a story

Edit the file and commit. Add `updated:` with the date if it's a substantive correction.
