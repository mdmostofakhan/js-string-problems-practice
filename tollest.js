function maxArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 265, 33];
const tallest = maxArray(heights);
console.log('this is tallest', tallest)