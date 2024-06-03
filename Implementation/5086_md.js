let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

console.log(input);

let i = 0;
while (true) {
  const [a, b] = input[i].split(' ').map(Number);
  if (a === 0 && b === 0) {
    break;
  }
  if (b % a === 0) {
    console.log('factor');
  } else if (a % b === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
  i += 1;
}
