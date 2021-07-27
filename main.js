/*-------------------Emojis de la Grilla----------*/
const removeCell = " ";

const emojiRose = [removeCell, '🌞', '🌸', '💗', '🤰🏾', '🍹', '💋'];

//Constante en donde guardo todas las características del tamaño de la matriz
const levels = [{
    key: 'facil',
    size: 9,
    label: 'easy',
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
    key: 'dificil',
    size: 7,
    label: 'difficult',
    fontSize: 35,
    itemSize: 72
}
]

/*-------------------Comparando valores para invertir la matriz----------*/
const areSimilar = (a, b) => Math.abs(a) === Math.abs(b);

const invertValue = (value) => (value > 0 ? value * -1 : value);

/*-------------------Generando orden aleatorio ----------*/
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItemId = () => getRandomInt(1, emojiRose.length - 1);

/*-------------------Creando grilla principal----------*/
const mainGrid = document.querySelector('.grid');
const smallBox = document.createElement('div');
let level;
let levelKeySelected = 'facil';
let dataGrid = [];

const setLevel = (levelKey) => {
    levelKeySelected = levelKey;
}

const createGrid = () => {
    level = levels.filter(l => l.key === levelKeySelected)[0]; //Ayuda a generar cualquier dato de mi array de objetos

    for (let column = 0; column < level.size; column++) { //Generando cantidad de columnas como de filas en orden aleatorio
        let cells = [];
        for (let row = 0; row < level.size; row++) {
            cells.push(getRandomItemId());
        }
        dataGrid[column] = cells;
    }
    console.log(dataGrid);
    return dataGrid;
}


/*-------------------Creando Elemento "div" y emoji ----------------*/
const showGrid = () => {
    mainGrid.innerHTML = '';

    for (let column = 0; column < level.size; column++) {
        for (let row = 0; row < level.size; row++) {
            const smallBox = document.createElement('div');
            const emojiValue = dataGrid[row][column];
            smallBox.innerHTML = emojiRose[emojiValue];
            smallBox.className = level.key;
            smallBox.classList.add('smallBox');

            //Generando estilos a los divs 
            smallBox.style.position = 'absolute';
            smallBox.style.top = `${level.itemSize * row}px`;
            smallBox.style.left = `${level.itemSize * column}px`;
            smallBox.style.fontSize = `${level.fontSize}px`;
            smallBox.style.display = 'flex';

            //Atributos Data
            smallBox.setAttribute('data-x', column);
            smallBox.setAttribute('data-y', row);

            mainGrid.appendChild(smallBox);

            smallBox.addEventListener('click', swapSquares);
        }
    }
    return showGrid;
}

/*------Evento de intercambio de divs si son cuadros adyacentes -------*/
let itemSelected = null;
let clickedItem = null;

const swapSquares = (e) => {

    if (itemSelected == null) {
        itemSelected = e.target;
    } else {
        clickedItem = e.target;
        let x0 = Number(itemSelected.dataset.x);
        let y0 = Number(itemSelected.dataset.y);
        let x1 = Number(clickedItem.dataset.x);
        let y1 = Number(clickedItem.dataset.y);

        if (((x1 == x0 - 1 || x1 == x0 + 1) && y1 == y0) || ((y1 == y0 - 1 || y1 == y0 + 1) && x1 == x0)) {

            //Constantes auxiliares que reciben los eventos del if
            let firstAux = itemSelected.style.top;
            let secondAux = itemSelected.style.left;

            itemSelected.style.top = clickedItem.style.top;
            itemSelected.style.left = clickedItem.style.left;

            //Generar variable auxiliar para almacenar el clicked
            clickedItem.style.top = firstAux;
            clickedItem.style.left = secondAux;
        }
        itemSelected = null;
        clickedItem = null;
    }
}

//Posible solucion para le intercambio de divs desde el browser
//     let itemSelected = [];
//     let clickedItem = [];
// const swapSquares = () => {
//     let firstAux = clickedItem.style.top;
//     let secondAux = clickedItem.style.left;

//     itemSelected[1].style.top = clickedItem[0].style.top;
//     itemSelected[0].style.left = clickedItem[1].style.left;
//     clickedItem[0].style.top = itemSelected[1].style.top;
//     clickedItem[1].style.left = itemSelected[0].style.left;
// }

// const selectItems = (e) => {
//     let eventClick = e.target;

//     let isValidMove = () => {
//         smallBox.classList.add('seleccionado');
//         let x0 = Number(clickedItem[0].dataset.x);
//         let y0 = Number(clickedItem[0].dataset.y);
//         let x1 = Number(clickedItem[1].dataset.x);
//         let y1 = Number(clickedItem[1].dataset.y);

//         if (x0 === x1) {
//             return (y0 === y1 - 1) || (y0 === y1 + 1);
//         } else if (y0 === y1) {
//             return (x0 === x1 - 1) || (x0 === x1 + 1);
//         } else {
//             return false;
//         }
//     }

