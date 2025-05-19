const input = require("prompt-sync")();

function Menu() {
    console.log("Menu");
    console.log("1 - Verificar se o número é par ou ímpar");
    console.log("2 - classificar a idade");
    console.log("3 - Verificar se o aluno foi aprovado ou reprovado");
    let valor = input("Escolha uma opção: ");
    switch(valor){
        case "1": imparPar(); break;
        case "2": idadePessoa(); break;
        case "3": AvaliarNota(); break;
    }
}

function imparPar() {
 let num = input("Informe o numero: ");

if (num % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}  
}

function idadePessoa(){
 let age = input("Informe a idade: ");
if(age <= 12){
    console.log("Criança");
}else if(age <= 18){
    console.log("Adolescente");
}else if(age <= 60){
    console.log("Adulto");
}else{
    console.log("Idoso");
}
}
function AvaliarNota(){
     let num = input("Informe a nota(0-10): ");
    if(num < 0 || num > 10){
        console.log("Nota inválida");
    }
    else if(num < 3){
        console.log("Reprovado");
    }
   else  if (num < 6) {
       console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}


Menu();
