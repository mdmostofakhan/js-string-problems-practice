function lowSmall(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.leaght; i++){
        const index = i;
        const elements = numbers[index];
        if (elements < largest) {
            largest = elements
        }
    }
    return largest;
}

const heights = [55, 145, 235, 23, 100]
const tallest = lowSmall(heights);
console.log('small numr', tallest);