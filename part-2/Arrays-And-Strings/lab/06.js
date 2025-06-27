function solve(sentence, searchedWord){
    let count = 0
    let sentenceArray = sentence.split(" ")

    for (let word of sentenceArray){
        if (word === searchedWord){
            count++
        }
    }
    console.log(count);
    
}