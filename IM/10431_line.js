let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [p, ...testcases] = input;

for (let i = 0; i < p; i += 1) {
  const [n, ...arr] = testcases[i].split(' ').map(Number);

  console.log(n, arr);
}
