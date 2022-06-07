function solution(s) {
  if (s.length % 2 === 1) return 0;
  let sArr = s.split("");
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2);
      i = -1;
    }
  }

  return !!sArr.length ? 0 : 1;
}

// 효율성 고려한 스택 문제풀이
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return !!stack.length ? 0 : 1;
}
