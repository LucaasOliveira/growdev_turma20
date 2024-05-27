const idade = Number(prompt("Informe a idade do atleta:"));
const peso = Number(prompt("Informe o peso do atleta (em kg):"));

let categoria;

switch (true) {
  case idade <= 12:
    categoria = "Infantil";
    break;
  case idade >= 13 && idade <= 16:
    categoria = peso <= 40 ? "Juvenil leve" : "Juvenil pesado";
    break;
  case idade >= 17 && idade <= 24:
    if (peso <= 45) {
      categoria = "Sênior leve";
    } else if (peso <= 60) {
      categoria = "Sênior médio";
    } else {
      categoria = "Sênior pesado";
    }
    break;
  default:
    categoria = "Veterano";
    break;
}

document.write(`Categoria do atleta: ${categoria}`);
