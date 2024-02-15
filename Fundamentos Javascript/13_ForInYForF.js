var persona = {
    nombre:'Erick',
    edad : 22,

};
//For in
/*
Con la declaracion de clave entra en la propiedad por asi decirlo 
en nombre y en edad
 y cuando pones persona[clave] pasa por la propiedad y el valor dentro del objeto*/
for(let clave in persona){
    console.log(clave, persona[clave]);
}
//For pf reccorre los valores del arreglo
var arreglo = [1,2,3,4,5];
for(let valor of arreglo){
    console.log(valor);
}
//Tambien sirve para que diga letra por letra de un string
var nombre = "Erick";
for(let valor of nombre){
    console.log(valor);
}