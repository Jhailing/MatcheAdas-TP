/*-------------------------clock countdown function----------*/
window.onload = updateClock;

let totalTime = 30;

function updateClock() {
    const countDown = document.getElementById('countdown');

    if (totalTime >= 10) {
        countDown.innerHTML = `0:${totalTime}`;

    } else if (totalTime >= 0) {
        countDown.innerHTML = `0:0${totalTime}`;
    } 
    totalTime--;
}
setInterval("updateClock()", 1000);



//Arrays de emojis
const emojiRose = ['🐷', '🌷', '💗', '🤰🏾', '🧠', '👄'];
let score = 0;
let combo = 1;
let animacion = 2000
//Constante en donde guardo todas las características del tamaño de la matriz

const levels = [{
    key: 'easy',
    size: 9,
    label: 'facil',
    fontSize: 30,
    itemSize: 56
},
{
    key: 'normal',
    size: 8,
    label: 'normal',
    fontSize: 30,
    itemSize: 62
},
{
    key: 'difficult',
    size: 7,
    label: 'Dificil',
    fontSize: 35,
    itemSize: 72
}
]

//Llamando la grilla principal
const mainGrid = document.querySelector('.grid');
let dataGrid = [];
let level;

//Creando la grilla principal
const createGrid = (key) => {

    //Constante que genera el array de dificultad
    level = levels.filter(l => l.key === key)[0];

    //Generando grid

    //Mediante ambos "for" estoy generando, cantidad de columnas como de filas en orden aleatorio
    for (let column = 0; column < level.size; column++) {
        let rows = [];
        for (let row = 0; row < level.size; row++) {
            rows[row] = Math.floor(Math.random() * emojiRose.length);
        }
        dataGrid[column] = rows;
    }
    console.log(dataGrid);
}

const showGrid = () => {
    mainGrid.innerHTML = '';
    //Mediante ambos "for" estoy generando, cantidad de columnas como de filas y orden aleatorio
    for (let column = 0; column < level.size; column++) {
        for (let row = 0; row < level.size; row++) {
            const smallBox = document.createElement('div');
            const emojiValue = dataGrid[row][column];
            smallBox.innerHTML = emojiValue !== null ? emojiRose[emojiValue] : '';
            smallBox.className = level.key;
            smallBox.classList.add('smallBox');

            //Generando estilos a los divs 
            smallBox.style.position = 'absolute';
            smallBox.style.top = `${level.itemSize * row}px`;
            smallBox.style.left = `${level.itemSize * column}px`;
            smallBox.style.fontSize = `${level.fontSize}px`;
            smallBox.style.display = 'flex';

            smallBox.setAttribute('data-x', column);
            smallBox.setAttribute('data-y', row);

            mainGrid.appendChild(smallBox);

            smallBox.addEventListener('click', swapSquares);

        }
    }
}

//Evento de clickeado e intercambio de divs
let itemSelected = null;
let clickedItem = null;

const swapSquares = (e) => {
    if (itemSelected == null) {
        itemSelected = e.target;
    } else {
        clickedItem = e.target;

        //Constantes auxiliares que reciben los eventos del if
        let firstAux = itemSelected.style.top;
        let secondAux = itemSelected.style.left;

        itemSelected.style.top = clickedItem.style.top;
        itemSelected.style.left = clickedItem.style.left;

        //Generar variable auxiliar para almacenar el clicked
        clickedItem.style.top = firstAux;
        clickedItem.style.left = secondAux;

        itemSelected = null;
        clickedItem = null;
    }
}

// const moveItem = (direction) => {
//     let x = number(smallBox.style.top);
//     let y = number(smallBox.style.left);

//     switch (direction) {
//       case 'top': {
//         y = y === 0 ? level.size - 1 : y - 1
//         break
//       }
//       case 'left': {
//         x = x === 0 ? level.size - 1 : x - 1
//         break
//       }
//       case 'down': {
//         y = y === level.size - 1 ? 0 : y + 1
//         break
//       }
//       case 'right': {
//         x = x === level.size - 1 ? 0 : x + 1
//         break
//       }
//     }
//   swapSquares();
// }

//Actualizar Puntos
const toUpDateScore = () =>{
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

const getMatches = (row) => {
    let indexMatches = [0];
    let lastItem = row[0];
    let newRow = [];
    let indexResult = [];

    for (let i = 1; i < row.length; i++) {
        let currentItem = row[i];

        if (currentItem == lastItem) {

            indexMatches.push(i);
        } else {
            if (indexMatches.length > 2) {
                indexResult = indexResult.concat(indexMatches);
            }
            indexMatches = [i];
        }
        if (i == row.length - 1 && indexMatches.length > 2) {
            indexResult = indexResult.concat(indexMatches);
        }

        lastItem = currentItem;
    }
    console.log(indexResult);


    for (let i = 0; i < row.length; i++) {
        if (!indexResult.includes(i)) {
            newRow.push(row[i]);
        } else {
            newRow.push(null);
        }
    }
    return newRow;
}

//Hacer match y delete horizontal
const doMatchesRow = () => {
    for (let i = 0; i < dataGrid.length; i++) {
        let row = dataGrid[i];
        let newRow = getMatches(row);
        dataGrid[i] = newRow;
        // setTimeout(() => {
        //     score += 100 * addCombo;
        //     toUpDateScore();
        //     addCombo();
        // },2000)
  }
    }
    //smallBox.classList.add('eliminado');
    showGrid();


const doMatchesCol = () => {
    //Invertir matriz dataGrid
    let dataGridInverted = [];
    for (let column = 0; column < level.size; column++) {
        let rows = [];
        for (let row = 0; row < level.size; row++) {
            rows.push(dataGrid[row][column]);
        }
        dataGridInverted[column] = rows;
    }
    console.log('dataGridInverted');
    console.log(dataGridInverted);

    //  Hacer match  y delete vertical
    for (let i = 0; i < dataGridInverted.length; i++) {
        let row = dataGridInverted[i];
        let newRow = getMatches(row);
        dataGridInverted[i] = newRow;
        // setTimeout(() => {
        //     score += 100 * addCombo;
        //     toUpDateScore();
        //     addCombo();
        // },2000)
  }
    }
    showGrid();


    //Actualizando matriz dataGridInverted
    for (let column = 0; column < level.size; column++) {
        let rows = [];
        for (let row = 0; row < level.size; row++) {
            rows.push(dataGridInverted[row][column]);
        }
        dataGrid[column] = rows;
    }
 


//  Cubriendo espacios vacios
// const coverSpaces = () => {
//     for (let row = 0; row < dataGrid.length; row++) {
//       for (let column = 0; column < dataGrid[row].length; column++) {
//         if (dataGrid[row][column] === "") {
//           dataGrid[row][column] = createGrid();
//         }
//       }
//     }
//     showGrid();
//   }



//Ejecutando el juego
createGrid('easy');
showGrid();

