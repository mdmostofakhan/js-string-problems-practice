const lyrics = 'tumi bondhu kala Pakhi sada ami jeno ki. bosonto kala tomai bolte pari nei. ami tomai khuje painy';

const searchString = 'Pakhi';
// const doseExist = lyrics.includes('ami');
// const doseExist = lyrics.includes('Ami');
// const doseExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doseExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doseExist = lyricsLowerCase.includes(searchStringLower)

const doseExistOneline = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doseExist);
// console.log(doseExistOneline);

// ________________________________________________________________________
// indexof

console.log(lyrics.indexOf('kalap'));
console.log(lyrics.indexOf('tumi'))
//
if (lyrics.indexOf('sadwa') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}
// strings
console.log(lyrics.startsWith('2mi'));

// endswith
const filename = 'mybiodata.pdf';
const otherfile = 'mypic.png';

filename.endsWith('pdf')
console.log(filename);