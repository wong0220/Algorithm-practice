function remove(lowerCase) {
  for (let i = 0; i < lowerCase.length - 1; i++) {
    if (lowerCase[i] === ".") {
      if (lowerCase[i] === lowerCase[i + 1]) {
        lowerCase.splice(i, 1);
        remove(lowerCase);
      }
    }
  }

  return lowerCase;
}

function removeDot(stageThree) {
  if (stageThree[0] === ".") {
    stageThree.splice(0, 1);
  }

  if (stageThree[stageThree.length - 1] === ".") {
    stageThree.splice(stageThree.length - 1, 1);
  }
}

function solution(new_id) {
  var answer = "";
  let specialCase = "~!@#$%^&*()=+[{]}:?,<>/".split("");
  let arr = [];

  let lowerCase = new_id.toLowerCase().split("");

  for (let i = 0; i < new_id.length; i++) {
    if (specialCase.indexOf(new_id[i]) > -1) {
      arr.push(i);
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    lowerCase.splice(arr[i], 1);
  }

  let stageThree = remove(lowerCase);

  if (stageThree[0] === ".") {
    stageThree.splice(0, 1);
  }

  removeDot(stageThree);

  if (stageThree.length === 0) {
    stageThree.push("a");
  }

  if (stageThree.length >= 16) {
    stageThree.splice(15);
  }

  removeDot(stageThree);

  if (stageThree.length <= 2) {
    let temp = stageThree[stageThree.length - 1];
    while (stageThree.length < 3) {
      stageThree.push(temp);
    }
  }

  answer = stageThree.join("");

  return answer;
}
