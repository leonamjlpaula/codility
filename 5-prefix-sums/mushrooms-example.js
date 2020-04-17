function prefixSums(A){
    // const P = new Array(A.length+1).fill(0);
    const P = [0]
    for(let i=1; i<A.length+1; i++){
        P[i] = P[i-1]+A[i-1];
    }
    return P;
}

function countTotal(P, x, y){
    return P[y+1]-P[x]
}

function mushrooms(A, k, m){

    const n = A.length
    let result = 0, left_pos=0, right_pos=0
    const pref = prefixSums(A)
    console.log('pref: ', pref)
    const min  = Math.min(m,k)+1
    console.log('min: ', min)

    for(let p=0; p<min; p++){
        left_pos = k-p
        console.log('left_pos: ', left_pos)
        
        const mm = k+m-2*p
        console.log('mm: ', left_pos)
        right_pos = Math.min(n-1, Math.max(k, mm))
        console.log('right_pos: ', right_pos)

        result = Math.max(result, countTotal(pref, left_pos, right_pos))
        console.log('result: ', result)
    }

    console.log('---2nd for---')

    const min2 = Math.min(m+1,n-k);
    console.log('min2', min2);
    for(let p=0; p<min2; p++){
        right_pos = k+p
        left_pos = Math.max(0,Math.min(k,k-(m-2*p)))
        console.log('left_pos: ', left_pos)
        console.log('right_pos: ', right_pos)
        result = Math.max(result, countTotal(pref, left_pos, right_pos))
        console.log('result: ', result)
    }

    return result    
}

console.log(mushrooms([2,3,7,5,1,3,9,0,0,0,0,0,0,],4,6))