/*-------------------------Anuncio de bienvenida al juego----------*/
const mostrar = () => { 
    swal({
        title: '¡Bienvenida!',
        text: "En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar., Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!\n\nControles\n\nClick izquierdo: selección\nEnter o Espacio: selección\nFlechas o WASD: movimiento e intercambio",

        button: ({
            text: "A  Jugar",
            confirm: 'Confirm',
               className:'btn-toPlay',
               confirmButtonAriaLabel: 'Iniciar el juego',
         })

    });
  }
  mostrar();
 
 

  function newGame() {
    swal({
        title: 'Nuevo Juego',
        text: 'Selecciona una dificultad',

        buttons: {
          facil: {
              text: 'Fácil',
              value: 'easy',
              className: 'btn-newGame',
        },
          medio: {
              text: 'Medio',
              value: 'normal',
              className: 'btn-newGame',
        },
          dificil: {
              text: 'Difícil',
              value: 'difficult',
              className: 'btn-newGame',
        },    
        }
    // }).then((value) => {
    //   switch (value) {
    //     case "easy":
    //       level.size; 
    //       level.itemSize; 
    //       createGrid(key);
    //       showGrid();
    //       break;
     
    //     case "normal":
    //       level.size; 
    //       level.itemSize; 
    //       createGrid(key);
    //       showGrid();
    //       break;
     
    //     case "difficult":
    //       level.size; 
    //       level.itemSize;
    //       createGrid(key);
    //       showGrid();
    //       break;
    //   }
    });
  }



  
/*-------------------------Anuncio reiniciar juego----------*/
 
function restartGame() {
     swal({
         title: '¿Reiniciar Juego?',
         text: '¡Perderás todo tu puntaje acumulado!',

         buttons: {
          Cancelar: {
              text: 'Cancelar',
              className: 'btn-restartGame',
        },
          NuevoJuego: {
              text: 'Nuevo Juego',
              className: 'btn-restartGame',
        },   
        }
     })
}