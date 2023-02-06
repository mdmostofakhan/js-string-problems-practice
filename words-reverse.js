function reverseWords(str) { 
    const words = str.split(' ');
    const result = [];
// [ 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--){
        const element = words[i]
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
    // console.log(result);
}
const mystring = 'I am a good boy';
const result1 = reverseWords(mystring);
console.log('I am alwals good boy', result1);