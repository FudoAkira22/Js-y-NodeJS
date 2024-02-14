//Estructura IF else
var edad = 17;
if(edad>=18){
console.log("Puede Pasar");
}else{
console.log("No puedes pasar");
}

var adm = "Administrador";
if(adm==="Administrador"){
console.log("Bienvenido al sistema");
}else{
    console.log("quie eres tu?");
}
//encadenados
var llueve = false;
if(llueve === true){
    console.log("Esta lloviendo");
}else if(llueve ==="no"){
    console.log(object);
}else{
    console.log("No esta lloviendo");
}

//Anidados es hacer un if dentro de otro if

//switch

var op = 2;

switch(op){
    case 1:
        console.log("Es lunes");
    break;
    case 2:
        console.log("es martes");
    break;

    default:
        console.log('este caso no existe');
}

var producto = 'Manzana';
switch(producto){
    case 'Manzana':
        console.log("Cuesta 1dl");
        break;
    case 'Pera':
        console.log("Cuesta 2dl");
        break;
    default:
        console.log("No existe precio");
}