let infoArr = [];
let queryArr = [];
const answer = [];

for (const list of info) {
  infoArr.push(new Set(list.split(" ")));
}

for (const q of query) {
  queryArr.push(new Set(q.split(" ").filter((el) => el !== "and")));
}

for (let i = 0; i < queryArr.length; i++) {
  let temp = infoArr;

  for (const v of queryArr[i]) {
    if (v === "-") continue;
    if (Number(v)) {
      temp = temp.filter((el) => [...el][4] >= Number(v));
      continue;
    }
    temp = temp.filter((el) => el.has(v));
  }

  answer.push(temp.length);
}

return answer;
