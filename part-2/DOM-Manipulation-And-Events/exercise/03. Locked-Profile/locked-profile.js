document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => button.addEventListener("click", handleLock))

    function handleLock(e){
        const fullElement = e.target.parentElement;
        const radioEl = fullElement.querySelector("input[type=radio]")

        if (radioEl.checked){
            return  
        }

        const hiddenFields = fullElement.querySelector(".hidden-fields")

        if (e.target.textContent === "Show more"){
            hiddenFields.style.display = 'block'
            e.target.textContent = "Show less"
        }else if (e.target.textContent === "Show less"){
            hiddenFields.style.display = 'none'
            e.target.textContent = "Show more"
        }
    }
}
