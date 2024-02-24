//some ayuda a verificar si al menos uno un elemento de cada arreglo cumple con una condicion

//en este caso el codigo dice si almenos uno es par
var num = [2,3,2,1,4,5,4,8];
var r = num.some((numero)=>numero % 2 === 0);
console.log(r);

//every todos los elementos de una rreglo deven de cumplir con la condicion
//este hace lo mismo que el anterior pero con todos los elementos del array
var numeros = [1,2,3,4,5,6,7,8,9,10];
var t = numeros.every((n)=> n%2===0);
console.log(t);