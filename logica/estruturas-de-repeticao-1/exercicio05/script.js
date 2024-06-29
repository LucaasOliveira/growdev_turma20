let distanciaPassageiro;

do {
    distanciaPassageiro = Number(prompt("Digite quantos km deseja rodar"));
} while (isNaN(distanciaPassageiro) || distanciaPassageiro <= 0 || !Number.isInteger(distanciaPassageiro))

if (distanciaPassageiro > 200){
    console.log(`Valor da viagem ficou ${distanciaPassageiro * 0.45}`);
} else{
    console.log(`Valor da viagem ficou ${distanciaPassageiro * 0.50}`);
}
