const submitBtn = document.querySelector('a')
const productName = document.querySelector('#productName')
const productCP = document.querySelector('#productCP')
const productSP = document.querySelector('#productSP')
const tax = document.querySelector('#tax')
const discount_type = document.querySelector('#discount_type')
const discount_value = document.querySelector('#discount_value')

var counter = 0

const tbody = document.querySelector('tbody')

submitBtn.addEventListener('click' ,function () {
    counter += 1
    var total = totalCalculation()
    tbody.innerHTML += "<tr><td>"+counter+"</td><td>"+productName.value+"</td><td>"+productCP.value+"</td><td>"+productSP.value+"</td><td>"+tax.value +'%'+"</td><td>"+discount_type.value+"</td><td>"+discount_value.value+"</td><td>"+total+"</td></tr>"

})

function totalCalculation() {
    var dis_calc_value = 0
    var tax_value = parseInt(tax.value)
    
    if (discount_type.value == 'FLAT') {
        
        var sp = parseInt(productSP.value)
        dis_calc_value = (sp + parseInt(tax_value*sp)/100) - parseInt(discount_value.value)
    }
    else if (discount_type.value == 'PERCENT'){
        // discount_value = discount_value.value + '%';
        //tax
        var sp = parseInt(productSP.value)
        dis_calc_value = (sp + parseInt(tax_value*sp)/100) - parseInt((discount_value.value*sp)/100)

    }

    return dis_calc_value;
}