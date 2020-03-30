function solution(A, B, M){

    let sumA = arraySum(A)
    let sumB = arraySum(B)

    let d = sumB - sumA

    if(d % 2 === 1)
        return false

    d /= 2

    console.log(d)
    const count = counting(A, M)
    console.log(count)
    for(let i=0; A.length; i++){
        if( 0 <= B[i] - d && B[i] - d <= M && count[B[i] - d] > 0)
            return true
    }

    return false
}

function slowSolution(A, B, M){
    
    let sumA = arraySum(A)
    let sumB = arraySum(B)
    console.log(sumA)
    console.log(sumB)

    for(i of A){
        for(j of B){
            const change = j-i
            sumA += change
            sumB -= change
            
            if(sumA === sumB){
                console.log(i, j)
                return true
            }
            
            sumA -= change
            sumB += change
        }
    }
    return false
}


function arraySum(array){
    return array.reduce((pv, cv) => pv += cv, 0)
}

function counting(A, M){
    const count = new Array(M+1).fill(0)
    A.forEach(value => {
        count[value] += 1
    })
    return count
}

console.log('slowSolution', slowSolution([1,1,2,2,0,4,5,7],[1,5,2,4,0,3,6,7],7))
console.log('solution', solution([1,1,2,2,0,4,5,7],[1,5,2,4,0,3,6,7],7))