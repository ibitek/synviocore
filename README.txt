SYNVIO V8 — STABLE SITE, NO VOICEFLOW
======================================

This version intentionally removes Voiceflow for now.

Why:
The priority is to make the marketing site itself stable again:
- header always visible,
- footer always visible,
- interactive Synvio demo still present,
- AI chat + human handoff section still present,
- animations still present,
- pricing estimator still present,
- FAQ and Legal still present.

HOW IT WORKS
Header and footer are embedded DIRECTLY into:
- index.html
- subpages/faq.html
- subpages/legal.html

They no longer depend on global.js.

Voiceflow:
- disabled on purpose in V8,
- global.js is only a harmless placeholder,
- tomorrow the Voiceflow integration can be rebuilt from zero without risking the site shell.

REPLACE:
- index.html
- global.js
- subpages/faq.html
- subpages/legal.html

Then:
1. Commit changes.
2. Wait for Vercel deployment = Ready.
3. Hard refresh / Incognito.

VALIDATION:
{'index.html': {'header': 1, 'footer': 1, 'global_ref': 0, 'body': 1, 'main': 1}, 'subpages/faq.html': {'header': 1, 'footer': 1, 'global_ref': 0, 'body': 1, 'main': 1}, 'subpages/legal.html': {'header': 1, 'footer': 1, 'global_ref': 0, 'body': 1, 'main': 1}}

global.js syntax:
OK
