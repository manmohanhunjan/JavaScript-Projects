const productName = document.querySelector('#productName')
const productPrice = document.querySelector("#productPrice")
const productDescription = document.querySelector("#productDescription")
const tax = document.querySelector("#tax")
const discountType = document.querySelector("#discount_type")
const discountValue = document.querySelector("#discount_value")
const container = document.querySelector("#daRealContainer")

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
    
    h2[0].textContent = 'Product Name:'+ productName.value;

    
})
productPrice.addEventListener('keyup', function () {
    
    h2[1].textContent = 'Product Price:'+ productPrice.value;
    
})

productDescription.addEventListener('keyup', function () {
        
        h2[2].textContent = 'Product Description:'+ productDescription.value;
        
    })

tax.addEventListener('change', function () {
        
        h2[3].textContent = 'Tax:'+ tax.value;
        
    })

discountType.addEventListener('change', function () {
        
        h2[4].textContent = 'Discount Type:'+ discountType.value;
        
    }
)

discountValue.addEventListener('keyup', function () {
            
            h2[5].textContent = 'Discount Value:'+ discountValue.value;
            
        }
    )
