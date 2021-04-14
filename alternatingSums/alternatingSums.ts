export function alternatingSums(a: number[]): number[] {
    let teamWeight: number[] = [];
    let weightTeam1: number = 0;
    let weightTeam2: number = 0;
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0) weightTeam1 += a[i];
        else weightTeam2 += a[i];
    }

    teamWeight.push(weightTeam1, weightTeam2)
    return teamWeight;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))