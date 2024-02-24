//Busca un elemnto que coincida con alguna condicion y lo traera
var clientes = [
    {id:1, nombre:'ada'},
    {id:2, nombre:'erick'},
    {id:3, nombre:'david'},
    {id:4, nombre:'martin'}
]
//en este si se enecuntra el id igual a 1 lo traera
//si no lo encuentra retornara un undefined
var cliente = clientes.find((cliente)=>cliente.id ===1);
var filter = clientes.filter((cliente)=>cliente.id ===1);
console.log(filter);
console.log(clientes);


//findindex dira la posicion de un elemento en el array

var clientes = [
    {id:1, nombre:'ada'},
    {id:2, nombre:'erick'},
    {id:3, nombre:'david'},
    {id:4, nombre:'martin'}
]

var posicion = clientes.findIndex((cliente) => cliente.id ===1);//en este caso ese elemento es el 0 de el array
console.log(posicion);