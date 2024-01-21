class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

let fs = require('fs');
let input = fs
  .readFileSync('./DFS, BFS/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let idx = 0;

while (true) {
  let [w, h] = input[idx++].split(' ').map(Number);
  if (w == 0 && h == 0) break;

  let board = [];
  for (let i = 0; i < h; i++) {
    board.push(input[idx++].split(' ').map(Number));
  }

  console.log(solution(w, h, board));
}

function solution(w, h, board) {
  const dx = [0, 1, 0, -1, 1, 1, -1, -1];
  const dy = [-1, 0, 1, 0, -1, 1, 1, -1];
  let visited = Array.from({ length: h }, () => Array(w).fill(0));

  function bfs(sx, sy) {
    let queue = new Queue();
    visited[sy][sx] = 1;
    board[sy][sx] = 0;
    queue.enqueue([sx, sy]);
    while (queue.size() != 0) {
      const [x, y] = queue.dequeue();
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) {
          continue;
        } else {
          if (board[ny][nx] == 1 && visited[ny][nx] == 0) {
            visited[ny][nx] = 1;
            board[ny][nx] = 0;
            queue.enqueue([nx, ny]);
          }
        }
      }
    }
  }

  let cnt = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] == 1) {
        bfs(j, i);
        cnt += 1;
      }
    }
  }

  return cnt;
}
