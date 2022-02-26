function solution(numbers) {
  var answer = "";
  let charNum = numbers.map((el) => el.toString());
  charNum.sort((a, b) => b + a - (a + b)); // a와 b를 합친 문자형 숫자를 비교하여 음수면 자리 교환 하는 방식
  answer = charNum[0] === "0" ? "0" : charNum.join("");
  return answer;
}
