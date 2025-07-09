function makeaDictionary(array){
    let dictionary = {}

    for (const json of array){
        let entries = Object.entries(JSON.parse(json))
        for (const [key, value] of entries){
            dictionary[key] = value;
        }
    }

    let entries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [key, value] of entries){
        console.log(`Term: ${key} => Definition: ${value}`);
        
    }
}