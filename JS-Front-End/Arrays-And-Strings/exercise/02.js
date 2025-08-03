function solve(array, step){
    let i = 0
    let steppedArray = []
    while (true){
        steppedArray.push(array[i])
        i += step

        if (i >= array.length){
            break
        }
    }
    return steppedArray
    
}
