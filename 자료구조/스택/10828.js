let fs = require("fs");
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

input.shift();

function solution(input) {
  let arr = [];
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    switch (input[i][0]) {
      case "push":
        arr.push(+input[i][1]);
        break;

      case "pop":
        if (arr.length === 0) {
          answer.push(-1);
          break;
        } else {
          answer.push(arr.pop());
          break;
        }

      case "size":
        answer.push(arr.length);
        break;

      case "empty":
        if (arr.length === 0) {
          answer.push(1);
          break;
        } else {
          answer.push(0);
          break;
        }

      case "top":
        if (arr.length === 0) {
          answer.push(-1);
          break;
        } else {
          answer.push(arr[arr.length - 1]);
          break;
        }
    }
  }

  console.log(answer.join("\n"));
}

solution(input);
