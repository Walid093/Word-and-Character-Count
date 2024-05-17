function countWordsAndCharacters(inputString) {
    let stringWithoutWhitespace = "";
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        if (currentChar !== ' ' && currentChar !== '\t' && currentChar !== '\n' && currentChar !== '\r') {
            stringWithoutWhitespace += currentChar;
        }
    }
    const characterCount = stringWithoutWhitespace.length;
    const wordsArray = inputString.split(/\s+/).filter(word => word.length > 0);
    const wordCount = wordsArray.length;
    return { words: wordCount, characters: characterCount };
}
// Example usage:
const inputText = " This is a Test to count how many words and characters are there.  ";
const result = countWordsAndCharacters(inputText);
console.log("Word count:", result.words);
console.log("Character count:", result.characters);
export {};
