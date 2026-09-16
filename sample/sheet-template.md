# Sheet template

Create a tab named `Leads` with this header row:

| Column | Header | Required | Description |
| --- | --- | --- | --- |
| A | Name | No | Recipient first name or preferred name |
| B | Company | No | Target company or organisation |
| C | Email | Yes | Recipient email address |
| D | Stage | Yes | Blank, `Initial Sent`, `FU1 Sent`, `FU2 Sent`, or `Completed` |
| E | Thread ID | No | Gmail thread identifier written by the script |
| F | Message ID | No | RFC `Message-ID` written by the script |

The CSV in this directory is a safe starting point for a private test Sheet. Replace its synthetic addresses with addresses you are authorised to contact.

The five standalone scripts expect the columns in this order. Keep the lead sheet tab active when the trigger runs.
