let iconos = [];
let selecciones = [];
let jugador1Puntos = 0;
let jugador2Puntos = 0;
let attempts = 0;
let aciertos = 0;

generarTablero();

function cargarIconos() {
    iconos = [
        '<i class="fas fa-star"></i>',
        '<i class="far fa-star"></i>',
        '<i class="fas fa-star-of-life"></i>',
        '<i class="fas fa-star-and-crescent"></i>',
        '<i class="fab fa-old-republic"></i>',
        '<i class="fab fa-galactic-republic"></i>',
        '<i class="fas fa-sun"></i>',
        '<i class="fas fa-stroopwafel"></i>',
        '<i class="fas fa-dice"></i>',
        '<i class="fas fa-chess-knight"></i>',
        '<i class="fas fa-chess"></i>',
        '<i class="fas fa-dice-d20"></i>',
    ];
}

function generarTablero() {
    cargarIconos();
    selecciones = [];
    attempts = 0;
    aciertos = 0;
    document.getElementById("attempts").innerText = "Attempts: 0";
    document.getElementById("matches").innerText = "Matches: 0";
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `);
        if (i % 2 == 1) {
            iconos.splice(0, 1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        attempts++;
        document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
        deseleccionar(selecciones);
        selecciones = [];
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0]);
        let trasera2 = document.getElementById("trasera" + selecciones[1]);
        if (trasera1.innerHTML !== trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        } else {
            trasera1.style.background = "plum";
            trasera2.style.background = "plum";
            // Incrementar puntos del jugador actual
            if (selecciones[0] % 2 === 0) {
                jugador1Puntos++;
            } else {
                jugador2Puntos++;
                    }
                    actualizarMarcador();
            aciertos++; // Increment the correct matches count
            document.getElementById("matches").innerText = `Matches: ${aciertos}`; // Update the matches display
        }
    }, 1000);
}

function actualizarMarcador() {
            document.getElementById("jugador1-puntos").innerText = jugador1Puntos;
            document.getElementById("jugador2-puntos").innerText = jugador2Puntos;
        }

function mostrarIntroducciones() {
    const mensaje = "                                    ¡Bienvenido a Memorama!\n\nEl juego de Memorama, también conocido como Juego de la Memoria, tiene sus raíces en las tarjetas de enseñanza de China en la dinastía Song. La versión moderna con cartas ilustradas se popularizó en el siglo XIX en Europa. Con la era digital, se adaptó a videojuegos y aplicaciones. Es un juego de parejas donde los jugadores deben recordar la ubicación de las cartas para encontrar las coincidencias. Además de ser un entretenimiento, el Memorama ha sido utilizado para mejorar la memoria y habilidades cognitivas. Es un juego popular y beneficioso para todas las edades.\n\nEl objetivo del juego es encontrar todas las parejas de cartas iguales. Haz clic en las cartas para voltearlas y trata de recordar dónde se encuentran las cartas que coinciden..\n\n                                           ¡Buena suerte!";
    alert(mensaje);
}
