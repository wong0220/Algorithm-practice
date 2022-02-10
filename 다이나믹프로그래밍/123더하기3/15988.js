let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("\n");

let N = input.shift();

let newArr = input.map((el) => +el);

function solution(N, newArr) {
  let result = [];
  for (let i = 0; i < N; i++) {
    let dp = new Array(newArr[i]).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let j = 4; j <= newArr[i]; j++) {
      dp[j] = (dp[j - 1] + dp[j - 2] + dp[j - 3]) % 1000000009;
    }

    result.push(dp[newArr[i]]);
  }

  console.log(result.join("\n"));
}

solution(N, newArr);
