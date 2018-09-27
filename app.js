
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
        .then(resultado => console.log(colors.cyan(resultado)))
        .catch(e => console.log(e));
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Se ha creado el archivo: ${colors.green(archivo)}`))
        .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');
}
