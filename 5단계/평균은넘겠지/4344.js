let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" "));

let testCase = [];
let count = +input[0];

for (let i = 1; i <= count; i++) {
  let arr = [];
  for (let j = 1; j <= +input[i][0]; j++) {
    arr.push(+input[i][j]);
  }
  let obj = {
    N: +input[i][0],
    arr,
  };
  testCase.push(obj);
}

function solution(count, testCase) {
  for (let i = 0; i < count; i++) {
    let sum = testCase[i].arr.reduce((arr, curr) => arr + curr);
    let avg = sum / testCase[i].N;
    let counter = 0;
    testCase[i].arr.forEach((el) => {
      if (el > avg) {
        counter++;
      }
    });
    let higherAvg = ((counter / testCase[i].N) * 100).toFixed(3);

    console.log(`${higherAvg}%`);
  }
}

solution(count, testCase);
