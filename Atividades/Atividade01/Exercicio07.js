function calcular(maças) {
    if (maças >= 12){
       let preço = maças * 0.25;
       console.log("O valor total da compra é: " + preço + "R$");
    }
    else {
        let preço = maças * 0.3;
       console.log("O valor total da compra é: " + preço + "R$");
    }
}


const input7 = require('prompt-sync')();
let maças = input7("Informe a quantidade de maças: ");
calcular(maças);
