export function arrayPreviousLess(items: number[]): number[] {
    let newItems: number[] = [];
    for(let i = 0; i < items.length; i++){
        if(items[i-1] < items[i]) newItems.push(items[i - 1])
        else newItems.push(-1);
    }

    return newItems;
}

 console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
 console.log(arrayPreviousLess([32, 5, 22, 42, 5]));