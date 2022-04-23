const fs = require('fs');

const reservation = fs.readFileSync('reservation.csv', 'utf8')
  .split("\r\n").filter(x => x.length > 0).map(x => x.split(","));

var endTime;
const now = Date.parse(new Date());
const day = 86400*1000;
let difference = now - endTime;
const deadlineEmails = [];
function nearDeadline(difference, day){
  if (difference <= 4*day){ return true; }}
function formatEndTime(row){
   endTime = Date.parse(new Date(row[6]));
   difference = now - endTime;
}

for (let i = 1; i < reservation.length; i++){
  const row = reservation[i];
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true'){ // isReturned, isPending, isApproved3
    formatEndTime(row);
    console.log(i, row[6]); // endTime at index 6
    nearDeadline(difference,day);
    if ((nearDeadline(difference, day) == true)){
      deadlineEmails.push(row[9]); // email at index 9
      console.log(i, row[9]);
    }
  }
}
console.log(deadlineEmails);