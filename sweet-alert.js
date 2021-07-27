/*-------------------------Anuncio de bienvenida al juego----------*/
const showWelcome = () => {
  swal({
    title: '¡Bienvenida!',
    text: "En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!\n\nControles\n\nClick izquierdo: selección\nEnter o Espacio: selección\nFlechas o WASD: movimiento e intercambio",

    button: ({
      text: "A  Jugar",
      confirm: 'Confirm',
      className: 'btn-toPlay',
      confirmButtonAriaLabel: 'Iniciar el juego',
      closeOnClickOutside: false,
    })

  }).then((value) => {
    //-----------------Selecciona el nivel de dificultad del juego----------//
    if (value) {
      swal({
        title: 'Nuevo Juego',
        text: 'Selecciona una dificultad',
        closeOnClickOutside: false,

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
      }).then((value) => {
        switch (value) {
          case "easy":
            setLevel('facil');
            createGrid();
            showGrid();
            gameCountdown();
            break;

          case "normal":
            setLevel('normal');
            createGrid();
            showGrid();
            gameCountdown();
            break;

          case "difficult":
            setLevel('dificil');
            createGrid();
            showGrid();
            gameCountdown();
            break;
        }
      });
    }
  })
}
showWelcome();


//-------------------- Anuncio Botón de Ayuda-------------------//

const helpButton = document.getElementById('btn-help')
helpButton.addEventListener('click', () => {
  swal({
    title: "!Bienvenida!",
    text: "En matcheADAs tu objetivo es juntar tres o más items del mismo tipo, ya sea en fila o en columna. Para eso, selecciona un item y a continuación un item adyacente para intercambiarlos de lugar. \n \n Si se forma un grupo, esos items se eliminarán y ganarás puntos. ¡Sigue armando grupos de tres o más antes de que se acabe el tiempo! \n \n Controles \n Click izquierdo: selección. \n Enter o espacio: selección. \n Flechas o WASD: movimiento e intercambio.",

    button: {
      text: "A Jugar",
      className: 'btn-toPlay',
      closeOnClickOutside: false,
    }
  }).then((value) => {
    if (value) {
      gameCountdown();
    }
  });
});


/*-------------------------Anuncio reiniciar juego----------*/

const restartButton = document.getElementById('btn-restart')
restartButton.addEventListener('click', () => {
  swal({
    title: '¿Reiniciar Juego?',
    text: '¡Perderás todo tu puntaje acumulado!',
    closeOnClickOutside: false,

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
  }).then((value) => {
    if (value == "NuevoJuego") {
      clearInterval(gameSeconds);
      swal({
        title: 'Nuevo Juego',
        text: 'Selecciona una dificultad',
        closeOnClickOutside: false,

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
      }).then((value) => {
        switch (value) {
          case "easy":
            setLevel('facil');
            createGrid();
            showGrid();
            gameSeconds = 30;
            gameSeconds--;
            break;

          case "normal":
            setLevel('normal');
            createGrid();
            showGrid();
            gameSeconds = 30;
            gameSeconds--;
            break;

          case "difficult":
            setLevel('dificil');
            createGrid();
            showGrid();
            gameSeconds = 30;
            gameSeconds--;
            break;
        }

      });
    } //else if (value == "Cancelar") {

    // }
  })
})

//--------------Función Juego Terminado-------------------//

const endGame = () => {
  swal({
    title: "Juego Terminado",
    text: `Puntaje Final: ${score.innerHTML}`,
    closeOnClickOutside: false,
    buttons: {
      end: {
        text: "Reiniciar Partida",
        value: "Restart",
        className: "btn-toPlay",
      },
      again: {
        text: "Jugar de nuevo",
        value: "againPlay",
        className: "btn-toPlay",
      },
    },
  }).then((value) => {
    switch (value) {
      case "againPlay":
        swal({
          title: 'Nuevo Juego',
          text: 'Selecciona una dificultad',
          closeOnClickOutside: false,

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
        }).then((value) => {
          switch (value) {
            case "easy":
              setLevel('facil');
              createGrid();
              showGrid();
              gameSeconds = 30;
              gameSeconds--;
              gameCountdown();
              break;

            case "normal":
              setLevel('normal');
              createGrid();
              showGrid();
              gameSeconds = 30;
              gameSeconds--;
              gameCountdown();
              break;

            case "difficult":
              setLevel('dificil');
              createGrid();
              showGrid();
              gameSeconds = 30;
              gameSeconds--;
              gameCountdown();
              break;
          }

        });
        break;
      case "Restart":
        createGrid();
        showGrid();
        gameSeconds = 30;
        gameSeconds--;
        gameCountdown();
        break;
    }
  });
}