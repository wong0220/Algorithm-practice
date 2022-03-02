function solution(clothes) {
  var answer = 1;
  let clothesObj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothesObj[clothes[i][1]] === undefined) {
      clothesObj[clothes[i][1]] = [clothes[i][0]];
    } else {
      clothesObj[clothes[i][1]].push(clothes[i][0]);
    }
  }

  Object.values(clothesObj).forEach((el) => (answer *= el.length + 1));
  answer -= 1;
  return answer;
}
