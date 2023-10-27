var rockbtn= document.getElementById("rockbutton");
var scissorbtn= document.getElementById("scissorbutton");
var paperbtn= document.getElementById("paperbutton");

var btns = document.querySelectorAll(".logo")
var imageSources = ["paper-hand.png", "rock-hand.png", "scissors-hand.png"];
var myimage = document.querySelector("#myImage")
var compimage = document.querySelector("#compImg");

var myScore = document.querySelector("#my-score")
var compimagescr = document.querySelector("#computer-score")

myScoreCount = 0;
compScoreCount = 0;

var winngmsg = document.getElementById("winningmessage")

btns.forEach((el)=>{
    el.addEventListener("click",(event)=>{
        randomimage()
        myScore.innerText = myScoreCount;
        compimagescr.innerText = compScoreCount;
        if(event.target.alt == "rock"){
            console.log("rock clicked")
            myimage.src = imageSources[1]
        }
        if(event.target.alt == "scissors"){
            console.log("scissr clicked")
            myimage.src = imageSources[2]
        }
        if(event.target.alt == "paper"){
            console.log("paper clicked")
            myimage.src = imageSources[0]
        }
       
    })
})

var if_won = document.querySelector(".if-won")

function randomimage(){
    var random = imageSources[Math.floor(Math.random()*3)]
    compimage.src = random;
    if(event.target.alt == "rock" && random == imageSources[2]){
        myScoreCount += 1;
    }
    else if(event.target.alt == "scissors" && random == imageSources[0]){
        myScoreCount += 1;
    }
    else if(event.target.alt == "paper" && random == imageSources[1]){
        myScoreCount += 1;
    }
    
    
    if(event.target.alt == "rock" && random == imageSources[0]){
        compScoreCount += 1;
    }
    else if(event.target.alt == "scissors" && random == imageSources[1]){
        compScoreCount += 1;
    }
    else if(event.target.alt == "paper" && random == imageSources[2]){
        compScoreCount += 1;
    }
    console.log(myScoreCount,"  ",compScoreCount)
    
    if(myScoreCount >= 5){
            if_won.style.display = "block";
            console.log("You won")
        }
        else if(compScoreCount >=  5){
            console.log("Computer won")
            if_won.style.display = "block";
            winngmsg.innerText = "Computer Won"
        }
}


var playagainbtn = document.querySelector("#button");

playagainbtn.addEventListener("click", ()=>{
    window.location = "game.html"
})