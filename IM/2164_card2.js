let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const cards = Array.from({ length: n }, (_, idx) => idx + 1);

while (1) {
  if (cards.length === 1) {
    console.log(cards[0]);
    break;
  }
  cards.shift();
  const x = cards.shift();
  cards.push(x);
}
