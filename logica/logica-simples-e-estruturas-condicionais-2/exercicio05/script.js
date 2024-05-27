const altura = Number(prompt("Informe sua altura"));
const peso = Number(prompt("Informe o seu peso"));

const imc = peso / (altura ** 2)


if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
  document.write("Tente informar sua altura e peso e peso novamente, os valores informados não estão validos.");
} else {
  const imc = peso / (altura ** 2);
  let status;

  if (imc < 18.5) {
    status = `IMC: ${imc.toFixed(2)}, Você está abaixo da faixa de peso ideal.`;
  } else if (imc > 24.99) {
    status = `IMC: ${imc.toFixed(2)}, Você está acima da faixa de peso ideal.`;
  } else {
    status = `IMC: ${imc.toFixed(2)}, Você está dentro da faixa de peso ideal.`;
  }

  document.write(status);
}