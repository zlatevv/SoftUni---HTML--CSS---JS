function solve() {
    const text = document.getElementById("text").value;
    const typeCase = document.getElementById("naming-convention").value
    const result = document.getElementById("result")

    switch (typeCase){
      case "Camel Case":
        let words = text.split(" ")
        

        break;
      case "Pascal Case":



        break;
      default:
        result.textContent += "Error!"
    }
    
}