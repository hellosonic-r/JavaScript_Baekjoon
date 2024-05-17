let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [n, ...arr] = input;
const newArr = arr.map((item) => item.split(' ').map(Number));

const visited = Array.from({ length: 101 }, () => Array(101).fill(0));

let cnt = 0;

for (const tempArr of newArr) {
  const [x, y] = tempArr;
  for (let i = y; i < y + 10; i += 1) {
    for (let j = x; j < x + 10; j += 1) {
      if (visited[i][j] == 0) {
        visited[i][j] += 1;
        cnt += 1;
      }
    }
  }
}

console.log(cnt);
