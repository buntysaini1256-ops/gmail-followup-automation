# Five-minute setup

## 1. Prepare the Sheet

Create a sheet tab with this header row:

```text
Name | Company | Email | Stage | Thread ID | Message ID
```

Import [`sample/sample-data.csv`](sample/sample-data.csv) only for testing. Replace the sample addresses before sending anything.

## 2. Choose and add one weekday script

Open the spreadsheet and select **Extensions → Apps Script**. Choose the file that matches the weekday on which the first email should be sent:

| First-email day | File to copy | Function to run |
| --- | --- | --- |
| Monday | `src/Monday_Email_Sequence.gs` | `sendMondayHTMLSequenceEmails` |
| Tuesday | `src/Tuesday_Email_Sequence.gs` | `sendTuesdayHTMLSequenceEmails` |
| Wednesday | `src/Wednesday_Email_Sequence.gs` | `sendWednesdayHTMLSequenceEmails` |
| Thursday | `src/Thursday_Email_Sequence.gs` | `sendThursdayHTMLSequenceEmails` |
| Friday | `src/Friday_Email_Sequence.gs` | `sendFridayHTMLSequenceEmails` |

Copy the complete contents of only that file into Apps Script and save. Do not paste all five files into the same Apps Script project because each standalone file contains similarly named shared helpers.

## 3. Configure the sender and template

At the top of the selected file, replace the neutral values in `SENDER_PROFILE`:

```javascript
const SENDER_PROFILE = {
  name: "Your Name",
  role: "Your Role · Your Company",
  email: "you@example.com",
  phone: "+00 0000000000",
  resumeUrl: "https://example.com/your-resume",
  linkedinUrl: "https://www.linkedin.com/in/your-profile/"
};
```

Then edit the initial HTML template in the same file. Keep `{{Name}}`, `{{Comp}}`, and the sender placeholders intact unless you intentionally update their replacement logic.

Do not place passwords, OAuth tokens, private lead exports, or `.clasp.json` in this repository.

## 4. Enable Gmail API

In Apps Script, open **Services**, add **Gmail API**, and confirm the Gmail API is enabled in the linked Google Cloud project if prompted.

## 5. Add a trigger and test

Keep the lead sheet tab active when the script runs. Create a time-driven trigger for the selected weekday function, preferably once per day. Test with a single address you control. The first run asks for Gmail and Sheets permissions.

The scripts use columns A-F in the documented order and update `Stage`, `Thread ID`, and `Message ID` after each successful send. A follow-up is sent only when the stored stage matches the configured cadence.
