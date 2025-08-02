const locationInputEl = document.getElementById("location")
const submitionBtn = document.getElementById("submit")
const currentForecastEl = document.getElementById("current")
const upcomingForecastEl = document.getElementById("upcoming")
const forecastEl = document.getElementById("forecast")

const weatherSymbols = {
    "Sunny": "&#x2600",
    "Partly sunny": "&#x26C5",
    "Overcast": "&#x2601",
    "Rain": "&#x2614",
    "Degrees": "&#176",
}
function attachEvents() {
    submitionBtn.addEventListener("click", handleSubmition)
}

async function handleSubmition(){
    forecastEl.style.display = "block"
    currentForecastEl.querySelectorAll(".forecasts").forEach(n => n.remove());
    upcomingForecastEl.querySelectorAll(".forecast-info").forEach(n => n.remove());

    try {
        let isFound = false

        const result = await fetch("http://localhost:3030/jsonstore/forecaster/locations")
        if (!result.ok){
            throw new Error()
        }

        const locations = await result.json()

        for (const location of locations) {
            if (location.name == locationInputEl.value){
                isFound = true
                await Promise.all([
                    handleTodaysForecast(location),
                    handleUpcomingForecast(location)
                ]);
            }
        }
        if (!isFound){
            throw new Error()
        }
    }
    catch {
        forecastEl.textContent = "Error"
    }
}
async function handleTodaysForecast(location) {
    const result = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
    const data = await result.json()

    const forecastsDivEl = document.createElement("div")
    forecastsDivEl.classList.add("forecasts")

    const spanConditionSymbolEl = document.createElement("span")
    spanConditionSymbolEl.classList.add("condition" , "symbol")
    spanConditionSymbolEl.innerHTML = weatherSymbols[data.forecast.condition]

    const spanConditionEl = document.createElement("span")
    spanConditionEl.classList.add("condition")

    const spanForecastData1 = document.createElement("span")
    spanForecastData1.classList.add("forecast-data")
    spanForecastData1.innerHTML = data.name

    const spanForecastData2 = document.createElement("span")
    spanForecastData2.classList.add("forecast-data")
    spanForecastData2.innerHTML = `${data.forecast.low}${weatherSymbols['Degrees']}/${data.forecast.high}${weatherSymbols['Degrees']}`

    const spanForecastData3 = document.createElement("span")
    spanForecastData3.classList.add("forecast-data")
    spanForecastData3.innerHTML = data.forecast.condition

    spanConditionEl.appendChild(spanForecastData1)
    spanConditionEl.appendChild(spanForecastData2)
    spanConditionEl.appendChild(spanForecastData3)

    forecastsDivEl.appendChild(spanConditionSymbolEl)
    forecastsDivEl.appendChild(spanConditionEl)

    currentForecastEl.appendChild(forecastsDivEl)
}
async function handleUpcomingForecast(location) {
    const result = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
    const data = await result.json()
    const upcomingForecast = data.forecast

    for (const day of upcomingForecast) {
        const forecastInfoDiv = document.createElement("div")
        forecastInfoDiv.classList.add("forecast-info")

        const upcomingSpanEl = document.createElement("span")
        upcomingSpanEl.classList.add("upcoming")

        const symbolEl = document.createElement("span")
        symbolEl.classList.add("symbol")
        symbolEl.innerHTML = weatherSymbols[day.condition]

        const forecastDataEl1 = document.createElement("span")
        forecastDataEl1.classList.add("forecast-data")
        forecastDataEl1.innerHTML = `${day.low}${weatherSymbols.Degrees}/${day.high}${weatherSymbols.Degrees}`

        const forecastDataEl2 = document.createElement("span")
        forecastDataEl2.classList.add("forecast-data")
        forecastDataEl2.innerHTML = day.condition

        upcomingSpanEl.appendChild(symbolEl)
        upcomingSpanEl.appendChild(forecastDataEl1)
        upcomingSpanEl.appendChild(forecastDataEl2)

        forecastInfoDiv.appendChild(upcomingSpanEl)

        upcomingForecastEl.appendChild(forecastInfoDiv)
    }
}

attachEvents();