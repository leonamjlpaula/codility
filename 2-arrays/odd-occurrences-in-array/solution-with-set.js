function solution(A) {
    let occurrences = {}

    A.forEach((element, index) => {
        occurrences[element] = 0
    });

    A.forEach((element, index) => {
        occurrences[element] = occurrences[element]+1
    });

    console.log(occurrences)

    for(let i of Object.keys(occurrences)){
        if(occurrences[i]%2===1)
            return parseInt(i,10)
    }
}

console.log(solution([7, 9, 3, 9, 3, ]))