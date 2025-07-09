function inventory(heroInformation){
    let heroes = []

    for (let hero of heroInformation){
        let [name, level, ...items] = hero.split(" / ")

        let currentHero = {
            name,
            level,
            items
        }

        heroes.push(currentHero)
    }
    heroes.sort((a, b) => Number(a.level) - Number(b.level));

    for (const hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}