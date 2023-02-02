function xyz() {
  var x = document.getElementById("prod").value;
  var y = document.getElementById("per").value;
  var OC = x * (100 / (100 + y / 100));
  var OC1 = x - OC;
  // var OC = (x * 100) / (100 + y / 100);
  var Net_Oc = x - OC1;
  document.getElementById("result").innerHTML = Net_Oc;
}
function abc() {
  var x = document.getElementById("Ocost").value;
  var y = document.getElementById("per").value;
  var y = y / 100;
  console.log(y);
  var G_amount = x * y;
  console.log(G_amount);
  console.log(x);
  var Net_P = x + G_amount;
  document.getElementById("result").innerHTML = Net_P;
}
