const messagesTextArea = document.getElementById("messages")
const authorEl = document.querySelector("input[name='author']")
const messageEl = document.querySelector("input[name='content']")
const submitBtn = document.getElementById("submit")
const refreshBtn = document.getElementById("refresh")

function attachEvents() {
    submitBtn.addEventListener("click", handleSubmition)
    refreshBtn.addEventListener("click", handleRefreshing)
}
async function handleSubmition() {
    const author = authorEl.value.trim()
    const content = messageEl.value.trim()

    const message = { author, content }

    const result = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
}
async function handleRefreshing() {
    const result = await fetch(`http://localhost:3030/jsonstore/messenger`)
    const data = await result.json()

    let messages = []
    for (const message of Object.values(data)) {
        messages.push(`${message.author}: ${message.content}`)
    }
    messagesTextArea.innerHTML = messages.join("\n")
}
attachEvents();