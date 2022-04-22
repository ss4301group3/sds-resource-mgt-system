const fs = require('fs');

const reservation = 
  // read csv file
  fs.readFileSync('mockReservationData.csv', 'utf8')
  // split to each line
  .split("\r\n")
  // remove empty strings
  .filter(x => x.length > 0)
  // split each line to subarray
  .map(x => x.split(","));

// Notify approval: isPending (False), isApproved3 (True)
const approvedEmails = [];
function getApproved(row) {
  if (row[14] == 'false' && row[17] == 'true'){
    approvedEmails.push(row[9]);
  }
}

// Notify rejection: isPending (False), isApproved3 (False)
const rejectEmails = [];
function getRejected(row) {
  if (row[14] == 'false' && row[17] == 'false'){
    rejectEmails.push(row[9]);
  }
}

// Notify nearing deadline: endTime (X days from current day), isReturned (False), isPending (False), isApproved3 (True)
const deadlineEmails = [];
function getSoonDeadline(row) {
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true') {
    deadlineEmails.push(row[9]);
  }
}

// New, un-responded to bookings (IsApproved1-3==false, isPending==true)
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
  getSoonDeadline(row);
  getNewReservations(row);
}

// Print to check
console.log(deadlineEmails);
console.log(rejectEmails);
console.log(approvedEmails);
console.log(newReservationIds);
