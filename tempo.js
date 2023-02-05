let firts = 5;
let second = 7;
console.log(firts, second);
// firts = second;
// second = firts;

// approach:
// const temp = firts;
// firts = second;
// second = temp;
// approch: 2 ---- Destructuring
[firts, second] = [second, firts];
console.log(firts, second);