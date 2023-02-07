let buttons = document.querySelectorAll(".btn_option");
let board = ["", "", "", "", "", "", "", "", ""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");
let restart = document.getElementById("restart").addEventListener("click", restartFo);
let user__count1 = document.getElementById("user__count1");
let user__count2 = document.getElementById("user__count2");


let count1 = 0;
let count2 = 0;

let current_player = "X";
let game_over = false;

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];
  btn.addEventListener("click", function () {
    main(btn);
  });
}

function main(btn) {
  btn.innerHTML = current_player;
  board[btn.id - 1] = current_player;
  check();
  change_player();
  
}


function change_player() {
  if (current_player == "O") {
    current_player = "X";
  } else {
    current_player = "O";
  }
}

function check(){
    check_horizontal();
    check_vertical();
    check_diaganal();
    check_draw();
}

function check_horizontal(){
    if (allEqual([board[0], board[1], board[2], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual([board[3], board[4], board[5], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if (allEqual([board[6], board[7], board[8], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }

    
}
function check_vertical(){

    if (allEqual([board[0], board[3], board[6], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual([board[1], board[4], board[7], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if (allEqual([board[2], board[5], board[8], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }
}
function check_diaganal(){

    if (allEqual([board[0], board[4], board[8], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } else if(allEqual([board[2], board[4], board[6], current_player])){
        message.innerHTML = current_player + " won";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    }

}
function check_draw(){

    let check_if_exitst = board.includes("");
    if (allEqual(board) == false && check_if_exitst == false){

        if(game_over != true){
            message.innerHTML = "Draw";
            popup.classList.remove("hide");
            game_over =  true;
        }

    }

}

function allEqual(arry){
    const result = arry.every(element => {
        if (element === arry[0]) {
            return true;
        }
    });
    return result;
}

function restartFo (){
    popup.classList.add("hide");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].innerHTML = "";
        board[i] = "";

    }
    game_over = false;
}

function count_points(){
    if(current_player == "O"){
        count1 += 1;
        user__count1.innerHTML = count1;
    }
    else{
        count2 += 1;
        user__count2.innerHTML = count2;
    }
}