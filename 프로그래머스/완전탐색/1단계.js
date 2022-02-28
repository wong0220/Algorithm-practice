function solution(answers) {
  let answer = [];
  let temp = { 1: 0, 2: 0, 3: 0 };
  let people = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (people[i][j % people[i].length] === answers[j]) {
        temp[(i + 1).toString()] += 1;
      }
    }
  }

  let max = Math.max(...Object.values(temp));

  if (temp[1] === max) answer.push(1);
  if (temp[2] === max) answer.push(2);
  if (temp[3] === max) answer.push(3);

  return answer;
}
