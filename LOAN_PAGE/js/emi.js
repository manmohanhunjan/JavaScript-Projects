function abc() {
  var a = document.getElementById("loan_amt").value;
  var n = 15 * 12;
  var EMI =
    (a * (8.5 / 12 / 100) * (1 + 8.5 / 12 / 100) ** n) /
    ((1 + 8.5 / 12 / 100) ** n - 1);
  document.getElementById("emi_r").innerHTML = EMI;
}
