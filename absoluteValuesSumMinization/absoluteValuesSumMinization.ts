export function absoluteValuesSumMinimization(a: number[]): number {
    let isEven = a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];

    return isEven;
}

console.log(absoluteValuesSumMinimization([2, 5, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));