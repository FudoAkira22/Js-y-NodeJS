var estudiantes = [
    {nombre:'Alicia',edad:50,matriculado:true},
    {nombre:'Erick',edad:23,matriculado:false},
    {nombre:'David',edad:18,matriculado:false},
    {nombre:'Martin',edad:60,matriculado:true},
    {nombre:'Diego',edad:3,matriculado:false}
];
//FILTRA  solo los que tengan mayor o igual 21 y que aparte seam matriculado
var filtrado = estudiantes.filter((estudiante)=>estudiante.edad >=21 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);