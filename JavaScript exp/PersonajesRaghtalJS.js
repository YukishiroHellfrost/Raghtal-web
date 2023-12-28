var a=document.getElementsByTagName("img");
var heightA=new Array();
var widthA=new Array();
function decrecer(){
    a[i].width=widthA;
    a[i].height=heightA;
}
function actuador(){
    for(let i=0;i<a.length;i++){
    a[i].addEventListener("mouseover",crecer,false);
    a[i].addEventListener("mouseout",decrecer,false); 
    var v=document.getElementsByTagName("img");
    v[0].addEventListener("click",saludo,false);
}
}
function crecer(){
    for(var i=0;i<a.length;i++){
          heightA[i]=a[i].height;
          widthA[i]=a[i].height;
        a[i].width=225;
        a[i].height=225;
    }
   
    function saludo(){
        alert("Hello World!");

    }
   
}
window.onload=actuador;