let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();
//   .split('\n');

const upperStr = input.toUpperCase();
const alphabetArr = Array(26).fill(0);

for (let i = 0; i < upperStr.length; i += 1) {
  alphabetArr[upperStr[i].codePointAt() - 65] += 1;
}
let maxCount = 0;
let answer;
for (let i = 0; i < alphabetArr.length; i += 1) {
  if (alphabetArr[i] !== 0 && alphabetArr[i] > maxCount) {
    maxCount = alphabetArr[i];
    answer = String.fromCodePoint(i + 65);
    continue;
  }
  if (alphabetArr[i] !== 0 && alphabetArr[i] === maxCount) {
    answer = '?';
  }
}

console.log(answer);
