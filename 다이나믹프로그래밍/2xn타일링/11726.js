let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split(" ")[0];
let N = +input;

function solution(N) {
  let dp = new Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[N]);
}

solution(N);
