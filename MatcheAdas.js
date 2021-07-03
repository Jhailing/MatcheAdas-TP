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

            //Creando evento de clickeado
            smallBox.addEventListener('click', e => {

                if (itemSelected == null) {
                    itemSelected = e.target;
                } else {
                    clickedItem = e.target;

                    if (isAdyacenteBox(itemSelected, clickedItem)
                    ) {
                        console.log("isAdyacenteBox")
                    }

                    //Constantes auxiliares que reciben los eventos del if
                    const firstAux = itemSelected.style.top;
                    const secondAux = itemSelected.style.left;

                    itemSelected.style.top = clickedItem.style.top;
                    itemSelected.style.left = clickedItem.style.left;
                    //itemSelected.setAttribute('data-x', clickedItem.dataset.x);
                    // itemSelected.setAttribute('data-y', clickedItem.dataset.y);

                    //generar vriable auxiliar para almacenar el clicked

                    clickedItem.style.top = firstAux;
                    clickedItem.style.left = secondAux;

                    itemSelected = null;
                    clickedItem = null;
                }

                // console.log(e.target);
            });
        }
    }
}

createGrid('difficult')

/*-------------------------clock countdown function----------*/
window.onload = updateClock;

var totalTime = 30;

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    if (totalTime == 0) {
        //console.log('Final');
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}

/-------------------------delete match function----------/

const isAdyacenteBox = (a, b) => {
    const firstRowX = parseInt(a.dataset.x);
    const firstColY = parseInt(a.dataset.y);
    const secondRowX = parseInt(b.dataset.x);
    const secondColY = parseInt(b.dataset.y);

    if (firstRowX === secondRowX) {
        return firstColY === secondColY - 1 || firstColY === secondColY + 1;
    } else if (firstColY === secondColY) {
        return firstRowX === secondRowX - 1 || firstRowX === secondRowX + 1;
    }
    return false;

};

//----------------check si hay match vertical -------------------------//
const checkMatchVertical = () => {

    for (let i = 0; i < levelSize; i++) {
        const line = document.querySelectorAll(`[data-y="${i}"]`);
        console.log(line);
        for (let j = 0; j < levelSize - 2; j++) {
            console.log(line[j].dataset.emoji);
            if (
                line[j].dataset.emoji === line[j + 1].dataset.emoji &&
                line[j].dataset.emoji === line[j + 2].dataset.emoji
            ) {
                console.log(line[j].dataset.emoji);
                return true
            }
        }

        //cuando hago los desplazamientos debiera cambie

        // crer constante que almacene los match encontrados de mnera verticl j +j1+j2//

      
      
        //----------------check si hay match horizontal -------------------------//

        const checkMatchhorizontal = () => {

            for (let i = 0; i < levelSize; i++) {
                const line = document.querySelectorAll(`[data-x="${j}"]`);
                // console.log(line);

                for (j = 0; j < levelSize - 2; j++) {
                    console.log(line[j].dataset.emoji);
                    if (
                        line[i].dataset.emoji === line[i + 1].dataset.emoji &&
                        line[i].dataset.emoji === line[i + 2].dataset.emoji
                    ) {
                        console.log(line[i].dataset.emoji);
                        return true
                    }
                }


                //     const boxToRemove = line[j].dataset.smallBox;
                //     for (let lineMatch = j; lineMatch < mainGrid; lineMatch++) {
                //       if (line[lineMatch].dataset.smallBox === boxToRemove) {
                //         line[lineMatch].remove();
                //       } else {
                //         break;
                //       }
                //     }
                //   }
                // }
            }
            return false;
        }


    }

    // }

    // }


    // //----------------------------- JHAY  ----------------------------//

    // const isAdyacenteBox = (itemSelected, clickedItem) => {
    //   const itemSelectedX = number(itemSelected.dataset.x);
    //   const itemSelectedY = number(itemSelected.dataset.y);
    //   const clickedItemX = number(clickedItem.dataset.x);
    //   const clickedItemY = number(clickedItem.dataset.y);

    //   if (itemSelectedX === clickedItemX) {
    //     return (itemSelectedY === clickedItemY - 1) || (itemSelectedY  === clickedItemY + 1);
    //   } else if (itemSelectedY === clickedItemY) {
    //     return (itemSelectedX === clickedItemX- 1) ||(itemSelectedX === clickedItemX + 1);
    //   }
    //   return false;
    // };



    //--------yo le cambie los parámetros a la función, recuerden que antes tenia 
    //--------(a,b) y no estaban declarados previamente. Entonces pensé ponerle los 
    //---------mismos parámetros que la función de intercambiar divs.. pero nada{

}