let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [N, ...info] = input;

const n = Number(N);
const arr = Array.from({ length: n }, (_, idx) =>
  info[idx].split(' ').map(Number)
);

arr.sort((a, b) => a[0] - b[0]);

let max_idx = 0;
let max_height = 0;
for (let i = 0; i < n; i += 1) {
  if (arr[i][1] >= max_height) {
    max_height = arr[i][1];
    max_idx = i;
  }
}

let result = 0;
let startHeight = 0;
for (let i = 0; i < max_idx; i += 1) {
  if (startHeight < arr[i][1]) {
    result += (arr[i + 1][0] - arr[i][0]) * arr[i][1];
    startHeight = arr[i][1];
  } else {
    result += (arr[i + 1][0] - arr[i][0]) * startHeight;
  }
}

let endHeight = 0;
for (let i = n - 1; i > max_idx; i -= 1) {
  if (endHeight < arr[i][1]) {
    result += (arr[i][0] - arr[i - 1][0]) * arr[i][1];
    endHeight = arr[i][1];
  } else {
    result += (arr[i][0] - arr[i - 1][0]) * endHeight;
  }
}

console.log(result + arr[max_idx][1]);
