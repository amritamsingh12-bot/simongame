let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;
      document.querySelector("#instructions").style.display = "none";
    levelup();
   }
});
document.addEventListener("touchstart", function(){
   if(started==false){
    console.log("game is started");
    started=true;
      document.querySelector("#instructions").style.display = "none";
    levelup();
   }
});
function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function UserFlash(btn){
    btn.classList.add("Userflash");
    setTimeout(function(){
        btn.classList.remove("Userflash");
    },250);
}
function levelup(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randcolor=btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);

GameFlash(randbtn);
}
function checkAns(idx){
   
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
        },150);
       reset();
    }
}
function btnPress(){
   
  let btn=this;
  UserFlash(btn);
  usercolor=btn.getAttribute("id");
 userseq.push(usercolor);
 checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
