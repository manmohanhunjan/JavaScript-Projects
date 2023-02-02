// E=P*r*(1 + r)**n/(((1+r)**n) -1)
function emi() {
  var P = document.getElementById("p").value;
  var n = document.getElementById("n").value;
  var r = document.getElementById("r").value;
  //   var r = r / 12 / 100;
  var EMI = (E =
    (P * (r / 12 / 100) * (1 + r / 12 / 100) ** n) /
    ((1 + r / 12 / 100) ** n - 1));
  document.getElementById("result").innerHTML = EMI;
  var emiInt = n * EMI;
  document.getElementById("with_interest").innerHTML = emiInt;
}

// function emiInt (){
//     var r = document.getElementById("r").value;
//     var EmiInt =
// }
