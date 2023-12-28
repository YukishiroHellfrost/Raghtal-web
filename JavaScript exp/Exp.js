//Como puedo hacer una funcion en JS que muestre un reloj?
function Persona(nombre,edad,id){
    if(typeof nombre!=='string'|| typeof edad!=='number'|| typeof id !=='string'){
        throw new Error("Papi, si te pido nombre edad y carne de ida es por algo corazon");
    }
    this.nombre=nombre;
    this.edad=edad;
    this.id=id;
    this.Comemielda=function(){
        console.log(nombre+" papi ya tu sabe");
    }
}
let a=new Persona("Ronwaldo",22,"02020202412");
console.log(a);
a.Comemielda();
let b=new Array(1);
b[2]=a;
b[1]=new Persona("Kevin",14,"Barrio Marginal");
b[0]=new Persona("Krewell",12,"Hputa beibi");
b[3]="Rogelio";
console.log(b);
 class Person{
      constructor(nombre, id) {
        if(typeof nombre!=='string'|| typeof edad!=='number'|| typeof id !=='string'){
            throw new Error("Papi, si te pido nombre edad y carne de ida es por algo corazon");
        }
        this.nombre=nombre;
        this.id=id;
     }
       
    }

 