
const fs = require('fs');
let data  = '';

for(let base = 1; base <=10; base++){
    data += `Tabla del: ${base}\n\n`;
    for(let j = 1; j <= 10; j++){
        data += `${base} * ${j} = ${base*j}\n`;       
    }
    data += `\n`;
}

fs.writeFile(`tablas/tablas-multiplicar.txt`, data, (err) => {
    if (err) throw err;
    console.log('Se ha creado el archivo!');
  });
