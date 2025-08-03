function employees(employees){
    let company = {}

    for (const employee of employees){
        company[employee] = employee.length
    }

    for (let [key, value] of Object.entries(company)){
        console.log(`Name: ${key} -- Personal Number: ${value}`);
        
    }
}