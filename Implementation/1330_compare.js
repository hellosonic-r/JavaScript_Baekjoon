let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();
//   .split('\n');

const [a, b] = input.split(' ').map(Number);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
