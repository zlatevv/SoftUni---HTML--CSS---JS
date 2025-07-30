function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commits = document.getElementById('commits');
    commits.innerHTML = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(commits => {
            commits.forEach(commit => {
                const liEl = document.createElement('li');
                liEl.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                document.getElementById('commits').appendChild(liEl);
            });
        })
        .catch(error => {
            commits.innerHTML = error.message
    });
}