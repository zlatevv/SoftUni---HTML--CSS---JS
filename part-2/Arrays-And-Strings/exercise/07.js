function solution(substring, string){
    if (string.toLowerCase().includes(substring.toLowerCase())){
        console.log(substring);
        
    }else {
        console.log(substring + " not found!");
        
    }
}