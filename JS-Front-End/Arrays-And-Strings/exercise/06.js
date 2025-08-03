function solution(sentence){
    let isValid = true
    let words = sentence.split(" ")
    for (let word of words){
        isValid = true
        if (word[0] === "#" && word.length > 1){
            for (let i = 1; i <= word.length - 1; i++){
                letter = word[i]
                if (!/[a-zA-Z]/.test(letter)){
                    isValid = false
                    break;
                }
            }
            if (isValid){
                let cleanWord = word.replace("#", "")
                console.log(cleanWord);
                
            }
        }
    }
}