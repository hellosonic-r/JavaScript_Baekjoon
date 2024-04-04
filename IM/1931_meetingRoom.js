let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const arr = [];
for (let i = 1; i < n + 1; i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

let cnt = 1;
let time = arr[0][1];

for (let i = 1; i < arr.length; i += 1) {
  if (arr[i][0] - time >= 0) {
    cnt += 1;
    time = arr[i][1];
  }
}

console.log(cnt);
