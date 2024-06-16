let x=document.querySelectorAll(".btn");
let a=document.getElementById("box1")
a.innerText=x[0].getAttribute("id")
function computerGeneratedChoice(){

const arr=["Stone","paper","Scissors"];
let RandomNumber=Math.floor(Math.random()*3);
return arr[RandomNumber];

}

const playGame=(userChoice)=>{
const computerChoice=computerGeneratedChoice();


 if (userChoice=="stone"){
    if (computerChoice==="Stone"){
        a.innerText="Match is Draw";
    }
    else if(computerChoice==="paper"){
        a.innerText="Computer Win the Game";
    }
    else if(computerChoice==="Scissors"){
        a.innerText="You Win The Game!";
    }
    else{
        a.innerText="DAnger!";
    }
}
else if (userChoice=="paper"){
    if (computerChoice==="paper"){
        a.innerText="Match is Draw";
    }
    else if(computerChoice==="Scissors"){
        a.innerText="Computer Win the Game";
    }
    else if(computerChoice==="Stone"){
        a.innerText="You Win The Game!";
    }
    else{
        a.innerText="DAnger!";
    }
}
else if (userChoice=="Scissors"){
    if (computerChoice==="paper"){
        a.innerText="You win the Game!";
    }
    else if(computerChoice==="Scissors"){
        a.innerText="Game is Draw!";
    }
    else if(computerChoice==="Stone"){
        a.innerText="Computer Wins The game!";
    }
    else{
        a.innerText="DAnger!";
    }
}

}

for (let i=0;i<x.length;i++){
    x[i].addEventListener("click",()=>{
        const userChoice=x[i].getAttribute("id");
        playGame(userChoice);
    })
}
