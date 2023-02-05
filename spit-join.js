const lyrics = 'tumi bondhu kala Pakhi sada ami jeno ki. bosonto kala tomai bolte pari nei. ami tomai khuje painy';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.')
const chars = lyrics.split('')
// console.log(chars);

const partial = lyrics.slice(5, 9);
console.log(partial);

const partial2 = lyrics.substring(5, 8)
console.log(partial2)


const lines = [
    ' Tumi bondhu kala Pakhi sada ami jeno ki',
    ' Bosonto kala tomai bolte pari nei',
    ' Ami tomai khuje painy',
    ' Bosonto kala tomai bolte pari nei'
];

const newSongs = lines.join('. ')
console.log(newSongs);
