import { useState } from 'react';
import './Game.css';

function Game(){
    const [isWon,updateIsWon] = useState(false);
    const [numOfAttempts,getNumberOfAttempts] = useState(4);
    const guess = Math.floor(Math.random()*10)+1;
    let input = -1;
    console.log("Game rendered with guess : "+guess);
    if(isWon){
        console.log("------Resetting values");
        updateIsWon(false);  ///BAADDDDDD : Re-render happens just for reset of the value here
        getNumberOfAttempts(4); // TOOOO BADDDDD : Additional re-render : So many cycles already lost here
    }
    console.log("=====guess : "+guess);
function handleKeyPress(e){
        if(e.key === "Enter"){
            input = parseInt(document.getElementById("guess-input").value);
            console.log("input is "+input);
            checkWin(input);
        }
    }

    function checkWin(inputValue){
        console.log("Guess is "+guess+" and input is "+inputValue + " : Result = "+(guess === inputValue));
        updateIsWon((guess === inputValue));
    }
    return (
        <div className="game-area">
            <h1>Guess The Number</h1>
            <p>Number of attempts : {numOfAttempts}</p>
            <input id="guess-input" onKeyPress={(e) => handleKeyPress(e)}/>
            <p>Game {isWon ? "Won" : "Lost"}</p>
        </div>
    );
}


export default Game;