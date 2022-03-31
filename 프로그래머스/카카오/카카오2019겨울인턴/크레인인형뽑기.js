function solution(board, moves) {
  let result = 0;
  let temp = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (temp === board[j][moves[i] - 1]) {
          result += 2;
          if (basket.length > 0) {
            basket.pop();
            temp = basket[basket.length - 1];
          } else {
            temp = 0;
          }
        } else {
          basket.push(board[j][moves[i] - 1]);
          temp = board[j][moves[i] - 1];
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
}

////////////////////////////

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
function removeDoll(cart, ans) {
  for (let i = 0; i < cart.length - 1; i++) {
    if (cart[i] === cart[i + 1]) {
      ans += 2;
      cart.splice(i, 2);
      ans = removeDoll(cart, ans);
    }
  }
  return ans;
}

function solution(board, moves) {
  var answer = 0;
  let cart = [];

  for (let i = 0; i < moves.length; i++) {
    let temp = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        temp = j;
        break;
      }
    }

    if (board[temp][moves[i] - 1] !== 0) {
      cart.push(board[temp][moves[i] - 1]);
      board[temp].splice(moves[i] - 1, 1, 0);
    }
  }

  answer = removeDoll(cart, answer);

  return answer;
}
