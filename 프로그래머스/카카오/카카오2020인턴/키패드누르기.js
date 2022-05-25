function solution(numbers, hand) {
  var answer = "";
  let arr = [];
  const phoneArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];

  let leftHand = [3, 0];
  let rightHand = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    let target = [];

    if (left.indexOf(numbers[i]) > -1) {
      arr.push("L");
      let index = left.indexOf(numbers[i]);
      leftHand = [index, 0];
    } else if (right.indexOf(numbers[i]) > -1) {
      arr.push("R");
      let index = right.indexOf(numbers[i]);
      rightHand = [index, 2];
    } else {
      let index = center.indexOf(numbers[i]);
      target = [index, 1];

      let leftValue =
        Math.abs(target[0] - leftHand[0]) + Math.abs(target[1] - leftHand[1]);
      let rightValue =
        Math.abs(target[0] - rightHand[0]) + Math.abs(target[1] - rightHand[1]);

      if (leftValue > rightValue) {
        arr.push("R");
        rightHand = target;
      } else if (leftValue < rightValue) {
        arr.push("L");
        leftHand = target;
      } else {
        if (hand === "right") {
          arr.push("R");
          rightHand = target;
        } else {
          arr.push("L");
          leftHand = target;
        }
      }
    }
  }

  answer = arr.join("");
  return answer;
}
