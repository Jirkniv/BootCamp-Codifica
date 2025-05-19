let peso = 75
let altura = 1.70
function Imc(peso, altura){
let imc = peso / (altura * altura)
console.log("Seu imc é: " + imc.toFixed(2))
if (imc < 18.5) {
    console.log("magreza");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau II");
} else {
    console.log("Obesidade grau III");
}
}
Imc(peso, altura)
