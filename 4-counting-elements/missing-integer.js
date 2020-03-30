function solution(A){

    const max = Math.max(... A)
    if(max <= 0)
        return 1

    const count = new Array(max+1).fill(0)

    const filtered = A.filter(value => value > 0)
    filtered.forEach(value => {
        count[value] += 1
    })

    const index = count.slice(1).indexOf(0)+1;
    if(index === 0)
        return max+1
    
    return index
}

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1,2,3,4]))
console.log(solution([1,2,3,4,0,-1,5,456,12,22,12313]))
console.log(solution([-1, -3]))