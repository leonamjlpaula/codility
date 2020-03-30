function solution(A) {
    let result = 0;
    for (let element of A) {
        result ^= element
    }
    return result
}

console.log(solution([7, 9, 3, 9, 3, ]))

