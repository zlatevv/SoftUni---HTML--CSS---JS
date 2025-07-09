function piccolo(commands){
    let parkingLot = new Set()

    for (let line of commands) {
        let [direction, carNumber] = line.split(', ');

        if (direction === "IN") {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }
    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        [...parkingLot]
            .sort()
            .forEach(car => console.log(car));
    }
}