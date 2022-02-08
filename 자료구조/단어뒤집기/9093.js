let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("\n");

let N = Number(input.shift());

function solution(N, input) {
  for (let i = 0; i < N; i++) {
    let temp = input[i].split(" ").map((el) => el.split(""));

    let tempRev = temp
      .map((el) => el.reverse())
      .map((el) => el.join(""))
      .join(" ");

    console.log(tempRev);
  }
}

solution(N, input);
