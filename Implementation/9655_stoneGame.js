let fs = require('fs');
let input = fs.readFileSync('./Implementation/dev/stdin').toString().trim();

input % 2 === 1 ? console.log('SK') : console.log('CY');
