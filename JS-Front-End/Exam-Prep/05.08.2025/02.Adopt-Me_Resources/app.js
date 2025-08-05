window.addEventListener("load", solve);

function solve() {
    const adoptBtn = document.getElementById("adopt-btn")
    const genderSelect = document.getElementById("gender")
    const animalTypeInput = document.getElementById("type")
    const animalAgeInput = document.getElementById("age")
    const adoptionInfo = document.getElementById("adoption-info")
    const adoptedList = document.getElementById("adopted-list")

    adoptBtn.addEventListener("click", handleAdoption)

    function handleAdoption(e){
        e.preventDefault()
        const animalType = animalTypeInput.value 
        const animalAge = animalAgeInput.value 
        const gender = genderSelect.value 

        if (!animalAge || !animalType || !gender){
          return
        }

        const liItem = document.createElement("li")
        
        const articleEl = document.createElement("article")

        const pType = document.createElement("p")
        pType.textContent = `Pet:${animalType}` 

        const pGender = document.createElement("p")
        pGender.textContent = `Gender:${gender}`

        const pAge = document.createElement("p")
        pAge.textContent = `Age:${animalAge}`

        articleEl.appendChild(pType)
        articleEl.appendChild(pGender)
        articleEl.appendChild(pAge)

        const buttonsDiv = document.createElement("div")
        buttonsDiv.classList.add("buttons")

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn")
        editBtn.textContent = "Edit"
        editBtn.addEventListener("click", handleEditing)

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("done-btn")
        doneBtn.textContent = "Done"
        doneBtn.addEventListener("click", handleDone) 

        buttonsDiv.appendChild(editBtn)
        buttonsDiv.appendChild(doneBtn)

        liItem.appendChild(articleEl)
        liItem.appendChild(buttonsDiv)

        adoptionInfo.appendChild(liItem)

        animalAgeInput.value = ''
        animalTypeInput.value = ''
        genderSelect.value = ''
        
        function handleEditing(e){
          const parentEl = e.target.parentElement.parentElement
          const pEls = Array.from(parentEl.querySelectorAll("article p"))
          
          animalTypeInput.value = pEls.shift().textContent.split(":")[1]
          genderSelect.value = pEls.shift().textContent.split(":")[1]
          animalAgeInput.value = pEls.shift().textContent.split(":")[1]

          parentEl.remove()
        }
        function handleDone(e){
          const parentEl = e.target.parentElement.parentElement
          const pEls = Array.from(parentEl.querySelectorAll("article p"))

          const liEl = document.createElement("li")
          const articleEl = document.createElement("article")

          const pType = document.createElement("p")
          pType.innerHTML = pEls.shift().textContent

          const pGender = document.createElement("p")
          pGender.innerHTML = pEls.shift().textContent

          const pAge = document.createElement("p")
          pAge.innerHTML = pEls.shift().textContent

          articleEl.appendChild(pType)
          articleEl.appendChild(pGender)
          articleEl.appendChild(pAge)

          const clearBtn = document.createElement("button")
          clearBtn.classList.add("clear-btn")
          clearBtn.innerHTML = "Clear" 
          clearBtn.addEventListener("click", handleClear)

          liEl.appendChild(articleEl)
          liEl.appendChild(clearBtn)
          
          adoptedList.appendChild(liEl)

          parentEl.remove()
        }
        function handleClear(e){
          const parentEl = e.target.parentElement.parentElement

          parentEl.remove()
        }
    }
  }
  