function ehDataValida(dia,mes,ano){
    if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || ano <= 0){
        console.log("Data inválida");
    }
    if(mes == 2 && dia > 29){
        console.log("Data inválida");
    }else{ 
        console.log("Data válida");
    }
}
ehDataValida(30,2,2020)

function JogoAdivinhacao(){
    let num = Math.floor(Math.random() * 100);
    let tentativas = 0;
    let acertou = false;
    const input = require('prompt-sync')();
    while(acertou == false){
        console.log('')
        let chute = input("Digite um número: ");
        tentativas++;
        if(chute == num){
            acertou = true;
            console.log('')
            console.log("Parabéns, você acertou!");
            console.log("Com " + tentativas + " tentativas você descobriu o número " + num);
        }else{
            if(chute > num){
                console.log('')
                console.log("O número é menor");
                console.log("Tentativas: " + tentativas);
            }else{
                console.log('')
                console.log("O número é maior");
                console.log("Tentativas: " + tentativas);
            }

        }
    }
}
JogoAdivinhacao()

function PalavrasUnicas(frase){
const palavras = frase.split(' ');
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let repetida = false;
    for (let j = 0; j < palavras.length; j++) {
        if (palavras[i] === unicas[j]) {
            repetida = true;
            break;
        }
    }
    if (!repetida) {
        unicas.push(palavras[i]);
    }
}
return unicas;
}
console.log(PalavrasUnicas('olá olá mundo mundo'));
