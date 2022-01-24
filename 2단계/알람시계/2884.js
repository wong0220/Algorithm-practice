let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split(" ");

let hour = +input[0];
let minute = +input[1];

function solution(hour, minute) {
  if (minute - 45 < 0) {
    let setMin = 60 - Math.abs(minute - 45);
    let setHour = hour - 1;

    if (hour === 0) {
      let setHour = 23;

      return console.log(setHour, setMin);
    }
    return console.log(setHour, setMin);
  }

  return console.log(hour, minute - 45);
}

solution(hour, minute);
