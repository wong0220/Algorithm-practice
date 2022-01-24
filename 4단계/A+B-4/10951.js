let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

function solution(input) {
  let i = 0;
  while (i < input.length) {
    let sum = Number(input[i][0]) + Number(input[i][1]);
    console.log(sum);
    i++;
  }
}

solution(input);
