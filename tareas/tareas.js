const fs = require('fs');

let listadoPorHacer = [];

const leerDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
        // else
        //     console.log(`Datos almacenados: ${data}`);

    });
}

const getListado = () => { //node app listar

    leerDB();
    return listadoPorHacer;
}

const crear = (descripcion) => { //node app crear -d "Comer"

    leerDB();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const actualizar = (descripcion, completado = true) => { //node app actualizar -d "Comer" -c true

    leerDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => { //node app borrar -d "Comer"

    leerDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}