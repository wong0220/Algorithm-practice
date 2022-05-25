function solution(d, budget) {
  var answer = 0;
  let remainingBudget = budget;

  d.sort((a, b) => a - b).forEach((el) => {
    if (remainingBudget - el >= 0) {
      answer++;
      remainingBudget -= el;
    } else {
      return;
    }
  });
  return answer;
}
