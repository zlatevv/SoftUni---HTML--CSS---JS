function solution(startingPoint, action1, action2, action3, action4, action5) {
    let list = [action1, action2, action3, action4, action5]

    for (let i = 0; i <= list.length - 1; i++){
        let command = list[i]

        switch (command){
            case "chop": startingPoint /= 2; break;
            case "dice": startingPoint = Math.sqrt(startingPoint); break;
            case "spice": startingPoint++; break;
            case "bake": startingPoint *= 3; break;
            case "fillet": startingPoint -= startingPoint * 0.2;
        }
        console.log(startingPoint);
        
    }
}