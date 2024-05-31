let alturas = [];

for (let count = 1; count <= 15; count++) {
  const altura = Number(prompt("Digite sua altura"));
  alturas.push(altura);
}

let max = Math.max(...alturas);
let min = Math.min(...alturas);

console.log("A maior altura é: " + max);
console.log("A menor altura é: " + min);
