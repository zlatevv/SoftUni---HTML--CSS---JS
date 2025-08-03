function solution(speed, place){
    let speedLimit = 0
    switch (place){
        case "motorway": speedLimit = 130; break;
        case "interstate": speedLimit = 90; break;
        case "city": speedLimit = 50; break;
        case "residential": speedLimit = 20; break;
    }
    if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        
    }else {
        let difference = speed - speedLimit
        let type = ""
        if (difference <= 20){
            type = "speeding"
        }else if(difference <= 40){
            type = "excessive speeding"
        }else {
            type = "reckless driving"
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${type}`);
        
    }
}