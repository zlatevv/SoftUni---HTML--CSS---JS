document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
    const input = document.getElementById("email")
    
    input.addEventListener("change", handleInput)
    

    function handleInput(){
        if (pattern.test(input.value)){
            input.classList.remove("error")
        }else {
            input.classList.add("error")
        }
    }
}
