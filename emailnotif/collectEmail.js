const fs = require('fs');

const reserv_raw = (fs.readFileSync('reservation.csv', 'utf8')).split("\r\n");

const reserv_entries = new Array(reserv_raw.length)
  .fill('')
  .map((_, i) => reserv_raw.slice(i, i + 1));

const entries_array = [];
for (i=0; i<reserv_entries.length; i++){
  entries_array[i] = reserv_entries[i].toString().split(',');
}

// Approved bookings
const approvedEmails = [];
function getApproved(entries_array) {
  if(entries_array[i][14] == 'false' && entries_array[i][17] == 'true'){
    approvedEmails.push(entries_array[i][9]);
  }
}

// Rejected bookings
const rejectEmails = [];
function getRejected(entries_array) {
  if(entries_array[i][14] == 'false' && entries_array[i][17] == 'false'){
    rejectEmails.push(entries_array[i][9]);
  }
}

// Approaching deadline bookings
const deadlineEmails = [];
function getSoonDeadline(entries_array) {
  if(entries_array[i][7] == 'false' && entries_array[i][14] == 'false' && entries_array[i][17] == 'true'){
    deadlineEmails.push(entries_array[i][9]);
  }
}

// New, un-responded to bookings
const newReservationIds = [];
function getNewReservations(entries_array) {
  if(entries_array[i][15] == 'false' && entries_array[i][16] == 'false' && entries_array[i][17] == 'false' && entries_array[i][14] == 'true'){
    newReservationIds.push(entries_array[i][0]);
  }
}

for(i=1;i<entries_array.length;i++){
  getApproved(entries_array);
  getRejected(entries_array);
  getSoonDeadline(entries_array);
  getNewReservations(entries_array);
}
