var letras = ['A','B','C','D','E'];

console.log(letras.length);//Dira cuantas letras hay

//Va a recorrer el array
//dependiendo el valor del i
//en este caso e 0,1,2,3,4 que rrecorrera los 5 espacios del array
for (let i = 0; i < letras.length; i++){
    const element = letras[i];
    console.log(letras[i]);
}
//Este solo permite reccorrer los elementos de un arreglo
letras.forEach((elemento)=>{
    console.log(elemento);
})

//tambien se puede comprimir asi
letras.forEach((elemento) => console.log(elemento));