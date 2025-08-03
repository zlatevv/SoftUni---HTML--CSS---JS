function solve(sentence, censoredWord) {
    let replacement = "*".repeat(censoredWord.length);
    let censored = sentence;

    while (censored.includes(censoredWord)) {
        censored = censored.replace(censoredWord, replacement);
    }

    console.log(censored);
}