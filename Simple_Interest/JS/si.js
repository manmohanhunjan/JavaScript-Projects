function calsi() {
  let P = document.getElementById("p").value;
  let R = document.getElementById("r").value;
  let T = document.getElementById("t").value;
  let si = (P * R * T) / 100;
  document.getElementById("result").innerHTML = si;
}
