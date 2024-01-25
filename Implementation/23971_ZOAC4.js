let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();

const arr = input.split(' ').map((el) => parseInt(el));

const h = arr[0];
const w = arr[1];
const n = arr[2];
const m = arr[3];

console.log(Math.ceil(h / (n + 1)) * Math.ceil(w / (m + 1)));
