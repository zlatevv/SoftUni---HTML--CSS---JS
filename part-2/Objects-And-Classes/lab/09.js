function songs(arr){
    let n = arr.shift();
    let typeList = arr.pop();
    let songs = []

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    for (let song of arr){
        let [typeList, name, time] = song.split("_")
        let currentSong = new Song(typeList, name, time);

        songs.push(currentSong)
    }

    if (typeList === "all"){
        for (const song of songs){
            console.log(song.name);
            
        }
    }else {
        for (const song of songs){
            if (song.typeList === typeList){
                console.log(song.name);
                
            }
        }
    }
}