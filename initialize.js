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


// const initializeGrid = () => {
//     do {
//       createGrid(key);
//     } while (getMatches())
  
//     showGrid();
//   }

//   const startGame = () => {
//     score = 0;
//     toUpDateScore();
//     restartCombo();
//     initializeGrid();
// }

// const selectedDifficult = (key) => {
//     newGame();
//     if (key === 'facil'){
//         level.size = 9;
//     } else if (key === 'normal') {
//         level.size = 8;
//       } else {
//         level.size = 7;
//       }
//   }

// const initializeModals = () => {
//     document.addEventListener('click', () => {
//         selectedDifficult(key);
//         startGame();
//     })
//     ('.btn-newGame').addEventListener('click', startGame());
//     ('.btn-restartGame').addEventListener('click', selectedDifficult(key));
        
// }
 
// const starGame = () => {
//     initializeModals();
//     initializeGrid();
// }

// window.onload = startGame;