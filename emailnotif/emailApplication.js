const fs = require('fs');

const reservation = fs.readFileSync('reservation.csv', 'utf8')
  .split("\r\n").filter(x => x.length > 0).map(x => x.split(","));

// Notify approval: isReturned (F), isPending (F), isApproved3 (T)
const approvedEmails = [];
function getApproved(row) {
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true'){
    approvedEmails.push(row[9]);
  }
}

// Notify rejection: isPending (F), isApproved3 (F)
const rejectEmails = [];
function getRejected(row) {
  if (row[14] == 'false' && row[17] == 'false'){
    rejectEmails.push(row[9]);
  }
}

// Notify near deadline: isReturned (F), isPending (F), isApproved3 (T)
const now = Date.parse(new Date());
const day = 86400*1000;
var endTime;
let difference = now - endTime;

const deadlineEmails = [];
function nearDeadline(difference, day){
  if (difference <= 4*day)
  { return true; }
}

function formatEndTime(row){
   endTime = Date.parse(new Date(row[6]));
   difference = now - endTime;
}

function filterDeadlineEmails(row){
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true'){
    formatEndTime(row);
    if ((nearDeadline(difference, day) == true))
    { deadlineEmails.push(row[9]); }
  }
}

function getDeadlineEmails(row){
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true'){ 
    formatEndTime(row);
    filterDeadlineEmails(row);
  }
}

// New reservation: IsApproved1-3 (F), isPending (T)
const newReservationIds = [];
function getNewReservations(row) {
  if(row[15] == 'false' && row[16] == 'false' && row[17] == 'false' && row[14] == 'true'){
    newReservationIds.push(row[9]);
  }
}

// Perform above functions in all the reservations
for (let i = 1; i < reservation.length; i++){
  const row = reservation[i];
  getApproved(row);
  getRejected(row);
  getDeadlineEmails(row);
  getNewReservations(row);
}
/* ---------------------------------------------------------------------------------------- */
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = 'API credentials client ID';
const CLIENT_SECRET = 'API credentials client secret';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =  'refresh token from OAuth playground';

const sender ='sender email';
const recipient = 'not needed. email arrays can be directly passed in below functions';

const approval = {
  from: sender,
  to: recipient,
  subject: 'APPROVED: SDS Resource Reservation',
  text: `Reservations by these emails have been approved: ${approvedEmails}`,
  html: `Reservations by these emails have been approved:<br>${approvedEmails}`,
};

const reject = {
  from: sender,
  to: recipient,
  subject: 'REJECTED: SDS Resource Reservation',
  text: `Reservations by these emails have been rejected: ${rejectEmails}`,
  html: `Reservations by these emails have been rejected:<br>${rejectEmails}`,
};

const newReq = {
  from: sender,
  to: sender,
  subject: 'NEW: Resource Reservation',
  text: `Dear Admins, you have new reservations pending approval from these emails: ${newReservationIds}`,
  html: `Dear Admins,<br>You have new reservations pending approval from these emails: ${newReservationIds}`,
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
  .then((result) => console.log('Email sent!'))
  .catch((error) => console.log(error.message));