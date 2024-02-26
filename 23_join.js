//ayuda a unir todos los elementos de un arreglo y lo convierte en un string

var letras = ['fuego','aire','rayo',];
var palabra = letras.join('.');//esto es para que se unan dependiendo (lo que pongas aqui)
console.log(palabra);


var clientes = [
    {id:1, nombre:'Erick'},
    {id:2, nombre:'David'},
    {id:3, nombre:'Fanny'}
]

var csvGeneraator = (array, separador = ',') => {
    let data = aray.map((element) => Object.values())
}

console.log(Object.values({id:1, nombre:'Erick'}));// este solo te da el contenido
console.log(Object.keys({id:1, nombre:'Erick'}));//este te da solo el id y el nombre no los valores