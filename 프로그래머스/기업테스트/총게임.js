function solution(monsters, bullets) {
  // 기울기를 이용한 문제
  // 사분면을 고려하지 못했습니다 시간이 부족하여 다음에 기회가 된다면 풀고싶습니다
  var answer = 0;

  let monsterIncli = [];
  let bullIncli = [];

  for (let i = 0; i < monsters.length; i++) {
    let temp = (monsters[i][1] - 0) / (monsters[i][0] - 0);
    let location = 0;

    if (monsters[i][0] > 0 && monsters[i][0] > 0) {
      location = 1;
    } else if (monsters[i][0] < 0 && monsters[i][0] > 0) {
      location = 2;
    } else if (monsters[i][0] < 0 && monsters[i][0] < 0) {
      location = 3;
    } else if (monsters[i][0] > 0 && monsters[i][0] < 0) {
      location = 4;
    }

    if (monsters[i][1] === 0) {
      if (monsters[i][0] > 0) {
        temp = "+x";
      } else {
        temp = "-x";
      }
    } else if (monsters[i][0] === 0) {
      if (monsters[i][1] > 0) {
        temp = "+y";
      } else {
        temp = "-y";
      }
    }
    monsterIncli.push({ incli: temp, loca: location });
  }

  console.log(monsterIncli);
  for (let i = 0; i < bullets.length; i++) {
    let temp = (bullets[i][1] - 0) / (bullets[i][0] - 0);
    let location = 0;

    if (bullets[i][0] > 0 && bullets[i][0] > 0) {
      location = 1;
    } else if (bullets[i][0] < 0 && bullets[i][0] > 0) {
      location = 2;
    } else if (bullets[i][0] < 0 && bullets[i][0] < 0) {
      location = 3;
    } else if (bullets[i][0] > 0 && bullets[i][0] < 0) {
      location = 4;
    }

    if (bullets[i][1] === 0) {
      if (bullets[i][0] > 0) {
        temp = "+x";
      } else {
        temp = "-x";
      }
    } else if (bullets[i][0] === 0) {
      if (bullets[i][1] > 0) {
        temp = "+y";
      } else {
        temp = "-y";
      }
    }
    bullIncli.push({ incli: temp, loca: location });
  }

  console.log(monsterIncli);
  console.log(bullIncli);

  for (let i = 0; i < bullIncli.length; i++) {
    for (let j = 0; j < monsterIncli.length; j++) {
      if (
        bullIncli[i].incli === monsterIncli[j].incli &&
        bullIncli[i].loca === monsterIncli[j].loca
      ) {
        answer++;
        monsterIncli.splice[(j, 1)];
        break;
      }
    }
  }

  if (answer === 0) {
    answer = -1;
  }

  return answer;
}
