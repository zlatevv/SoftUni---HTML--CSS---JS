function loadRepos() {
	const username = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	repos.innerHTML = '';

		try{
			fetch(`https://api.github.com/users/${username}/repos`)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(allRepos => {
					allRepos.forEach(repo => {
						const liEl = document.createElement('li');
						const aEl = document.createElement('a');
						aEl.href = repo.html_url;
						aEl.textContent = repo.full_name;

						liEl.appendChild(aEl);
						repos.appendChild(liEl);
					});
				})
		}
		catch (error){
			console.log(`Error: ${error.status} (Not Found)`);
		}
}