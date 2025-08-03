function lockedProfile() {
    const main = document.getElementById("main")

    fetch("http://localhost:3030/jsonstore/advanced/profiles")
        .then(response => response.json())
        .then(allUsers => {
            Object.values(allUsers).forEach(user => {
                const brEl = document.createElement("br")

                const hrEl = document.createElement("hr")

                const profileDiv = document.createElement("div")
                profileDiv.classList.add("profile")

                const imgEl = document.createElement("img")
                imgEl.src = "./iconProfile2.png"
                imgEl.classList.add("userIcon")

                const labelLockEl = document.createElement("label")
                labelLockEl.innerHTML = "Lock"

                const lockInput = document.createElement("input")
                lockInput.type = "radio"
                lockInput.name = `user${user._id}Locked`
                lockInput.value = "lock"
                lockInput.checked = true 

                const labelUnlockEl = document.createElement("label")
                labelUnlockEl.innerHTML = "Unlock"

                const unlockInput = document.createElement("input")
                unlockInput.type = "radio"
                unlockInput.name = `user${user._id}Locked`
                unlockInput.value = "unlock"

                const usernameLabel = document.createElement("label")
                usernameLabel.innerHTML = "Username"

                const usernameInput = document.createElement("input")
                usernameInput.type = "text"
                usernameInput.name = user.username
                usernameInput.value = "" 
                usernameInput.disabled = true
                usernameInput.readOnly = true
                usernameInput.value = user.username

                const userUsernameDivEl = document.createElement("div")
                userUsernameDivEl.classList.add("hiddenInfo")
                userUsernameDivEl.appendChild(hrEl)

                const emailLabel = document.createElement("label")
                emailLabel.innerHTML = "Email:"

                const emailInput = document.createElement("input")
                emailInput.type = "email"
                emailInput.name = user.email
                emailInput.value = ""
                emailInput.disabled = true
                emailInput.readOnly = true
                emailInput.value = user.email

                const ageLabel = document.createElement("label")
                ageLabel.innerHTML = "Age:"

                const ageInput = document.createElement("input")
                ageInput.type = "number"
                ageInput.name = user.age
                ageInput.value = ""
                ageInput.disabled = true
                ageInput.readOnly = true
                ageInput.value = user.age

                userUsernameDivEl.appendChild(emailLabel)
                userUsernameDivEl.appendChild(emailInput)
                userUsernameDivEl.appendChild(ageLabel)
                userUsernameDivEl.appendChild(ageInput)

                const button = document.createElement("button")
                button.innerHTML = "Show more"
                button.addEventListener("click", handleShowingInfo)

                profileDiv.appendChild(imgEl)
                profileDiv.appendChild(labelLockEl)
                profileDiv.appendChild(lockInput)
                profileDiv.appendChild(labelUnlockEl)
                profileDiv.appendChild(unlockInput)
                profileDiv.appendChild(brEl)
                profileDiv.appendChild(hrEl)
                profileDiv.appendChild(usernameLabel)
                profileDiv.appendChild(usernameInput)
                profileDiv.appendChild(userUsernameDivEl)
                profileDiv.appendChild(button)

                main.appendChild(profileDiv)
            })
        })
    function handleShowingInfo(e){
        const fullElement = e.target.parentElement
        
        const lockedRadioEl = fullElement.querySelector("input[type='radio']")
        const hiddenInfo = fullElement.querySelector(".hiddenInfo")

        if (lockedRadioEl.checked){
            return
        }

        switch (e.target.textContent){
            case "Show more":
                e.target.textContent = "Show less"
                hiddenInfo.style.display = "block"
                hiddenInfo.querySelectorAll("label, input").forEach(el => {
                    el.style.display = "block";
                });
                break;
            case "Show less":
                e.target.textContent = "Show more"
                hiddenInfo.style.display = "none"
                hiddenInfo.querySelectorAll("label, input").forEach(el => {
                    el.style.display = "none";
                });
        }
    }
}