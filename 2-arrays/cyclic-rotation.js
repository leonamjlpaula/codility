function solution(A, K) {
    
    const newK = K % A.length

    if(newK === 0)
        return A

    return A.map((v, index) => {
        let newIndex = index - newK 
        if(newIndex < 0)
            newIndex += A.length
        return A[newIndex]
    })
}

console.log(solution([3, 8, 9, 7, 6], 3))
console.log(solution([0, 0, 0], 1))
console.log(solution([1, 2, 3, 4], 4))