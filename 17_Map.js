var estudiantes = ['Alicia','Brandon','Carla','David','Erick'];
//map injecta el elemento nombre y asistencia a cada valor del arreglo
var asistencia = estudiantes.map((nombre)=>{
    return {
        nombre: nombre,
        asistencia: false
    }
});

console.log(asistencia);
console.log(estudiantes);

//La arrow function solo agregando nombre sin asistencia seria
var estudiantes = ['Alicia','Brandon','Carla','David','Erick'];
var asistencia = estudiantes.map((nombre)=>`${nombre} es estudiante`);
console.log(asistencia);