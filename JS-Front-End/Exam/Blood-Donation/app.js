window.addEventListener("load", solve);

function solve() {
  const bloodTypeInput = document.getElementById("type")
  const ageInput = document.getElementById("age")
  const genderSelect = document.getElementById("gender")

  const registerBtn = document.getElementById("register-btn")

  const registeredList = document.getElementById("registered-list")
  const confirmedList = document.getElementById("confirmed-list")

  registerBtn.addEventListener("click", handleRegistration)

  function handleRegistration(e){

    e.preventDefault()

    if (!bloodTypeInput.value || !ageInput.value || !genderSelect.value){
      return
    }

    const liEl = document.createElement("li")

    const articleEl = document.createElement("article")

    const pBloodtype = document.createElement("p")
    pBloodtype.textContent = `Blood Type: ${bloodTypeInput.value}`

    const pGender = document.createElement("p")
    pGender.textContent = `Gender: ${genderSelect.value}`

    const pAge = document.createElement("p")
    pAge.textContent = `Age: ${ageInput.value}`

    articleEl.appendChild(pBloodtype)
    articleEl.appendChild(pGender)
    articleEl.appendChild(pAge)

    const buttonsDiv = document.createElement("div")
    buttonsDiv.classList.add("buttons")

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.innerHTML = "Edit"
    editBtn.addEventListener("click", handleEditting)

    const confirmBtn = document.createElement("button")
    confirmBtn.classList.add("done-btn")
    confirmBtn.innerHTML = "Confirm"
    confirmBtn.addEventListener("click", handleConfirming)

    buttonsDiv.appendChild(editBtn)
    buttonsDiv.appendChild(confirmBtn)

    liEl.appendChild(articleEl)
    liEl.appendChild(buttonsDiv)

    registeredList.appendChild(liEl)

    bloodTypeInput.value = ''
    ageInput.value = ''
    genderSelect.value = ''
    
    function handleEditting(e){
      const liItem = e.target.parentElement.parentElement
      const pEls = Array.from(liItem.querySelectorAll("article p"))
      
      const bloodTypeInfo = pEls.shift().textContent.split(": ")
      const bloodType = bloodTypeInfo.pop()
      
      const genderInfo = pEls.shift().textContent.split(": ")
      const gender = genderInfo.pop()

      const ageInfo = pEls.shift().textContent.split(": ")
      const age = ageInfo.pop()

      liItem.remove()

      bloodTypeInput.value = bloodType
      ageInput.value = age
      genderSelect.value = gender
    }
    function handleConfirming(e){
      const parent = e.target.parentElement.parentElement

      const article = parent.querySelector("article")
      const liItem = document.createElement("li")

      const clearBtn = document.createElement('button')
      clearBtn.innerHTML = "Clear"
      clearBtn.classList.add("clear-btn")
      clearBtn.addEventListener("click", handleClearing)

      liItem.appendChild(article)
      liItem.appendChild(clearBtn)

      confirmedList.appendChild(liItem)
      parent.remove()
    }
    function handleClearing(e){
      const parent = e.target.parentElement

      parent.remove()
    }
  }

}
