// Tic - Tac - Toe Logic

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let submit = document.querySelector("#submit");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector(".message");
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Need to add event listener "for each" box so that we can change the empty box to an X or an O 

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("the box was clicked.");
        if(turn0 === true){
            box.innerText = "X";  //sets the turn for player X
            turn0 = false;
        }

        else{
            box.innerText = "O"; //sets the turn for player O
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

    });

});

const resetGame = () => {
    turn0 = true;
    message.innerText = ''; // Clear the message
    msgContainer.classList.add('hide'); // Hide the message container
    
    enableBoxes(); // Enable and reset the boxes
}

reset.addEventListener('click', () => {
    resetGame();
})

const showWinner = (winner) => {
    message.innerText = `Congratulations, Player ${winner} is the Winner!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

// Disable all boxes when the game is over
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
        msgContainer.classList.remove('hide');
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        
        let posVal1 =  boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        console.log(pattern[0], pattern[1],pattern[2]);
        console.log(
             boxes[pattern[0]].innerText,
             boxes[pattern[1]].innerText,
             boxes[pattern[2]].innerText
            )
        
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3 && posVal3 === posVal1){
                console.log(`Player ${posVal1} , You Are the Winner`);
                showWinner(posVal1);
            };
        };
        
    };
};