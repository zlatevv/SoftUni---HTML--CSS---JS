function solution (a, b, operator) {
    switch (operator){
        case "multiply": return a * b;
        case "divide": return a / b;
        case "add": return a + b;
        case "subtract": return a - b;
    }
}