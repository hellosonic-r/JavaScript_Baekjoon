let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, ...arr] = input;

const board = Array.from({ length: 101 }, () => Array(101).fill(0));

let cnt = 0;

for (const info of arr) {
  const [x, y] = info.split(' ').map(Number);
  for (let i = y; i < y + 10; i += 1) {
    for (let j = x; j < x + 10; j += 1) {
      if (board[i][j] === 0) {
        cnt += 1;
        board[i][j] = 1;
      }
    }
  }
}

console.log(cnt);
