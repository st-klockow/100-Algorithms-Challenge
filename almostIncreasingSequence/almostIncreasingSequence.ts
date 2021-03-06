export function almostIncreasingSequence(sequence: number[]): boolean {
    let countErrors: number = 0;

    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] > (sequence[i+1])){
            countErrors++;
        }
    }

    return countErrors <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 