function solution(s) {
  var answer = 0;

  let isOdd = s.length % 2 !== 0;
  let circulationLength = 0;
  let answerArr = [];

  if (isOdd) {
    if (s.length === 1) {
      circulationLength = 1;
    } else {
      circulationLength = (s.length - 1) / 2;
    }
  } else {
    circulationLength = s.length / 2;
  }

  for (let i = circulationLength; i > 0; i--) {
    let sArr = s.split("");
    let tempArr = [];
    let strArr = [];

    while (sArr.length > 0) {
      tempArr.push(sArr.splice(0, i).join(""));
    }

    let count = 1;
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j] === tempArr[j + 1]) {
        count++;
      } else {
        let tempStr = count === 1 ? tempArr[j] : count + tempArr[j];
        strArr.push(tempStr);
        count = 1;
      }
    }

    answerArr.push(strArr.join("").length);
  }

  answer = answerArr.sort((a, b) => a - b)[0];

  return answer;
}
