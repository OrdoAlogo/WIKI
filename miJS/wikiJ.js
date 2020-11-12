
/* FUNCIÓN MENU DESPLEGABLE MOVIL */
$(document).ready(function(){
    $(".icon-menu").toggle(
        function(){
        $('nav ul').animate({"left":"-35px"},1000);
        $(".icon-menu").css({"color":"#a1c04a"});
        $('nav ul').css({"height":"270px","width":"200px","z-index":"1000","background-color":"#000000", "padding":"20px"});
        $('ul li a').css({"color":"#a1c04a"});
        },
        function(){
            $('nav ul').animate({"left":"-1500px"},1000);

            setTimeout(function(){
                $('nav ul').css({"height":"auto","width":"80%","background-color":"white", "padding":"0"});  
                $('ul li a').css({"color":"black"});
            }, 500);
            
        }
    )
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
    "Seleccionamos Install/Upgrade y pulsamos OK",
    "Elegimos el disco en el que freenas se instalará y confirmamos con OK.",
    "Una vez leido todo si estamos de acuerdo seleccionamos Yes.",
    "Una vez instalado nos pedira que reiniciemos el sistema, pulsamos OK.",
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
    "Pulsamos el botón ADD situado arriba a la derecha.",
    "Nos apareceran dos opciones, marcaremos CREATE NEW POOL y pulsamos el botón CREATE POOL.",
    "Le damos un nombre y seleccionamos los discos.Una vez hecho pulsaremos el botón create situado en la parte inferior izquierda.",
    "Después de crear el pool añadiremos un dataset.",
    "Le damos un nombre y comprobamos que el resto esta correcto, despues pulsamos el botón save.",
    "Tendremos que activar los siguientes servicios en este caso seran SSH, S.M.A.R.T y Rsync .",
    "Vamos al apartado Tasks -> Rsync task y pulsamos el botón ADD situado arriba a la derecha.",
    "Seleccionamos la ruta en la que se guardarán las copias. Elegimos el usuario que ejecutará la acción Rsync. Seleccionamos el modo SSH, escribimos la dirección del servidor (preferiblemente usuario@ip) y su puerto.",
    "Seleccionamos la ruta remota que contiene el contenido que queremos copiar. Seleccionamos la direction PULL y la periodicidad que uno quiera. Una vez configurado pulsamos el botón SAVE",
    "En esta pantalla aparece la tarea que acabamos de crear y en la parte inferior izquierda un botón llamado RUN NOW, pulsaremos ese boton y arriba a la izquierda aparecera un icono verde que dice SUCCES. El SUCCES significa que todo esta correcto."
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
    "img/proxmoxVM/paso8.png",
    "img/proxmoxVM/paso9.png"
);

var arrayContenidoProxmoxVM=new Array(
    "Para crear una máquina necesitaremos una imagen iso. Si no tenemos ninguna iso en el servidor subiremos una desde el ordenador.",
    "Seleccionamos una iso desde nuestro ordenador.",
    "Seleccionaremos el botón situado en el lado superior derecho.",
    "Nos aparecerá la siguiente ventana. Le damos un nombre e ID.",
    "En el apartado de ISO image seleccionamos la ISO del sistema.",
    "En el apartado Bus/Device seleccionamos el tipo de disco que queremos y despues en Disk size le damos el espacio deseado al disco.",
    "En el apartado de Cores seleccionaremos la cantidad de núcleos deseados.",
    "En el apartado Memory seleccionaremos la cantidad de memoria ram (Tenga en cuenta la memoria fisica del servidor).",
    "Una vez se hayan configurado todos los apartados, nos mostrará un resumen. Podremos seleccionar que se ejecute inmediatamente después  de pulsar el botón Finish."
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
   