let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim();

let N = +input;

function solution(N) {
  let dp = new Array(N + 1);
  let result = 0;

  for (let i = 0; i < N + 1; i++) {
    dp[i] = new Array();
  }
  dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 2; i <= N; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  dp[N].forEach((el) => (result += el));
  console.log(result);
}

solution(N);
