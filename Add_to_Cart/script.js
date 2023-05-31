const submitBtn = document.querySelector("#submitBtn"); // submit button
const tbody = document.querySelector("tbody"); // tbody

let count = 0; // count for serial number
const products = []; // array for storing product details

submitBtn.addEventListener("click", () => {     // submit button event listener
  const pName = document.querySelector("#pName").value;     // input field values
  const pSp = document.querySelector("#pSp").value; 
  const pCp = document.querySelector("#pCp").value;
  const pTax = document.querySelector("#pTax").value;
  const pDiscount = document.querySelector("#pDiscount").value;

  count += 1;

  const td = []; // array for storing td elements
  const tr = document.createElement("tr"); // tr element

  for (let j = 0; j < 7; j++) { // creating td elements
    td[j] = document.createElement("td"); 
  }

  class ProductDetails { // class for storing product details
    constructor(count, pName, pSp, pCp, pTax, pDiscount) { // constructor for product details 
      this.count = count;
      this.name = pName;
      this.sPrice = pSp;
      this.cPrice = pCp;
      this.tax = pTax;
      this.discount = pDiscount;
    }
  }

  const newProduct = new ProductDetails(count, pName, pSp, pCp, pTax, pDiscount); // creating new product object
  products.push(newProduct); // pushing new product object to products array

  td[0].textContent = newProduct.count; // adding product details to td elements
  td[1].textContent = newProduct.name;
  td[2].textContent = newProduct.sPrice;
  td[3].textContent = newProduct.cPrice;
  td[4].textContent = newProduct.tax;
  td[5].textContent = newProduct.discount;

  for (let k = 0; k < 6; k++) { // appending td elements to tr element
    tr.appendChild(td[k]);
  }
  td[6].innerHTML = `<button class="btn btn-success editBtn">Add To Cart</button>`; // adding delete button to td element 
  tr.appendChild(td[6]); // appending td element to tr element

  tbody.appendChild(tr); // appending tr element to tbody

//   input field reset
    document.querySelector("#pName").value = "";
    document.querySelector("#pSp").value = "";
    document.querySelector("#pCp").value = "";
    document.querySelector("#pTax").value = "";
    document.querySelector("#pDiscount").value = "";



});
