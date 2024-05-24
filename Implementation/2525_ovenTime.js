let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [h, m] = input[0].split(' ').map(Number);
const time = parseInt(input[1]);

const plusMinute = m + time;
const plusHour = Math.floor(plusMinute / 60);
const nextMinute = plusMinute % 60;
const nextHour = h + plusHour >= 24 ? (h + plusHour) % 24 : h + plusHour;

console.log(nextHour, nextMinute);
