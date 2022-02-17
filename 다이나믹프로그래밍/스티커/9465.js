let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("\n");

let N = +input.shift();

for (let i = N * 3 - 3; i >= 0; i -= 3) {
  input.splice(i, 1);
}
let sticker = input.map((el) => el.split(" "));

function solution(N, sticker) {
  for (let i = 0; i < N; i++) {
    let dp = new Array(sticker[0].length + 1);

    for (let j = 0; j < sticker[0].length + 1; j++) {
      if (j > 0) {
        dp[j] = new Array(0, +sticker[0][j - 1], +sticker[1][j - 1]);
      } else {
        dp[j] = new Array();
      }
    }

    for (let j = 2; j <= dp.length - 1; j++) {
      dp[j][0] += Math.max(dp[j - 1][0], dp[j - 1][1], dp[j - 1][2]);
      dp[j][1] += Math.max(dp[j - 1][0], dp[j - 1][2]);
      dp[j][2] += Math.max(dp[j - 1][0], dp[j - 1][1]);
    }

    sticker.splice(0, 2);

    console.log(Math.max(...dp[dp.length - 1]));
  }
}

solution(N, sticker);
