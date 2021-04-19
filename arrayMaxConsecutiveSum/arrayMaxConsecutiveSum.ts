export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let biggestSum: number = 0;

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i+1] && inputArray[i] + inputArray[i + 1] > biggestSum){
            biggestSum = inputArray[i] + inputArray[i + 1];
        }
    }
    return biggestSum;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));