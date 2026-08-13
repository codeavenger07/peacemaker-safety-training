import { Resend } from "resend";
import { google } from "googleapis";

export type LeadSubmission = {
  /** Which form this came from, used in the email subject and as the sheet tab name. */
  source: "Contact" | "Safety Check";
  /** Ordered label/value pairs rendered in the notification email and appended as a sheet row. */
  fields: { label: string; value: string }[];
};

/**
 * Single funnel for every form on the site: emails a notification via Resend and
 * appends a row to a Google Sheet. Swapping in a real database later (e.g. for RSVP)
 * means adding a branch here, not touching every form/API route.
 */
export async function submitLead(submission: LeadSubmission): Promise<void> {
  await Promise.all([sendEmail(submission), appendToSheet(submission)]);
}

async function sendEmail(submission: LeadSubmission): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Peacemaker Safety Training <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      `[submitLead] RESEND_API_KEY or CONTACT_TO_EMAIL not set — skipping email for "${submission.source}" submission.`,
    );
    return;
  }

  const resend = new Resend(apiKey);
  const html = `
    <h2>New ${submission.source} submission</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${submission.fields
        .map(
          (f) =>
            `<tr><td style="font-weight:600;vertical-align:top">${escapeHtml(f.label)}</td><td>${escapeHtml(f.value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: `New ${submission.source} submission — Peacemaker Safety Training`,
    html,
  });

  console.log(`[submitLead] Resend response for "${submission.source}":`, JSON.stringify({ id: data?.id, error }));

  if (error) {
    throw new Error(`Resend failed to send email: ${error.message}`);
  }
}

async function appendToSheet(submission: LeadSubmission): Promise<void> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    console.warn(
      `[submitLead] Google Sheets env vars not set — skipping sheet row for "${submission.source}" submission.`,
    );
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const tabName = submission.source;

  const row = [new Date().toISOString(), ...submission.fields.map((f) => f.value)];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
