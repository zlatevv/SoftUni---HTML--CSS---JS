function movies(commands){
    let movies = []

    for (let command of commands) {
        if (command.startsWith("addMovie ")) {
            let name = command.substring(9);
            movies.push({ name });
        } else if (command.includes(" directedBy ")) {
            let [name, director] = command.split(" directedBy ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(" onDate ")) {
            let [name, date] = command.split(" onDate ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of movies){
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
            
        }
    }
}