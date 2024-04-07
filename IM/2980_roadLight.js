let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [nl, ...info] = input;
const [n, length] = nl.split(' ').map(Number);

const arr = Array.from({ length: n }, (_, idx) =>
  info[idx].split(' ').map(Number)
);

let time = 0;
let distance = 0;

while (distance <= length) {
  time += 1;
  if (arr.length !== 0 && arr[0][0] === distance) {
    const [_, r, g] = arr[0];
    if (time % (r + g) <= r) {
      time = time + (r - (time % (r + g)));
    }
    arr.shift();
  }
  distance += 1;
}

console.log(time);
