//Operador en cadena o concatenacion (+)
var nombre = 'Erick';
var edad = 22 ;
var datos = nombre + edad;
console.log("Su nombre es "+nombre+ " y su edad es "+ edad);


//Operador condicional
//Es igual que el if
//el ? revisa la condicion y el : es el que da el resulyado
console.log(2 > 3 ? "Es mayor" : "Es falsa");


//Operador de desestructuracion
var persona ={
    nombre:"Erick",
    apellido:"Pantoja"
}
var {nombre,apellido} = persona;//Esto saca la propiedad de persona
var {nombre:xyz} = persona;//tambien se le puede cambiar el nombre a la propiedad
console.log(nombre);
console.log(apellido);
console.log(persona);

//Desestrucutrar un arreglo
var arreglo =[1,2,3,4,5];
var[primera,segunda] = arreglo;//Es parecido al otro pero le va genarando una posision empeazando por el primer numero
console.log(primera);
console.log(segunda);


//notacion punto
//se puede acceder a las propiedades
var persona = {
    nombre: 'Erick',
    edad:22
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona['nombre']);//Por corchete

//arreglos por corchete
var numeros = [1,2,3,4,5];
console.log(numeros[0]);
console.log(numeros[4]);

//operador por (typeof)
//Para saber el tipo de un dato
console.log(typeof'Erick');