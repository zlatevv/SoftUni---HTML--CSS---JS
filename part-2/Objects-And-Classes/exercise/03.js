function storeProvision(currentStock, orderedProducts){
    let stock = {}

    for (let i = 0; i < currentStock.length; i += 2){
        stock[currentStock[i]] = Number(currentStock[i + 1])
    }
    for (let i = 0; i < orderedProducts.length; i += 2){
        if (stock.hasOwnProperty(orderedProducts[i])){
            stock[orderedProducts[i]] += Number(orderedProducts[i + 1])
        }else {
            stock[orderedProducts[i]] = Number(orderedProducts[i + 1])
        }
    }

    for (const [key, value] of Object.entries(stock)){
        console.log(`${key} -> ${value}`);
    }
}