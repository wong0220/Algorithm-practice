function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let zeroCount = 0;

  let ascLottos = lottos.sort((a, b) => a - b);
  let ascWinNums = win_nums.sort((a, b) => a - b);

  ascLottos.forEach((number) => {
    if (number === 0) zeroCount++;
    if (ascWinNums.includes(number)) {
      count++;
      ascWinNums.splice(1, ascWinNums.indexOf(number));
    }
  });

  let compactTempValue = count + zeroCount;

  let highestRank = compactTempValue < 2 ? 6 : 7 - compactTempValue;
  let lowestRank = count < 2 ? 6 : 7 - count;

  answer = [highestRank, lowestRank];
  return answer;
}
