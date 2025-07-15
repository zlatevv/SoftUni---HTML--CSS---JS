function solve() {
   const input = document.getElementById("searchField").value
   
   if (!input){
      return
   }
   const table = document.querySelectorAll("tbody tr")
   for (const row of table) {
      row.classList.remove("select")
   }
   for (const row of table) {
      if (row.textContent.includes(input)){
         row.classList.add("select")
      }
   }
}