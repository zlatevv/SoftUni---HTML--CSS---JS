function addresBook(arr){
    let addresses = {}

    for (let str of arr){
        let [name, address] = str.split(":")
        addresses[name] = address
    }

    let sorted = Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sorted){
        console.log(`${name} -> ${address}`);
        
    }
}