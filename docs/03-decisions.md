# Architecture decisions

## Five standalone weekday scripts

The project intentionally publishes one copy/paste script per starting weekday. This makes the user flow obvious for Google Sheets users who want to choose Monday, Tuesday, Wednesday, Thursday, or Friday without learning a separate configuration engine.

## Sheet is the source of truth

The sheet stores the current stage and the identifiers needed to continue a thread. This keeps the workflow inspectable and makes retries understandable.

## Gmail API for replies

`GmailApp.sendEmail()` is used for the initial message because it handles HTML and plain text conveniently. Follow-ups use the Gmail advanced service so the `threadId` and RFC message headers are explicit.

## No credentials or personal data in Git

The repository ships with neutral placeholders and synthetic sample data. Sender identity, private URLs, and recipient lists belong in the deployment configuration or the private Sheet.

## Conservative failure behavior

Rows with missing email addresses are skipped. Send failures are logged per row, while other rows continue. A successful send updates state only after Gmail returns the required message identifiers.
