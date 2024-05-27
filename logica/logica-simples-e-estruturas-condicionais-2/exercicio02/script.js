const numero = Number(prompt("escolha um número de 1 a 7"));

switch (numero) {
  case 1:
    document.write("Segunda-feira");
    break;
  case 2:
    document.write("Terça-feira");
    break;
  case 3:
    document.write("Quarta-feira");
    break;
  case 4:
    document.write("Quinta-feira");
    break;
    case 5:
    document.write("Sexta-feira");
    break;
  case 6:
    document.write("Sábado");
    break;
  case 7:
    document.write("Domingo");
    break;
  default:
    document.write("Verifique se realmente digitou um número de 1 á 7.");
    break;
}