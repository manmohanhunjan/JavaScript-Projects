function otp() {
  let x = Math.floor(Math.random() * 9999 + 1);
  console.log(x);
  g_var = x;
}

function check() {
  var y = document.getElementById("otp1").value;

  var hey = g_var === y ? console.log("success") : console.log("failed");

  document.getElementById("result").innerHTML = hey;
}
