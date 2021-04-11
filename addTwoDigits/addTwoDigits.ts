export function addTwoDigits(n: any): number {
    const nums= n.toString().split('');
    
    return nums.reduce((a: String, b:string) => {
        return parseInt(a) + parseInt(b);
    });
}

console.log(addTwoDigits(29));