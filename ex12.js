let soma = 0
let positivo = 0
let negativo = 0
let qtdNumeros = 0
for (let i = 1; i <= 10; i++) {    
    let numeros = parseFloat(prompt("escreva um numero:"))
    soma = soma + numeros
    qtdNumeros++
    if (numeros <0){
        negativo = negativo + 1
    }else{
        positivo += 1
    }
}
let media = soma / qtdNumeros;
let porcNegativo = negativo / qtdNumeros * 100;
let porcPositivo = positivo / qtdNumeros * 100;
console.log("a media aritmetica é " + media)
console.log("o numero de negativos foi de: " + negativo)
console.log("o numero de positivos foi de: " + positivo)
console.log("porcentagem de negativo é " + porcNegativo)
console.log("porcentagem de positivo é " + porcPositivo)