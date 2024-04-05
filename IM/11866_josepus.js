let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim();

const [n, k] = input.split(' ').map(Number);

const queue = Array.from({ length: n }, (_, idx) => idx + 1);

const result = [];

while (queue.length !== 0) {
  for (let i = 0; i < k - 1; i += 1) {
    const pop = queue.shift();
    queue.push(pop);
  }
  const next = queue.shift();
  result.push(next);
}

console.log('<' + result.join(', ') + '>');
