document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeForm = document.getElementById("encode")
    const decodeForm = document.getElementById("decode")

    encodeForm.addEventListener("submit", handleEncoding)
    decodeForm.addEventListener("submit", handleDecoding)

    function handleDecoding(e){
        e.preventDefault()
        const message = document.querySelector("#encode textarea")
        const output = document.querySelector("#decode textarea")
        let oldMsg = ''

        for (const character of output.value) {
            const characterASCII = character.charCodeAt(0) 
            let newASCII = characterASCII - 1
            oldMsg += String.fromCharCode(newASCII)
        }
        output.value = oldMsg
    }

    function handleEncoding(e){
        e.preventDefault()
        const message = document.querySelector("#encode textarea")
        const output = document.querySelector("#decode textarea")
        let newMsg = ''

        for (const character of message.value) {
            const characterASCII = character.charCodeAt(0) 
            let newASCII = characterASCII + 1
            newMsg += String.fromCharCode(newASCII)
        }
        output.value = newMsg
        message.value = ''
    }
}