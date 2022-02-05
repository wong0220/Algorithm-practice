let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split(" ")[0];

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let obj = {};

for (let i = 0; i < alphabet.length; i++) {
  obj[alphabet[i]] = 0;
}

function solution(obj, input) {
  for (let i = 0; i < input.length; i++) {
    obj[input[i]]++;
  }

  console.log(Object.values(obj).join(" "));
}

solution(obj, input);
