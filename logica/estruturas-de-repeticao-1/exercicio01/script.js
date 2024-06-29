let idade;
let alunos = 0;
let media = 0;

while (true) {
    
  do {
      idade = Number(prompt("Digite a idade dos alunos, sera considerado apenas idades validas"))
     } while (isNaN(idade) || idade <= 0 || !Number.isInteger(idade))
    
      if(idade != 999){
        alunos++ 
        media += idade 
      } else{
        console.log(`Nessa turma tem ${alunos} alunos e a media de idade é ${media / alunos}`)
        break;
    }
}
