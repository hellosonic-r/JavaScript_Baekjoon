let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const numbers = Array.from({ length: n }, (_, idx) => idx + 1);

for (let i = 0; i < m; i += 1) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  const tempNumbers = [];
  for (let j = a - 1; j < b; j += 1) {
    tempNumbers.push(numbers[j]);
  }
  for (let k = a - 1; k < b; k += 1) {
    const nextNumber = tempNumbers.pop();
    numbers[k] = nextNumber;
  }
}

console.log(numbers.join(' '));
