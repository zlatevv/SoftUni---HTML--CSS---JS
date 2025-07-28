document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const menu = document.getElementById("menu")
    const submit = document.querySelector("input[type='submit']")

    submit.addEventListener("click", handleAdding)

    function handleAdding(e){
        e.preventDefault()
        const elementText = document.getElementById("newItemText")
        const elementValue = document.getElementById("newItemValue")
        const option = document.createElement("option")
        option.value = elementValue.value
        option.textContent = elementText.value
        menu.appendChild(option)
        
        elementText.value = ''
        elementValue.value = ''
    }
}