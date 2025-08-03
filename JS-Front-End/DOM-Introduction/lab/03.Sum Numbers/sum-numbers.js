function calc() {
    const a = document.getElementById("num1")
    const b = document.getElementById("num2")
    const sum = document.getElementById("sum")

    let num1 = a.value
    let num2 = b.value

    sum.value = Number(num1) + Number(num2);
    
}