function solution(A) {
    
    const sum = A.reduce((pv, cv) => pv += cv,0)
    const maxSum = (A.length+1)*(A.length+2)/2
    return maxSum-sum 
}

console.log(solution([2, 3, 1, 5]));