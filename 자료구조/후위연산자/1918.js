let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("");

function solution(input) {
  let postfix = "";
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] <= "Z" && input[i] >= "A") {
      postfix += input[i];
    } else if (input[i] === "+" || input[i] === "-") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.push(input[i]);
    } else if (input[i] === "*" || input[i] === "/") {
      while (
        stack.length &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      ) {
        postfix += stack.pop();
      }
      stack.push(input[i]);
    } else if (input[i] === "(") {
      stack.push(input[i]);
    } else if (input[i] === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop();
    }
  }

  while (stack.length) {
    postfix += stack.pop();
  }
  console.log(postfix);
}

solution(input);
