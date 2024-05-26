let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [h, m] = input;

let nextMinute = m;
let nextHour = h;

if (m >= 45) {
  nextMinute = m - 45;
} else {
  nextMinute = m + 15;
  if (h === 0) {
    nextHour = 23;
  } else {
    nextHour = h - 1;
  }
}

console.log(nextHour, nextMinute);
