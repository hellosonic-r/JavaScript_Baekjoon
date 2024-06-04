let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [n, k] = input;
let cnt = 0;
let answer = 0;
for (let i = 1; i < n + 1; i += 1) {
  if (n % i === 0) {
    cnt += 1;
    if (cnt === k) {
      answer = i;
      break;
    }
  }
}

console.log(answer);
