let fs = require('fs');
let input = fs.readFileSync('./IM/dev/stdin').toString().trim().split('\n');

const [location, ...commands] = input;

const dx = { R: 1, L: -1, B: 0, T: 0, RT: 1, LT: -1, RB: 1, LB: -1 };
const dy = { R: 0, L: 0, B: -1, T: 1, RT: 1, LT: 1, RB: -1, LB: -1 };

const [king, stone, N] = location.split(' ');

const n = Number(N);

const board = Array.from({ length: 8 }, () => Array(8).fill(0));

let kx = king.split('')[0].codePointAt() - 65;
let ky = Number(king.split('')[1]) - 1;
let sx = stone.split('')[0].codePointAt() - 65;
let sy = Number(stone.split('')[1]) - 1;

board[ky][kx] = 1;
board[sy][sx] = 2;

// for (let i = 0; i < 8; i += 1) {
//   console.log(board[i].join(''));
// }

for (let command of commands) {
  let nkx = kx + dx[command];
  let nky = ky + dy[command];

  if (0 <= nkx && nkx < 8 && 0 <= nky && nky < 8) {
    if (board[nky][nkx] === 0) {
      board[nky][nkx] = 1;
      board[ky][kx] = 0;
      kx = nkx;
      ky = nky;
    } else if (board[nky][nkx] === 2) {
      let nsx = sx + dx[command];
      let nsy = sy + dy[command];
      if (0 <= nsx && nsx < 8 && 0 <= nsy && nsy < 8) {
        board[nky][nkx] = 1;
        board[nsy][nsx] = 2;
        sx = nsx;
        sy = nsy;
        board[ky][kx] = 0;
        kx = nkx;
        ky = nky;
      }
    }
  }
}
// console.log(' ');
// for (let i = 0; i < 8; i += 1) {
//   console.log(board[i].join(''));
// }

console.log(String.fromCodePoint(kx + 65) + (ky + 1).toString());
console.log(String.fromCodePoint(sx + 65) + (sy + 1).toString());
