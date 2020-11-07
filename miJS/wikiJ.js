
$(document).ready(function(){
    $(".menuLetra").toggle(function(){

        $('nav ul').animate({"left":"0px"},1000);
        $(".icon-menu").css({"display":"none"});
        $(".icon-cross").css({"display":"block"});
        $('nav ul').css({"height":"100%"});
    },
    function(){
        $('nav ul').animate({"left":"-1500px"},1000);
        $(".icon-menu").css({"display":"block"});
        $(".icon-cross").css({"display":"none"});
    })
});
    
       
/* ---------------------------------FUNCIONES TUTORIALES B------------------------------------ */

/* Arrays con todas las fotos y textos de los tutoriales tipo B */
var arrayFotosFreenasInstall=new Array(
    "img/freenasInstall/paso8.jpg",
    "img/freenasInstall/paso9.jpg",
    "img/freenasInstall/paso10.jpg",
    "img/freenasInstall/paso11.jpg",
    "img/freenasInstall/paso12.png",
    "img/freenasInstall/paso13.png",
    "img/freenasInstall/paso14.png"
);
var arrayContenidoFreenasInstall=new Array(
    "Seleccionamos Install/Upgrade.",
    "Elegimos el disco en el que freenas se instalará.",
    "Seleccionamos Yes.",
    "Una vez instalado reiniciamos el sistema.",
    "Una vez reiniciado aparecerá el siguiente menú.",
    "Si queremos configurar la ip y la máscara seleccionaremos la opción 1 y seguiremos los siguientes pasos.",
    "Si queremos configurar la DNS  seleccionaremos la opción 6 e introduciremos la DNS."
);

var arrayFotosFreenasConf=new Array(
    "img/freenas/paso1.png",
    "img/freenas/paso2.png",
    "img/freenas/paso3.png",
    "img/freenas/paso4.png",
    "img/freenas/paso5.png",
    "img/freenas/paso6.png",
    "img/freenas/paso7.png",
    "img/freenas/paso8.png",
    "img/freenas/paso9.png",
    "img/freenas/paso10.png",
    "img/freenas/paso11.png"
);

var arrayContenidoFreenasConf=new Array(
    "Nos conectaremos al cliente de FreeNAS y creamos un pool.",
    "Pulsamos el botón ADD.",
    "Pulsamos el botón CREATE POOL.",
    "Le damos un nombre y seleccionamos los discos.",
    "Después de crear el pool añadiremos un dataset.",
    "Le damos un nombre y pulsamos el botón save.",
    "Activamos los siguientes servicios.",
    "Vamos al apartado Tasks -> Rsync task y pulsamos el botón ADD.",
    "Seleccionamos la ruta en la que se guardarán las copias. Elegimos el usuario que ejecutará la acción Rsync. Seleccionamos el modo SSH, escribimos la dirección del servidor (preferiblemente usuario@ip) y su puerto.",
    "Seleccionamos la ruta remota que contiene el contenido que queremos copiar. Seleccionamos la direction PULL y la periodicidad que uno quiera.",
    "Una vez configurado pulsamos el botón SAVE y haremos la primera ejecución."
);

var arrayFotosProxmoxInstall=new Array(
    "img/proxmox/paso2.png",
    "img/proxmox/paso3.png",
    "img/proxmox/paso4.png",
    "img/proxmox/paso5.png",
    "img/proxmox/paso6.png"
);

var arrayContenidoProxmoxInstall=new Array(
    "Seleccionaremos el disco en el que deseamos instalarlo.",
    "Seleccionamos el país y distribucion de teclado.",
    "Introducimos un correo y le damos una contraseña.",
    "Configuramos la red. Le damos un nombre al host, una ip, mascara y DNS.",
    "Una vez instalado, podrás acceder al interfaz mediante la ip que se muestre."
);

var arrayFotosProxmoxVM=new Array(
    "img/proxmoxVM/paso1.png",
    "img/proxmoxVM/paso2.png",
    "img/proxmoxVM/paso3.png",
    "img/proxmoxVM/paso4.png",
    "img/proxmoxVM/paso5.png",
    "img/proxmoxVM/paso6.png",
    "img/proxmoxVM/paso7.png",
    "img/proxmoxVM/paso8.png"
);

var arrayContenidoProxmoxVM=new Array(
    "Para realizar las copias de ubuntu, instalaremos FreeNAS  dentro de proxmox. Si no tenemos ninguna iso en el servidor subiremos una desde el ordenador.",
    "Seleccionamos una iso desde nuestro ordenador.",
    "Seleccionaremos el botón situado en el lado superior derecho.",
    "Nos aparecerá la siguiente ventana. Le damos un nombre e ID.",
    "Seleccionamos la iso del sistema.",
    "Le damos el espacio deseado al disco.",
    "Le damos la cantidad de núcleos.",
    "La cantidad de memoria ram."
);

var imgAnterior=document.getElementById("anterior").addEventListener("click",anteriorFotoTutorialB);
var imgSiguiente=document.getElementById("siguiente").addEventListener("click",siguientefotoTutorialB);
var imgPosicion=0;
var arrayFoto=[];
var arrayContenido=[];

if(document.getElementById("tutorialBFreenasConf")){
    arrayFoto=arrayFotosFreenasConf;
    arrayContenido=arrayContenidoFreenasConf;

}

if(document.getElementById("tutorialBFreenasInstall")){
    arrayFoto=arrayFotosFreenasInstall;
    arrayContenido=arrayContenidoFreenasInstall;

}

if(document.getElementById("tutorialBProxmoxInstall")){
    arrayFoto=arrayFotosProxmoxInstall;
    arrayContenido=arrayContenidoProxmoxInstall;

}

if(document.getElementById("tutorialBProxmoxVM")){
    arrayFoto=arrayFotosProxmoxVM;
    arrayContenido=arrayContenidoProxmoxVM;

}

//Cambia las fotos y textos del tutorial
function siguientefotoTutorialB(){
    
    if(imgPosicion<arrayFoto.length-1){
        imgPosicion++;
        document.getElementById("fotoB").src=arrayFoto[imgPosicion];
        document.getElementById("paso").innerHTML=arrayContenido[imgPosicion];
        document.getElementById("numeroTutorialB").innerHTML=imgPosicion+1;
    }

}

function anteriorFotoTutorialB(){
    
    if(imgPosicion>0){
        imgPosicion--;
        document.getElementById("fotoB").src=arrayFoto[imgPosicion];
        document.getElementById("paso").innerHTML=arrayContenido[imgPosicion];
        document.getElementById("numeroTutorialB").innerHTML=imgPosicion+1;
    }

}
   