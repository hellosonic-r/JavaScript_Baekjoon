let fs = require('fs');
let input = fs
  .readFileSync('./Implementation/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const dic = {};

for (let i = 0; i < 26; i += 1) {
  dic[i] = 0;
}

for (arr of input) {
  for (letter of arr) {
    if (letter !== ' ') {
      dic[letter.codePointAt() - 97] += 1;
    }
  }
}

let maxCnt = Math.max(...Object.values(dic));
let maxIdxs = [];

Object.keys(dic).map((idx) => {
  if (dic[idx] === maxCnt) {
    maxIdxs.push(idx);
  }
});

let result = '';

for (let i = 0; i < maxIdxs.length; i += 1) {
  result += String.fromCodePoint(Number(maxIdxs[i]) + 97);
}

console.log(result);
