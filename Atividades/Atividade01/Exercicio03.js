const input3 = require('prompt-sync')();
let nota = input3("Informe a nota: ");

function Avaliar(nota){
    if(nota < 0 || nota > 10){
        console.log("Nota inválida");
    }
   else if(nota < 3){
        console.log("Reprovado");
    }
   else if (nota < 6) {
       console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}
Avaliar(nota);