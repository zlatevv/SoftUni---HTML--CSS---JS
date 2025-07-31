function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching bus information');
            }
            return response.json();
        })
        .then(busStopInformation => {
            const buses = busStopInformation.buses;
            stopName.textContent = busStopInformation.name;
            busesList.innerHTML = '';
            for (const [busID, time] of Object.entries(buses)) {
                const liItem = document.createElement('li');
                liItem.textContent = `Bus ${busID} arrives in ${time} minutes`;
                busesList.appendChild(liItem);
            }
        })
        .catch(() => {
            stopName.textContent = 'Error';
        })
}