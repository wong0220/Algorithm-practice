function solution(n, lost, reserve) {
  var answer = n - lost.length;
  let student = {};
  for (let i = 0; i < n; i++) {
    student[(i + 1).toString()] = 1;
  }

  lost.forEach((el) => (student[el.toString()] -= 1));
  reserve.forEach((el) => (student[el.toString()] += 1));

  for (let key in student) {
    if (student[key] === 2 && student[(Number(key) - 1).toString()] === 0) {
      student[(Number(key) - 1).toString()] += 1;
      student[key] -= 1;
    } else if (
      student[key] === 2 &&
      student[(Number(key) + 1).toString()] === 0
    ) {
      student[(Number(key) + 1).toString()] += 1;
      student[key] -= 1;
    }
  }

  answer = Object.values(student).filter((el) => el > 0).length;
  return answer;
}
