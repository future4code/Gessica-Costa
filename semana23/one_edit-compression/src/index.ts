const oneEdit = (string1: string, string2: string): boolean => {
    let sameCaracteres: number = 0;

    if (string1.length < string2.length - 1 ||
        string1.length > string2.length + 1) {
        return false
    }

    for (let i of string1) {
        if (string2.indexOf(i) !== -1) {
            sameCaracteres++
        }
    }

    return sameCaracteres === string1.length ||
        sameCaracteres + 1 === string1.length ||
        sameCaracteres - 1 === string1.length
}


console.log(oneEdit("banana", "banan"))
console.log(oneEdit("banana", "bananak"))
console.log(oneEdit("banana", "ananab"))
console.log(oneEdit("banana", "bananaaa"))

const compress = (input: string): string => {
    const substrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }

    return result.length > input.length ? input : result;
}
