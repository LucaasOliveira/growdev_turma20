const valorSaque = Number(prompt("Digite o valor em GrowCoins que deseja sacar:"));
let saque = valorSaque;

let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

while (saque >= 50) {
  notas50++;
  saque -= 50;
};

while (saque >= 10) {
  notas10++;
  saque -= 10;
};

while (saque >= 5) {
  notas5++;
  saque -= 5;
};

while (saque >= 1) {
  notas1++;
  saque -= 1;
};

console.log(`Você sacou: ${saque}`);
console.log(`GC$ 50,00 -> ${notas50}`);
console.log(`GC$ 10,00 -> ${notas10}`);
console.log(`GC$ 5,00 -> ${notas5}`);
console.log(`GC$ 1,00 -> ${notas1}`);

