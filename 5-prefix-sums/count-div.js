function solution(A,B,K){

    const maxDividers = Math.floor(B/K);
    const offsetDividers = Math.floor(A/K);

    const result = maxDividers-offsetDividers

    if(A%K===0)
        return result+1
    
    return result

}

console.log(solution(6,11,2))