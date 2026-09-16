# Product requirements document

## 1. Product summary

Gmail Follow-up Automation is a Google Apps Script workflow that turns a Google Sheet into a simple outreach operations tool. It sends an initial email and up to three follow-ups, preserves Gmail conversation threading, and records delivery state in the Sheet.

The repository provides five independent scripts. Each script represents a different first-send weekday: Monday, Tuesday, Wednesday, Thursday, or Friday. A user copies one script into a Google Sheet's Apps Script project, personalizes the sender block and HTML template, enables the Gmail API, and adds a trigger.

## 2. Product goal

Make structured follow-up execution accessible to a non-technical operator while maintaining visibility, control, and safe defaults.

## 3. Target users

### Primary user: outreach operator

Someone who manages a list of contacts in Google Sheets and wants a reliable cadence without building or maintaining a full CRM.

### Secondary user: technical maintainer

Someone who reviews, adapts, or deploys the Apps Script files and needs clear separation between weekday cadence, sender configuration, template content, and operational state.

## 4. Core user journey

1. The operator creates a Sheet with lead and message-state columns.
2. The operator selects a weekday script based on the desired first-send day.
3. The operator pastes the script into Apps Script.
4. The operator replaces the neutral `SENDER_PROFILE` values.
5. The operator edits the HTML copy while retaining the Sheet and sender placeholders.
6. The operator enables the Gmail API and authorizes access.
7. The operator runs the selected weekday function or creates a daily time-driven trigger.
8. The script evaluates each row and sends only the message stage due that day.
9. After a successful send, the script writes the new stage, Gmail thread ID, and RFC message ID back to the same row.

## 5. Functional requirements

### FR1. Lead input

The system must read these columns in order:

| Column | Field | Purpose |
| --- | --- | --- |
| A | Name | Personalise the greeting |
| B | Company | Personalise the subject and message |
| C | Email | Identify the recipient |
| D | Stage | Determine the next eligible action |
| E | Thread ID | Continue the Gmail conversation |
| F | Message ID | Build the next reply headers |

### FR2. Weekday cadences

Each standalone script must support the following sequence:

| Script | Initial | Follow-up 1 | Follow-up 2 | Follow-up 3 |
| --- | --- | --- | --- | --- |
| Monday | Monday | Tuesday | Thursday | Sunday |
| Tuesday | Tuesday | Wednesday | Friday | Sunday |
| Wednesday | Wednesday | Thursday | Sunday | Tuesday |
| Thursday | Thursday | Friday | Sunday | Tuesday |
| Friday | Friday | Sunday | Tuesday | Thursday |

### FR3. Initial email

When a row has an empty stage and the current weekday matches the selected script, the system must:

- Render the configured HTML template.
- Send a plain-text fallback alongside the HTML body.
- Use the configured sender display name.
- Locate the sent Gmail message.
- Store its Gmail thread ID and RFC message ID.
- Set the row stage to `Initial Sent`.

### FR4. Threaded follow-ups

When a row is due for a follow-up, the system must send the message as a reply using:

- The stored Gmail `threadId`.
- The previous RFC `Message-ID`.
- `In-Reply-To`.
- `References`.

The system must update the stored message ID after a successful reply.

### FR5. State transitions

Valid stages are:

```text
Blank → Initial Sent → FU1 Sent → FU2 Sent → Completed
```

The system must not send a later follow-up when the required previous stage is missing.

### FR6. Validation and error handling

- Rows without a usable recipient email must be skipped.
- A row-level error must be logged without stopping processing for other rows.
- State must be written only after Gmail confirms the send and returns the required identifiers.
- Missing thread or message identifiers must block a follow-up rather than creating a new standalone email.

### FR7. Configuration and privacy

- Sender identity, links, phone number, and template copy must use neutral placeholders in the public repository.
- Users must edit sender information before enabling a live trigger.
- Credentials, private lead lists, tokens, and deployment files must not be committed.

## 6. Non-functional requirements

### Transparency

The Sheet must remain the source of truth for lead status and thread continuation.

### Operability

A user should be able to complete setup by following `SETUP.md` without changing the core sending logic.

### Maintainability

Each weekday script must be independently copyable and runnable. The five scripts should retain consistent behavior and structure so fixes can be applied predictably.

### Safety

The default repository content must not send to real contacts or expose personal information.

## 7. Success criteria

The product is successful when a new user can:

- Set up one weekday script in a Google Sheet.
- Customize the sender profile and HTML message.
- Authorize Gmail access.
- Run a controlled test to an address they own.
- Observe the correct stage, thread ID, and message ID in the Sheet.
- Receive subsequent follow-ups in the same Gmail conversation.

## 8. Out of scope

- Contact discovery or enrichment.
- Bulk email list generation.
- CRM synchronization.
- Automatic unsubscribe management.
- Reply classification or sentiment analysis.
- Multi-user campaign permissions.
- High-volume sending or deliverability optimization.
