let fs = require('fs');
let input = fs
  .readFileSync('./DFS, BFS/dev/stdin')
  .toString()
  .trim()
  .split('\n');
let testcases = parseInt(input[0]);

let idx = 1;

while (testcases--) {
  let [m, n, k] = input[idx].split(' ').map(Number);
  let board = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 1; i <= k; i++) {
    let [x, y] = input[idx + i].split(' ').map(Number);
    board[y][x] = 1;
  }

  idx += k + 1;
  console.log(solution(n, m, k, board));
}

function solution(n, m, k, board) {
  const v = Array.from({ length: n }, () => Array(m).fill(0));
  let cnt = 0;

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  function bfs(sx, sy, board, v) {
    const queue = [];
    queue.push([sx, sy]);

    while (queue.length !== 0) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i += 1) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
          continue;
        } else {
          if (board[ny][nx] === 1 && v[ny][nx] === 0) {
            board[ny][nx] = 0;
            v[ny][nx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (board[i][j] == 1 && v[i][j] == 0) {
        bfs(j, i, board, v);
        cnt += 1;
      }
    }
  }

  return cnt;
}
