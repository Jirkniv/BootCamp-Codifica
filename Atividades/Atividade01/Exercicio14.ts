const input14 = require('prompt-sync')();

 let fatorial = 1
let num14 = input14("Informe um numero: ");
    console.log('O fatorial de ' + num14 +' é')
while (num14 != 0) {
   fatorial = num14 * fatorial
    num14-- 
}
console.log(fatorial);