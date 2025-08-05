function solution(array){
    let spell = array.shift()

    for (const string of array) {
        if (string == "End"){
            break;
        }
        const tokens = string.split("!")
        const command = tokens[0]

        switch (command){
            case "RemoveEven":
                let result = ''
                for (let i = 0; i < spell.length; i += 2){
                    result += spell[i]
                }
                spell = result
                console.log(spell);               
                break;
            case "TakePart":
                const fromIndex = Number(tokens[1])
                const toIndex = Number(tokens[2])

                spell = spell.slice(fromIndex, toIndex)
                console.log(spell);
                break;
            case "Reverse":
                const substring = tokens[1]      
                
                if (spell.includes(substring)){
                    spell = spell.replace(substring, "")

                    const result = substring.split("").reverse().join("")

                    spell += result

                    console.log(spell);
                    
                }else {
                    console.log("Error");                   
                }
        }
    }
    console.log(`The concealed spell is: ${spell}`);
}

solution(
    ["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
"TakePart!31!42",
"RemoveEven",
"Reverse!anim",
"Reverse!sad",
"End"]
)