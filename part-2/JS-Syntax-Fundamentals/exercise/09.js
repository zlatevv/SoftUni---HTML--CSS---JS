function solution(fruit, grams, pricePerKG){
    let kgs = grams / 1000

    let totalPrice = kgs * pricePerKG

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`);
    
}