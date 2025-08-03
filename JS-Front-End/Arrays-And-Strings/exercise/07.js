function solution(substring, string){
    if (string.toLowerCase().split(" ").includes(substring.toLowerCase())){
        console.log(substring);
        
    }else {
        console.log(substring + " not found!");
        
    }
}