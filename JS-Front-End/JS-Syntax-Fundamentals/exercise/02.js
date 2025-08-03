function solution(amount, type, day){
    let price;
    switch (day){
        case "Friday":
            switch (type){
                case "Students": price = 8.45; break;
                case "Business": price = 10.90; break;
                case "Regular": price = 15; break;
            }
            break;
        case "Saturday":
            switch (type){
                case "Students": price = 9.80; break;
                case "Business": price = 15.6; break;
                case "Regular": price = 20; break;
            }
            break;
        case "Sunday":
            switch (type){
                case "Students": price = 10.46; break;
                case "Business": price = 16; break;
                case "Regular": price = 22.5; break;
            }
            break;
    }
    let totalPrice = price * amount

    if (amount <= 30 && type === "Students"){
        totalPrice -= totalPrice * 0.15
    }else if (amount >= 100 && type === "Business"){
        totalPrice -= price * 10
    }else if (amount >= 10 && amount <= 20 && type === "Regular"){
        totalPrice -= totalPrice * 0.05
    }
    console.log("Total price: " + totalPrice.toFixed(2));
    
}