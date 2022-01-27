const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let number = input.splice(0, 1)[0];

function solution(number, input) {
  for (let i = 0; i < number; i++) {
    let num = input[i];
    let tempArr = [];

    for (let j = 1; j <= num; j++) {
      tempArr.push(j);
    }

    for (let j = 1; j * j < num; j++) {
      if (tempArr[j]) {
        for (let x = tempArr[j] * tempArr[j]; x <= num; x += tempArr[j]) {
          tempArr[x - 1] = 0;
        }
      }
    }

    let arr = tempArr.filter((el) => el !== 0 && el !== 1);

    if (arr.some((el) => el === input[i] / 2)) {
      console.log(`${input[i] / 2} ${input[i] / 2}`);
    } else {
      let filter = arr.filter((el) => el < input[i] / 2);

      for (let x = filter.length - 1; x >= 0; x--) {
        if (arr.some((el) => el === input[i] - filter[x])) {
          console.log(`${filter[x]} ${input[i] - filter[x]}`);
          break;
        }
      }
    }
  }
}

solution(number, input);
