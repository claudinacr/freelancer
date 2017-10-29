
function reducir(){
    document.getElementById("header").style.padding = "18px";
    document.getElementById("menu_iz").style.fontSize = "18px";

}

function agrandar(){
    document.getElementById("header").style.padding = "24px";
    document.getElementById("menu_iz").style.fontSize = "26px";
}

/*Funcion para llamar la funcion changeClass cuando el 
evento window.onscroll se active*/
window.onscroll = function changeClass() {
    var scrollvalue = 100;
    
    /*Referencia de para la posicion del scroll de la ventana del navegador*/
    
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    /* y dependiendo si el scroll de la ventana es mayor a un valor
    establecido realizamos el cambio de tamaño a la barra nav*/
    if (scrollPosY > scrollvalue) {
        reducir(); /*Cambio a pequeño*/
    } else if (scrollPosY <= scrollvalue) {
        agrandar(); /*Cambio a grande*/
    }
}