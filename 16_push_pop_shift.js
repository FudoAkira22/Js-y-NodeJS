var letras = ['A','B','C','D','E'];

//Push
//Agrega un valor al arreglo en este caso lo agrega al final por defecto
letras.push('F');
console.log(letras);

//Shift
letras.shift();//quita el primer valor del arreglo
var letra1 = letras.shift();//aqui se almacena el elemento en una variable
console.log(letras);
console.log(letra1);

//POP
//este quita el ultimo valor y se puede almacenar en otra varianble
var letras = ['A','B','C','D','E'];
var letra3 = letras.pop();//Toma la letra E
console.log(letra3);
console.log(letras);