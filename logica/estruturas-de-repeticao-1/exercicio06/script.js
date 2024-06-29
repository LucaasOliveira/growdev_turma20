let temp;

do {
    temp = Number(prompt("Digite a largura do terreno"));
} while (isNaN(temp) || temp <= 0 || !Number.isInteger(temp));

let largura = temp;

do{
    temp = Number(prompt("Digite o comprimento do terreno"));
} while (isNaN(temp) || temp <= 0 || !Number.isInteger(temp));

let comprimento = temp;
let medida = largura * comprimento;

if (medida < 100){
  console.log(`Terreno popular com ${medida} metros quadrados`);
} else if (medida >= 100 && medida <= 500){
    console.log(`Terreno Master com ${medida} metros quadrados`);
} else{
    console.log(`Terreno Vip com ${medida} metros quadrados`);
}

