// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
/*
fibo[3] = fibo[2] + fibo[1];
fibo[4] = fibo[3] + [2];
fibo[5] = fibo[4] + [3];
fibo[6] = fibo[5] + [4];
fibo[60] = fibo[59] + [58];
fibo[n] = fibo[n-1] + [n-2];
fibo[i] = fibo[i-1] + [i-2]
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 15; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);




const fibo = [0, 1];
for (let i = 2; i <= 20; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

for (let i = 0; i < 10; i++){
    const random = Math.round(Math.random()*10);
    console.log(random);
}