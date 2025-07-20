function addItem() {
    const input = document.getElementById("newItemText").value
    const list = document.getElementById("items")

    let liItem = document.createElement("li")
    liItem.textContent = input
    list.append(liItem)
}
