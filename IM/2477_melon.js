let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [k, ...arr] = input;
const cnt = Number(k);
const newArr = arr.map((item) => item.split(' ').map(Number));

let bigSize = 0;
let bigIdx = 0;

for (let i = 0; i < newArr.length; i += 1) {
  let currentLength = newArr[i][1];
  let nextLength = newArr[(i + 1) % 6][1];
  if (bigSize < currentLength * nextLength) {
    bigSize = currentLength * nextLength;
    bigIdx = i;
  }
}

console.log(
  (bigSize - newArr[(bigIdx + 3) % 6][1] * newArr[(bigIdx + 4) % 6][1]) * cnt
);
