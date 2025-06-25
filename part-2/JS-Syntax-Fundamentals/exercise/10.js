function solution(number){
    let flag = true;
    let num = 0
    let result = 0

    for (let digit of number.toString()){
        if (num === 0){
            num = digit
        }
        if (num != digit){
            flag = false
            break;
        }
    }
    for (let digit of number.toString()){
        result += Number(digit)
    }
    console.log(flag);
    console.log(result);
    
}