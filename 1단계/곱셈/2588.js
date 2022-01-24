let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let number1 = +input[0];
let number2 = +input[1];

function solution(number1, number2) {
  let arr = number2
    .toString()
    .split("")
    .map((el) => Number(el))
    .reverse();

  arr.forEach((el) => console.log(number1 * el));
  console.log(number1 * number2);
}

solution(number1, number2);
