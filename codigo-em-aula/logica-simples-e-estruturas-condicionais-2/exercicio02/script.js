let alturaPedro = 1.50;
let alturaLucas = 1.10;

for (let ano = 1; alturaLucas < alturaPedro; ano++) {
  alturaPedro += 0.02;
  alturaLucas += 0.03;

  if(alturaPedro.toFixed(2) == alturaLucas.toFixed(2)) {
    console.log(`Lucas vai ter a mesma altura que Pedro depois de ${ano} anos, Lucas: ${alturaLucas.toFixed(2)}, Pedro: ${alturaPedro.toFixed(2)}`);
  };

  if(alturaPedro < alturaLucas) {
    console.log(`Lucas vai ser maior que Pedro depois de ${ano} anos, Lucas: ${alturaLucas.toFixed(2)}, Pedro: ${alturaPedro.toFixed(2)}`);
  };
};