function solution(words, sentence){
    let wordsArr = words.split(", ")
    for (const word of wordsArr) {
        let template = '*'.repeat(word.length)
        sentence = sentence.replace(template, word)
    }
    console.log(sentence);
    
}