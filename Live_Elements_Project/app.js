const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productDescription = document.querySelector("#productDescription");
const tax = document.querySelector("#tax");
const discountType = document.querySelector("#discount_type");
const discountValue = document.querySelector("#discount_value");
const container = document.querySelector("#daRealContainer");
let totlal = total();

const span = [];
const h2 = [];

let i = 0;
while (i < 7) {
  h2[i] = document.createElement("h2");
  h2[i].textContent = "";
  span[i] = document.createElement("span");
  span[i].textContent = "";
  h2[i].appendChild(span[i]);
  container.appendChild(h2[i]);
  i++;
}

// console.log(h2)

productName.addEventListener("keyup", function () {
  h2[0].textContent = "Product Name:" + productName.value;
});
productPrice.addEventListener("keyup", function () {
  h2[1].textContent = "Product Price:" + productPrice.value;
  h2[6].textContent = "Total:" + productPrice.value;

});

productDescription.addEventListener("keyup", function () {
  h2[2].textContent = "Product Description:" + productDescription.value;
  h2[6].textContent = "Total:" + productPrice.value;

});

tax.addEventListener("change", function () {
  h2[3].textContent = "Tax:" + tax.value;
  h2[6].textContent = "Total:" + total();

});

discountType.addEventListener("change", function () {
  h2[4].textContent = "Discount Type:" + discountType.value;
  h2[6].textContent = "Total:" + total();

});

discountValue.addEventListener("keyup", function () {
  h2[5].textContent = "Discount Value:" + discountValue.value;
  h2[6].textContent = "Total:" + total();
});

function total() {
    var dis_calc_value = 0;
    var tax_value = parseInt(tax.value);
  
    if (discountType.value == "FLAT") {
      var sp = parseInt(productPrice.value);
      dis_calc_value = sp + (parseInt(tax_value * sp) / 100) - parseInt(discountValue.value);
    } else if (discountType.value == "PERCENT") {
      var sp = parseInt(productPrice.value);
      dis_calc_value =
        sp +
        parseInt((tax_value * sp) / 100) -
        parseInt((discountValue.value * sp) / 100);
    }
  
    return dis_calc_value;
  }