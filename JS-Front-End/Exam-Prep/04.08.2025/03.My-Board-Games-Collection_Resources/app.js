const loadGamesBtn = document.getElementById("load-games")
const gamesList = document.getElementById("games-list")
const addBtn = document.getElementById("add-game")
const editBtn = document.getElementById("edit-game")
const nameInput = document.getElementById("g-name")
const typeInput = document.getElementById("type")
const maxPlayersInput = document.getElementById("players")

addBtn.addEventListener("click", handleAddingGame)
loadGamesBtn.addEventListener("click", handleLoadingGames)
editBtn.addEventListener("click", handleEditingGame)

let selectedGameId = null

async function handleLoadingGames() {
    const result = await fetch("http://localhost:3030/jsonstore/games")
    const data = await result.json()
    gamesList.innerHTML = ''
  
    Object.values(data).forEach(game => {
        const boardGameDiv = document.createElement("div")    
        boardGameDiv.classList.add("board-game")
        
        const contentDiv = document.createElement("div")
        contentDiv.classList.add("content")
        
        const namePEl = document.createElement("p")
        namePEl.textContent = game.name

        const playersPEl = document.createElement("p")
        playersPEl.textContent = game.players

        const typePEl = document.createElement("p")
        typePEl.textContent = game.type

        contentDiv.appendChild(namePEl)
        contentDiv.appendChild(playersPEl)
        contentDiv.appendChild(typePEl)

        const buttonsDiv = document.createElement("div")
        buttonsDiv.classList.add("buttons-container")

        const changeBtn = document.createElement("button")
        changeBtn.classList.add("change-btn")
        changeBtn.innerHTML = "Change"
        changeBtn.addEventListener("click", handleChangingGame)

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.addEventListener("click", async () => {
            await fetch(`http://localhost:3030/jsonstore/games/${game._id}`, {
                method: "DELETE"
            });
            await handleLoadingGames();
        });

        buttonsDiv.appendChild(changeBtn)
        buttonsDiv.appendChild(deleteBtn)

        boardGameDiv.appendChild(contentDiv)
        boardGameDiv.appendChild(buttonsDiv)

        gamesList.appendChild(boardGameDiv)

        function handleChangingGame(){
            nameInput.value = game.name
            typeInput.value = game.type
            maxPlayersInput.value = game.players

            addBtn.disabled = true
            editBtn.disabled = false

            selectedGameId = game._id
        }
    });
}

async function handleAddingGame() {
    const name = nameInput.value 
    const type = typeInput.value
    const players = maxPlayersInput.value 

    await fetch("http://localhost:3030/jsonstore/games", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ name, type, players})
    })
    nameInput.value = ''
    typeInput.value = ''
    maxPlayersInput.value = ''
    await handleLoadingGames()
}

async function handleEditingGame() {
    const name = nameInput.value 
    const type = typeInput.value
    const players = maxPlayersInput.value

    await fetch (`http://localhost:3030/jsonstore/games/${selectedGameId}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ name, type, players})
    })

    nameInput.value = ''
    typeInput.value = ''
    maxPlayersInput.value = ''

    editBtn.disabled = true
    addBtn.disabled = false

    selectedGameId = null

    await handleLoadingGames()
}