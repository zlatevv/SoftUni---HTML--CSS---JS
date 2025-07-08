function convertToObject(jsonObject){
    let normalObject = JSON.parse(jsonObject);

    for (let [key, value] of Object.entries(normalObject)){
        console.log(`${key}: ${value}`);
        
    }
}