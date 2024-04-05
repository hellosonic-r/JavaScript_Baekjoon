let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for (let i = 0; i < t; i += 1) {
  let [n, location] = input[i * 2 + 1].split(' ').map(Number);
  const queue = input[i * 2 + 2].split(' ').map(Number);
  let cnt = 1;
  while (true) {
    const pop = queue.shift();
    if (pop >= Math.max(...queue) && location === 0) {
      console.log(cnt);
      break;
    } else if (pop >= Math.max(...queue)) {
      cnt += 1;
      location -= 1;
    } else if (pop < Math.max(...queue) && location === 0) {
      queue.push(pop);
      location = queue.length - 1;
    } else if (pop < Math.max(...queue)) {
      queue.push(pop);
      location -= 1;
    }
  }
}
