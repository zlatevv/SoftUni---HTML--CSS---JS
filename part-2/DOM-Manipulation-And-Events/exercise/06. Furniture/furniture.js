document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputForm = document.getElementById("input")
    const table = document.querySelector("tbody")
    const buyItemsBtn = document.querySelector("#shop input[type='submit']")
    const outputEl = document.querySelector("#shop textarea")

    buyItemsBtn.addEventListener("click", handleBuying)
    inputForm.addEventListener("submit", handleGenerating)

    function handleBuying(){
      const checkedRows = document.querySelectorAll("tbody input:checked")
      let boughtFurniture = []
      let totalPrice = 0
      let decFactorSum = 0

      checkedRows.forEach(checkedRow => {
        const parentEl = checkedRow.closest("tr")
        const name = parentEl.querySelector("td:nth-child(2)").textContent
        const price = Number(parentEl.querySelector("td:nth-child(3)").textContent)
        const decFactor = Number(parentEl.querySelector("td:nth-child(4)").textContent)

        totalPrice += price
        boughtFurniture.push(name)
        decFactorSum += decFactor
      })
      let decFactorAvg = decFactorSum / checkedRows.length
      outputEl.textContent += `Bought furniture: ${boughtFurniture.join(", ")}\n`
      outputEl.textContent += `Total price: ${totalPrice}\n`
      outputEl.textContent += `Average decoration factor: ${decFactorAvg}`
    }
    
    function handleGenerating(e){
      e.preventDefault()
      const inputTextArea = document.querySelector("#input textarea").value
      const furniture = Array.from(JSON.parse(inputTextArea))
      
      furniture.forEach(furnitureObj => {
        const trEl = document.createElement("tr")

        const tdImgEl = document.createElement("td")
        const imgEl = document.createElement("img")
        imgEl.src = furnitureObj.img
        tdImgEl.appendChild(imgEl)

        const tdNameEl = document.createElement("td")
        const nameEl = document.createElement("p")
        nameEl.textContent = furnitureObj.name
        tdNameEl.appendChild(nameEl)
        
        const tdPriceEl = document.createElement("td")
        const priceEl = document.createElement("p")
        priceEl.textContent = furnitureObj.price
        tdPriceEl.appendChild(priceEl)

        const tdDecFactorEl = document.createElement("td")
        const decFactorEl = document.createElement("p")
        decFactorEl.textContent = furnitureObj.decFactor
        tdDecFactorEl.appendChild(decFactorEl)
        
        const tdCheckedEl = document.createElement("td")
        const inputEl = document.createElement("input")
        inputEl.type = "checkbox"
        tdCheckedEl.appendChild(inputEl)

        trEl.appendChild(tdImgEl)
        trEl.appendChild(tdNameEl)
        trEl.appendChild(tdPriceEl)
        trEl.appendChild(tdDecFactorEl)
        trEl.appendChild(tdCheckedEl)

        table.appendChild(trEl)
      })
    }
}