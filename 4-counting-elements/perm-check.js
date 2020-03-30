function solution(A){
    // const permutationSet = new Set()
    // A.forEach(element => {
    //     permutationSet.add(element)
    // });
    
    // const max = Math.max(... A)
    // if(permutationSet.size === max)
    //     return 1

    // return 0
    const count = counting(A, Math.max(... A))
    console.log(count.slice(1))
    for(c of count.slice(1)){
        if(c !== 1)
            return 0
    }
    return 1
}

function counting(A, M){
    const count = new Array(M+1).fill(0)
    A.forEach(value => {
        count[value] += 1
    })
    return count
}

console.log(solution([4, 1, 3, 2]))
console.log(solution([4, 1, 2]))