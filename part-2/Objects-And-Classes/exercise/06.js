function wordTracker(words){
    let searchedWords = words.shift()

    let occurences = {}

    for (const word of searchedWords.split(" ")){
        occurences[word] = 0
    }

    for (const word of words){
        if (occurences.hasOwnProperty(word)){
            occurences[word] += 1
        }
    }
    let entries = Object.entries(occurences).sort((a, b) => b[1] - a[1])
    for (const [key, value] of entries){
        console.log(`${key} - ${value}`);
        
    }
}