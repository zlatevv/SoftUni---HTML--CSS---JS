function solve(coordinates){
    let x1 = coordinates[0]
    let y1 = coordinates[1]
    let x2 = coordinates[2]
    let y2 = coordinates[3]
    let equation1 = Math.sqrt(x1 ** 2 + y1 ** 2)
    let equation2 = Math.sqrt(x2 ** 2 + y2 ** 2)
    let equation3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

    if (Number.isInteger(equation1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(equation2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(equation3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}