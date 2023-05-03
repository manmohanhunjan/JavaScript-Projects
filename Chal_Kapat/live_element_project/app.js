// DOM elements
const productNameInput = document.querySelector('#productName');
const productPriceInput = document.querySelector('#product_price');
const discountTypeInput = document.querySelector('#discount_type');
const discountAmountInput = document.querySelector('#dis_num');
const taxInput = document.querySelector('#tax');
const userBox1 = document.querySelector('#user_box1');
const userBox2 = document.querySelector('#user_box2');
const userBox3 = document.querySelector('#user_box3');
const userBox4 = document.querySelector('#user_box4');
const userBox5 = document.querySelector('#user_box5');
const finalResult = document.querySelector('#final_result');

// Event listeners
productNameInput.addEventListener('keyup', () => {
  userBox1.className = 'heading';
  userBox1.innerHTML = `Product name: ${productNameInput.value}`;
});

productPriceInput.addEventListener('keyup', () => {
  const price = Number(productPriceInput.value);
  userBox2.className = 'heading';
  userBox2.innerHTML = `Product price Rs: <span class="priza">${price}</span>`;
  finalResult.innerHTML = `RESULT: ${price}`;
});

discountTypeInput.addEventListener('change', () => {
  const type = discountTypeInput.value;
  userBox3.className = 'heading';
  userBox3.innerHTML = `Discount type Rs: ${type}`;
  finalResult.innerHTML = `RESULT: ${disCalculation()}`;
});

discountAmountInput.addEventListener('keyup', () => {
  const amount = Number(discountAmountInput.value);
  userBox4.className = 'heading';
  userBox4.innerHTML = `Discount amount: ${amount}`;
  finalResult.innerHTML = `Result including tax: ${taxCalculation()}`;
});

taxInput.addEventListener('change', () => {
  userBox5.className = 'heading';
  userBox5.innerHTML = `Tax: ${taxInput.value}`;
  finalResult.innerHTML = `Result including tax: ${taxCalculation()}`;
});

// Functions
function disCalculation() {
  const price = Number(productPriceInput.value);
  const amount = Number(discountAmountInput.value);
  const type = discountTypeInput.value;
  
  if (type === 'FLAT') {
    const discountResult = price - amount;
    userBox2.innerHTML = `Product price Rs: <span class="priza">${price}</span>`;
    return discountResult;
  }
  
  if (type === 'PERCENT') {
    const disPercResult = price - ((price * amount) / 100); 
    userBox2.innerHTML = `Product price Rs: <span class="priza">${price}</span>`;
    return disPercResult;
  }
  if((type==" ")||(type=="null")||(type=="undefined")){
    priza.innerHTML ="Product price"+" Rs : "+ "<span>"+price+"</span>";
   console.log(price);
    return price;
} 
  
  userBox2.innerHTML = `Product price Rs: <span class="priza">${price}</span>`;
  return price;
}

function taxCalculation() {
  const tax = Number(taxInput.value);
  const result = disCalculation() + disCalculation() * tax / 100;
  return result;
}