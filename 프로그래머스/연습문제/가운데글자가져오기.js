function solution(s) {
  var answer = "";
  const idx = Math.floor(s.length / 2);
  if (s.length % 2) answer = s[idx];
  else answer = s.slice(idx - 1, idx + 1);

  return answer;
}
