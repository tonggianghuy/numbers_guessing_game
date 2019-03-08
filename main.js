let gBox = document.getElementById('guessBox');
let btnGuess = document.getElementById('btnGuess');
let numberResult = document.getElementById('result');


function getRandomNumber(){
    return Math.floor(Math.random()*100 +1);
}

let randomNumber = getRandomNumber();

function doGuess(){
    let guessedValue = gBox.value;
    if(guessedValue == randomNumber){
        numberResult.innerHTML=(`${guessedValue} is Right \n YOU WIN!!!`);
    }
    ;
    if(guessedValue < randomNumber){
        numberResult.innerHTML=(`${guessedValue} Too LOW`);
    }
    ;
    if(guessedValue > randomNumber){
        numberResult.innerHTML=(`${guessedValue} Too HIGH`);
    }
    guessBox.value = "";
}



btnGuess.addEventListener('click', doGuess);