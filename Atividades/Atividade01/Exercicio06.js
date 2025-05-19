const input6 = require('prompt-sync')();


function verificarTriangulo(a,b,c){
 if(!(a < b + c || b < a + c || c < a + b)){
console.log('Não é um triangulo')
}
else if(a == b &&b == c){
console.log('Triângulo Equilatero')
}
else if(a == b || a == c || b == c){
console.log('Triângulo Isósceles')
}
else if(a != b && a != c && b != c){
console.log('Triângulo Escaleno')
}

}

let a = input6("Informe o primeiro numero: ");
let b = input6("Informe o segundo numero: ");
let c = input6("Informe o terceiro numero: ");

verificarTriangulo(a,b,c);