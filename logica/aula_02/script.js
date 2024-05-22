// exercicio em aula 1
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let resultadoMediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

if (resultadoMediaPonderada >= 7) {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, parabéns está aprovado`);
} else {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, você está reprovado, se esforce mais um pouco.`);
}

//exercicio em aula 2

let anos = 28;
let meses = 3;
let dias = 13;

let diasPorAno = 365;
let diasPorMes = 30;

let totalDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;

console.log(totalDias)

// atividade 1

let num1 = 5;
let num2 = 3;

let resultadoSoma = num1 + num2;
let resultadoSubtracao = num1 - num2;
let resultadoMultiplicacao = num1 * num2;
let resultadoDivisao = num1 / num2;

console.log(
  `Soma: ${resultadoSoma}
  Subtração: ${resultadoSubtracao} 
  Multiplicação: ${resultadoMultiplicacao}
  Divisão:${resultadoDivisao}
`);

//atividade 2

let idade = 28;

if (idade >= 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}

//atividade 3
let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par`);
} else {
  console.log(`${numero} é impar`);
}

// atividade 4
let num3 = 10;
let num4 = 5;
let operador = "+";

let resultado;

if (operador === "+") {
  resultado = num3 + num4;
} else if (operador === "-") {
  resultado = num3 - num4;
} else if (operador === "*") {
  resultado = num3 * num4;
} else if (operador === "/") {
  resultado = num3 / num4;
} else {
  console.log("Verifique seu operador, somar, subtrair, multiplicar ou dividir.");
}

console.log(`${num3} ${operador} ${num4} = ${resultado}`);


