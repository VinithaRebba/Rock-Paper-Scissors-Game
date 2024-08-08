let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg-container");
const userScorePara=document.querySelector("#user-score");
const comptScorePara=document.querySelector("#computer-score");
const getCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame=()=>{
    console.log("The Game was Draw");
    msg.innerText="Game was Draw. play again";
    msg.style.backgroundColor=" rgb(41, 8, 94)";
}
const showWinner=(userWin,userChoice,comptChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("You Win!");
        msg.innerText=`You Win! your ${userChoice} beats ${comptChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        comptScorePara.innerText=compscore;
        console.log("You Lost!");
        msg.innerText=`You Lost ${comptChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    const comptChoice=getCompChoice();
    console.log("computer choice=",comptChoice);
    if(userChoice===comptChoice){
       drawGame();
    }else {
        let userWin=true;
        if(userChoice==="Rock"){
            //scissors , paper
            userWin= comptChoice==="Paper" ? false:true;

        }else if (userChoice==="Scissors"){
            // rock , paper
            userWin=comptChoice=="Rock"? false:true;
        }else{
            // scissors ,rock
            userWin=comptChoice=="Scissors"? false:true;
        }
        showWinner(userWin,userChoice,comptChoice);
            
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playGame(userChoice);
    });
});