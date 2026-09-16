# Problem brief

## Context

Professional outreach is often managed through a spreadsheet and a collection of manual reminders. This creates an operational gap between deciding to contact someone and consistently following up with them.

The sender must remember:

- Which leads are due for an initial message.
- Which leads are due for follow-up one, two, or three.
- Which Gmail conversation each follow-up belongs to.
- Which contacts have completed the sequence and should no longer receive messages.

When these details are managed manually, follow-ups are delayed, duplicated, sent with the wrong context, or lost in separate email threads. Separate weekday scripts can also become difficult to maintain when they contain duplicated logic and personal sender information.

## User problem

An outreach operator needs a lightweight workflow that can be copied into Google Sheets, configured without engineering support, and run on a predictable weekday cadence.

The operator should be able to:

1. Add or import leads into a structured Google Sheet.
2. Choose the weekday on which the first message should be sent.
3. Edit the sender profile and HTML email template.
4. Run the automation from Apps Script or a time-driven trigger.
5. See the current status of every lead directly in the Sheet.

## Product opportunity

Create a transparent, spreadsheet-first follow-up workflow that reduces manual coordination while preserving operator control. The system should automate timing and Gmail threading, but keep the audience, message copy, sender identity, and lead state visible and editable.

## Desired outcome

The result is a repeatable outreach process in which:

- Each eligible lead receives the correct message at the correct stage.
- Follow-ups remain in the original Gmail conversation.
- The Sheet acts as the operational record.
- A failed row does not stop the remaining eligible rows.
- The public repository contains reusable scripts without private sender or recipient data.

## Scope boundary

This project is designed for controlled, permission-based outreach. It is not a lead database, contact discovery tool, CRM, or high-volume sending platform.
