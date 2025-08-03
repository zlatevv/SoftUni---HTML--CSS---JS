function solve() {
    const input = document.getElementById("input").value
    const toConvertEl = document.getElementById("selectMenuTo").value
    const result = document.getElementById("result")

    let number = Number(input)
    if (!input){
        return
    }
    switch (toConvertEl){
        case "binary":
            result.value = number.toString(2)
            break;
        case "hexadecimal":
            result.value = number.toString(16).toUpperCase()
    }
}