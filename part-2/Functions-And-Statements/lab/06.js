function solution(a, b, c){
    let negatives = []
    if (a < 0){
        negatives.push(a)
    }
    if (b < 0){
        negatives.push(a)
    }
    if (c < 0){
        negatives.push(a)
    }
    if (negatives.length % 2 == 0){
        return "Positive"
    }
    return "Negative"
}