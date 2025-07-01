//ye mene aik variable me store kradea hai score
let userScore = 0;
let compScore = 0;

//dom use ki h tamam elements ko access karne k lie
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".msg-container")

const userscoretext = document.querySelector("#user-score");
const compscoretext = document.querySelector("#comp-score");
const resetbtn = document.querySelector("#resetbtn");

//ye random choice generate karke dega
const genCompChoice = () =>{
    const choiceOptions = ["rock", "paper", "scissors"];
    const RandId = Math.floor(Math.random() * 3);
    return choiceOptions[RandId];
;}

//ab drawgame pr kia mssg ayga, condition me playgame me deuga
const drawGame = ()=>{
    msg.innerText = "Game was Draw";
    msgcontainer.style.backgroundColor = "#0063ff";
};

//isme winning ya loosing pr kia hga , conidtion playgame me duga;
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userscoretext.innerText = userScore;
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
        msgcontainer.style.backgroundColor = "#ffe70be1";

    } else{
        compScore++;
        compscoretext.innerText = compScore;
        msg.innerText = `You Loose!,  ${compChoice} beats your ${userChoice}`;
        msgcontainer.style.backgroundColor = "#FF3131	";
    }
}

/*is function k andr mje userchoice or computer ki choice ka pta chlega qk isse upr mene random choice
generate krwaai hain computer say , in short all working logic is in this function*/ 

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
       console.log("comp choice is: " , compChoice);
       console.log("user choice is: ", userChoice);
    if(userChoice === compChoice){
        //game will be draw
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice is scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //comp choice is scissor or rock
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //user scissor or comp rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//ye simple click pr choice ko pick krega user ki qk mene userchoice ka param dea hai 
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
});

//ye reset krne k lie logic dea gaya hai

const resetGame = ()=>{
    userScore = 0;
    compScore = 0;
    userscoretext.innerText = userScore;
    compscoretext.innerText = compScore;
    msg.innerText = "Play your turn";
    msgcontainer.style.backgroundColor = "#0063ff";
}

resetbtn.addEventListener("click", resetGame);