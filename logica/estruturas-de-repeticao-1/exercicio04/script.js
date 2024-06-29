
let nomeCliente = prompt("Digite seu nome")
let generoCliente
let valorCompraCliente = 0

do {
  generoCliente = Number(prompt("Digite seu genero,\n1 para masculino \n2 para feminino"))
} while (isNaN(generoCliente) || generoCliente < 1 || generoCliente > 2 || !Number.isInteger(generoCliente))
  let contComprar;

  while(true){
    let testCompraCliente
    
    do {
      testCompraCliente = Number(prompt("Digite o Valor da Compra"))
    } while(isNaN(testCompraCliente) || testCompraCliente <= 0 || !Number.isInteger(testCompraCliente))
      valorCompraCliente += testCompraCliente
      do {
        contComprar = Number(prompt("Gostaria de continuar a comprar?\n1 Para Sim \n2 Para Não"))
      } while (isNaN(contComprar) || contComprar < 1 || contComprar > 2 || !Number.isInteger(contComprar))
        if(contComprar == 2){
          if(generoCliente == 1){
            console.log(`Sua compra deu o valor de R$${valorCompraCliente * 0.95}`)
          } else{
            console.log(`Sua compra deu o valor de R$${valorCompraCliente * 0.87}`)
          }
          break;
      };
  };

        

       