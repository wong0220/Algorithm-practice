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
    // let arr = [2, 3, 5]
    let arr = [2];

    // if (input[i] > 5) {
    //   for (let j = 6; j < input[i]; j++) {
    //     if (j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0) {
    //       arr.push(j);
    //     }
    //   }
    // }

    for(let j = 2; j<input[i]; j++){

        for(let temp =2; temp<j; temp++){

            if(j%temp === 0)
        }
    }

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
