let fs = require('fs');
let input = fs
  .readFileSync('./DFS, BFS/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const board = [];
for (let i = 1; i < n + 1; i += 1) {
  const tempArr = input[i].split('').map(Number);
  board.push(tempArr);
}

const visited = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const bfs = (sx, sy) => {
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;
  let cnt = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (visited[ny][nx] === 0 && board[ny][nx] === 1) {
          visited[ny][nx] = 1;
          board[ny][nx] = 0;
          cnt += 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return cnt;
};

let cnt = 0;
const result = [];

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (visited[i][j] === 0 && board[i][j] === 1) {
      result.push(bfs(j, i));
      cnt += 1;
    }
  }
}

console.log(cnt);
result
  .sort((a, b) => a - b)
  .forEach((cnt) => {
    console.log(cnt);
  });
