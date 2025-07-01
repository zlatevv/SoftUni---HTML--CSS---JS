function solution(array){
    let username = array[0]
    let i = 1
    let notCorrect = 0

    while (i < array.length){
        let word = array[i]
        if (word.split('').reverse().join('') === username){
            console.log("User " + username + " logged in.");
            break;
        }
        notCorrect += 1
        if (notCorrect >= 4){
            console.log("User " + username + " blocked!");
            break;
        }
        console.log("Incorrect password. Try again.");
        i++
    }
}