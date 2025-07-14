function toggle() {
    const button = document.getElementsByClassName("button")[0]
    const content = document.getElementById("extra")
    let text = button.textContent;

    switch (text){
        case "More":
            button.textContent = "Less"
            content.style.display = "block"
            break;
        case "Less":
            button.textContent = "More"
            content.style.display = "none"
            break;
    }
}