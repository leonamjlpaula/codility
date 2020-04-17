function solution(A){
    const max = 1000000000
    let result = 0

    const pref = prefixSums(A)
    
    A.forEach((item, index) => {
        if(item===0){      
            const total = countTotal(pref, index, A.length-1)
            result += total;
            if(result>max)
                return
        }
    })
    
    if(result>max)
        return -1
    
    return result;
}

function prefixSums(A){    
    const P = [0]
    for(let i=1; i<A.length+1; i++){
        P[i] = P[i-1]+A[i-1];
    }
    return P;
}

function countTotal(P, x, y){
    return P[y+1]-P[x]
}

console.log(solution([0,1,0,1,1]))