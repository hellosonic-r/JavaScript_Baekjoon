let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const newArr = input.map((item) => item % 42);
const newSet = new Set(newArr);
const finalArr = Array.from(newSet);

console.log(finalArr.length);
