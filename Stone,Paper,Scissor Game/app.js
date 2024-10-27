let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
       if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`YOU WON! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
       }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOSE. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
       }
}

const playGame=(userchoice)=>{
         //generate computer choice 
         const compChoice=genCompChoice();

         if(userchoice===compChoice){
            drawGame();
         }else
         {
            let userWin=true;

            if(userchoice==="rock"){
                userWin=compChoice==="paper"? false:true;
            }else if(userchoice==="paper"){
                userWin=compChoice==="scissors"? false:true;
            }else{
                userWin=compChoice==="rock"? false:true;
            }
            showWinner(userWin,userchoice,compChoice);
         }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 