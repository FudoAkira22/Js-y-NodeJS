var calificaciones = [10,10,10,5,5];
//Sumara todos los numeros de este array
//var suma = calificaciones.reduce((acumulador,calificacion)=> acumulador + calificacion, 0);
console.log(suma);
console.log(suma/ calificaciones.length);//Esto dividira la suma entre el numero de datos de el array

//Este te dice cuantos hay repetidos y cuantos de los repetidos hay
var edades = [21,21,23,43,21,43,18,18,23,23]
var resultado = edades.reduce((acumulador, edad)=>{
    if(!acumulador[edad]){
        acumulador[edad]=1//Si no existe que la agregue
    }else{
        acumulador[edad]+=1//si existe que le sume a la existencia
    }
    return acumulador
},{})
console.log(edades);
//console.log(resultado);


//este te dice la cantidad total vendida de cada prenda

var ventas =[
    {nombre:'camiseta',precio:15,ventaTotal:10},
    {nombre:'zapatilla',precio:150,ventaTotal:8},
    {nombre:'pantalon',precio:20,ventaTotal:30}
]

var resultado = ventas.reduce((acumulador,producto)=>{
    let totalV = producto.precio * producto.ventaTotal;
    acumulador[producto.nombre] = `$ ${totalV}`;
    return acumulador;
},{});
console.log(ventas);
console.log(resultado);

//mediante reduce en este ejemplo acumulador es el total
//Y producto es comon un indice que entra en cada parate del objeto y lo suma en si