// //primer click
// if (itemSelected.length === 0) {
//     e.target.classList.add('selected');
//     itemSelected.push(eventClick);
//     clickedItem.push(e.target);
// } else if (itemSelected.length === 1) { //segundo click
//     e.target.classList.add('selected');
//     itemSelected.push(eventClick);
//     clickedItem.push(e.target);
//     if (isValidMove()) {
//         swapSquares();
//         getMatches();
//         invertedGrid();
//         checkGridMatches();
//     } else {
//         clickedItem[0].classList.remove('selected');
//     }
// }
// else if (itemSelected.length === 2) {//tercer click
//     for (let i=0; i<itemSelected.length; i++){
//         clickedItem[i].classList.remove('selected');
//     }
//     e.target.classList.add('selected');
//     itemSelected = [];
//     clickedItem = [];
//     itemSelected.push(isValidMove);
//     clickedItem.push(e.target);
// }
// }
// const descendItems = (dataGrid) => {
//         for (let i = dataGrid; i >= 0; i--) {
//          let getEmptySquare = document.querySelector(`[data-col="${i}"]`)
//          for (let j = getEmptySquare.length - 1; j >= 0; j--) {
//             if (getEmptySquare[j] === 0) {
//                 for (let k = j; k >= 0; k--) {
//                         if (getEmptySquare !== 0) {
//                             getEmptySquare[j] = getEmptySquare[k];
//                             getEmptySquare[k] = 0;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//Descender items
// const itemsDown = (dataGrid) => {
//     for (let i = dataGrid; i >= 0; i--) {
//         let columnDown = document.querySelectorAll(`[data-col="${i}"]`)
//         for (let j = columnDown.length - 1; j >= 0; j--) {
//             if (columnDown[j] === 0) {
//                 for (let k = j; k >= 0; k--) {
//                     if (columnDown[k] !== 0) {
//                         columnDown[j] = columnDown[k];
//                         columnDown[k] = 0;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// }

/*------------------------Buscando matches -------------------------*/
const getMatches = (row) => {
    let indexMatches = [0];
    let indexResult = [];
    let lastItem = row[0];
    let newRow = [];

    for (let i = 1; i < row.length; i++) {
        let currentItem = row[i];

        if (areSimilar(currentItem, lastItem)) {
            indexMatches.push(i);
        } else {
            if (indexMatches.length >= 3) {
                indexResult = indexResult.concat(indexMatches);
            }
            indexMatches = [i];
        }
        if (i == row.length - 1 && indexMatches.length >= 3) {
            indexResult = indexResult.concat(indexMatches);
           
        }

        lastItem = currentItem;
    }

    // indexResult = [2,3,4] ; row = [10,5,2,2,2,5] ===> newRow = [10,5,-2,-2,-2,5]
    for (let i = 0; i < row.length; i++) {
        if (!indexResult.includes(i)) {
            newRow.push(row[i]);
        } else {
            newRow.push(invertValue(row[i]));
        }
    }
    return newRow;
}

/*--------------Invirtiendo Grilla Horizontal - Vertical------------*/
const getInvertedGrid = (grid) => {
    let invertedGrid = [];
    for (let row = 0; row < level.size; row++) {
        let cells = [];
        for (let column = 0; column < level.size; column++) {
            cells.push(grid[column][row]);
        }
        invertedGrid[row] = cells;
    }
    
    return invertedGrid;
    
};

const removeMatches = (grid) => {
    let cleanedGrid = grid;
    for (let column = 0; column < level.size; column++) {
        score += 100
        for (let row = 0; row < level.size; row++) {
            let item = grid[column][row];
            cleanedGrid[column][row] = item < 0 ? 0 : item;
            
        }
    }
    return cleanedGrid;
};

/*--------------Invierte-elimina match------------*/
const checkGridMatches = () => {
   
    let invertedGrid = getInvertedGrid(dataGrid);

    for (let i = 0; i < invertedGrid.length; i++) {
        invertedGrid[i] = getMatches(invertedGrid[i]);
    }
    
    let matchedGrid = getInvertedGrid(invertedGrid);

    for (let i = 0; i < matchedGrid.length; i++) {
        matchedGrid[i] = getMatches(matchedGrid[i]);
    }
    const match = matchedGrid.some(column=> column.some(row=> row<0))
    dataGrid = removeMatches(matchedGrid);
    score += 100 * combo;
    showGrid();
    return match;
};

/*--------------------Cubriendo espacios vacios------------------*/
const coverSpaces = () => {
    for (let row = 0; row < dataGrid.length; row++) {
        for (let column = 0; column < dataGrid.length; column++) {
            if (dataGrid[row][column] === 0) {
                smallBox.classList.add('newEmoji');
                dataGrid[row][column] = getRandomItemId();
            }
        }
    }
    showGrid();
}

/*--------------------Ejecutando el Juego------------------*/
   createGrid();
   showGrid();
 
   

