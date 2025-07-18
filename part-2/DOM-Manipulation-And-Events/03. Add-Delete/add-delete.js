function addItem() {
    const input = document.getElementById("newItemText").value
    const list = document.getElementById("items")

    let liItem = document.createElement("li")
    liItem.textContent = input

    const deleteEl = document.createElement("a")
    deleteEl.textContent = "[Delete]"
    deleteEl.href = "#"

    liItem.append(deleteEl)

    liItem.addEventListener("click", handleDelete)
    list.append(liItem)

    function handleDelete(){
        liItem.remove()
    }
}
