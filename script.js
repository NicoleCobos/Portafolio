let menuVisible = false;
//Funcion qyue oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar menu una vez se selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion que aplica las animaciones a los skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("aprendizaje");
        habilidades[9].classList.add("resolucion");
    }
}

//Detecto el scrolling para aplicar la animacon de skills
window.onscroll = function(){
    efectoHabilidades();
}