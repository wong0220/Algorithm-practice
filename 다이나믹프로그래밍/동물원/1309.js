let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim();

let N = +input;

function solution(N) {
  let dp = new Array(1, 3);

  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  console.log(dp[N]);
}

solution(N);
