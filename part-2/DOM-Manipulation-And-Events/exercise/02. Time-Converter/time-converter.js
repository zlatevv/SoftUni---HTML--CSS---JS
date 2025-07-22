document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const forms = document.querySelectorAll("form")
    const days = document.getElementById("days-input")
    const hours = document.getElementById("hours-input")
    const minutes = document.getElementById("minutes-input")
    const seconds = document.getElementById("seconds-input")
    
    forms.forEach(form => form.addEventListener("submit", handleSubmition))

    function handleSubmition(e){
        e.preventDefault()
        const clickedTarget = e.target
        
        switch (clickedTarget.id){
            case "days":
                const daysValue = days.value 
                hours.value = (daysValue * 24).toFixed(2)
                minutes.value = (daysValue * 1440).toFixed(2)
                seconds.value = (daysValue * 86400).toFixed(2)
                break;
            case "hours":
                const hoursValue = hours.value
                days.value = (hoursValue / 24).toFixed(2)
                minutes.value = (hoursValue * 60).toFixed(2)
                seconds.value = (hoursValue * 3600).toFixed(2)
                break;
            case "minutes":
                const minutesValue = minutes.value
                days.value = (minutesValue / 1440).toFixed(2)
                hours.value = (minutesValue / 60).toFixed(2)
                seconds.value = (minutesValue * 60).toFixed(2)
                break
            case "seconds":
                const secondsValue = seconds.value
                days.value = (secondsValue / 86400).toFixed(2)
                hours.value = (secondsValue / 3600).toFixed(2)
                minutes.value = (secondsValue / 60).toFixed(2)
        }
    }
}