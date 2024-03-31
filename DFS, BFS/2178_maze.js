let fs = require('fs');
let input = fs
  .readFileSync('./DFS, BFS/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(Number);
const board = [];
for (let i = 1; i < m + 1; i += 1) {
  const tempArr = input[i].split('').map(Number);
  board.push(tempArr);
}

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const visited = Array.from({ length: m }, () => Array(n).fill(0));

const bfs = (sx, sy) => {
  const queue = [];
  queue.push([sx, sy]);
  visited[sy][sx] = 1;
  board[sy][sx] = 0;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      else {
        if (visited[ny][nx] === 0 && board[ny][nx] === 1) {
          visited[ny][nx] = visited[y][x] + 1;
          board[ny][nx] = 0;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

bfs(0, 0);

console.log(visited[m - 1][n - 1]);
