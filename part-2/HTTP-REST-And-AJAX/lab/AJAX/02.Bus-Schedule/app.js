function solve() {
    let id = "depot"
    const infoElement = document.querySelector('.info');   
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    
    function depart() {

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                infoElement.textContent = `Next stop ${data.name}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
                id = data.next;
            })
            .catch(error => {
                console.error('Error fetching bus schedule:', error);
            });
    }

    function arrive() {
        arriveButton.disabled = true;
        departButton.disabled = false;
        infoElement.textContent = `Arriving at ${id}`;
        id = "depot";
    }

    return {
        depart,
        arrive
    };
}

let result = solve();