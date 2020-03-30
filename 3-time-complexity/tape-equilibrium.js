function solution(A){
    
    const total = A.reduce((pv, cv) => pv += cv,0)
    let sumA = 0
    let result = Number.MAX_SAFE_INTEGER
    for(let i=0; i<A.length-1; i++){ 
        sumA += A[i]
        let tmpResult = Math.abs(2*sumA-total) 
        if(tmpResult <= result)
            result = tmpResult 
    }
    return result
}

console.log(solution([3, 1, 2, 4, 3]))

