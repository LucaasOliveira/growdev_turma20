let numeros = [];

for (numero = 30; numero >= 1; numero--) {
  if (numero > 2) {
    let isPrimo = true;
    for(let count = 2; count < numero; count++) {
      if (numero % count === 0) {
        numeros.push(numero)
        isPrimo = false;
        break;
      };
    };
    if (isPrimo) {
      numeros.push(`[${numero}]`)
    }
  };
  if (numero === 2 ) {
    numeros.push(`[${numero}]`)
  };
};
console.log(`${numeros}`);