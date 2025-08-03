function extractText() {
    const liELs = document.querySelectorAll("#items li")
    const textAreaEl = document.getElementById("result")

    for (const liEl of liELs) {
        textAreaEl.textContent += liEl.textContent + "\n"
    }
}