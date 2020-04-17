function solution(A){
    const N = A.length;
    const sums = [0];

    for (let i = 0; i < N; i++)
    {
        sums[i + 1] = sums[i] + A[i];
    }
    
    let minAvg = Number.MAX_VALUE;
    let minSliceIndex = 0;
    
    for (let i = 0; i < N - 1; i++)
    {
        let i0 = i;
        let i1 = i + 1;
        let avg2 = (sums[i1 + 1] - sums[i0]) / 2;
        
        if (avg2 < minAvg)
        {
            minAvg = avg2;
            minSliceIndex = i;
        }
        
        if (i < N - 2)
        {
            let i2 = i + 2;
            let avg3 = (sums[i2 + 1] - sums[i0]) / 3;
            
            if (avg3 < minAvg)
            {
                minAvg = avg3;
                minSliceIndex = i;
            }
        }
    }
    
    return minSliceIndex;
}

console.log(solution([4,2,2,5,1,5,8]))