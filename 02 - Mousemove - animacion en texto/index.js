let texto = document.querySelector('h1');
let hero = document.querySelector('hero');
let max = 300;

/*document.addEventListener('mousemove',function(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    texto.style.textShadow = 
    
});*/

hero.addEventListener('mousemove',function(e){
    let {offsetX : x, offsetY : y} = e;
    let {offsetWidth : width ,offsetHeight : height} = hero

    let desplazaX = Math.round((x / width * max) - max / 2);
    let desplazaY = Math.round((y / height * max) - max / 2);


    texto.style.textShadow = `${desplazaX}px ${desplazaY}px 50px rgba(38, 255, 147, 1)`
});