let genero
let salarioM = 0
let salarioF = 0
let continuar = true;

while(continuar){
  do{
      genero = Number(prompt("Digite seu genero, 1 para masculino e 2 para feminino"))
    } while (isNaN(genero) || genero < 1 || genero > 2 || !Number.isInteger(genero))
      let salario
        do {
            if (genero == 1){
              salarioM += Number(prompt("Digite seu salario nesse formato EX: 1500"))
              salario = salarioM
            } else{
                salarioF += Number(prompt("Digite seu salario nesse formato EX: 1500"))
                salario = salarioF
            }
          } while (isNaN(salario) || salario <= 0 || !Number.isInteger(salario))
            let test
            do{
                test = Number(prompt(`Quer cadastrar mais?\n1 para SIM e\n2 para NÃO`))
            }while(isNaN(test) || test < 1 || test > 2 || !Number.isInteger(test))
            if(test == 2){
                continuar = false
            }
        }
console.log(`Salario total dos Homens = R$${salarioM}\n`);
console.log(`Salario total das Mulheres = R$${salarioF}\n`);
        

        