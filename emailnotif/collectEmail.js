const fs = require('fs');

const reservations = fs.readFileSync('mockdata.csv', 'utf8').split("\r\n").filter(x => x.length > 0).map(x => x.split(","));

const approvalEmails = [];
function getApprovalEmail(row) {
  if (row[7] == 'FALSE' && row[14] == 'FALSE' && row[17] == 'TRUE'){
    approvalEmails.push(row[9]);
  }
}

const rejectionEmails = [];
function getRejected(row) {
  if (row[14] == 'FALSE' && row[17] == 'FALSE'){
    rejectionEmails.push(row[9]);
  }
}

const nowInMilliseconds = Date.parse(new Date());
const dayInMilliseconds = 86400*1000;
let endTime;
let difference = nowInMilliseconds - endTime;

function deadlineAndPresentTime(difference, dayInMilliseconds){
  if ((difference <= 4*dayInMilliseconds) && difference > 0){
    return true; 
  }
}

function formatEndTime(row){
   endTime = Date.parse(new Date(row[6]));
   difference = nowInMilliseconds - endTime;
}

const deadlineEmails = [];
function getDeadlineEmails(row){
  if (row[7] == 'FALSE' && row[14] == 'FALSE' && row[17] == 'TRUE'){ 
    formatEndTime(row);
    if ((deadlineAndPresentTime(difference, dayInMilliseconds) == true)){
      deadlineEmails.push(row[9]); 
    }
  }
}

const newReservationEmails = [];
function getNewReservations(row) {
  if(row[15] == 'FALSE' && row[16] == 'FALSE' && row[17] == 'FALSE' && row[14] == 'TRUE'){
    newReservationEmails.push(row[9]);
  }
}

for (let i = 1; i < reservations.length; i++){
  const row = reservations[i];
  getApprovalEmail(row);
  getRejected(row);
  getDeadlineEmails(row);
  getNewReservations(row);
}

/* Data-driven Test: Print arrays to check if match expected values
console.log(approvalEmails);
console.log(rejectionEmails);
console.log(deadlineEmails);
console.log(newReservationEmails);
*/