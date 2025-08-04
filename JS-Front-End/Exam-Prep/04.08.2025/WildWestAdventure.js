function solution(array){
    const charactersToChoose = Number(array.shift())

    let characters = {}

    for (let i = 0; i < charactersToChoose; i++){
        const [name, hp, bullets]= array.shift().split(" ")
        characters[name] = { hp: Number(hp), bullets: Number(bullets) }
    }
   
    for (const command of array) {
        if (command == "Ride Off Into Sunset"){
            break;
        }
        const tokens = command.split(" - ")
        const action = tokens.shift()

        switch (action){
            case "FireShot": {
                const characterName = tokens.shift();
                const target = tokens.shift();

                if (!characters[characterName]) break;

                if (characters[characterName].bullets > 0) {
                characters[characterName].bullets -= 1;
                console.log(
                    `${characterName} has successfully hit ${target} and now has ${characters[characterName].bullets} bullets!`
                );
                } else {
                console.log(
                    `${characterName} doesn't have enough bullets to shoot at ${target}!`
                );
                }
                break;
            }

            case "TakeHit": {
                const characterName = tokens.shift();
                const damage = Number(tokens.shift());
                const attacker = tokens.shift();

                if (!characters[characterName]) break;

                characters[characterName].hp -= damage;
                if (characters[characterName].hp > 0) {
                console.log(
                    `${characterName} took a hit for ${damage} HP from ${attacker} and now has ${characters[characterName].hp} HP!`
                );
                } else {
                console.log(
                    `${characterName} was gunned down by ${attacker}!`
                );
                delete characters[characterName]; // optional: remove dead
                }
                break;
            }

            case "Reload": {
                const characterName = tokens.shift();
                if (!characters[characterName]) break;

                if (characters[characterName].bullets < 6) {
                const reloaded = 6 - characters[characterName].bullets;
                characters[characterName].bullets = 6;
                console.log(`${characterName} reloaded ${reloaded} bullets!`);
                } else {
                console.log(`${characterName}'s pistol is fully loaded!`);
                }
                break;
            }

            case "PatchUp": {
                const characterName = tokens.shift();
                const amount = Number(tokens.shift());
                if (!characters[characterName]) break;

                if (characters[characterName].hp === 100) {
                console.log(`${characterName} is in full health!`);
                } else {
                const oldHp = characters[characterName].hp;
                characters[characterName].hp = Math.min(100, oldHp + amount);
                const recovered = characters[characterName].hp - oldHp;
                console.log(
                    `${characterName} patched up and recovered ${recovered} HP!`
                );
                }
                break;
            }
        }
    }
    for (const [name, data] of Object.entries(characters)) {
        console.log(`${name}`)
        console.log(` HP: ${data.hp}`)
        console.log(` Bullets: ${data.bullets}`);
        
    }
}
solution(
    ((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]))
)