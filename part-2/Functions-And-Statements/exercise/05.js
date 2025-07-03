function pallindromeIntegers(numbers){
    for (let number of numbers){
        let str = number.toString();
        let reversed = str.split('').reverse().join('')
        if (reversed === str){
            console.log(true);
            
        }else {
            console.log(false);
            
        }
    }
}