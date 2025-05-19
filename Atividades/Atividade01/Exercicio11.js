const input11 = require('prompt-sync')();

   let res = 0

for(let i = 0; i != 5; i++){
    let num11 = input11("Informe um numero: ");
    num11 = Number(num11)
    res = num11 + res
}
 console.log("Soma total: "+ res);