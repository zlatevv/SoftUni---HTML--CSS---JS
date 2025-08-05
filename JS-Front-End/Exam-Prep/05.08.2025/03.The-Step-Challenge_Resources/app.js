const loadRecordsBtn = document.getElementById("load-records")
const recordList = document.getElementById("list")
const addRecordBtn = document.getElementById("add-record")
const editRecordBtn = document.getElementById("edit-record")
const nameInput = document.getElementById("p-name")
const stepsInput = document.getElementById("steps")
const caloriesInput = document.getElementById("calories")

const URL = "http://localhost:3030/jsonstore/records/"

loadRecordsBtn.addEventListener("click", handleLoading)
addRecordBtn.addEventListener("click", handelAdding)
editRecordBtn.addEventListener("click", handleEditing)
selectedRecord = null

async function handleLoading() {
    const result = await fetch(URL)
    const data = await result.json()
    recordList.innerHTML = '' 

    Object.values(data).forEach(record => {
        const liItem = document.createElement("li")
        liItem.classList.add("record")

        const infoDiv = document.createElement("div")
        infoDiv.classList.add("info")

        const nameP = document.createElement("p")
        nameP.textContent = record.name 

        const stepsP = document.createElement("p")
        stepsP.textContent = record.steps

        const caloriesP = document.createElement("p")
        caloriesP.textContent = record.calories

        infoDiv.appendChild(nameP)
        infoDiv.appendChild(stepsP)
        infoDiv.appendChild(caloriesP)

        const btnsDivEl = document.createElement("div")
        btnsDivEl.classList.add("btn-wrapper")

        const changeBtn = document.createElement("button")
        changeBtn.classList.add("change-btn")
        changeBtn.innerHTML = "Change"
        changeBtn.addEventListener("click", handleChanging)

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.addEventListener("click", handleDeleting)

        btnsDivEl.appendChild(changeBtn)
        btnsDivEl.appendChild(deleteBtn)

        liItem.appendChild(infoDiv)
        liItem.appendChild(btnsDivEl)

        recordList.appendChild(liItem)

        async function handleChanging() {
            nameInput.value = record.name
            caloriesInput.value = record.calories
            stepsInput.value = record.steps

            addRecordBtn.disabled = true
            editRecordBtn.disabled = false 

            selectedRecord = record._id
        }
        async function handleDeleting() {
            await fetch(`http://localhost:3030/jsonstore/records/${record._id}`, {
                method: "DELETE"
            })
            await handleLoading()
        }
    })
}
async function handelAdding() {
    const name = nameInput.value 
    const calories = caloriesInput.value
    const steps = stepsInput.value 

    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ name, steps, calories})
    })
    await handleLoading()
    nameInput.value = ''
    caloriesInput.value = ''
    stepsInput.value = ''
}

async function handleEditing() {
    const name = nameInput.value 
    const calories = caloriesInput.value
    const steps = stepsInput.value

    await fetch(`http://localhost:3030/jsonstore/records/${selectedRecord}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ name, calories, steps})
    })
    await handleLoading()
    editRecordBtn.disabled = true
    addRecordBtn.disabled = false

    nameInput.value = ''
    caloriesInput.value = ''
    stepsInput.value = ''
    selectedRecord = null
}