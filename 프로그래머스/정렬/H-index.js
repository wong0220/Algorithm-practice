function solution(citations) {
  var answer = 0;
  let temp = Math.max(...citations);

  while (temp >= 0) {
    let citedOne = citations.filter((el) => el >= temp).length;

    if (citedOne >= temp) {
      answer = temp;
      break;
    }
    temp--;
  }

  return answer;
}
