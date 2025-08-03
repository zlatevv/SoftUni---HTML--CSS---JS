function phonebook(strings){
    let people = {}

    for (let string of strings){
        let arr = string.split(" ")
        people[arr[0]] = arr[1]
    }

    for (let [key, value] of Object.entries(people)){
        console.log(`${key} -> ${value}`);
        
    }
}