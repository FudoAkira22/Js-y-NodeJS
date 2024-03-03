// Se define una función llamada getData que toma un parámetro 'error'.
const getData = (error) => 
    // Se crea una nueva promesa.
    new Promise ((resolve, reject) =>{
        // Si no hay error, la promesa se resuelve con un objeto que contiene datos.
        if(!error){
            resolve({
                nombre:"Erick",
                apellido:"Medina"
            });
        } else {
            // Si hay un error, la promesa se rechaza con un mensaje de error.
            reject("No pudimos obtener datos");
        }
    });

// Se llama a la función getData con el parámetro 'false', lo que indica que no hay error.
getData(false)
    // Se encadena un método 'then' a la promesa que se ejecutará si la promesa se resuelve correctamente.
    .then((data) => {
        console.log(data); // Se imprime los datos obtenidos.
    })
    // Se encadena un método 'catch' a la promesa que se ejecutará si la promesa se rechaza.
    .catch((error) => {
        console.log(error); // Se imprime el mensaje de error.
    });

// Se llama a la función getData con el parámetro 'true', lo que indica que hay un error.
getData(true)
    // Se encadena un método 'then' a la promesa que se ejecutará si la promesa se resuelve correctamente.
    .then((data) => {
        console.log(data); // En este caso no se ejecuta porque hay un error.
    })
    // Se encadena un método 'catch' a la promesa que se ejecutará si la promesa se rechaza.
    .catch((error) => {
        console.log(error); // Se imprime el mensaje de error.
    });
