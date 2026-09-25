# Context for Claude / subsequent work

Updated: 2026-09-25. Task: repair a broken Cursor export while preserving its design and homepage content.

Project: Synvio B2B support copilot. This folder contains only the static marketing website. Preserve responsive styling and global.js header/footer.

Original export accidentally contained identical homepage HTML in global.js, subpages/faq.html and subpages/legal.html. These were restored from Synvio_V15_marketing. index.html from Cursor was preserved. Calculator controls were wired to the new IDs; submit-button lookup fixed. All HTML asset cache versions set to 15.2-repair.

Verified locally: page renders, calculator updates; JavaScript syntax check passed. No production deployment or contact form submission performed.

Important: Cursor homepage pricing ($25 per seat including administrators, 10x included allowance, per-message fees) and TikTok claims differ from the earlier application implementation ($25 per agent, $40 PAYG allowance per agent, administrators free). Website repair does not implement these product changes. Resolve this before publishing offers.

FAQ/legal restored from the earlier working version because the exported versions were lost. Original broken files backed up in Synvio_marketing_before_repair_20260925.zip outside this folder.
