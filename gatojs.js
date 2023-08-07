let jugadorActual = 1;
let tablero = ['', '', '', '', '', '', '', '', ''];
const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];

const jugadorLetra = {
    1: 'X',
    2: 'O'
};

let hayGanador = false;

function hacerMovimiento(indice) {
    if (tablero[indice] === '' && !hayGanador) {
        tablero[indice] = jugadorActual === 1 ? 'X' : 'O';
        document.getElementsByClassName('celda')[indice].innerText = tablero[indice];

        document.getElementsByClassName('celda')[indice].classList.add(jugadorActual === 1 ? 'x' : 'o');

        if (verificarGanador()) {
            document.getElementById('mensaje').innerText = `¡Jugador ${jugadorLetra[jugadorActual]} ha ganado!`;
            marcarGanador();
            desactivarCuadricula();
            hayGanador = true;
        } else if (verificarEmpate()) {
            document.getElementById('mensaje').innerText = '¡Empate!';
            desactivarCuadricula();
        } else {
            jugadorActual = jugadorActual === 1 ? 2 : 1;
        }
    }
}

function verificarGanador() {
    for (let combinacion of combinacionesGanadoras) {
        if (
            tablero[combinacion[0]] === tablero[combinacion[1]] &&
            tablero[combinacion[0]] === tablero[combinacion[2]] &&
            tablero[combinacion[0]] !== ''
        ) {
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    return !tablero.includes('');
}

function desactivarCuadricula() {
    const celdas = document.getElementsByClassName('celda');
    for (let celda of celdas) {
        celda.onclick = null;
    }
    document.getElementById('jugador1').disabled = true;
    document.getElementById('jugador2').disabled = true;
}

function habilitarCuadricula() {
    const celdas = document.getElementsByClassName('celda');
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerText = '';
        celdas[i].classList.remove('x', 'o', 'winner');
        celdas[i].onclick = function() {
            hacerMovimiento(i);
        };
    }
    tablero = ['', '', '', '', '', '', '', '', ''];
    hayGanador = false;
    document.getElementById('jugador1').disabled = false;
    document.getElementById('jugador2').disabled = false;
}

function seleccionarJugador(jugador) {
    if (!hayGanador) {
        jugadorActual = jugador;
        document.getElementById('mensaje').innerText = '';
        habilitarCuadricula();
    }
}

function marcarGanador() {
    for (let combinacion of combinacionesGanadoras) {
        const celda1 = document.getElementsByClassName('celda')[combinacion[0]];
        const celda2 = document.getElementsByClassName('celda')[combinacion[1]];
        const celda3 = document.getElementsByClassName('celda')[combinacion[2]];

        if (tablero[combinacion[0]] === tablero[combinacion[1]] && tablero[combinacion[0]] === tablero[combinacion[2]] && tablero[combinacion[0]] !== '') {
            celda1.classList.add('winner');
            celda2.classList.add('winner');
            celda3.classList.add('winner');
            break;
        }
    }
}

function reiniciarPartida() {
    document.getElementById('mensaje').innerText = '';
    habilitarCuadricula();
    hayGanador = false;
}


function mostrarIntroducciones() {
    const mensaje = "                                      ¡Bienvenido a Tic Tac Toe!\n\nEl juego 'Tic Tac Toe' tiene raíces en la antigua Roma, pero ganó popularidad en el siglo XIX con el nombre 'Tic Tac Toe' debido al sonido del reloj en inglés. Se hizo famoso en los Estados Unidos en el siglo XX y se convirtió en un juego de estrategia mínima. Con la tecnología moderna, se ha adaptado a diversas plataformas digitales y sigue siendo un juego popular para todas las edades.\n\nEn este juego, dos jugadores se turnan para llenar el tablero con sus 'X' o 'O'. El objetivo es lograr tres de tus símbolos en línea, ya sea en una fila, columna o diagonal.\n\nPuedes seleccionar tu jugador ('X' o 'O') y hacer clic en el tablero para realizar tu movimiento. El juego indicará cuando un jugador gana o cuando es un empate.\n\n                                           ¡Disfruta del juego!";
    alert(mensaje);
}
