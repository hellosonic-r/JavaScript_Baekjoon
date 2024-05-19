let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [k, ...arr] = input;
const cnt = Number(k);
const newArr = arr.map((item) => item.split(' ').map(Number));

let maxWidth = 0;
let maxHeight = 0;
let smallWidth = 0;
let smallHeight = 0;

dic = { 1: 0, 2: 0, 3: 0, 4: 0 };

newArr.forEach((tempArr) => (dic[tempArr[0]] += 1));

for (let key in dic) {
  if (dic[key] === 1) {
    newArr.forEach((tempArr, idx) => {
      if (tempArr[0] === Number(key)) {
        if (maxWidth === 0) {
          maxWidth = tempArr[1];
          smallWidth = newArr[(idx + 3) % 6][1];
        } else {
          maxHeight = tempArr[1];
          smallHeight = newArr[(idx + 3) % 6][1];
        }
      }
    });
  }
}

console.log((maxWidth * maxHeight - smallWidth * smallHeight) * k);
