let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const word = input[0].toUpperCase();

const arr = word.split('');

arr.sort();

const dic = {};
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] in dic) {
    dic[arr[i]] += 1;
  } else {
    dic[arr[i]] = 1;
  }
}

const maxCnt = Math.max(...Object.values(dic));
let ans = '';

let check = false;

for (const temp of Object.entries(dic)) {
  const [letter, cnt] = temp;
  if (!check && cnt === maxCnt) {
    ans = letter;
    check = true;
  } else if (check && cnt === maxCnt) {
    console.log('?');
    check = false;
    break;
  }
}

if (check) {
  console.log(ans);
}
