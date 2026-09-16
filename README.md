# Gmail Follow-up Automation

> Five independent Google Apps Script files for Monday-to-Friday outreach cadences, each sending an initial email and up to three threaded follow-ups from a Google Sheet.

![Product demo](assets/demo.gif)

## What it does

- Reads lead name, company, email, stage, thread ID, and RFC message ID from Sheets.
- Sends the initial email on the weekday represented by the selected script.
- Sends follow-ups as real Gmail replies so the conversation stays threaded.
- Persists the latest thread and message identifiers for reliable continuation.
- Keeps sender identity and outreach copy in configuration instead of hard-coded personal data.

## Project structure

```text
src/        Five separate Monday-Friday Apps Script files and manifest
docs/       problem brief, PRD, product decisions, and roadmap
sample/     sample CSV and sheet column specification
assets/     demo, product flow, and screenshots
```

## Quick start: choose one weekday script

1. Create a Google Sheet tab with the columns described in [`sample/sheet-template.md`](sample/sheet-template.md).
2. Decide which weekday should send the first email.
3. Open **Extensions → Apps Script** and copy only the matching file from `src/`:
   - `Monday_Email_Sequence.gs`
   - `Tuesday_Email_Sequence.gs`
   - `Wednesday_Email_Sequence.gs`
   - `Thursday_Email_Sequence.gs`
   - `Friday_Email_Sequence.gs`
4. Edit the `SENDER_PROFILE` block and the HTML template in that file.
5. Enable the Gmail advanced service in Apps Script.
6. Run that file's weekday function once for authorization, then add a daily time-driven trigger for the same function.

Read [`SETUP.md`](SETUP.md) for the complete five-minute setup.

## Safety

This repository contains placeholders only. Never commit `.clasp.json`, credentials, access tokens, private contact lists, or production exports.
