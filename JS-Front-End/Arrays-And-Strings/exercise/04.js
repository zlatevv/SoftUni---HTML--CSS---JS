function solution(numbers){
    numbers.sort((a, b) => a - b);
    let result = []
    while (numbers.length > 0){
        result.push(numbers.shift())
        result.push(numbers.pop())
    }
    return result
}