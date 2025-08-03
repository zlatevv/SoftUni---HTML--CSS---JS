const phonebookEl = document.getElementById("phonebook")
const loadBtnEl = document.getElementById("btnLoad")
const personInputEl = document.getElementById("person")
const phoneInputEl = document.getElementById("phone")
const createBtnEl = document.getElementById("btnCreate")

function attachEvents() {
    loadBtnEl.addEventListener("click", handleLoad)
    createBtnEl.addEventListener("click", handleCreatingElements)
}
async function handleLoad() {
    const result = await fetch(`http://localhost:3030/jsonstore/phonebook`)
    const data = await result.json()

    phonebookEl.innerHTML = ''
    for (const information of Object.values(data)) {
        const liEl = document.createElement("li")
        liEl.textContent = `${information.person}: ${information.phone}`

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.addEventListener("click", handleDeleting)

        liEl.appendChild(button)
        phonebookEl.appendChild(liEl)
        
        async function handleDeleting() {
            await fetch(`http://localhost:3030/jsonstore/phonebook/${information._id}`, {
                method: "DELETE"
            }) 
            handleLoad()          
        }
    }  
}

async function handleCreatingElements() {
    const person = personInputEl.value.trim()
    const phone = phoneInputEl.value.trim()

    const somebody = { person, phone }
    await fetch(`http://localhost:3030/jsonstore/phonebook`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(somebody)
    })
    handleLoad()

    personInputEl.value = ''
    phoneInputEl.value = ''
}

attachEvents();