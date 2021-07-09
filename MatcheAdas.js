            //Creando evento de clickeado e intercambio de divs
            smallBox.addEventListener('click', e => {

                if (itemSelected == null) {
                    itemSelected = e.target;
                } else {
                    clickedItem = e.target;

                //    if (isAdyacenteBox(itemSelected, clickedItem)) {
                  //      console.log("isAdyacenteBox")

                    //Constantes auxiliares que reciben los eventos del if
                    const firstAux = itemSelected.style.top;
                    const secondAux = itemSelected.style.left;
                    itemSelected.style.top = clickedItem.style.top;
                    itemSelected.style.left = clickedItem.style.left;
                    itemSelected.setAttribute('data-x', clickedItem.dataset.x);
                    itemSelected.setAttribute('data-y', clickedItem.dataset.y);
                    //Generar variable auxiliar para almacenar el clicked
                    clickedItem.style.top = firstAux;
                    clickedItem.style.left = secondAux;
                    itemSelected = null;
                    clickedItem = null;
                }
                // console.log(e.target);
            });
createGrid('difficult')



//-------------------------Delete match function----------//

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

//----------------Check si hay match vertical -------------------------//
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
        //Cuando hago los desplazamientos, en la consola cambia la posición pero no el emoji.
        //Cree constante que almacene los match encontrados de manera vertical j+j1+j2
      
      
        //----------------Check si hay match horizontal -------------------------//
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

    // //-----------------------------Otra opción de abyacencias JHAI ----------------------------//

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

}