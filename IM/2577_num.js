let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input.map(Number);

const num = a * b * c;

const numbers = String(num).split('').map(Number);

const arr = Array.from({ length: 10 }, () => 0);

for (const n of numbers) {
  arr[n] += 1;
}

for (const ans of arr) {
  console.log(ans);
}
