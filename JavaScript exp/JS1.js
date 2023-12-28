//Alert lo que hace es que da un mensaje
var a=document.getElementsByTagName("p");
var v=document.getElementsByTagName("img");
var aux;
var aux2;

function saludo(){
  alert("Loren is god!");
}
// getElementsbyTagName que se le pasa por parametro el nombre de la etiqueta y te devuelve un array con todas las etiquetas
function saludador(){
  
  for(var i=0;i<a.length;i++)
  a[i].onclick=saludo;

}
function Eventos(){
  for(var i=0;i<a.length||i<v.length;i++){
    //AddEventListener es  una funcion utilizada en una funcion controladora para agregar eventos la sintapsis es ("Accion",Funcion, false)
    a[i].addEventListener("click",saludo,false);
    v[i].addEventListener("mouseover",crecer,false);
    v[i].addEventListener("mouseout",reestablecer,false);
   
     
    }
    document.getElementsByTagName("body")[0].addEventListener("click",generaParrafo,false);
 // document.getElementsByID("boton").onclick=function(){f1();};
}
function crecer(){
  for(var i=0;i<v.length;i++){
    aux =v[i].width;
    aux2=v[i].height;
    v[i].width=225;
   // v[i].height=225;
  }
}
function reestablecer(){
      for(var i=0;i<v.length;i++){
      v[i].width=aux;
      //v[i].height=aux2;
      }
    }
    function generaParrafo(){
      document.body.innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>"
    }
    function f1(){
      document.getElementById("Imagen").src=arrayImg[punteroNext];
       punteroNext++;
       if(punteroNext==arrayImg.length)
       punteroNext=0;
    }
    //window.onload es un evento que hace es que cargue la funcion a la que iguales al momento de cargar la pagina
    window.onload=Eventos;
    function Previus(){
      var imagenes=["/imagenes/Yukishiro.jpg","imagenes/Yuki.jpg"];
    }