function colorize() {
    let table = document.querySelectorAll("tbody tr")

    table.forEach((item, idx) => {
        if (idx % 2 != 0){
            item.style.backgroundColor = "Teal"
        }
    })
}