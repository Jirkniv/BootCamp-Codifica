const input2 = require('prompt-sync')();
let idade = input2("Informe a idade: ");

function Age(idade){
if(idade <= 12){
    console.log("Criança");
}else if(idade <= 18){
    console.log("Adolescente");
}else if(idade <= 60){
    console.log("Adulto");
}else{
    console.log("Idoso");
}
}
Age(idade);