# Algoritmos de Cálculo

Este repositório contém dois algoritmos desenvolvidos para calcular a média ponderada de um aluno e transformar a idade de uma pessoa de anos para dias.

## Índice
- Média Ponderada
- Transformar Idade de Anos em Dias
  
## Média Ponderada

Desenvolva um algoritmo que calcule a média ponderada de um aluno e, no final, informe se o aluno passou (se tirou mais que 7) ou reprovou (se tirou menos que 7). O aluno terá 3 notas, e cada nota terá os seguintes pesos: 2, 3 e 5, respectivamente.

```
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let resultadoMediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

if (resultadoMediaPonderada >= 7) {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, parabéns está aprovado.`);
} else {
  console.log(`Sua média ponderada foi: ${resultadoMediaPonderada}, você está reprovado, se esforce um pouco mais.`);
}
```


## Transformar Idade de Anos em Dias

Desenvolva um algoritmo que transforma a idade de uma pessoa expressa em anos, meses e dias e, no final, dê a idade da pessoa expressa em dias.

```
let anos = 29;
let meses = 3;
let dias = 13;

let diasPorAno = 365;
let diasPorMes = 30;

let totalDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;

console.log(`Você nasceu em 13/03/1995, transformando essa data em dias, podemos dizer que você tem ${totalDias} dias de vida.`);

```
