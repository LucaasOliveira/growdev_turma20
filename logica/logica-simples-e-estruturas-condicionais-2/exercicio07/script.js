const saldoInicial = 15000;  
const taxaSaque = 4.50;  
let saldo = saldoInicial;

const valorSaque = Number(prompt("Informe quanto deseja deseja sacar:"));

if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque % 5 !== 0) {
  document.write("Valor inválido. O valor do saque deve ser um número positivo e múltiplo de 5.");
} else if (valorSaque + taxaSaque > saldo) {
  document.write("Saldo insuficiente. Você não tem dinheiro suficiente em conta para realizar o saque.");
} else {
  saldo -= (valorSaque + taxaSaque);
  document.write(`Saque realizado com sucesso. Seu saldo atual é R$${saldo.toFixed(2)}.`);
}
