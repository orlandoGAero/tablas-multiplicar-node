// require
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        
        let res = '';
        
        for(let i = 1; i <= limite; i++){
            res += `${base} * ${i} = ${base * i}\n`; 
        }

        (err => {

            if(err)
                reject(err)
            else
                resolve(res)
        })()

    
    })
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve,reject) => {

        if(!Number(base)){
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }

        let data = `Tabla del: ${base}\n\n`;

        for(let i = 1; i <=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;       
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}