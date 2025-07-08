function meetings(array){
    let days = {}

    for (let str of array){
        let arr = str.split(" ")
        let day = arr[0]

        if (days.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            
        }else{
            days[day] = arr[1]
            console.log(`Scheduled for ${day}`);
            
        }
    }

    for (let [key, value] of Object.entries(days)){
        console.log(`${key} -> ${value}`);
        
    }
}
