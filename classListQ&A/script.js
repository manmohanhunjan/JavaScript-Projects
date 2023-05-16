const btn = document.querySelector('#btnShowAns')
const ans = document.querySelector('#ans')

btn.addEventListener('click',function () {
    ans.classList.toggle('show')
})