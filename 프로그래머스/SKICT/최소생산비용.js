function solution(money, costs) {
  var answer = 0;
  const won = [1, 5, 10, 50, 100, 500];
  const wonP = [500, 100, 50, 10, 5, 1];
  const priority = [];

  for (let i = 0; i < costs.length; i++) {
    priority.push({ cost: [won[i], wonP[i] * costs[i], costs[i]] });
  }

  priority.sort((a, b) => a.cost[1] - b.cost[1]);
  for (let i = 0; i < priority.length; i++) {
    if (money > 0) {
      let temp = Math.floor(money / priority[i].cost[0]);
      answer += temp * priority[i].cost[2]; // 생산 가격
      money -= temp * priority[i].cost[0]; // 요구 가격
    } else {
      break;
    }
  }
  return answer;
}
