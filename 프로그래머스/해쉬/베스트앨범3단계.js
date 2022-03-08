function solution(genres, plays) {
  var answer = [];
  let temp = [];
  let hash = {};
  let hashTwo = {};
  for (let i = 0; i < genres.length; i++) {
    if (hash[genres[i]] === undefined) {
      hash[genres[i]] = plays[i];
    } else {
      hash[genres[i]] += plays[i];
    }
    if (hashTwo[genres[i]] === undefined) {
      hashTwo[genres[i]] = [{ [i]: plays[i] }];
    } else {
      hashTwo[genres[i]].push({ [i]: plays[i] });
    }
  }

  for (let key in hash) {
    temp.push({ key: [key, hash[key]] });
  }

  temp.sort((a, b) => b.key[1] - a.key[1]);

  for (let i = 0; i < temp.length; i++) {
    let genre = temp[i].key[0];
    hashTwo[genre].sort((a, b) => Object.values(b) - Object.values(a));

    for (let j = 0; j < 2; j++) {
      if (hashTwo[genre][j] === undefined) {
        break;
      } else {
        answer.push(...Object.keys(hashTwo[genre][j]));
      }
    }
  }

  return answer.map((el) => Number(el));
}
