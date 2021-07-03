//Llamando la grilla principal
const mainGrid = document.querySelector('.grid');
const boxes = [];
let emojiRose = ['🐷', '🌷', '💗', '🤰🏾', '🧠', '👄',];

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
];
let levelSize;

//Variables para crear la función del elemento ó item clickeado e intercambiado por el de al lado
let itemSelected = null;
let clickedItem = null;


//Creando la grilla principal
const createGrid = (key) => {

    //Constante que genera el array de dificultad
    const level = levels.filter(l => l.key === key)[0];
    levelSize = level.size;
    mainGrid.innerHTML = '';

    //Mediante ambos "for" estoy generando, cantidad de columnas como de filas y orden aleatorio
    for (let column = 0; column < level.size; column++) {
        for (let row = 0; row < level.size; row++) {
            const smallBox = document.createElement('div');
            let randomEmojis = Math.floor(Math.random() * emojiRose.length);
            smallBox.innerHTML = emojiRose[randomEmojis];
            smallBox.className = key;

            //Generando estilos a los divs
            // smallBox.style.border = '1px solid lightpink';   
            smallBox.style.position = 'absolute';
            smallBox.style.top = `${level.itemSize * row}px`;
            smallBox.style.left = `${level.itemSize * column}px`;
            smallBox.style.fontSize = `${level.fontSize}px`;
            smallBox.style.display = 'flex';

            smallBox.setAttribute('data-x', row);
            smallBox.setAttribute('data-y', column);
            smallBox.setAttribute('data-emoji', randomEmojis);

            mainGrid.appendChild(smallBox);
            boxes.push(smallBox);
        }
    }
}