function solution(id_list, report, k) {
  let report_info = {};
  let mail_count = {};

  for (let command of report) {
    const [sender, receiver] = command.split(" ");

    if (report_info[receiver] && report_info[receiver].includes(sender))
      continue;
    report_info[receiver] = [...(report_info[receiver] || []), sender];
  }

  for (let id of id_list) {
    if (report_info[id] && report_info[id].length >= k) {
      for (let id2 of report_info[id])
        mail_count[id2] = mail_count[id2] ? mail_count[id2] + 1 : 1;
    }
  }

  const answer = id_list.map((id) => mail_count[id] || 0);
  return answer;
}

/////////////////////////////////////////////

function solution(id_list, report, k) {
  let set = new Set();
  let member = {};
  let list = {};

  report.map((el, idx) => {
    set.add(el);
  });

  id_list.forEach((el) => {
    list[el] = 0;
    member[el] = [];
  });

  for (let value of set) {
    let temp = value.split(" ");
    member[temp[1]].push(temp[0]);
  }

  for (let key in member) {
    if (member[key].length < k) {
      delete member[key];
    }
  }

  for (let key in member) {
    member[key].forEach((el) => (list[el] += 1));
  }

  return Object.values(list);
}
