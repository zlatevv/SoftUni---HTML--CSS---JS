function solution(text){
    return (text.split(/(?=[A-Z])/).join(", "))
}