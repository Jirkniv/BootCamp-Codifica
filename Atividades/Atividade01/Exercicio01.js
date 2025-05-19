const input1 = require('prompt-sync')();
let num = input1("Informe o numero: ");
function parImpar(num) {


if (num % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
    
}

parImpar(num);