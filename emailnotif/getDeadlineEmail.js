const fs = require('fs');

const reservation = fs.readFileSync('reservation.csv', 'utf8')
  .split("\r\n").filter(x => x.length > 0).map(x => x.split(","));

const deadlineEmails = [];
const now = Date.parse(new Date());
const day = 86400*1000;
var endTime;
let difference = now - endTime;

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

for (let i = 1; i < reservation.length; i++){
  const row = reservation[i];
  if (row[7] == 'false' && row[14] == 'false' && row[17] == 'true'){ 
    formatEndTime(row);
    filterDeadlineEmails(row);
  }
}
console.log(deadlineEmails);