function solution(w, h) {
  let count = 0;

  for (let i = 1; i < w; i++) {
    count += Math.floor((h * i) / w);
  }

  return count * 2;
}
