function convertToJSON(firstName, lastName, hairColor){
    let person = {
        name: firstName,
        lastName,
        hairColor
    }

    let personJSON = JSON.stringify(person)

    return personJSON
}