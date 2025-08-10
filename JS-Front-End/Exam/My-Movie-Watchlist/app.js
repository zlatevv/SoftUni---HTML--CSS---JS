const URL = "http://localhost:3030/jsonstore/movies/"

const movieList = document.getElementById("movie-list")
const loadMovies = document.getElementById("load-movies")

const movieTitleInput = document.getElementById("title")
const movieDirectorInput = document.getElementById("director")
const movieYearInput = document.getElementById("year")

const addBtn = document.getElementById("add-movie")
const editBtn = document.getElementById("edit-movie")

let selectedMovieId = null

loadMovies.addEventListener("click", handleLoading)
addBtn.addEventListener("click", handleAdding)
editBtn.addEventListener("click", handleEditting)

async function handleLoading() {
    const result = await fetch(URL)
    const data = await result.json()
    
    movieList.innerHTML = ''
    
    Object.values(data).forEach(movie => {
        const movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        const contentDiv = document.createElement("div")
        contentDiv.classList.add("content")

        const pName = document.createElement("p")
        pName.textContent = movie.title

        const pDirector = document.createElement("p")
        pDirector.textContent = movie.director

        const pYear = document.createElement("p")
        pYear.textContent = movie.year

        contentDiv.appendChild(pName)
        contentDiv.appendChild(pDirector)
        contentDiv.appendChild(pYear)

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("buttons-container")

        const changeBtn = document.createElement("button")
        changeBtn.textContent = "Change"
        changeBtn.classList.add("change-btn")
        changeBtn.addEventListener("click", handleChanging)

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")
        deleteBtn.addEventListener("click", handleDeleting)

        buttonContainer.appendChild(changeBtn)
        buttonContainer.appendChild(deleteBtn)

        movieDiv.appendChild(contentDiv)
        movieDiv.appendChild(buttonContainer)

        movieList.appendChild(movieDiv)

        function handleChanging(){
            movieTitleInput.value = movie.title
            movieDirectorInput.value = movie.director
            movieYearInput.value = movie.year

            addBtn.disabled = true
            editBtn.disabled = false

            selectedMovieId = movie._id
        }
        async function handleDeleting() {
            await fetch(`${URL}${movie._id}`, {
                method: "DELETE"
            })

            await handleLoading()
        }
    });
}

async function handleEditting() {
    if (!selectedMovieId){
        return
    }
    const title = movieTitleInput.value
    const director = movieDirectorInput.value 
    const year = movieYearInput.value

    await fetch(`${URL}${selectedMovieId}`, {
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ title, director, year})
    })

    movieTitleInput.value = ''
    movieDirectorInput.value = ''
    movieYearInput.value = ''

    editBtn.disabled = true;
    addBtn.disabled = false;

    selectedMovieId = null;

    await handleLoading()
}

async function handleAdding() {
    const title = movieTitleInput.value
    const director = movieDirectorInput.value 
    const year = movieYearInput.value 

    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ title, director, year})
    })

    movieTitleInput.value = ''
    movieDirectorInput.value = ''
    movieYearInput.value = ''

    await handleLoading()
}