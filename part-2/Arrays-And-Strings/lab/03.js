function solve(list){
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i <= list.length - 1; i++){
        if (list[i] % 2 == 0){
            evenSum += list[i]
        }else {
            oddSum += list[i]
        }
    }
    console.log(evenSum - oddSum);
    
}