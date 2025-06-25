function solution(number){
    let result = 0
    for (let digit of number.toString()){
        result += Number(digit)
    }
    console.log(result);
    
}
solution(245678)