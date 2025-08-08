const loadOrdersBtn = document.getElementById("load-orders")
loadOrdersBtn.addEventListener("click", handleLoading)

const orderBtn = document.getElementById("order-btn")
const editBtn = document.getElementById("edit-order")
const nameInput = document.getElementById("name")
const quantityInput = document.getElementById("quantity")
const dateInput = document.getElementById("date")
const ordersEl = document.getElementById("list")

orderBtn.addEventListener("click", handleAdding)
editBtn.addEventListener("click", handleEditing)

let selectedOrderId = null

async function handleLoading() {
    const result = await fetch("http://localhost:3030/jsonstore/orders")
    const data = await result.json()

    ordersEl.innerHTML = '';

    Object.values(data).forEach(order => {
        const container = document.createElement("div")
        container.classList.add("container")

        const nameEl = document.createElement("h2")
        nameEl.textContent = order.name

        const dateEl = document.createElement("h3")
        dateEl.textContent = order.date

        const quantityEl = document.createElement("h3")
        quantityEl.textContent = order.quantity

        const changeBtn = document.createElement("button")
        changeBtn.classList.add("change-btn")
        changeBtn.textContent = "Change"
        changeBtn.addEventListener("click", handleChanging)

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("done-btn")
        doneBtn.textContent = "Done"
        doneBtn.addEventListener("click", handleDone)

        container.appendChild(nameEl)
        container.appendChild(dateEl)
        container.appendChild(quantityEl)
        container.appendChild(changeBtn)
        container.appendChild(doneBtn)

        ordersEl.appendChild(container)

        async function handleChanging() {

            console.log(order);
            
            editBtn.disabled = false
            orderBtn.disabled = true

            nameInput.value = order.name
            quantityInput.value = order.quantity
            dateInput.value = order.date

            selectedOrderId = order._id
        }

        async function handleDone() {
            await fetch(`http://localhost:3030/jsonstore/orders/${order._id}`, {
                method: "DELETE"
            })

            await handleLoading()
        }
    })
}

async function handleAdding(e) {
    e.preventDefault()

    if (!nameInput.value || !quantityInput.value || !dateInput.value){
        return
    }

    const name = nameInput.value 
    const quantity = quantityInput.value 
    const date = dateInput.value 

    await fetch("http://localhost:3030/jsonstore/orders", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ name, quantity, date})
    })

    await handleLoading()

    nameInput.value = ''
    quantityInput.value = ''
    dateInput.value = ''
}

async function handleEditing(e) {
    e.preventDefault();

    if (!selectedOrderId) {
        return;
    }
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const date = dateInput.value;

    await fetch(`http://localhost:3030/jsonstore/orders/${selectedOrderId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            quantity,
            date
        })
    });

    await handleLoading();

    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';

    editBtn.disabled = true;
    orderBtn.disabled = false;

    selectedOrderId = null;
}