let secuencia = [];

let reproducirBtn = document.getElementById('reproducirBtn');
let limpiarSecuenciaBtn = document.getElementById('limpiarSecuencia');

document.addEventListener("keydown",function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla){
    secuencia.push(codigoTecla);
}

function reproducirSecuencia(){
    let audioReproducido;
    for (let i = 0; i < secuencia.length; i++) {
        audioReproducido = document.querySelector(`audio[data-key="${secuencia[i]}"]`);

        setTimeout(function(){
            audioReproducido.play();
        }, i * 500);
        
    }
}
function limpiarSecuencia(){
    secuencia = [];
}

reproducirBtn.addEventListener('click',reproducirSecuencia);
limpiarSecuenciaBtn.addEventListener('click',limpiarSecuencia);