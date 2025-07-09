function towns(towns){

    for (const town of towns){
        let [name, latitude, longitude] = town.split(" | ");
        let city = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(city);
        
    }
}