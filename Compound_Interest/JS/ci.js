// function QCI() {
//   var PA = document.getElementById("pa").value;
//   var RATE = document.getElementById("rate").value;
//   var n = document.getElementById("nYrs").value;
//   var A = (PA * (1 + RATE / (4 * 100))) ** (4 * n);
//   var CI = A - PA;
//   document.getElementById("result").innerHTML = CI;
// }
// function HCI() {
//   var PA = document.getElementById("pa").value;
//   var RATE = document.getElementById("rate").value;
//   var n = document.getElementById("nYrs").value;
//   var A = (PA * (1 + RATE / (2 * 100))) ** (2 * n);
//   var CI = A - PA;
//   document.getElementById("result").innerHTML = CI;
// }
function ACI() {
  var PA = document.getElementById("pa").value;
  console.log(PA);
  var RATE = document.getElementById("rate").value;
  console.log(RATE);
  var n = document.getElementById("nYrs").value;
  console.log(n);
  var A = 1 + RATE / 100;
  console.log(A);
  var B = Math.pow(A, n);
  var C = PA * B;
  var CI = C - PA;
  console.log(CI);
  document.getElementById("result").innerHTML = CI;
}
//How to put value like 9 months
function HCI() {
  var PA = document.getElementById("pa").value;
  var RATE = document.getElementById("rate").value;
  var n = document.getElementById("nYrs").value;
  //   var A = (PA * (1 + RATE / (2 * 100))) ** (2 * n);
  var A = 1 + RATE / (2 * 100);
  var B = Math.pow(A, 2 * n);
  var C = PA * B;
  var CI = C - PA;
  document.getElementById("result").innerHTML = CI;
}
function QCI() {
  var PA = document.getElementById("pa").value;
  var RATE = document.getElementById("rate").value;
  var n = document.getElementById("nYrs").value;
  var A = 1 + RATE / (4 * 100);
  var B = Math.pow(A, 4 * n);
  var C = PA * B;
  var CI = C - PA;
  document.getElementById("result").innerHTML = CI;
}
