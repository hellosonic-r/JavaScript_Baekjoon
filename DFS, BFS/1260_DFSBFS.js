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

function dfs(curr) {
  for (let next of graph[curr]) {
    if (visited[next] == 0) {
      visited[next] = 1;
      dfsResult.push(next);
      dfs(next);
    }
  }
}

function bfs(curr) {
  const queue = new Queue();
  queue.enqueue(curr);
  visited2[curr] = 1;
  bfsResult.push(curr);
  while (queue.size() != 0) {
    let num = queue.dequeue();
    for (let next of graph[num]) {
      if (visited2[next] == 0) {
        visited2[next] = 1;
        queue.enqueue(next);
        bfsResult.push(next);
      }
    }
  }
}

let fs = require('fs');
let input = fs
  .readFileSync('./DFS, BFS/dev/stdin')
  .toString()
  .trim()
  .split('\n');
let info = input[0].split(' ').map(Number);
const [n, m, v] = info;

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  let [start, end] = input[i].split(' ').map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

graph.map((element) => {
  element.sort((a, b) => a - b);
});

const dfsResult = [v];
let visited = Array.from({ length: n + 1 }, () => 0);
visited[v] = 1;
dfs(v);
console.log(dfsResult.join(' '));

const bfsResult = [];
let visited2 = Array.from({ length: n + 1 }, () => 0);

bfs(v);
console.log(bfsResult.join(' '));
