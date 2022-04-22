const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = 'client ID here';
const CLIENT_SECRET = 'client secret here';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =  'refresh token from oauth playground here';

const sender ='sender email here';
const recipient = 'recepient email here';
const itemName = 'HP Monitor'; // itemName from dbo.RESERVATION

const approval = {
  from: sender,
  to: recipient,
  subject: 'APPROVED: SDS Resource Reservation',
  text: `Dear User,</p><p>Your resource reservation for ${itemName} was approved.`,
  html: `<p>Dear User,</p><p>Your resource reservation for ${itemName} was rejected.</p>`,
};

const reject = {
  from: sender,
  to: recipient,
  subject: 'REJECTED: SDS Resource Reservation',
  text: `Dear User,</p><p>Your resource reservation for ${itemName} was rejected.`,
  html: `<p>Dear User,</p><p>Your resource reservation for ${itemName} was rejected.</p>`,
};

const newReq = {
  from: sender,
  to: sender,
  subject: 'NEW: Resource Reservation',
  text: `Dear Admin,</p><p>There is a new reservation for ${itemName}. Please visit the portal to respond to it.`,
  html: `<p>Dear Admin,</p><p>There is a new reservation for ${itemName}. Please visit the portal to respond to it.</p>`,
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

    const result = await Promise.all([transport.sendMail(approval), transport.sendMail(reject), transport.sendMail(newReq)])
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent!', result))
  .catch((error) => console.log(error.message));