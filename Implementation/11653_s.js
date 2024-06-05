let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();

let n = parseInt(input);

const arr = [];
let check = false;
while (true) {
  for (let i = 2; i < parseInt(n / 2) + 2; i += 1) {
    if (n % i === 0) {
      arr.push(i);
      n = n / i;
      break;
    }
    if (i === parseInt(n / 2) + 1) {
      check = true;
    }
  }
  if (check) {
    arr.push(n);
    break;
  }
}

arr.sort((a, b) => a - b);

for (const item of arr) {
  console.log(item);
}
