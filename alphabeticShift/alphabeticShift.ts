export function alphabeticShift(inputString: string): string {
    let newArray: string = [];
    const alphabet: string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let inputStringArray = inputString.split("");
    for(let i = 0; i < inputString.length; i++){
        let letterNum = alphabet.indexOf(inputStringArray[i]);
        
        if((letterNum + 1) == alphabet.length){
            newArray.push(alphabet[0]);   
        } else {
            newArray.push(alphabet[letterNum + 1]);
        }
    }

    return newArray.join("");
}

console.log(alphabeticShift('crazy'));