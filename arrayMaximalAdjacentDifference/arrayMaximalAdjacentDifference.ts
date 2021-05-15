export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDifference: number = 0;

    for(let i = 0; i < inputArray.length; i++){
        let difference = inputArray[i] - inputArray[i+1];
        maxDifference = difference > maxDifference ? difference : maxDifference;
    }

    return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));