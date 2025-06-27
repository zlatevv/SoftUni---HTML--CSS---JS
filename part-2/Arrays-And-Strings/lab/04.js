function solve(string, startIndex, count){
    let result = ""
    for (let i = startIndex; i < startIndex + count; i++){
        result += string[i]
    }
    console.log(result);
}