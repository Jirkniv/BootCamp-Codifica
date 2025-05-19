const input13 = require('prompt-sync')();

let soma = 0
let quant = 0
let num13 = 1
while(num13 != 0){
    num13 = input13(`Digite um Numero(0 para parar:`);
    num13 = Number(num13)
    soma = num13 + soma
    quant++
}
 console.log(`Média: ${soma/quant}`);