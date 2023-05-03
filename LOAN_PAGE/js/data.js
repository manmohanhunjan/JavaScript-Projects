// var nam = document.getElementById("nm1");
// document.getElementById("n1").innerHTML = nam.value;
// var email = document.getElementById("mail");
// document.getElementById("em1").innerHTML = email.value;

var nameIp = document.querySelector("#nm1")
var emailIp = document.querySelector("#mail")

var nameOp = document.querySelector("#n1")
var emailOp = document.querySelector("#em1")

var subBtn = document.querySelector("#subb")

subBtn.addEventListener('click', function () {
    nameOp.textContent = nameIp.value;
    emailOp.textContent = emailIp.value;
})