function solve() {
    let input = document.getElementById("input").value
    let output = document.getElementById("output")

    let sentences = input.split(".").filter(sentence => sentence.length > 0)
    let paragraph = ''
    for (let i = 0; i < sentences.length; i++){
        let currentSentence = sentences[i].trim()
        paragraph += currentSentence + "."

        if ((i + 1) % 3 === 0 || i === sentences.length - 1){
          const paragraphEl = `<p>${paragraph}</p>`
          output.innerHTML += paragraphEl
        }
    }
}
    