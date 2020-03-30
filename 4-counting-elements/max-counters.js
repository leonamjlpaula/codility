function solution(N, A){

    const count = new Array(N).fill(0)  
    let wasMaxLastOperation = false

    let max = 0
    A.forEach(value => {
        if(value >= 1 && value <= N){
            max = increase(count, value, max)
            wasMaxLastOperation = false
        }
        else{
            if(!wasMaxLastOperation){
                maxCounter(count, max)
                wasMaxLastOperation = true
            }
        }      
    })
    return count
}

function increase(count, X, max){
    count[X-1] += 1
    if(count[X-1] >= max)
        max = count[X-1]

    return max
}

function maxCounter(count, max){     

    count.fill(max)
}

console.log(solution(5,[3,4,4,6,1,4,4]))