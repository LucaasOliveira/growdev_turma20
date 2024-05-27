const custoDeFabrica = Number(prompt("Digite o custo de fábrica do carro:"));

const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

const custoDistribuidor = custoDeFabrica * percentualDistribuidor;
const custoImpostos = custoDeFabrica * percentualImpostos;

const custoFinal = custoDeFabrica + custoDistribuidor + custoImpostos;

document.write(`O custo final ao consumidor é R$ ${custoFinal.toFixed(2)}.`);
