let multiplosDeTres = [];
let multiplosDeCinco = [];

for (let i = 1; i <= 250; i++) {
  if (i % 3 === 0) {
    multiplosDeTres.push(i);
  };
  
  if (i % 5 ===0) {
    multiplosDeCinco.push(i);
  };
};

console.log(`${multiplosDeTres} são multiplo de 3.`)
console.log(`${multiplosDeCinco} são multiplo de 5.`)