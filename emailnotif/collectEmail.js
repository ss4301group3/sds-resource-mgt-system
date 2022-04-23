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
    newReservationIds.push(row[0]);
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

// Print to check
console.log("Deadline emails:", deadlineEmails);
console.log("Reject emails:",rejectEmails);
console.log("Approval emails:",approvedEmails);
console.log("New reservation IDs:",newReservationIds);
