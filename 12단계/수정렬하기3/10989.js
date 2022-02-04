let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let N = input.shift();

function solution(N, input) {
  input.sort((a, b) => a - b);

  input.forEach((el) => console.log(el));
}

solution(N, input);
