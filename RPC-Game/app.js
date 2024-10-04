let userScore = 0 ;
let compScore = 0 ;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const msg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randIn = Math.floor(Math.random() * 3);
    return options[randIn];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        Playgame(userChoice);
    });
});

const Playgame = (userChoice) => {
    console.log('user Choice = ', userChoice );

    const compChoice = genCompChoice();
    console.log('Computer Choice = ', compChoice );

    if (userChoice === compChoice){
        //Game is a Draw
        drawGame();

    } 
    else{
        let userWin = true;
        if (userChoice === 'rock'){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === 'paper'){
            userWin = compChoice === "scissors" ? false : true;
            
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice)
    }
};

const drawGame = () => {
    console.log('Game was a Draw... Play again');
    msg.innerText = "Game Was a Draw... Play again"
    msg.style.backgroundColor = "rgb(218, 226, 99)"
}


const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        console.log("You win!!")
        msg.innerText = `User Wins!!... ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "rgb(136, 233, 133)"
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        console.log("Computer wins!!")
        msg.innerText = `Computer Wins!!... ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "rgb(235, 86, 86)"
        compScore++;
        compScorePara.innerText = compScore;
    }
}
