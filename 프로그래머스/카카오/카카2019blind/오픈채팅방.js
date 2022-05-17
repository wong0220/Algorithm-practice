function solution(record) {
  var answer = [];
  const changedName = {};

  record.forEach((el) => {
    const [status, id, nickName] = el.split(" ");

    if (status === "Enter" || status === "Change") changedName[id] = nickName;
  });

  record.forEach((el) => {
    const [status, id] = el.split(" ");

    if (status === "Enter" || status === "Leave") {
      const value = changedName[id];
      const characterStatus =
        status === "Enter" ? "들어왔습니다." : "나갔습니다.";
      answer.push(`${value}님이 ${characterStatus}`);
    }
  });
  return answer;
}
