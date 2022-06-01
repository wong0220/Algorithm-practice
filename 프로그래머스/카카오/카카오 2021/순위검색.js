// let infoArr = [];
// let queryArr = [];
// const answer = [];

// for (const list of info) {
//   infoArr.push(new Set(list.split(" ")));
// }

// for (const q of query) {
//   queryArr.push(new Set(q.split(" ").filter((el) => el !== "and")));
// }

// for (let i = 0; i < queryArr.length; i++) {
//   let temp = infoArr;

//   for (const v of queryArr[i]) {
//     if (v === "-") continue;
//     if (Number(v)) {
//       temp = temp.filter((el) => [...el][4] >= Number(v));
//       continue;
//     }
//     temp = temp.filter((el) => el.has(v));
//   }

//   answer.push(temp.length);
// }

// return answer;

function solution(info, query) {
  let map = {};
  let answer = [];

  const combination = (infoArr, v, idx) => {
    const key = infoArr.join("");
    if (map[key] === undefined) map[key] = [v];
    else map[key].push(v);

    for (let i = idx; i < infoArr.length; i++) {
      const temp = [...infoArr];
      temp[i] = "-";
      combination(temp, v, i + 1);
    }
  };

  const binarySearch = (query, target) => {
    let start = 0;
    let q = map[query];
    let end = q.length;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (Number(q[mid]) < Number(target)) start = mid + 1;
      else end = mid;
    }

    return q.length - start;
  };

  for (let i = 0; i < info.length; i++) {
    const infoArr = info[i].split(" ");
    const value = infoArr.pop();

    combination(infoArr, value, 0);
  }

  for (const key in map) {
    map[key].sort((a, b) => a - b);
  }
  console.log(map);

  for (let i = 0; i < query.length; i++) {
    let temp = query[i].split(" ").filter((el) => el !== "and");
    let value = temp.pop();
    let q = temp.join("");

    answer.push(binarySearch(q, value));
  }

  console.log(answer);
}

let a = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
let b = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
solution(a, b);
