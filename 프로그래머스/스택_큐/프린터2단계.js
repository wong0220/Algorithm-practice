function solution(priorities, location) {
  var answer = 0;
  let copy = [];
  let prints = [];
  for (let i = 0; i < priorities.length; i++) {
    copy.push({ [i]: priorities[i] });
  }

  while (copy.length > 1) {
    let temp = null;
    for (let i = 1; i < copy.length; i++) {
      if (Object.values(copy[0])[0] < Object.values(copy[i])[0]) {
        temp = copy[0];
      }
    }

    if (temp !== null) {
      copy.push(copy.shift());
    } else {
      prints.push(copy.shift());
      if (copy.length === 1) {
        prints.push(copy.shift());
      }
    }
  }

  prints.forEach((el) => {
    if (Object.keys(el)[0] === location.toString()) {
      answer = prints.indexOf(el) + 1;
    }
  });
  return answer;
}
