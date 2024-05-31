const numero = Number(prompt("Digite um número: "));

for (let i = 0; i <= numero; i++) {
  let resultado = numero * i;
  console.log(`${i} * ${numero} = ${resultado}`);
};