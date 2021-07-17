//Actualizar Puntos
const toUpDateScore = () => {
    document.getElementById('score').innerHTML = score;
}

//Modificar Combo
const addCombo = () => {
    combo++;
    document.getElementById('combo').innerHTML = combo;
}

//Reanudar Combo
const restartCombo = () => {
    combo = 1
    document.getElementById('combo').innerHTML = combo;
}

const initializeGrid = () => {
    do {
      createGrid();
    } while (getMatches())
  
    showGrid();
  }

  const startGame = () => {
    score = 0;
    toUpDateScore();
    restartCombo();
    initializeGrid();
}


const initializeModals = () => {
    document.addEventListener('click', () => {
        mostrar();
        newGame();
        startGame();
    })
    ('.btn-newGame').addEventListener('click', startGame());
    ('.btn-restartGame').addEventListener('click', newGame());    
}
 
const starGame = () => {
    initializeModals();
    initializeGrid();
}

//window.onload = startGame;