let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();

const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (const alpha of arr) {
  while (true) {
    if (input.includes(alpha)) {
      input = input.replace(alpha, '*');
    } else {
      break;
    }
  }
}
console.log(input.length);
