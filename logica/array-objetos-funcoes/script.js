const data = [
  {
  nome: 'Roger Medeiros',
  sexo: 'M',
  salario: 3250,
  },
  {
  nome: 'Carolina Silva',
  sexo: 'F',
  salario: 1200,
  },
  {
  nome: 'Cristina Avila',
  sexo: 'F',
  salario: 8100,
  },
  {
  nome: 'Gustavo Hoffman',
  sexo: 'M',
  salario: 5200.35,
  },
  {
  nome: 'Eva Trindade',
  sexo: 'F',
  salario: 2501,
  },
  {
  nome: 'Andre Mathias',
  sexo: 'M',
  salario: 1750,
  },
  {
  nome: 'Joice Castro da Silva',
  sexo: 'F',
  salario: 3350.25,
  }
];

// 1. Imprima no console a quantidade de pessoas Total.
const qtdPessoas = data.length;
console.log(qtdPessoas);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const qtdSexoFeminino = data.filter((pessoa) => {
  return pessoa.sexo === "F";
});

console.log(qtdSexoFeminino.length);


// 3. Imprima no console a soma do salário de todas as pessoas.
const somaSalario = data.reduce((total, pessoa) => {
  return total + pessoa.salario; 
},0);

console.log(somaSalario);

// 4. Imprima no console a média do salário de todas as pessoas.
const mediaSalario = somaSalario / data.length;

console.log(mediaSalario.toFixed(2));

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino.
const homens = data.filter((pessoa) => {
  return pessoa.sexo === "M";
}); 

const salarioHomens = homens.reduce((total, pessoa) => {
  return total + pessoa.salario
},0);

/* 
const salarioHomens = data.reduce((total, pessoa) => {
  if (pessoa.sexo === 'M') {
    return total + pessoa.salario;
  } else {
    return total;
  }
}, 0);
*/

console.log(salarioHomens);

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
const mediaSalarioHomens = salarioHomens / homens.length;

console.log(mediaSalarioHomens.toFixed(2));

// 7. Utilize a função Some, para descobrir se existe algum salário
const existeSalario = data.some((pessoa) => {
  return pessoa.salario > 0;
});

console.log(existeSalario);

// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
const salarioSuperior = data.some((pessoa) => {
  return pessoa.salario > 7.000
});

console.log(salarioSuperior);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const posicaoEva = data.findIndex((pessoa) => {
  return pessoa.nome === "Eva Trindade"
});

console.log(posicaoEva);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const sobrenomeSilva = data.filter((pessoa) => {
  return pessoa.nome.includes("Silva");
});

console.log(sobrenomeSilva);

// 10. Imprima os nomes utilizando o MAP.
const nomes = data.map((pessoa) => {
return pessoa.nome;
});

console.log(nomes);