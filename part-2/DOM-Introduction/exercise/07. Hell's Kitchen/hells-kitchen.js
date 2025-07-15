function solve() {
    const input = document.querySelector("#inputs textarea").value
    const bestRestaurantEL = document.querySelector("#bestRestaurant p")
    const workersEl = document.querySelector("#workers p")
    
    let restaurants = JSON.parse(input)
    let restaurantsWorkers = {}

    for (const restaurant of restaurants) {
        let [restaurantName, workers] = restaurant.split(" - ")
        
        if (!(restaurantName in restaurantsWorkers)){
            restaurantsWorkers[restaurantName] = []
        }
        
        const workersArr = workers.split(', ')
        for (const worker of workersArr) {
            let [workerName, wage] = worker.split(" ")
            wage = Number(wage)
            
            restaurantsWorkers[restaurantName].push({
                workerName,
                wage
            })
        }
    }
    
    let bestSalary = 0;
    let bestRestaurant = ''
    let bestAverage = 0

    for (const [restaurantName, workers] of Object.entries(restaurantsWorkers)) {
        workers.sort((a, b) => b.wage - a.wage)
        let sum = 0
        for (const worker of workers) {
            sum += worker.wage
        }
        let average = sum / workers.length

        if (average > bestAverage){
            bestAverage = average
            bestSalary = workers[0].wage
            bestRestaurant = restaurantName
        }
    }
    bestRestaurantEL.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
    for (const worker of restaurantsWorkers[bestRestaurant]) {
        workersEl.textContent += `Name: ${worker.workerName} With Salary: ${worker.wage} `

    }
}