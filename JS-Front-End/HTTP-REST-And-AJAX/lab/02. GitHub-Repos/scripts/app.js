function loadRepos() {
   const resultEl = document.getElementById("res")

   fetch("https://api.github.com/users/testnakov/repos")
         .then(response => response.text())
         .then(data => {
            resultEl.textContent = data
         })

}