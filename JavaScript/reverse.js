// A. Take a sentence as an input and reverse every word in that sentence. 
// a. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and create a new array
    const reversedWords = words.map(word => {
        // Reverse the word by splitting it into characters, reversing, and joining again
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedResult = reverseWordsInSentence(inputSentence);
console.log(reversedResult);