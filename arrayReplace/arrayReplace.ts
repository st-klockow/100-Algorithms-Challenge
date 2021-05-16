export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    let newArray: number[] = [];

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
        newArray.push(inputArray[i]);
    }

    return newArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));