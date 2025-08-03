function sumTable() {
    const costs = Array.from(document.querySelectorAll("tbody tr td:nth-child(2)"))
    const sumTdEl= costs.pop();

    let sum = 0
    for (const cost of costs) {
        sum += Number(cost.textContent)
    }
    sumTdEl.textContent = sum
}