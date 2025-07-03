function loadingBar(number){
    let percentages = number / 10;

    if (percentages >= 10){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        
    }
    else {
        let bar = []
        for (let i = 1; i <= 10; i++){
            if (i <= percentages){
                bar.push("%")
            }else {
                bar.push(".")
            }
        }
        console.log(`${percentages}0% [${bar.join('')}]`);
        console.log("Still loading...");
        
    }
}