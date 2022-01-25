let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split(" ");

let inputNum = input[0].split("").map((el) => +el);
let count = +input[0];

function solution(count, inputNum) {
  let counter = 0;

  if (inputNum.length > 2) {
    for (let i = 0; i < 99; i++) {
      counter++;
    }
    for (let i = 100; i <= count; i++) {
      let arr = [];
      for (let j = 0; j < i.toString().length - 1; j++) {
        arr.push(Number(i.toString()[j]) - Number(i.toString()[j + 1]));
      }
      if (arr.every((el) => el === arr[0])) {
        counter++;
      }
    }
    console.log(counter);
  } else {
    for (let i = 1; i <= count; i++) {
      counter++;
    }
    console.log(counter);
  }
}

solution(count, inputNum);
