const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}