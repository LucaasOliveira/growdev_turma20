const velocidade = Number(prompt("Qual é a velocidade do carro (em Km/h)?"));

const velocidadeLimite = 80;
const valorMultaPorKmExcedido = 5;

if (velocidade > velocidadeLimite) {
  const kmAcimaLimite = velocidade - velocidadeLimite;
  const valorMulta = kmAcimaLimite * valorMultaPorKmExcedido;
  document.write(`Você foi multado! Velocidade acima do limite permitido. Valor da multa: R$${valorMulta.toFixed(2)}.`);
} else {
  document.write("Velocidade dentro do limite permitido. Dirija com segurança!");
}
