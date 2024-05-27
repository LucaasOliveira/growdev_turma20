const grausCelsius = Number(prompt("Digite o número da temperatura que convertemos Celsius para Fahrenheit."));
const converterParaFahrenheit = (grausCelsius * 9/5) + 32;

document.write(`
  ${grausCelsius}ºC equivalem a ${converterParaFahrenheit}ºF.
`);
