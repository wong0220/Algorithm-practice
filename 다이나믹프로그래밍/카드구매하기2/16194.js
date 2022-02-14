let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("\n");

let N = Number(input.shift());

let card = input[0].split(" ").map((el) => +el);

function solution(N, card) {
  let dp = new Array(N + 1).fill(0);
  card.forEach((el, idx) => (dp[idx + 1] = el));

  for (let i = 1; i <= N; i++) {
    for (let j = i - 1; j >= 1; j--) {
      dp[i] = Math.min(dp[i], dp[i - j] + card[j - 1]);
    }
  }

  console.log(dp[N]);
}

solution(N, card);
