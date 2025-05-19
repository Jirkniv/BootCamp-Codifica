let anterior = 0
let atual = 1




for(let i = 1; i < 10; i++) {
    let proximo = anterior + atual
    console.log(proximo)
    
    anterior = atual
    atual = proximo
}