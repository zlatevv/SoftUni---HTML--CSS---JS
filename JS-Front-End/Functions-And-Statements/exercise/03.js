function charactersInRange(firstStr, secondStr){
    let result = "";

    let start = Math.min(firstStr.charCodeAt(0), secondStr.charCodeAt(0))
    let end = Math.max(firstStr.charCodeAt(0), secondStr.charCodeAt(0))

    for (let i = start + 1; i <= end - 1; i++){
        result += String.fromCharCode(i) + ' '
    }
    return result
}