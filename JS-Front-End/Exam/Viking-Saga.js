function solve(array){
    const number = array.shift()
    
    const warriors = {}

    for (let i = 0; i < number; i++){
        const warriorInfo = array.shift().split("-")
        
        let name = warriorInfo.shift()
        let weapon = warriorInfo.shift()
        let strength = warriorInfo.shift()

        warriors[name] = { weapons: [weapon], strength: Number(strength) }
    }

    for (const string of array) {

        if (string == 'The Saga End'){
            break
        }
        const tokens = string.split(" -> ")

        const action = tokens.shift()
        const warriorName = tokens.shift()

        switch (action){
            case "Raid":
                let weapon = tokens.shift()
                let strengthRequired = Number(tokens.shift())

                if (warriors[warriorName]['strength'] > strengthRequired && warriors[warriorName]['weapons'].includes(weapon)){
                    warriors[warriorName]['strength'] -= strengthRequired
                    
                    console.log(`${warriorName} fought bravely with ${weapon} and now has ${warriors[warriorName]['strength']} strength!`);                    
                }else {
                    console.log(`${warriorName} couldn't join the raid with ${weapon}!`);
                    
                }
                break;
            case "Train":
                let strengthGained = Number(tokens.shift())

                if (warriors[warriorName]['strength'] === 100){
                    console.log(`${warriorName} is already at full strength!`);                    
                }else {
                    const oldStrength = warriors[warriorName]['strength']

                    warriors[warriorName]['strength'] = Math.min(100, oldStrength + strengthGained)
                    const recovered = 100 - oldStrength

                    console.log(`${warriorName} trained hard and gained ${recovered} strength!`);                    
                }
                break;
            case "Forge":
                let newWeapon = tokens.shift()

                if (warriors[warriorName]['weapons'].includes(newWeapon)){
                    console.log(`${warriorName} already wields ${newWeapon}.`);
                    
                }else {
                    warriors[warriorName]['weapons'].push(newWeapon)

                    console.log(`${warriorName} has forged a new weapon: ${newWeapon}!`);
                    
                }
        }
    }
    for (const [name, information] of Object.entries(warriors)) {
        console.log(`Warrior: ${name}`);
        console.log(` - Weapons: ${information['weapons'].join(", ")}`);
        console.log(` - Strength: ${information['strength']}`);
        
    }
}

solve(
    ([
    "3",
    "Floki-Hammer-20",
    "Helga-Net-100",
    "Thorvald-Axe-70",
    "Forge -> Helga -> Trap",
    "Raid -> Floki -> Hammer -> 30",
    "Raid -> Helga -> Trap -> 80",
    "Forge -> Thorvald -> Hammer",
    "The Saga Ends"
])
)