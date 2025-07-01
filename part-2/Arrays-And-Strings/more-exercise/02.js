function solution(gold){
    let money = 0
    let bitcoin = 0
    let dayFirstBought = 0
    for (let i = 0; i < gold.length; i++){
        let grams = gold[i]
        if ((i + 1) % 3 == 0){
            grams *= 0.7;
        }
        money += grams * 67.51
        while (money >= 11949.16){
            bitcoin++
            money -= 11949.16
            if (dayFirstBought == 0){
                dayFirstBought = i + 1
            }
        }
    }
    console.log("Bought bitcoins: " + bitcoin);
    if (dayFirstBought > 0){
        console.log("Day of the first purchased bitcoin: "  + dayFirstBought);
        
    }
    console.log("Left money: " + money.toFixed(2) + " lv.");
    
}