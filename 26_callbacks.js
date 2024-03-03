const getData = (cb)=>{
    setTimeout(() => {
        cb({
            nombre: "Erick",
            apellido: "Medina"
        })
    },2000);
}

const imprimirData = (data) => console.log(data);

getData(imprimirData);