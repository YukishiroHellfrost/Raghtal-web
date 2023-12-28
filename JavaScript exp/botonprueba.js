alert("Esta enlazado a boton prueba!!!")
var a=document.getElementById("boton aux");
var changeText=()=>{
    if(a.innerHTML==="Que bola!")
    a.innerHTML="Te cambié bitch!";
   else
   a.innerHTML="Que bola!";
 }
 function cambiaTexto(){
    var auxiliar1=document.getElementById("parrafo1").innerHTML.toString();
        var auxiliar2=document.getElementById("parrafo2").innerHTML.toString();
   
        document.getElementById("parrafo1").innerHTML=auxiliar2;
        
        document.getElementById("parrafo2").innerHTML=auxiliar1;
   
}
var d=new Date();
document.getElementById("Horario").onload.innerHTML
 document.getElementById("boton aux").onclick=changeText();