 document.addEventListener("keydown", desplazar);

var teclas = {
  ARRIBA: 38,
  ABAJO: 40,
  IZQUIERDA: 37,
  DERECHA: 39
};

function desplazar(tecla){
        var situacionY = document.getElementById("viborita").offsetLeft;
        var situacionX = document.getElementById("viborita").offsetTop;
        switch (tecla.keyCode){
            case teclas.IZQUIERDA :
                viborita.style.left = situacionY-50 +"px" ;
                break;
            case teclas.ARRIBA :
                viborita.style.top = situacionX-50 +"px" ;
                break;
            case teclas.DERECHA :
                viborita.style.left = situacionY+50 +"px" ;
                break;
            case teclas.ABAJO :
                viborita.style.top = situacionX+50 +"px" ;break;
        default : alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
    }
