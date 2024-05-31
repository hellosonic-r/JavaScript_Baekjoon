let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();

input = input.toUpperCase().split('');

const dic = {};

input.forEach((letter) => {
  if (letter in dic) {
    dic[letter] += 1;
  } else {
    dic[letter] = 1;
  }
});

const maxCnt = Math.max(...Object.values(dic));
let answer;
let check = 0;

Object.entries(dic).forEach(([letter, cnt]) => {
  if (parseInt(cnt) === maxCnt) {
    answer = letter;
    check += 1;
  }
});

if (check > 1) {
  console.log('?');
} else {
  console.log(answer);
}
