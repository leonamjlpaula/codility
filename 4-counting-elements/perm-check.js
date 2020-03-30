function solution(A){
    const count = new Array(A.length+1).fill(0)        

    A.forEach(value => {
        count[value] += 1
    })

    for(const value of count.slice(1)){
        if(value !== 1)
            return 0
    }

    return 1;    
}

console.log(solution([4, 1, 3, 2]))
console.log(solution([4, 1, 2]))