//-----------Modificar Combo y Reanudar Combo------------------//
const comboGame = document.getElementById('combo');
let combo = 1;

const addCombo = () => {
    comboGame.innerHTML = combo;
    combo++; 
}

const restartCombo = () => {
    combo = 1
    comboGame.innerHTML = combo;
}


/*-----------------Función Puntaje----------------*/

const scoreGame = document.getElementById('score').innerHTML;
let score = 0;

const scoreSum = (dataGrid) => {
    for (let i = 0; i < dataGrid.length; i++) {
        for (let j = 0; j < dataGrid[i].length; j++) {
            if (dataGrid[i][j] == '') {
                score++;
            }
        }
    }
    scoreGame.innerHTML = score * 100;
    console.log(score)
};

const resetScore = () => {
    scoreGame.innerHTML = 0;
}

/*-----------------Función puntaje del juego----------------*/
const countDown = document.getElementById('countdown');
let gameSeconds = 30;
let counterSecond;
let counter;

const gameCountdown = () => {
    counter = setInterval(() => {
        if (gameSeconds >= 10) {
            countDown.innerHTML = `0:${gameSeconds}`;
        } else if (gameSeconds >= 0) {
            countDown.innerHTML = `0:0${gameSeconds}`;
        }
        gameSeconds--;
        if (gameSeconds == -1) {
            clearInterval(counter);
            endGame();
        }
    }, 1000);
}


// const initializeGrid = () => {
//     do {
//       createGrid();
//     } while (checkGridMatches())
//        coverSpace();
//     showGrid();
//   }

// const startGame = () => {
//     score = 0;
//     restartCombo();
//     initializeGrid();
// }

//window.onload = startGame;