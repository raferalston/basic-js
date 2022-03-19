function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    res = []
    curr = 0
    discardNext = false
    for (let i = 0; i < arr.length; i++) {
        if (!discardNext) {
            if (arr[i] === '--double-next' && arr[i+1] && typeof arr[i+1] === 'number') {
                res.push(arr[i+1])
            }
            if (arr[i] === '--double-prev' && arr[i-1] && typeof arr[i-1] === 'number') {
                res.push(arr[i-1])
            }
            if (arr[i] === '--discard-prev' && arr[i-1] && typeof arr[i-1] === 'number') {
                res.pop()
            }
            if (arr[i] === '--discard-next' && arr[i+1] && typeof arr[i+1] === 'number') {
                discardNext = true
            }
            if (typeof arr[i] === 'number') {
                res.push(arr[i])
            }   
        } else if (discardNext && arr[i+1] != '--double-prev' && arr[i+1] != '--discard-prev'){
            discardNext = false
        }
    }
    res = res.filter(e => e)
    console.log(res)
    
}


transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) // 12345
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]) // 1, 2, 3, 1337, 1337, 1337, 4, 5
transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]) // 12345
transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]) //  [1, 2, 3, 1337, 4, 5]
