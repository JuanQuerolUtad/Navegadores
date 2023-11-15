document.getElementById("posterior").addEventListener('click', posteriorBtn);
document.getElementById("anterior").addEventListener('click', anteriorBtn)
let pos = document.getElementById("posterior");
let ant = document.getElementById("anterior")
/**
 * Guardo los datos  en un array multidimensional donde se guardara el nombre del navegador web, el logo,
 * la fecha de creacion, la compañia que lo creo, y un array con las caracteristicas del navegador
 */
let contenido = [["Google Chrome", "imagenes/googleChrome.png", "2 de septiembre de 2008", "Google ", 
["Sugerencias Inteligentes en la Barra de Direcciones", "Descargas más simples", 
"Modo incognito", "Navegación segura", "Puedes guardarte tus paginas webs favoritas", "Te enseña tus Destinos Favoritos en Cada Nueva Pestaña" ]],
 ["Safari", "imagenes/safari.png", "7 de enero de 2003", "	Apple Inc.", 
 ["Sincronización perfecta en safari a través de dispositivos apple con iCloud", "Simplifica la navegación", "El motor javaScript de safari impulsa la velocidad y amplía la duración de la batería", "Safari te ayuda a recordar cada rincón de la web, simplemente busca por título o tema." ]], 
 ["Microsoft Edge", "imagenes/Edge.png", "29 de julio de 2015", "Microsoft", 
 ["Leer en voz alta una web", "Tiene buen rendimiento", "Tiene el buscador bing y su inteligencia artificial", "Tiene un solucionador matemático integrado para resolver problemas paso a paso"]], 
 ["Mozilla Firefox", "imagenes/Firefox.png" , "23 de septiembre de 2002", "Corporación Mozilla",
 ["Es multiplataforma", "Protección contra programa espías", "Facilita la lectura directa de titulares de noticias RSS sin requerir la instalación de programas adicionales.", "Es muy accesible" ]], 
 ["Opera", "imagenes/Opera.png" , "10 de abril de 1995", "Opera Software ASA", 
 ["Tiene una vpn gratuita", " Tiene otro navegador dirigido a a jugadores de videojuegos", "Noticias personalizadas", "Navegación Versátil en tres sistems operativos", "Aplicaciones en la barra lateral" ]], 
 ["Internet Explorer", "imagenes/InternetExplorer.png" , "16 de agosto de 1995", "Microsoft", 
 ["Mejoras a nivel de HTML.", "Antigua mente era de los mas usados", "Ahora esta obsoleto", "Es de los peores en redimiento ", "Facilita la comunicación." ]], 
 ["Brave", "imagenes/brave.png" , "20 de enero de 2016", "Brave Software", 
 ["Bloqueo automático de anuncios y rastreadores de sitios web", "Carga más rápida de páginas", "odo de navegación privado", "Sistema de recompensas de criptomonedas"]]];
 /**
  * inicializo un contador que sera que cambie los datos cuando das ha una carta y tambie incializo a datos1 , datos2 y caracteristicas
  */
let cont=-1;
let datos1='';
let datos2='';
let caracteristicas= '';
/**
 * hago una funcion que cuando des a las flechas cambie la infomacion
 */
document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight'){
        siguiente()
    }else if(e.key==='ArrowLeft'){
        anterior()
    }
})
/**
 * La funcion posteriorBtn sirve para que cuando des a la carta de la derecha pase al siguiente dato del array
 */
function posteriorBtn(){
    
    siguiente()
    
}
/**
 * La funcion posteriorBtn sirve para que cuando des a la carta de la izquierda pase al anterior dato del array
 */
function anteriorBtn(){
    anterior()
}
function siguiente(){
    
cont++;
if (cont>6){
    cont=0
}
escribir();
}

function anterior(){
    
cont--;
if (cont<0){
    cont=6
}
escribir();
}
/**
 * La funcion escribir mete en datos1 un codigo de html en un div donde  una imagen  con el logo del navegador
 * que esta en la posicion 2 del array y tambie inclura abajo un titulo
 */
function escribir(){
    /** en la funcion escribir se imprime en unos div los datos de los navegadores */
    datos1='';
    document.getElementById("carta").innerHTML=datos1
    datos2=''
    document.getElementById("pantalla").innerHTML=datos2
    caracteristicas='';
    
    
    
    datos1+=`
    <figure><img src="${contenido[cont][1]}" alt="${contenido[cont][0]}" class="imagen"></figure>
    <div><h2>${contenido[cont][0]}</h2></div>
    `;
    datos2+=`<h2>Nombre: ${contenido[cont][0]}</h2>
    <h2> Fecha de creacion: ${contenido[cont][2]}</h2>
    <h2>Autor: ${contenido[cont][3]} </h2>
    <h2>Caracteristicas
    <div id="carac"> </div>
    `;
    
    
    document.getElementById("carta").innerHTML=datos1;
    document.getElementById("pantalla").innerHTML=datos2;
    /**
     * pone las caractelisticas del navegador
     */
    for (let index = 0; index < contenido[cont][4].length; index++) {
        caracteristicas+= `
        <ul >
        <li>${contenido[cont][4][index]}</li>
    </ul>`
    document.getElementById("carac").innerHTML=caracteristicas;
    }
    
}
