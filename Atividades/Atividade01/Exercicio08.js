function ordenar(num1,num2){
if(num1 > num2){
    console.log(num2);
    console.log(num1);
}
else{
    console.log(num1);
    console.log(num2);
}
}

const input8 = require('prompt-sync')();

let num1 = input8("Informe o primeiro numero: ");
let num2 = input8("Informe o segundo numero: ");
ordenar(num1, num2);