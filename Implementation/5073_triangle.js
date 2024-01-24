let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.pop();

for (let i = 0; i < input.length; i += 1) {
  const sides = input[i]
    .split(' ')
    .map((element) => parseInt(element))
    .sort((a, b) => a - b);

  if (sides[0] + sides[1] > sides[2]) {
    if (
      sides[0] === sides[1] &&
      sides[1] &&
      sides[2] &&
      sides[0] === sides[2]
    ) {
      console.log('Equilateral');
    } else if (
      sides[0] !== sides[1] &&
      sides[1] !== sides[2] &&
      sides[0] !== sides[2]
    ) {
      console.log('Scalene');
    } else {
      console.log('Isosceles');
    }
  } else {
    console.log('Invalid');
  }
}
