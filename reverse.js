function reverseString(text) {
    // for (let i = 0; i < text.length; i++)
    let reversed = '';
    for (let i = text.length -1; i >= 0; i--){
        const element = text[i];
         reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const mystring = 'I am a good boy';
const reversed = reverseString(mystring);
console.log('out put reversed', reversed);

// function reverseString(text) {
//     let reversed = '';
//     for (let i = text.length-1; i >= 0; i--){
//         const element = text[i]
//         reversed = revesed + element;
//         console.log(element, reversed);
//     }
//     return reversed;
// }

// const mystring = ' I am a good boy';
// const reversed = reverseString(mystring);
// console.log('reversed output', reversed);