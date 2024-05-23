//OBS: Nas atividades é pedido que crie algumas variáveis com nome genérico, usei nomes de variável com nomes que fazem mais sentido ao que foi pedido.
function pularLinhas() {
  document.write(`</br></br>`);
}

// exercicio 01

const idade = 29;
document.write(`Exercício 01: Minha idade é ${idade} anos.`);
pularLinhas();

// exercicio 02

const num1 = 10;
const num2 = 3;

const resultadoSoma = num1 + num2;
document.write(`Exercício 02: O resultado da soma de ${num1} + ${num2} é ${resultadoSoma}.`)
pularLinhas();

// exercicio 03
const totalDaCompra = 149.90;
const QtdParcelas = 2;
const valorParcela = totalDaCompra / QtdParcelas;

document.write(`
  Exercício 03: O valor total da compra foi R$ ${totalDaCompra}. </br>
  Forma de pagamento: ${QtdParcelas}x de R$ ${valorParcela}. 
  `);
pularLinhas();

// exercicio 04

const minutosTotais = 120;
const segundosTotais = minutosTotais * 60;

document.write(`Exercício 04: ${minutosTotais} minutos equivale à ${segundosTotais} segundos!`);
pularLinhas();
// exercicio 05

const nomeAluno = "Lucas";
const nota1 = 8;
const nota2 = 9;
const nota3 = 10;

const mediaNota = ((nota1 + nota2 + nota3) / 3).toFixed(1);

document.write(`Exercício 05: O aluno ${nomeAluno}, ficou com média ${(mediaNota)}.`);
pularLinhas();

// exercicio 06

let a = 10;
let b = 20;
let c = b;

b = a;
a = c;

document.write(`Exercício 06: Minha variável a = 10 agora é ${a} e minha variável b = 20 agora é ${b}.`);
pularLinhas();

// exercicio 07

const numeroTotalEleitores = 90;
const votosEmBrancos = (30 / numeroTotalEleitores) * 100;
const votosNulos = (30 / numeroTotalEleitores) * 100;
const votosValidos = (30 / numeroTotalEleitores) * 100;

const percentualVotacao = `Exercício 07: A quantidade total de eleitores foi ${numeroTotalEleitores}. </br>
                           Votos em branco: ${votosEmBrancos.toFixed(2)}%. </br>
                           Votos nulos: ${votosNulos.toFixed(2)}%. </br>
                           Votos válidos: ${votosValidos.toFixed(2)}%. </br>`;

document.write(percentualVotacao);
pularLinhas();

// exercicio 08

const valor1 = 10;
const valor2 = 9;
let mensagemSwitch;
let mensagemIfElse;

switch (true) {
  case valor1 === valor2:
    mensagemSwitch = `${valor1} e ${valor2}, os números são iguais.`;
    break;
  case valor1 > valor2:
    mensagemSwitch = `Entre ${valor1} e ${valor2}, o primeiro número é maior.`;
    break;
  case valor1 < valor2:
    mensagemSwitch = `Entre ${valor2} e ${valor1}, o segundo número é maior.`;
    break;
  default:
    mensagemSwitch = `Verifique se você realmente digitou os dois valores.`;
    break;
}

if (valor1 === valor2) {
  mensagemIfElse = `${valor1} e ${valor2}, os números são iguais.`;
} else if (valor1 > valor2) {
  mensagemIfElse = `Entre ${valor1} e ${valor2}, o primeiro número é maior.`;
} else if (valor1 < valor2) {
  mensagemIfElse = `Entre ${valor2} e ${valor1}, o segundo número é maior.`;
} else {
  mensagemIfElse = `Verifique se você realmente digitou os dois valores.`;
};


document.write(`Exercício 08:(switch) ${mensagemSwitch}</br>`);
document.write(`Exercício 08:(if else) ${mensagemIfElse}`);
pularLinhas();
// exercicio 09

const qtdCompra = 11;
const macas = 0.30;
const macaDuzia = 0.25;
let valorTotalDaCompra;

if (qtdCompra < 12) {
  valorTotalDaCompra = `${qtdCompra} maçãs custam R$ ${(qtdCompra * macas).toFixed(2)}.`;
} else if (qtdCompra >= 12) {
  valorTotalDaCompra = `${qtdCompra} maçãs custam R$ ${(qtdCompra * macaDuzia).toFixed(2)}.`;
} else {
  valorTotalDaCompra = `Por enquanto você não pegou nenhuma maçãs, caso leve 12 ou mais cada uma saí por R$ 0.25. Se for menos que isso cada uma saí por R$ 0.30.`;
};

document.write(`Exercício 09: ${valorTotalDaCompra}`);
pularLinhas();

// exercicio 10

const name =  "Lucas";
const age = 29;
const birthYear = new Date().getFullYear() - age;

document.write(`Exercício 10: Nome: ${name}, idade: ${age} anos, nasceu em ${birthYear}.`);
console.log(`Exercício 10: Nome: ${name}, idade: ${age} anos, nasceu em ${birthYear}.`);
pularLinhas();

// exercicio 11

const numero = 10;

let btn = document.createElement("button");
btn.textContent = `Exercício 11: clique para ver o resultado.`;
document.body.appendChild(btn);

btn.addEventListener("click", function() {
  if (numero > 0 && Number.isInteger(numero)) {
    (numero % 2 === 0) ? alert(`O número inteiro positivo ${numero} é par.`) : alert(`O número inteiro positivo ${numero} ímpar.`);
  } else {
      alert(`Por favor, verifique se você realmente digitou um número inteiro positivo.`);
  };
});

pularLinhas();

// exercicio 12

const anoAtual = new Date().getFullYear();
const anoNascimento = 1995;
const podeVotar = anoAtual - anoNascimento >= 16;

const mensagemVoto = podeVotar ? `Você tem mais que 16 anos, já pode votar esse ano.` : `Você não tem mais que 16 anos, ainda não pode votar esse ano.`;

document.write(`Exercício 12: ${mensagemVoto}`);
console.log(`Exercício 12: ${mensagemVoto}`);