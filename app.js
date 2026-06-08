let gameSeq = [];
let userSeq = [];

let btn = ["pink", "green", "orange", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let body = document.querySelector("body");

document.addEventListener("keypress", function() {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 350);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score is <b>${level}. Press any key to start.`;
        body.classList.add("danger");
        setTimeout(function() {
            body.classList.remove("danger")
        }, 150)
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let boxes = document.querySelectorAll(".box");
for(box of boxes){
    box.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}