let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let maxValue = 0;
let row = 0;
let column = 0;

for (let i = 0; i < 9; i += 1) {
  const tempArr = input[i].split(' ').map(Number);
  for (let j = 0; j < 9; j += 1) {
    if (tempArr[j] > maxValue) {
      maxValue = tempArr[j];
      row = i;
      column = j;
    }
  }
}

console.log(maxValue);
console.log(row + 1, column + 1);
