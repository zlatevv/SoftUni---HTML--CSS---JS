function factorialDivision(a, b){
    let factorial1 = findFactorial(a)
    let factorial2 = findFactorial(b)

    let result = factorial1 / factorial2
    console.log(result.toFixed(2));
    
    function findFactorial(number){
        let result = 1

        for (let i = 1; i <= number; i++){
            result *= i
        }

        return result
    }
}