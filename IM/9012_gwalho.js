let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
for (let t = 1; t < tc + 1; t += 1) {
  const arr = [];
  for (let i = 0; i < input[t].length; i += 1) {
    if (input[t][i] === '(') {
      arr.push(input[t][i]);
    } else if (input[t][i] === ')') {
      if (arr[arr.length - 1] === '(') {
        arr.pop();
      } else {
        arr.push(')');
      }
    }
  }
  if (arr.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
