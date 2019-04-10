const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd' //Opcional
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}



const argv = require('yargs')
    .command('crear', 'Crea una nueva Tarea', optsCrear)
    .command('listar', 'Lista de Tareas', {})
    .command('borrar', 'Elimina una tarea por descripción', {
        descripcion: {
            demand: true,
            alias: 'd' //Opcional
        }
    })
    .command('actualizar', 'Actualiza Status de una Tarea', optsActualizar)
    .help()
    .argv;

module.exports = {
    argv
}