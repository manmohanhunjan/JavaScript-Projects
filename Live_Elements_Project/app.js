const productName = document.querySelector('#productName')
const productPrice = document.querySelector("#productPrice")
const productDescription = document.querySelector("#productDescription")
const tax = document.querySelector("#tax")
const discountType = document.querySelector("#discount_type")
const discountValue = document.querySelector("#discount_value")
const container = document.querySelector(".styled-table")

const span = []
const h2 = []

let i = 0;
while (i < 7) {
    h2[i] = document.createElement('h2');
    h2[i].textContent = "";
    span[i] = document.createElement('span');
    span[i].textContent = "";
    h2[i].appendChild(span[i]);
    container.appendChild(h2[i]); 
    i++;
  }


// console.log(h2)


productName.addEventListener('keyup', function () {
    
    span[0].textContent = productName.value
    h2[0].textContent = 'Product Name:'

    
})
productPrice.addEventListener('keyup', function () {
    
    h2[1].textContent = 'Product Price:'
    span[1].textContent = productPrice.value

    
})
