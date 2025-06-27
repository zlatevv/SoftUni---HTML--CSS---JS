function solve(amount, numbers){
    let array = []
    for (let i = amount - 1; i >= 0; i--){
        array.push(numbers[i])
    }
    console.log(array.join(" "))
    
}