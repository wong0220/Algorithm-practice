function solution(progresses, speeds) {
  var answer = [];
  let days = [];
  let count = 1;
  for (let i = 0; i < progresses.length; i++) {
    let temp =
      (100 - progresses[i]) % speeds[i] === 0
        ? (100 - progresses[i]) / speeds[i]
        : Math.floor((100 - progresses[i]) / speeds[i]) + 1;
    days.push(temp);
  }

  while (!!days.length) {
    if (days[0] >= days[1]) {
      count += 1;
      days.splice(1, 1);
    } else {
      days.splice(0, 1);
      answer.push(count);
      count = 1;
    }
  }
  return answer;
}
