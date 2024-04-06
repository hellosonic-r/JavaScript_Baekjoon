let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const k = Number(input[1]);

const board = Array.from({ length: m }, () => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const bfs = (sx, sy) => {
  const queue = [];
  queue.push([sx, sy]);
  board[sy][sx] = 1;
  let cnt = 1;
  let turn = 0;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    let nx = x + dx[turn];
    let ny = y + dy[turn];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m || board[ny][nx] !== 0) {
      nx = x + dx[(turn + 1) % 4];
      ny = y + dy[(turn + 1) % 4];
      turn = (turn + 1) % 4;
      board[ny][nx] = board[y][x] + 1;
      queue.push([nx, ny]);
      cnt += 1;
      if (cnt === k) {
        console.log(nx + 1, ny + 1);
        break;
      }
    } else {
      board[ny][nx] = board[y][x] + 1;
      queue.push([nx, ny]);
      cnt += 1;
      if (cnt === k) {
        console.log(nx + 1, ny + 1);
        break;
      }
    }
  }
};

if (n * m < k) {
  console.log(0);
} else {
  bfs(0, 0);
}
