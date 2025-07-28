document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const panelEls = Array.from(document.getElementsByClassName("panel"))

    const inputs = document.querySelectorAll(".panel input")

    inputs.forEach(input => input.addEventListener("focus", handleFocus))

    function handleFocus(event){
       panelEls.forEach(panel => panel.classList.remove("focused"));

        const parentPanel = event.currentTarget.closest(".panel");
        if (parentPanel) {
            parentPanel.classList.add("focused");
        }
    }
}
