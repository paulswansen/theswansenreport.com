// Start a new story file:  npm run new -- "Headline goes here"
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new -- "Headline goes here"');
  process.exit(1);
}

const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date()); // YYYY-MM-DD
const slug = title.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);
const path = `src/content/posts/${today}-${slug}.md`;
if (existsSync(path)) {
  console.error(`Already exists: ${path}`);
  process.exit(1);
}

writeFileSync(
  path,
  `---
title: ${JSON.stringify(title)}
description: ""
date: ${today}
beat: bayfield-county   # bayfield-county | south-shore | statewide
dateline: Bayfield
tags: []
draft: true             # change to false (or delete this line) to publish
---

Story text starts here.

## Sources

-
`,
);
console.log(`Created ${path}`);
