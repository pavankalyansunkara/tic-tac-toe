// let container = document.querySelector(".container");
// let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let newgamebtn = document.querySelector("#new-btn");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;
let turnX = true;

let winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
      if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        count++;
        if(count === 9){
            msg.innerText = "The Match is Draw";
            msgcontainer.classList.remove("hide");
        }
        console.log(count);
        checkWinner();
        box.disabled = true;
    })
   
})
let checkWinner = () =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            }}
    }
}



let showWinner = (winner) =>{
    msg.innerText = `Congartulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

let resetgame = () =>{
    count = 0;
    turnX = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

let disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);