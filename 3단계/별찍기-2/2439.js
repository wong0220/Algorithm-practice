let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split(" ");

let number = +input[0];

function solution(number) {
  for (let i = 0; i < number; i++) {
    let blank = "";
    for (let j = number - (i + 1); j > 0; j--) {
      blank += " ";
    }
    for (let j = 0; j < i + 1; j++) {
      blank += "*";
    }
    console.log(blank.length);

    blank = "";
  }
}

solution(number);
