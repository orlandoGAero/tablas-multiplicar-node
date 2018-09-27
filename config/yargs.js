const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime tabla de multiplicar', opciones)
                .command('crear', 'Crear tabla de multiplicar', opciones)
                .help()
                .argv;

module.exports = {
    argv
}