const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = 'copy client ID from your Google Cloud API Credentials';
const CLIENT_SECRET = 'copy client secret from your Google Cloud API Credentials';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =  'copy refresh token from OAuth Playground authorization of GMail API with your credentials';

const sender ='sender email';
const recipient = 'recipient email';  // temporarily used to be able to email a valid address

const approval = {
  from: sender,
  to: recipient,
  subject: 'APPROVED: SDS Resource Reservation',
  text: `Reservations by these emails have been approved: ${approvalEmails}. An array can be passed in place of the recipient variable. This will send the email to all of them`,
  html: `Reservations by these emails have been approved:${approvalEmails}<br>An array can be passed in place of the recipient variable. This will send the email to all of them.`,
};

const reject = {
  from: sender,
  to: recipient,
  subject: 'REJECTED: SDS Resource Reservation',
  text: `Reservations by these emails have been rejected: ${rejectionEmails}. An array can be passed in place of the recipient variable. This will send the email to all of them.`,
  html: `Reservations by these emails have been rejected: ${rejectionEmails}<br>An array can be passed in place of the recipient variable. This will send the email to all of them.`,
};

const newReq = {
  from: sender,
  to: sender,
  subject: 'NEW: Resource Reservation',
  text: `Dear Admins, you have new reservations pending approval from these emails: ${newReservationEmails}. Email of the requestor is not so helpful in this case. More meaningful reservation data could be sent to the admin/approvers such as reservationId, itemName, startTime (in case urgent).`,
  html: `Dear Admins,<br>You have new reservations pending approval from these emais: ${newReservationEmails}<br>Email of the requestor is not so helpful in this case. More meaningful reservation data could be sent to the admin/approvers such as reservationId, itemName, startTime (in case urgent).`,
};

const deadline = {
  from: sender,
  to: recipient,
  subject: 'REMINDER: Resource Reservation ends in 4 days',
  text: `Reservations by these emails are due to end in 4 days: ${deadlineEmails}. Would be useful to inform the recipient of their exact return dates.`,
  html: `Reservations by these emails are due to end in 4 days: ${deadlineEmails}<br>Would be useful to inform the recipient of their exact return dates.`,
};

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: sender,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const result = await Promise.all([transport.sendMail(approval), transport.sendMail(reject), transport.sendMail(newReq), transport.sendMail(deadline)])
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent!'))
  .catch((error) => console.log(error.message));