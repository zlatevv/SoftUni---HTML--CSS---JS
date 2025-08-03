document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const addButtons = Array.from(document.getElementsByClassName("add-product"))
   const textareaEl = document.querySelector("textarea")
   const checkoutButton = document.querySelector(".checkout")
   let products = {}
   let total = 0

   addButtons.forEach(button => button.addEventListener("click", addProduct))
   checkoutButton.addEventListener("click", handleCheckout)
   
   
   function handleCheckout(){
      textareaEl.textContent += `You bought ${Object.keys(products).join(", ")} for ${total.toFixed(2)}.`
      addButtons.forEach(button => button.disabled = true)
      checkoutButton.disabled = true
   }
   
   
   function addProduct(e){
      const clickedButton = e.target
      const product = clickedButton.closest(".product")

      const productTitle = product.querySelector('.product-title').textContent
      const productPrice = product.querySelector('.product-line-price').textContent
      
      const price = Number(productPrice)
      textareaEl.textContent += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`

      if (!(products.hasOwnProperty(productTitle))){
         products[productTitle] = price
      }else {
         products[productTitle] += price
      }
      total += price
   }

}