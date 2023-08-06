const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');


let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [
    {
        name: "Piedra",
        url: "https://lh3.googleusercontent.com/pw/AIL4fc-hfvt4Q1LNwFgtlcWr8IP2D0VTJsVXl8Lwsq7oCsbvff56yIAEEVtUHXf8SoMkvadGVGfkAf6uh8H4vP0yxGYTqsnA07ETUxsefQa2Qqbp0kVP9SFE=w2400" 
    },
    {
        name: "Papel",
        url: "https://lh3.googleusercontent.com/pw/AIL4fc_uTkuQZXeinJDILonWJQ7G1Zbj-ZkIPAZuygAOxAuk9sY6Xn66Np4U5Iz5OLnLE4keGOIeRW6rSUlmzw1xS42Hj1X7mqDljb35FvZ4WHhoIBuPslAn=w2400" 
    },
    {
        name: "Tijeras",
        url: "https://lh3.googleusercontent.com/pw/AIL4fc_ll5NzFhL6tLIWNCz2lLU0IRRz6TjHwVnnoKi-erRoUWfKL-2zWW09haMnqEZtxZtEGzZvQBjBnC8R_Wjo5Ag68a3rJWOPXuIQ_YLKV_R_VVf-x0df=w2400" 
    }
];



function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})




function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    };

    addImagenes();

}


function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}



function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};

function mostrarIntroducciones() {
    const mensaje = "                         ¡Bienvenido a Piedra | Papel | Tijeras!\n\nEl juego de piedra, papel o tijera tiene sus raíces en diferentes culturas y épocas, con referencias antiguas en China y Japón. La versión moderna se desarrolló en Japón a fines del siglo XIX y se popularizó después de la Segunda Guerra Mundial cuando los soldados estadounidenses lo llevaron a Estados Unidos.\n\nEn este juego, tú y la computadora elegirán un ataque: piedra, papel o tijeras. Las reglas son simples: la piedra vence a las tijeras, las tijeras vencen al papel y el papel vence a la piedra. Si ambos jugadores eligen el mismo ataque, el resultado es un empate.\n\nPara jugar, selecciona uno de los ataques haciendo clic en su respectiva imagen. El resultado de la batalla se mostrará en la parte superior.\n\n                                      ¡Diviértete jugando!";
    
   
alert(mensaje);
}

window.addEventListener('load', iniciar);
