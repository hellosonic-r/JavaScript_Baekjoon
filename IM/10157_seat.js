let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const k = Number(input[1]);

const board = Array.from({ length: m }, () => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let x = 0;
let y = 0;
let turn = 0;

if (n * m < k) {
  console.log(0);
} else {
  for (let i = 1; i < n * m + 1; i += 1) {
    if (i === k) {
      console.log(x + 1, y + 1);
      break;
    }
    board[y][x] = i;
    x += dx[turn];
    y += dy[turn];
    if (x < 0 || x >= n || y < 0 || y >= m || board[y][x] !== 0) {
      x -= dx[turn];
      y -= dy[turn];
      turn = (turn + 1) % 4;
      x += dx[turn];
      y += dy[turn];
    }
  }
}
