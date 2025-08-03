function solution() {
    const mainSection = document.querySelector("#main")

    fetch("http://localhost:3030/jsonstore/advanced/articles/list")
            .then(result => result.json())
            .then(data => { 
                data.forEach(element => {
                    const accordionEl = document.createElement("div")
                    accordionEl.classList.add("accordion")

                    const head = document.createElement("div")
                    head.classList.add("head")

                    const spanEl = document.createElement("span")
                    spanEl.innerHTML = element.title
                    
                    const buttonEl = document.createElement("button")
                    buttonEl.classList.add("button")
                    buttonEl.id = element._id
                    buttonEl.textContent = "More"
                    buttonEl.addEventListener("click", handleInformationShowing)

                    head.appendChild(spanEl)
                    head.appendChild(buttonEl)

                    const extra = document.createElement("div")
                    extra.classList.add("extra")

                    const pEl = document.createElement("p")
                    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`)
                        .then(result => result.json())
                        .then(data => {
                            pEl.textContent = data.content
                        })
                    extra.appendChild(pEl)

                    accordionEl.appendChild(head)
                    accordionEl.appendChild(extra)

                    mainSection.appendChild(accordionEl)
                });
        })
    
    function handleInformationShowing(e){
        const parentEl = e.target.parentElement.parentElement
        const extraClass = parentEl.querySelector(".extra")

        switch (e.target.innerHTML){
            case "More":
                e.target.innerHTML = "Less"
                extraClass.style.display = "block"
                break;
            case "Less":
                e.target.innerHTML = "More"
                extraClass.style.display = "none"
        }
    }
}
solution()