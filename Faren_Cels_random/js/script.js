var num1 = Math.floor(Math.random() * 100);
document.getElementById("number1").value = num1;

var choice = Math.floor(Math.random() * 2);

var d_choice = choice == 0 ? "cel" : "faren";
document.getElementById("temp_type").innerHTML = d_choice;
console.log(d_choice);

function temp_convert() {
  const ans_user = document.getElementById("ans").value;

  const system_result = d_choice == "cel" ? ce() : fe();

  if (ans_user == system_result) {
    alert("you are correct");
  } else {
    alert("wrong");
  }
}

function ce() {
  const system_result = Math.floor(((num1 - 32) * 5) / 9);
  console.log(system_result);
  return system_result;
}
function fe() {
  const system_result = Math.floor(num1 * (9 / 5) + 32);
  console.log(system_result);
  return system_result;
}

//-----------------------------------

// //set timer
// setTimeout(timeover, 10000);

// function timeover() {
//   alert("Time out");
// }

// //-----------------------------------

//   const celcius = ((num1 - 32) * 5) / 9;
//   const faren = ((num1 - 32) * 5) / 9;

//   var result = d_choice == "cel" ? console.log(celcius) : console.log(faren);
//   document.getElementById("result").innerHTML = result;
//   alert(result);
