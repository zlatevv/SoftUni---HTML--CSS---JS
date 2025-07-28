function attachGradientEvents() {
    const gradientEl = document.getElementById("gradient")
    const resultEl = document.getElementById("result")

    gradientEl.addEventListener("mousemove", handleMovement)


    function handleMovement(e){
        let percentages = e.offsetX / e.target.clientWidth * 100

        resultEl.textContent = Math.floor(percentages) + "%"
        
        
    }
}
