export function allLongestStrings(inputArray: string[]): string[] {
    let largestStringLength = 0;
    let largestStrings = [];
    
    inputArray.forEach((word: string) => {
        largestStringLength = largestStringLength < word.length ? word.length : largestStringLength;
    });

    inputArray.forEach((word: string) => {
        if(word.length === largestStringLength){
            largestStrings.push(word);
        }
    });
    return largestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));