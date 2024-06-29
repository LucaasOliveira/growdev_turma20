const numerosPerfeitos = [];
let numero = 2;

while (numerosPerfeitos.length < 4) {
  let soma = 0;
  
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) {
      soma += i;
    }
  }
  
  if (soma === numero) {
    numerosPerfeitos.push(numero);
  }
  numero++;
}

console.log(numerosPerfeitos); // Output: [6, 28, 496, 8128]
