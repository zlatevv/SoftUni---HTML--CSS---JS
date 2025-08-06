function solve(array) {
    const numberOfAstronauts = Number(array.shift())

    const astronauts = {}
    for (let i = 0; i < numberOfAstronauts; i++){
        let astronaut = array.shift().split(" ")
        const name = astronaut[0]
        const section = astronaut[1]
        const skills = astronaut[2].split(",")

        astronauts[name] = {
            section,
            skills
        }
    }
    for (const line of array) {
        let tokens = line.split(" / ")

        let command = tokens[0]
        let astronautName = tokens[1]

        switch (command){
            case "Perform":
                let spaceCraftSection = tokens[2]
                let skill = tokens[3]

                if (astronauts[astronautName]['section'] == spaceCraftSection && astronauts[astronautName]['skills'].includes(skill)){
                    console.log(`${astronautName} has successfully performed the skill: ${skill}!`);
                }else {
                    console.log(`${astronautName} cannot perform the skill: ${skill}.`);
                }
                break;
            case "Transfer":
                let newSpaceCraftSection = tokens[2]
                astronauts[astronautName]['section'] = newSpaceCraftSection
                console.log(`${astronautName} has been transferred to: ${newSpaceCraftSection}`);
                break;
            case "Learn Skill":
                let newSkill = tokens[2]
                
                if (astronauts[astronautName]['skills'].includes(newSkill)){
                    console.log(`${astronautName} already knows the skill: ${newSkill}.`);                    
                }else {
                    astronauts[astronautName]['skills'].push(newSkill)
                    console.log(`${astronautName} has learned a new skill: ${newSkill}.`);                   
                }
        }
    }
    for (const [astronautName, information] of Object.entries(astronauts)) {
        const section = information['section']
        const skills = information['skills']

        skills.sort((a, b) => a.localeCompare(b))

        console.log(`Astronaut: ${astronautName}, Section: ${section}, Skills: ${skills.join(", ")}`);
        
    }
}
solve(
    [
  "2",
  "Alice command_module piloting,communications",
  "Bob engineering_bay repair,maintenance",
  "Perform / Alice / command_module / piloting",
  "Perform / Bob / command_module / repair",
  "Learn Skill / Alice / navigation",
  "Perform / Alice / command_module / navigation",
  "Transfer / Bob / command_module",
  "Perform / Bob / command_module / maintenance",
  "End"
]
)