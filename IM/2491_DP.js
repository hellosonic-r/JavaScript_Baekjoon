let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

const dp1 = Array.from({ length: n }, () => 1);
const dp2 = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i += 1) {
  if (numbers[i - 1] <= numbers[i]) {
    dp1[i] = dp1[i - 1] + 1;
  }
  if (numbers[i - 1] >= numbers[i]) {
    dp2[i] = dp2[i - 1] + 1;
  }
}

console.log(Math.max(Math.max(...dp1), Math.max(...dp2)));
