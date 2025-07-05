function numberModification(number){
    let numArr = number.toString().split('')
    
    while (findAverage(numArr) <= 5){
        numArr.push('9')
    }
    console.log(numArr.join(""));
    
    function findAverage(numbers){
        let sum = 0
        for (let i = 0; i < numbers.length; i++){
            sum += Number(numbers[i])
        }

        return sum / numbers.length
    }
}