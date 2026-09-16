/************************************************************
 * WEDNESDAY HTML EMAIL SEQUENCE
 *
 * This script combines the robust threading and Gmail API logic
 * from 'Gpt_Correct mail_approach.js' with the high-fidelity
 * HTML templates.
 *
 * SHEET COLUMNS:
 * A = Name
 * B = Comp
 * C = Mail
 * D = Stage
 * E = ThreadID
 * F = MessageID (RFC Message-ID)
 *
 * SEQUENCE:
 * Wednesday = Initial
 * Thursday = FU1
 * Sunday = FU2
 * Tuesday = FU3
 *
 * IMPORTANT:
 * Enable:
 * Apps Script â†' Services â†' Gmail API
 ************************************************************/


/************************************************************
 * CONFIGURATION
 ************************************************************/

const SENDER_PROFILE = {
  name: "Your Name",
  role: "Your Role  -  Your Company",
  email: "you@example.com",
  phone: "+00 0000000000",
  resumeUrl: "https://example.com/your-resume",
  linkedinUrl: "https://www.linkedin.com/in/your-profile/"
};
/************************************************************
 * EMAIL TEMPLATES
 ************************************************************/

function getWednesdayInitialTemplate(name, comp) {
  const subject = "Exploring Product & Growth Opportunities at {{Comp}} | {{SENDER_NAME}}";
  const body = `<!DOCTYPE html>
<html style="margin:0;padding:0;">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial, Helvetica, sans-serif;color:#172033;">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center">
      <table width="820" cellpadding="0" cellspacing="0" border="0" style="max-width:820px;width:100%;">
        <tr>
          <td style="padding:45px 30px 50px 30px;">
            <p style="margin:0 0 32px 0;font-size:16px;line-height:1.7;color:#172033;">
              Hi {{Name}},
            </p>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">I'm <strong>{{SENDER_NAME}}</strong>, a product and technology professional.</p>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">I work on digital products across customer experience, growth, subscriptions, and payments.</p>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">I'm reaching out because I'm interested in exploring opportunities at <strong>{{Comp}}</strong>, particularly where product, technology, data, and AI come together.</p>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">My work spans product discovery, customer research, analytics, experimentation, and execution, with a focus on improving customer journeys and business outcomes.</p>
            <p style="margin:0 0 30px 0;font-size:16px;line-height:1.75;color:#172033;">I work with product analytics, user research, design collaboration, automation, and modern AI tools.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 35px 0;">
              <tr>
                <td style="background:#f5f6f8;border-left:3px solid #315f9f;padding:23px 27px;">
                  <p style="margin:0 0 18px 0;font-size:13px;line-height:1.4;font-weight:bold;letter-spacing:1.5px;color:#53637a;">
                    AREAS I COULD CONTRIBUTE
                  </p>
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td width="35" valign="top" style="padding:0 0 11px 0;font-size:14px;font-weight:bold;color:#172033;">01</td>
                      <td valign="top" style="padding:0 0 11px 0;font-size:15px;line-height:1.5;color:#172033;">0â†'1 and 1â†'N product development</td>
                    </tr>
                    <tr>
                      <td width="35" valign="top" style="padding:0 0 11px 0;font-size:14px;font-weight:bold;color:#172033;">02</td>
                      <td valign="top" style="padding:0 0 11px 0;font-size:15px;line-height:1.5;color:#172033;">Consumer analytics and funnel optimisation</td>
                    </tr>
                    <tr>
                      <td width="35" valign="top" style="padding:0 0 11px 0;font-size:14px;font-weight:bold;color:#172033;">03</td>
                      <td valign="top" style="padding:0 0 11px 0;font-size:15px;line-height:1.5;color:#172033;">AI-powered product experiences</td>
                    </tr>
                    <tr>
                      <td width="35" valign="top" style="padding:0;font-size:14px;font-weight:bold;color:#172033;">04</td>
                      <td valign="top" style="padding:0;font-size:15px;line-height:1.5;color:#172033;">Cross-functional product execution</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">
              Iâ€™m looking to take on larger product problems, learn from strong
              product leaders and contribute meaningfully from day one.
            </p>
            <p style="margin:0 0 27px 0;font-size:16px;line-height:1.75;color:#172033;">
              Iâ€™ve included my resume below for context. If you feel my profile could
              be relevant to any current or upcoming opportunity at
              <strong>{{Comp}}</strong>, Iâ€™d be grateful for the opportunity to connect.
            </p>
            <table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 38px 0;">
              <tr>
                <td style="padding-right:20px;">
                  <a href="{{RESUME_URL}}" target="_blank" style="display:inline-block;background:#172033;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:14px 22px;border-radius:4px;">View Resume</a>
                </td>
                <td valign="middle">
                  <a href="{{LINKEDIN_URL}}" target="_blank" style="color:#2864b8;text-decoration:none;font-size:14px;font-weight:bold;">LinkedIn â†'</a>
                </td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-top:1px solid #e2e5e9;height:1px;font-size:1px;line-height:1px;">&nbsp;</td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:27px;">
              <tr>
                <td>
                  <p style="margin:0 0 8px 0;font-size:15px;line-height:1.5;color:#53637a;">Best,</p>
                  <p style="margin:0 0 4px 0;font-size:16px;line-height:1.5;font-weight:bold;color:#172033;">{{SENDER_NAME}}</p>
                  <p style="margin:0 0 7px 0;font-size:14px;line-height:1.5;color:#53637a;">{{SENDER_ROLE}}</p>
                  <p style="margin:0 0 5px 0;font-size:13px;line-height:1.6;">
                    <a href="mailto:{{SENDER_EMAIL}}" style="color:#2864b8;text-decoration:none;">{{SENDER_EMAIL}}</a>
                    <span style="color:#b0b6bf;"> &nbsp;Â - &nbsp; </span>
                    <a href="tel:{{SENDER_PHONE}}" style="color:#2864b8;text-decoration:none;">{{SENDER_PHONE}}</a>
                  </p>
                  <p style="margin:0;font-size:13px;line-height:1.6;">
                    <a href="{{LINKEDIN_URL}}" target="_blank" style="color:#2864b8;text-decoration:none;">LinkedIn Profile</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  return {
    subject: subject.replace(/{{Comp}}/g, comp).replace(/{{SENDER_NAME}}/g, SENDER_PROFILE.name),
    body: body.replace(/{{Name}}/g, name).replace(/{{Comp}}/g, comp).replace(/\{\{SENDER_NAME\}\}/g, SENDER_PROFILE.name).replace(/\{\{SENDER_ROLE\}\}/g, SENDER_PROFILE.role).replace(/\{\{SENDER_EMAIL\}\}/g, SENDER_PROFILE.email).replace(/\{\{SENDER_PHONE\}\}/g, SENDER_PROFILE.phone).replace(/\{\{RESUME_URL\}\}/g, SENDER_PROFILE.resumeUrl).replace(/\{\{LINKEDIN_URL\}\}/g, SENDER_PROFILE.linkedinUrl)
  };
}

function getWednesdayFU1Template(name, comp) {
  return {
    subject: `Following Up | Product & Growth Opportunities at ${comp}`,
    body: `Hi ${name},<br><br>Just following up on my email from yesterday. Iâ€™d love to explore whether there could be a potential fit for my profile at ${comp}, particularly across Product, Growth, or AI-led initiatives.<br><br>I would be grateful if you could point me in the right direction or connect me with the relevant person on your team.`
  };
}

function getWednesdayFU2Template(name, comp) {
  return {
    subject: `One More Follow-Up | Product & Growth Opportunities at ${comp}`,
    body: `Hi ${name},<br><br>Just wanted to check in once more. Iâ€™d really appreciate your perspective on where my Product + AI background could potentially add value at ${comp}.`
  };
}

function getWednesdayFU3Template(name, comp) {
  return {
    subject: `Following up for last time | ${comp}`,
    body: `Hi ${name},<br><br>I havenâ€™t heard back, so Iâ€™ll stop following up, but please feel free to reach out if thereâ€™s an opportunity where my background could be relevant.<br><br>Wishing you and the team all the best.`
  };
}


/************************************************************
 * PROFESSIONAL FOOTER
 ************************************************************/

function getWednesdayProfessionalFooter() {
  return `
    <br><br>
    <p style="margin:0 0 20px 0;font-size:14px;color:#53637a;">Best,<br><strong>{{SENDER_NAME}}</strong></p>
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right:20px;">
          <a href="{{RESUME_URL}}"
             target="_blank"
             style="display:inline-block;background:#172033;color:#ffffff;text-decoration:none;font-size:12px;font-weight:bold;padding:10px 16px;border-radius:4px;">
             View Resume
          </a>
        </td>
        <td>
          <a href="{{LINKEDIN_URL}}"
             target="_blank"
             style="color:#2864b8;text-decoration:none;font-size:12px;font-weight:bold;">
             LinkedIn Profile â†'
          </a>
        </td>
      </tr>
    </table>
  `
    .replace(/{{SENDER_NAME}}/g, SENDER_PROFILE.name)
    .replace(/{{SENDER_ROLE}}/g, SENDER_PROFILE.role)
    .replace(/{{SENDER_EMAIL}}/g, SENDER_PROFILE.email)
    .replace(/{{SENDER_PHONE}}/g, SENDER_PROFILE.phone)
    .replace(/{{RESUME_URL}}/g, SENDER_PROFILE.resumeUrl)
    .replace(/{{LINKEDIN_URL}}/g, SENDER_PROFILE.linkedinUrl);
}


/************************************************************
 * MAIN SEQUENCE
 ************************************************************/

function sendWednesdayHTMLSequenceEmails() {

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (!sheet) {
    throw new Error("No active sheet is available.");
  }

  const data = sheet.getDataRange().getValues();

  if (data.length < 2) {
    Logger.log("No data found.");
    return;
  }

  for (let i = 1; i < data.length; i++) {

    try {

      const name = String(data[i][0] || "").trim();
      const comp = String(data[i][1] || "").trim();
      const email = String(data[i][2] || "").trim();
      const stage = String(data[i][3] || "").trim();
      const threadId = String(data[i][4] || "").trim();
      const messageId = String(data[i][5] || "").trim();

      if (!email) {
        Logger.log(
          "Row " + (i + 1) + ": Email address missing. Skipping."
        );
        continue;
      }

      processWednesdayEmail(
        sheet,
        i,
        name,
        comp,
        email,
        stage,
        threadId,
        messageId
      );

    } catch (error) {

      Logger.log(
        "Row " +
        (i + 1) +
        " ERROR: " +
        error.message
      );

    }
  }
}


/************************************************************
 * PROCESS EACH CONTACT
 ************************************************************/

function processWednesdayEmail(
  sheet,
  rowIndex,
  name,
  comp,
  email,
  stage,
  threadId,
  messageId
) {

  const cleanEmail = email.trim();
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.

  /**********************************************************
   * INITIAL EMAIL
   **********************************************************/

  if (
    stage === "" &&
    today === 3 // Wednesday
  ) {

    const template =
      getWednesdayInitialTemplate(name, comp);

    const finalSubject = template.subject;

    const finalBody = template.body;


    Logger.log(
      "Sending INITIAL email to: " +
      cleanEmail
    );


    /*******************************************************
     * SEND INITIAL EMAIL
     *******************************************************/

    const sentTimestamp =
      Math.floor(Date.now() / 1000) - 5;

    GmailApp.sendEmail(
      cleanEmail,
      finalSubject,
      stripHtml(finalBody),
      {
        htmlBody: finalBody,
        name: SENDER_PROFILE.name
      }
    );


    Logger.log(
      "Initial email sent to " +
      cleanEmail
    );


    /*******************************************************
     * FIND THE SENT EMAIL USING GMAIL API
     *******************************************************/

    let foundMessage = null;

    const query =
      'in:sent to:' +
      cleanEmail +
      ' after:' +
      sentTimestamp;


    Logger.log(
      "Searching Gmail API with query: " +
      query
    );


    for (let attempt = 1; attempt <= 5; attempt++) {

      try {

        const response =
          Gmail.Users.Messages.list(
            "me",
            {
              q: query,
              maxResults: 50
            }
          );


        const messages =
          response.messages || [];


        Logger.log(
          "Attempt " +
          attempt +
          ": Found " +
          messages.length +
          " possible message(s)."
        );


        for (let j = 0; j < messages.length; j++) {

          const gmailMessageId =
            messages[j].id;


          const fullMessage =
            Gmail.Users.Messages.get(
              "me",
              gmailMessageId,
              {
                format: "metadata",
                metadataHeaders: [
                  "To",
                  "Subject",
                  "Message-ID"
                ]
              }
            );

          const headers =
            fullMessage.payload &&
            fullMessage.payload.headers
              ? fullMessage.payload.headers
              : [];


          const toHeader =
            getHeaderValue(headers, "To");

          const subjectHeader =
            getHeaderValue(headers, "Subject");

          const rfcMessageId =
            getHeaderValue(headers, "Message-ID");


          const recipientMatches =
            normalizeEmail(toHeader)
              .includes(
                normalizeEmail(cleanEmail)
              );

          const subjectMatches =
            subjectHeader && subjectHeader.includes(finalSubject) ||
            finalSubject.includes(subjectHeader);


          Logger.log(
            "Checking message: " +
            gmailMessageId +
            " | To: " +
            toHeader +
            " | Subject: " +
            subjectHeader +
            " | Message-ID: " +
            rfcMessageId
          );


          if (
            recipientMatches &&
            subjectMatches &&
            rfcMessageId
          ) {

            foundMessage = {
              gmailId: gmailMessageId,
              threadId: fullMessage.threadId,
              messageId: rfcMessageId
            };

            break;
          }
        }


        if (foundMessage) {
          break;
        }


      } catch (error) {

        Logger.log(
          "Gmail API search attempt " +
          attempt +
          " failed: " +
          error.message
        );
      }


      Utilities.sleep(3000);
    }


    /*******************************************************
     * SAVE THREAD ID + RFC MESSAGE ID
     *******************************************************/

    if (!foundMessage) {

      throw new Error(
        "CRITICAL: Initial email was sent, but Gmail API could not find the sent message with a valid RFC Message-ID."
      );
    }


    Logger.log(
      "FOUND INITIAL MESSAGE"
    );

    Logger.log(
      "Gmail Internal ID: " +
      foundMessage.gmailId
    );

    Logger.log(
      "Thread ID: " +
      foundMessage.threadId
    );

    Logger.log(
      "RFC Message-ID: " +
      foundMessage.messageId
    );


    sheet
      .getRange(rowIndex + 1, 5)
      .setValue(foundMessage.threadId);


    sheet
      .getRange(rowIndex + 1, 6)
      .setValue(foundMessage.messageId);


    sheet
      .getRange(rowIndex + 1, 4)
      .setValue("Initial Sent");


    Logger.log(
      "Initial email setup completed for " +
      cleanEmail
    );


    return;
  }


  /**********************************************************
   * FOLLOW-UP 1
   **********************************************************/

  if (
    stage.toLowerCase() === "initial sent" &&
    today === 4 // Thursday
  ) {

    sendWednesdayFollowUp(
      sheet,
      rowIndex,
      name,
      comp,
      cleanEmail,
      threadId,
      messageId,
      getWednesdayFU1Template(name, comp),
      "FU1 Sent"
    );

    return;
  }


  /**********************************************************
   * FOLLOW-UP 2
   **********************************************************/

  if (
    stage.toLowerCase() === "fu1 sent" &&
    today === 0 // Sunday
  ) {

    sendWednesdayFollowUp(
      sheet,
      rowIndex,
      name,
      comp,
      cleanEmail,
      threadId,
      messageId,
      getWednesdayFU2Template(name, comp),
      "FU2 Sent"
    );

    return;
  }


  /**********************************************************
   * FOLLOW-UP 3
   **********************************************************/

  if (
    stage.toLowerCase() === "fu2 sent" &&
    today === 2 // Tuesday
  ) {

    sendWednesdayFollowUp(
      sheet,
      rowIndex,
      name,
      comp,
      cleanEmail,
      threadId,
      messageId,
      getWednesdayFU3Template(name, comp),
      "Completed"
    );

    return;
  }

  Logger.log(
    "No action required for stage: " +
    stage
  );
}


/************************************************************
 * SEND FOLLOW-UP AS A REAL REPLY
 ************************************************************/

function sendWednesdayFollowUp(
  sheet,
  rowIndex,
  name,
  comp,
  cleanEmail,
  threadId,
  previousMessageId,
  template,
  newStage
) {

  /**********************************************************
   * VALIDATION
   **********************************************************/

  if (!cleanEmail) {
    throw new Error(
      "Recipient email is missing."
    );
  }


  if (!threadId) {
    throw new Error(
      "Thread ID is missing. Cannot send follow-up as a reply."
    );
  }


  if (!previousMessageId) {
    throw new Error(
      "RFC Message-ID is missing. Cannot create In-Reply-To header."
    );
  }


  if (
    previousMessageId.indexOf("<") === -1 ||
    previousMessageId.indexOf(">") === -1
  ) {

    throw new Error(
      "Column F does not contain a valid RFC Message-ID: " +
      previousMessageId
    );
  }


  /**********************************************************
   * SUBJECT HANDLING FOR THREADING
   **********************************************************/
  const initialTemplate = getWednesdayInitialTemplate(name, comp);
  const replySubject = "Re: " + initialTemplate.subject;


  const finalBody =
    template.body +
    getWednesdayProfessionalFooter();


  /**********************************************************
   * CREATE RFC-COMPLIANT REPLY
   **********************************************************/

  const rawMessage = [

    "From: me",

    "To: " + cleanEmail,

    "Subject: " + replySubject,

    "In-Reply-To: " + previousMessageId,

    "References: " + previousMessageId,

    "MIME-Version: 1.0",

    "Content-Type: text/html; charset=UTF-8",

    "",

    finalBody

  ].join("\r\n");


  /**********************************************************
   * BASE64 WEB-SAFE ENCODING
   **********************************************************/

  const encodedMessage =
    Utilities
      .base64EncodeWebSafe(
        Utilities
          .newBlob(rawMessage)
          .getBytes()
      )
      .replace(/=+$/, "");


  Logger.log(
    "Sending reply to: " +
    cleanEmail
  );

  Logger.log(
    "Thread ID: " +
    threadId
  );

  Logger.log(
    "In-Reply-To: " +
    previousMessageId
  );


  /**********************************************************
   * SEND USING GMAIL API
   ***********************************************************/

  const sentMessage =
    Gmail.Users.Messages.send(
      {
        raw: encodedMessage,
        threadId: threadId
      },
      "me"
    );


  if (
    !sentMessage ||
    !sentMessage.id
  ) {

    throw new Error(
      "Gmail API did not return a sent message ID."
    );
  }


  Logger.log(
    "Reply sent successfully."
  );

  Logger.log(
    "New Gmail internal message ID: " +
    sentMessage.id
  );


  /**********************************************************
   * GET THE ACTUAL RFC MESSAGE-ID
   ***********************************************************/

  const sentMeta =
    Gmail.Users.Messages.get(
      "me",
      sentMessage.id,
      {
        format: "metadata",
        metadataHeaders: [
          "Message-ID"
        ]
      }
    );


  const sentHeaders =
    sentMeta.payload &&
    sentMeta.payload.headers
      ? sentMeta.payload.headers
      : [];


  const newRFCMessageId =
    getHeaderValue(
      sentHeaders,
      "Message-ID"
    );


  if (!newRFCMessageId) {

    throw new Error(
      "Follow-up was sent, but the new RFC Message-ID could not be retrieved."
    );
  }


  Logger.log(
    "New RFC Message-ID: " +
    newRFCMessageId
  );


  /**********************************************************
   * UPDATE THREAD ID
   ***********************************************************/

  if (sentMessage.threadId) {

    sheet
      .getRange(rowIndex + 1, 5)
      .setValue(
        sentMessage.threadId
      );

  } else {

    sheet
      .getRange(rowIndex + 1, 5)
      .setValue(threadId);
  }


  /**********************************************************
   * UPDATE MESSAGE ID
   ***********************************************************/

  sheet
    .getRange(rowIndex + 1, 6)
    .setValue(newRFCMessageId);


  /**********************************************************
   * UPDATE STAGE
   ***********************************************************/

  sheet
    .getRange(rowIndex + 1, 4)
    .setValue(newStage);


  Logger.log(
    newStage +
    " completed for " +
    cleanEmail
  );
}


/************************************************************
 * GET HEADER VALUE
 ************************************************************/

function getHeaderValue(headers, headerName) {

  if (!headers || !headers.length) {
    return "";
  }


  const target =
    headerName.toLowerCase();


  for (let i = 0; i < headers.length; i++) {

    if (
      String(headers[i].name || "")
        .toLowerCase() === target
    ) {

      return String(
        headers[i].value || ""
      ).trim();
    }
  }


  return "";
}


/************************************************************
 * NORMALIZE EMAIL
 ************************************************************/

function normalizeEmail(value) {

  return String(value || "")
    .trim()
    .toLowerCase();
}


/************************************************************
 * STRIP HTML
 ************************************************************/

function stripHtml(html) {

  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .trim();
}

