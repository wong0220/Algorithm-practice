let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split("\n");

input.shift();

let newInput = input.map((el) => el.split(" "));

let arr = [];

newInput.forEach((el) => {
  let obj = { 나이: el[0], 이름: el[1] };
  arr.push(obj);
});

function solution(arr) {
  arr.sort((a, b) => a["나이"] - b["나이"]);

  arr.forEach((el) => console.log(`${el.나이} ${el.이름}`));
}

solution(arr);
