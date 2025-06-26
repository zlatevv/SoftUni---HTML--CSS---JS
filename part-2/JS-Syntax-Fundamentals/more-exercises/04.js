function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalPrice = 0;
    let brokenShield = 0
    for (let i = 1; i <= lostFights; i++){
        if (i % 2 == 0){
            totalPrice += helmetPrice
        }
        if (i % 3 == 0){
            totalPrice += swordPrice
        }
        if (i % 6 == 0){
            totalPrice += shieldPrice
            brokenShield++ 

            if (brokenShield % 2 === 0) {
                totalPrice += armorPrice;
            }
        }
    }
    console.log("Gladiator expenses: " + totalPrice.toFixed(2) + " aureus");
    
}