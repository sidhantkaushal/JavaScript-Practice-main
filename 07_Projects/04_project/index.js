let randomNumber = parseInt((Math.random()*100+1))
console.log(randomNumber);

const submit= document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");
const p = document.createElement('p'); 


let prevGuess=[];
let numGuess=1;
let playGame=true;


if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuest(guess);
    })

}

function validateGuest(guess){
    if(isNaN(guess)){
        displayMessage(`Give a valid input`);
    }
    if(guess<1){
        displayMessage(`Give a valid input`);
    }
    if(guess>100){
        displayMessage(`Give a valid input`);
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over . Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }


}

function checkGuess(guess){
    if(guess<randomNumber){
        displayMessage(`Guess is TOOO Low`);
    }
    if(guess==randomNumber){
        displayMessage(`WOHOO you have guessed the random number`);
        endGame(guess);
    }
    if(guess>randomNumber){
        displayMessage(`Guess id TOOO High`);
    }
    
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}<h2>`;
}



function newGame(guess){
    const newGameButton=document.querySelector("#newGame");
    console.log(newGameButton);
    newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt((Math.random()*100+1));
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
    lowOrHi.innerHTML=``;
    })

    
}

function endGame(guess){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
