document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.getElementById("task-input")
   const inputSectionsEl = document.querySelector("input[type='text']")
   const content = document.getElementById("content")

   formEl.addEventListener("submit", handleSubmit)

   function handleSubmit(e){
      e.preventDefault()
      content.innerHTML = ""
      let sectionsArr = inputSectionsEl.value.trim().split(", ")
      
      sectionsArr.forEach(element => {
         const divEl = document.createElement("div")
         const pEl = document.createElement("p")
         pEl.textContent = element
         pEl.style.display = "none"
         divEl.appendChild(pEl)
         content.appendChild(divEl)

         divEl.addEventListener("click", () =>{
            pEl.style.display = "block"
         })
      });
   }
}