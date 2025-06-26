function solve(startingYield){
    let days = 0;
    let totalAmountExtracted = 0
    let temp = startingYield
    while (startingYield >= 100){
        temp = startingYield - 26
        startingYield -= 10
        totalAmountExtracted += temp
        days++
    }
    if (totalAmountExtracted >= 26) {
        totalAmountExtracted -= 26;
    }
    console.log(days);
    console.log(totalAmountExtracted);
    
}