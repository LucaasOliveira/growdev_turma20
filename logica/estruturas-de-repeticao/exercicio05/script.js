const numero = Number(prompt("Digite um número inteiro positivo: "));
let numeros = [];

if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
  console.log(`O número digitado é inválido, precisa ser inteiro e positivo.`);
} else {
  for(let i = 0; i <= numero; i++) {
    numeros.push(i);
  };
  console.log(`Contagem: ${numeros}; FIM!`);
}