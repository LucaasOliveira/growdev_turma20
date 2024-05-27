const num1 = Number(prompt("Informe um número"));
const num2 = Number(prompt("Informe outro número"));
const operacao = prompt(`Agora escolha uma dessas 4 operações matemáticas:\n+ (soma)\n - (subtração)\n* (multiplicação)\n/ (divisão)`);

let resultado;

switch (operacao) {
  case "+":
    resultado = num1 + num2;
    document.write(`${num1} + ${num2} = ${resultado}`);
    break;
  case "-":
    resultado = num1 - num2;
    document.write(`${num1} - ${num2} = ${resultado}`);
    break;
  case "*":
    resultado = num1 * num2;
    document.write(`${num1} * ${num2} = ${resultado}`);
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
      document.write(`${num1} / ${num2} = ${resultado}`);
    } else {
      document.write("Erro: Não é possível dividir por zero. Por favor, tente com um divisor diferente de zero.");
    }
    break;
  default:
    document.write("Operação inválida. Escolha uma das operações 4 listadas.");
    break;
};