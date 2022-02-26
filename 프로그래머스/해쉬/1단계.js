function solution(participant, completion) {
  var answer = "";
  let hash = {};
  for (let i = 0; i < participant.length; i++) {
    if (hash[participant[i]] === undefined) {
      hash[participant[i]] = 0;
    } else {
      hash[participant[i]] += 1;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    hash[completion[i]] -= 1;
  }

  for (let key in hash) {
    if (hash[key] === 0) {
      answer = key;
    }
  }

  return answer;
}
