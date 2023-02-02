let isActive = true;
var num1 = Math.floor(Math.random() * 101);
document.getElementById("number1").value = num1;
var num2 = Math.floor(Math.random() * 101);
document.getElementById("number2").value = num2;

//-----------------------------------

//set timer
setTimeout(timeover, 10000);

function timeover() {
  alert("Time out");
  isActive = false;
}

//-----------------------------------

function result() {
  if (isActive) {
    const system_result = num1 + num2;
    const user_result = +document.getElementById("ans").value;
    var result =
      system_result == user_result ? "you won" : "you lose wrong Ans";
    alert(result);
  } else {
    alert("you are not allowed to do this action");
  }
}
