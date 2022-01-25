let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let number = +input[0];
let newArr = input.slice(1).map((el) => el.split(""));

console.log(newArr);

function solution(number, newArr) {
  let count = number;

  for (let i = 0; i < number; i++) {
    let obj = {};
    for (let j = 0; j < newArr[i].length; j++) {
      if (!obj[newArr[i][j]]) {
        obj[newArr[i][j]] = true;
      } else if (newArr[i][j] !== newArr[i][j - 1]) {
        count--;
        break;
      }
    }
  }
  console.log(count);
}

solution(number, newArr);
