let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for (let i = 0; i < t; i += 1) {
  let cnt = 1;
  let [_, m] = input[i * 2 + 1].split(' ').map(Number);
  const queue = input[i * 2 + 2].split(' ').map(Number);

  while (true) {
    const print = queue.shift();
    if (Math.max(...queue) <= print && m === 0) {
      console.log(cnt);
      break;
    } else if (Math.max(...queue) > print && m === 0) {
      queue.push(print);
      m = queue.length - 1;
    } else if (Math.max(...queue) > print) {
      queue.push(print);
      m -= 1;
    } else if (Math.max(...queue) <= print) {
      cnt += 1;
      m -= 1;
    }
  }
}
