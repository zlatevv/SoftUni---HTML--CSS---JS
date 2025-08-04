window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById("add-btn")
    const checkList = document.getElementById("check-list")
    const contactList = document.getElementById("contact-list")

    addBtn.addEventListener("click", handleAdding)

    function handleAdding(){
      const nameInput = document.getElementById("name")
      const phoneInput = document.getElementById("phone")
      const category = document.getElementById("category")

      if (!nameInput.value || !phoneInput.value || !category.value){
        return
      }

      const liItem = document.createElement("li")
      
      const articleEl = document.createElement("article")
      
      const pNameEl = document.createElement("p")
      pNameEl.textContent = `name:${nameInput.value}`

      const pPhoneEl = document.createElement("p")
      pPhoneEl.textContent = `phone:${phoneInput.value}`

      const pCategoryEl = document.createElement("p")
      pCategoryEl.textContent = `category:${category.value}`

      articleEl.appendChild(pNameEl)
      articleEl.appendChild(pPhoneEl)
      articleEl.appendChild(pCategoryEl)

      const buttonsDiv = document.createElement("div")

      const editBtn = document.createElement("button")
      editBtn.classList.add("edit-btn")
      editBtn.addEventListener("click", handleEditting)

      const saveBtn = document.createElement("button")
      saveBtn.classList.add("save-btn")
      saveBtn.addEventListener("click", handleSaving)

      buttonsDiv.appendChild(editBtn)
      buttonsDiv.appendChild(saveBtn)

      liItem.appendChild(articleEl)
      liItem.appendChild(buttonsDiv)

      checkList.appendChild(liItem)

      nameInput.value = ''
      phoneInput.value = ''
      category.value = ''
    }
  function handleSaving(e){
    const parentElement = e.target.parentElement.parentElement
    const articleEl = parentElement.querySelector("article")

    const btnEl = document.createElement("button")
    btnEl.classList.add("del-btn")
    btnEl.addEventListener("click", handleDeleting)

    const liItem = document.createElement("li")
    liItem.appendChild(articleEl)
    liItem.appendChild(btnEl)

    contactList.appendChild(liItem)
  }
  function handleEditting(e){
    const liItem = e.target.parentElement.parentElement
    const pEls = Array.from(liItem.querySelectorAll("article p"))
    
    const nameInfo = pEls.shift().textContent.split(":")
    const name = nameInfo.pop()
    
    const phoneInfo = pEls.shift().textContent.split(":")
    const phone = phoneInfo.pop()
    
    const categoryInfo = pEls.shift().textContent.split(":")
    const category = categoryInfo.pop()

    const nameInput = document.getElementById("name")
    const phoneInput = document.getElementById("phone")
    const categoryInput = document.getElementById("category")
    checkList.innerHTML = ''

    nameInput.value = name
    phoneInput.value = phone
    categoryInput.value = category
  }
  function handleDeleting(e){
    e.target.parentElement.parentElement.innerHTML = ''
  }
}
  