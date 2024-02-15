/*function nombreDeLaFuncion(){
//cuerpo de la funcion
}
*/


function saludar(){
    console.log("Hola mundo desde una funcion");
}
//Se llama a la funcion
saludar();

function sumar( x, y){    
    return x + y;
}

console.log(sumar(20, 5));

function presentar (nombre){
   console.log("Hola mi nombre es " + nombre);
}
presentar("Erick");


function presentar2 (nombre){
    console.log(`Hola mi nombre es ${nombre}` );
 }
 presentar2('Erick');
 
 //Arrow function
var restar =(a,b)=>{
    return a - b;
}

console.log(restar(10,4));

var multiplicar =(a,b)=> a * b;//Este es como un return sin llamar al return
console.log(multiplicar(2,2));


var division = (a,b)=>{
    if(typeof a === 'number' && typeof b === 'number'){
        return a / b;
    }else{
        return 'Solo puedes dividir numeros';
    }
}

console.log(division('b','a'));