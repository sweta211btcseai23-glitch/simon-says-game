let h3 = document.querySelector("h3");
let level = 0;
let started = true;
let heighestScore = 0;
let box1 = document.querySelector(".red");
let box2 = document.querySelector(".blue");
let box3 = document.querySelector(".yellow");
let box4 = document.querySelector(".voilet");
let body = document.querySelector(".body");
let userSeq = [];
let gameSeq = [];
let boxes = [box1,box2,box3,box4];
let h3extra = document.createElement("h3");
h3.after(h3extra);


document.addEventListener("keypress",function(){  
    if (started){
        console.log("game is started");
        started = false;
        levelUp();
    }
});

function levelUp(){
    level+=1;
    h3.innerText=`Level ${level}`;
    Game();

}
function Game(){
    let N = Math.floor(Math.random()*4);
    gameSeq.push(N);
    boxes[N].classList.add("click");
    setTimeout(() => {
        boxes[N].classList.remove("click");
    }, 300);
    // userSeq = [];
}

function valueadding(value){
    userSeq.push(value);
    let idx = userSeq.length-1;
    boxes[value].classList.add("ansclick");
    setTimeout(()=>{
        boxes[value].classList.remove("ansclick");
    },100);
    if (userSeq[idx]!=gameSeq[idx]){
        h3.innerHTML= `you lost !!  your score was <u> ${level-1} </u> <br> press any key to restart</i>`;
        body.classList.add("bodyred");
        setTimeout(()=>{
            body.classList.remove("bodyred");
        },200);
        if (level-1 >heighestScore){
            heighestScore = level-1;
            h3extra.innerText=` Your Heighest Score is ${heighestScore}`;   
            h3.innerText=`Good, this time u scored Heighest`;
        }
        reset();
        // return;
    }
    else if( userSeq.length==gameSeq.length){
        setTimeout(()=>{
            levelUp();
        },900);
    }
}
function reset(){
    gameSeq = [];
    started = true;
    level = 0;
    userSeq = [];

}

box1.addEventListener("click",function(){valueadding(0)});
box2.addEventListener("click",function(){valueadding(1)});
box3.addEventListener("click",function(){valueadding(2)});
box4.addEventListener("click",function(){valueadding(3)});

