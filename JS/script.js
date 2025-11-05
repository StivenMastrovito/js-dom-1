/*
Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Rendete il tutto un po più bello e creativo
*/

const lampadina = document.querySelector(".lampadina");
const btn = document.querySelector(".btn");
const sfondo = document.querySelector("body");

let on = false;

btn.addEventListener("click", function () {
    if (on) {
        lampadina.src = "./img/white_lamp.png";
        btn.innerText = "Accendi";
        sfondo.style.backgroundImage = "url(../img/spento.jpeg)";
    }else{
        lampadina.src = "./img/yellow_lamp.png";
        btn.innerText = "Spegni"
        sfondo.style.backgroundImage = "url(../img/acceso.jpeg)";
    }
    on = !on;
})
