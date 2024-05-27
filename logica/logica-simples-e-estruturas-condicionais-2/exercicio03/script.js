const numero = Number(prompt("Digite um número."));
let resultado;

if (numero !== 0) {
  resultado = (numero > 0) ? `${numero} é positivo.` : `${numero} é negativo.`;
} else {
  resultado = `O número digitado foi zero.`;
}

document.write(resultado);
