// exercicio em aula 1

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let resultadoMediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
console.log(`Exercicio 1 \n`);
if (resultadoMediaPonderada >= 7) {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, parabéns está aprovado.`);
} else {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, você está reprovado, se esforce um pouco mais.`);
}

//exercicio em aula 2

let anos = 29;
let meses = 3;
let dias = 13;

let diasPorAno = 365;
let diasPorMes = 30;

let totalDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;

console.log(`Exercicio 2 \n`);
console.log(`Você nasceu em 13/03/1995, transformando essa data em dias, podemos dizer que você tem ${totalDias} dias de vida.`);

