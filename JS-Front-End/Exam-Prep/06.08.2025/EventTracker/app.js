window.addEventListener("load", solve);

function solve(){
    const eventName = document.getElementById("event")
    const shortNote = document.getElementById("note")
    const date = document.getElementById("date")
    const upcomingList = document.getElementById("upcoming-list")
    const eventsList = document.getElementById("events-list")
    const events = document.getElementById("events")
    
    const saveBtn = document.getElementById("save")
    saveBtn.addEventListener("click", handleSaving) 

    function handleSaving(){
        if (!eventName.value || !shortNote.value || !date.value){
            return
        }
        const liEl = document.createElement("li")
        liEl.classList.add("event-item")

        const eventContainer = document.createElement("div")
        eventContainer.classList.add("event-container")

        const article = document.createElement("article")

        const pName = document.createElement("p")
        pName.textContent = `Name: ${eventName.value.trim()}`

        const pNote = document.createElement("p")
        pNote.textContent = `Note: ${shortNote.value.trim()}`

        const pDate = document.createElement("p")
        pDate.textContent = `Date: ${date.value.trim()}`

        article.appendChild(pName)
        article.appendChild(pNote)
        article.appendChild(pDate)

        const buttonsDiv = document.createElement("div")
        buttonsDiv.classList.add("buttons")

        const editBtn = document.createElement("button")
        editBtn.classList.add("btn", "edit")
        editBtn.innerHTML = "Edit"
        editBtn.addEventListener("click", handleEditing)

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("btn", "done")
        doneBtn.innerHTML = "Done"
        doneBtn.addEventListener("click", handleDone)

        buttonsDiv.appendChild(editBtn)
        buttonsDiv.appendChild(doneBtn)

        eventContainer.appendChild(article)
        eventContainer.appendChild(buttonsDiv)

        liEl.appendChild(eventContainer)

        upcomingList.appendChild(liEl)

        eventName.value = ''
        shortNote.value = ''
        date.value = ''

        function handleEditing(e){
            const parentEl = e.target.parentElement.parentElement
            const pEls = Array.from(parentEl.querySelectorAll("article p"))
            
            eventName.value = pEls.shift().textContent.split(": ")[1]
            shortNote.value = pEls.shift().textContent.split(": ")[1]
            date.value = pEls.shift().textContent.split(": ")[1]

            parentEl.remove()
        }
        function handleDone(e){
            const parentEl = e.target.parentElement.parentElement

            const articleEl = parentEl.querySelector("article")

            const liItem = document.createElement("li")
            liItem.appendChild(articleEl)

            eventsList.appendChild(liItem)

            const deleteBtn = document.createElement("button")
            deleteBtn.classList.add("btn", "delete")
            deleteBtn.innerHTML = "Delete"
            deleteBtn.addEventListener("click", handleDeleting)

            events.appendChild(deleteBtn)

            parentEl.remove()
        }
        function handleDeleting(e){
            const parent = e.target.parentElement

            const events = parent.querySelectorAll("#events-list li")

            events.forEach(event => {
                event.remove()
            })
        }
    }
}

