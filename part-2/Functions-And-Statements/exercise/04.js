function evenOddSums(number){
    let oddSum = 0
    let evenSum = 0

    for (let digit of number.toString()){
        digit = Number(digit)
        if (digit % 2 == 0){
            evenSum += digit
        }else {
            oddSum += digit
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}