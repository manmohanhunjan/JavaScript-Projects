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
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    const td6 = document.createElement('td')
    const td7 = document.createElement('td')
    const td8 = document.createElement('td')

    counter += 1


    td1.textContent = counter
    td2.textContent = productName.value
    td3.textContent = productCP.value
    td4.textContent = productSP.value
    td5.textContent = tax.value + '%'  
    td6.textContent = discount_type.value
    // td7.textContent = discount_value.value
    var dis_calc_value = 0
    var tax_value = parseInt(tax.value)
    // alert(tax_value)
    if (discount_type.value == 'FLAT') {
        td7.textContent = discount_value.value
        //tax
        var sp = productSP.value
        dis_calc_value = (sp + (tax_value*sp)/100) - discount_value.value
    } else if (discount_type.value == 'PERCENT'){
        td7.textContent = discount_value.value + '%';
        //tax
        var sp = productSP.value
        dis_calc_value = (sp + (tax_value*sp)/100) - (discount_value.value*sp)/100
    }

    td8.textContent = dis_calc_value

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)

    tbody.appendChild(tr)

    //remover
    tr.addEventListener('click', function () {
        tbody.removeChild(tr)
    })
    
})

