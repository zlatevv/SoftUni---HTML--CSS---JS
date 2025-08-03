function solution(a, b, c){
    let max
    if (a > b){
        max = a
    }else {
        max = b
    }
    if (c > max){
        max = c
    }
    console.log("The largest number is " + max + ".");
    
}