function subtract() {
    const num1 = document.getElementById("firstNumber").value
    const num2 = document.getElementById("secondNumber").value
    const sumEl = document.getElementById("result")
    let sum = Number(num1) - Number(num2);
    sumEl.textContent += sum
}