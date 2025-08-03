const tableEl = document.getElementById("results")
const form = document.getElementById("form")
const tableBody = document.querySelector("tbody")

form.addEventListener("submit", handleSubmission)

async function handleSubmission(e) {
    e.preventDefault()

    const firstName = document.querySelector("input[name='firstName']").value 
    const lastName = document.querySelector("input[name='lastName']").value 
    const facultyNumber = document.querySelector("input[name='facultyNumber']").value 
    const grade = document.querySelector("input[name='grade']").value 
    
    const result = await fetch("http://localhost:3030/jsonstore/collections/students")
    const data = await result.json()

    for (const person of Object.values(data)) {
        console.log(person);
        
    }
}