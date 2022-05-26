function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    const sign = signs[i] ? "+" : "-";
    answer += Number(sign + absolutes[i]);
  }
  return answer;
}
