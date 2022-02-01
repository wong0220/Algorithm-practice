let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

let N = Number(input.shift());

function solution(N, input) {
  let rank = [];
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
          count++;
        }
      }
    }
    rank.push(++count);
  }

  let sum = rank.join(" ");
  console.log(sum);
}

solution(N, input);
