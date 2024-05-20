let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1).map(Number);

let cnt = 0;
for (let i = arr.length - 1; i >= 0; i -= 1) {
  if (k >= arr[i]) {
    cnt += parseInt(k / arr[i]);
    k = k % arr[i];
  }
  if (k == 0) {
    break;
  }
}

console.log(cnt);
