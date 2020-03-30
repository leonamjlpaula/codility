
function solution(N) {
    
    return Math.max(0, ... N
        .toString(2)
        .split('1')
        .map(v => v.length)
        .slice(1,-1) );
}

console.log(solution(1041))
console.log(solution(15))
console.log(solution(32))