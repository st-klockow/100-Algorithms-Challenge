export function adjacentElementsProduct(inputArray: number[]): number {
    let biggestProduct = inputArray[0] * inputArray[1];
    
    for(let i = 0; i < inputArray.length; i++){
        if((inputArray[i] * inputArray[i+1]) > biggestProduct){
            biggestProduct = inputArray[i] * inputArray[i+1];
        }
    }

    return biggestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));