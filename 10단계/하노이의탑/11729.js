let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("");

let N = +input;
let count = 0;
let answer = [];

function solution(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    solution(num - 1, from, to, other);
    answer.push([from, to]);
    count++;
    solution(num - 1, other, from, to);
  }
}
solution(N, "1", "2", "3");
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));
