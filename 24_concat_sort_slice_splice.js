//concat
//Concatena los array e este caso pone primero el array uno y despues el 2
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array2.concat(array1);
//o
var array4 = [...array2, ...array1];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array3.sort());
console.log(array4);

//sort
//En este caso ordena el array por el orden secuencial de los numeros como se inicia con 0
//manda el cero al inicio
var array5 = [1,2,3,4,5,6,7,8,9,0];
console.log(array5.sort());
//con string toma en cuenta la primer letra y los acomoda por orden alfabetico
var letras = ['e','d','c','b','a'];
console.log(letras.sort());

var f = [1,100,21,4,30];
var ordena = f.sort((a,b)=> a - b);//forma acendente
var ordena1 = f.sort((a,b)=> b - a);//forma desendente 
console.log(ordena1);
console.log(ordena);

//splice
//remueve elementos dentor del arreglo
var nom = ['Erick','Medina','Pantoja'];
nom.splice(1);//desde el arreglo 1 se borra en adelante
nom.splice(1,1);//este ya es el rango
nom.splice(1,1,'Martin');//este lo remplaza
console.log(nom);


//slice
//retorna una copia de una parte mas pequena del array
var nom = ['Erick','Medina','Pantoja'];
var resultado = nom.slice(0,1);//no incluye la ultima posicion
console.log(resultado);