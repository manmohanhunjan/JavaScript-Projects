function abc() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var z = document.getElementById("z").value;
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var d = document.getElementById("d").value;
  console.log(x, y, z, a, b, c, d);
  var swap =
    x != undefined && x != ""
      ? x
      : y != undefined && y != ""
      ? y
      : z != undefined && z != ""
      ? z
      : a != undefined && a != ""
      ? a
      : b != undefined && b != ""
      ? b
      : c != undefined && c != ""
      ? c
      : d != undefined && d != ""
      ? d
      : 85;
  document.getElementById("result").innerHTML = swap;
  // alert(abc);
}
