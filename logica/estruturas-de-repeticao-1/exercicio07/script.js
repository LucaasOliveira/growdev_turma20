let soma = 0;
let countPositivos = 0;
let countNegativos = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));

  soma += numero;

  if (numero > 0) {
    countPositivos++;
  } else if (numero < 0) {
    countNegativos++;
  }
}

let media = soma / 10;
let percentualPositivos = (countPositivos / 10) * 100;
let percentualNegativos = (countNegativos / 10) * 100;

console.log(`Média aritmética: ${media}`);
console.log(`Quantidade de valores positivos: ${countPositivos}`);
console.log(`Quantidade de valores negativos: ${countNegativos}`);
console.log(`Percentual de valores positivos: ${percentualPositivos}%`);
console.log(`Percentual de valores negativos: ${percentualNegativos}%`);
