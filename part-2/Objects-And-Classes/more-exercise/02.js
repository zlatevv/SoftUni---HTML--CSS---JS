function catalogue(productsInfo){
    let products = []

    for (let productInfo of productsInfo){
        let [name, cost] = productInfo.split(" : ")
        let product = {
            name,
            cost
        }
        products.push(product);
    }
    products.sort((a, b) => a.name.localeCompare(b.name))

    let startingLetter = ""
    for (let product of products){
        let word = product.name
        if (word[0] === startingLetter){
            console.log(`   ${word}: ${product.cost}`);
        }else {
            startingLetter = word[0]
            console.log(startingLetter);
            console.log(`   ${word}: ${product.cost}`);
        }
    }
}

