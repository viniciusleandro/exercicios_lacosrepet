// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let n1 = parseFloat(prompt("digite o numero 1"))
let n2 = parseFloat(prompt("digite o numero 2"))
let operacao = prompt("qual a operação voce ira fazer? * = multiplicação \n + = adição \n - = subtração \n / = divisão")
let resultado = 0

switch (operacao) {
    case "*":
        resultado = n1 * n2;
        break;
    case "+":   
        resultado = n1 + n2;
        break;
    case "-":
       resultado = n1 - n2;
        break;
    case "/":
        resultado = n1 / n2;
        break;
    default:
        document.write("opção invalida ")
        break;
}

document.write(resultado)