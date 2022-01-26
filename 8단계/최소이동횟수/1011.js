let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let num = +input.splice(0, 1)[0];
let arr = input.map((el) => el.split(" "));

function solution(num, arr) {
  for (let i = 0; i < num; i++) {
    let [x, y] = arr[i].map((el) => +el);

    if (Math.sqrt(y - x) % 1 === 0) {
      console.log(2 * Math.sqrt(y - x) - 1);
    } else {
      let ceil = Math.pow(Math.ceil(Math.sqrt(y - x)), 2);
      let floor = Math.pow(Math.floor(Math.sqrt(y - x)), 2);
      let distance = y - x;

      if ((ceil - floor - 1) / 2 + floor < distance) {
        console.log(Math.sqrt(ceil) * 2 - 1);
      } else {
        console.log(Math.sqrt(floor) * 2);
      }
    }
  }
}

solution(num, arr);
