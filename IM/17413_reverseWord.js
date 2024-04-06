let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim();

let str = '';
let check = '';
const arr = [];

for (let i = 0; i < input.length; i += 1) {
  if (input[i] === '<') {
    if (arr.length !== 0) {
      str += arr.reverse().join('');
      arr.splice(0, arr.length);
    }
    check = '<';
    arr.push(input[i]);
  } else if (input[i] === '>') {
    arr.push(input[i]);
    str += arr.join('');
    arr.splice(0, arr.length);
    check = '';
  } else if (input[i] === ' ') {
    if (check === '<') {
      arr.push(input[i]);
    } else {
      str += arr.reverse().join('');
      str += ' ';
      arr.splice(0, arr.length);
    }
  } else {
    arr.push(input[i]);
  }
}

if (arr.length !== 0) {
  str += arr.reverse().join('');
}
console.log(str);
