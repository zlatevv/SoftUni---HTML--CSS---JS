function solution(product, amount){
    let total = 0
    switch (product){
        case "coffee": total = 1.50 * amount; break;
        case "water": total = 1.00 * amount; break;
        case "coke": total = 1.40 * amount; break;
        case "snacks": total = 2.00 * amount; break;
    }
    return total.toFixed(2)
}