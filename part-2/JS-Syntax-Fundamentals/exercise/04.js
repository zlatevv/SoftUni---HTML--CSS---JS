function solution(a, b){
    let sum = 0;
    let result = "";
    for (let i = a; i <= b; i++){
        result += i + ' '
        sum += i
    }
    console.log(result.trim());
    
    console.log("Sum: " + sum);
    
}