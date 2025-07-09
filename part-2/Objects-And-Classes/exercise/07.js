function oddOccurences(input){
    const words = input.toLowerCase().split(" ");
    const occurrences = {};

    for (const word of words) {
        occurrences[word] = (occurrences[word] || 0) + 1;
    }

    const result = [];

    for (const word of words) {
        if (occurrences[word] % 2 !== 0 && !result.includes(word)) {
            result.push(word);
        }
    }

    console.log(result.join(" "));
}