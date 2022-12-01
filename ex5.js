// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

let peso = parseFloat(prompt("digite o peso"))
let idade = parseInt(prompt("digite a idade"))

if (idade <= 12) {
    alert("sua categoria é infantil")
}else if(idade >=13 && idade <=16){
    if (peso <= 40) {
        alert("juvenil leve")
    } else {
        alert("juvenil pesado")
    }
}else if(idade >= 17 && idade <= 24){
    if (peso <= 45) {
        alert("juvenil leve")
    } else if(peso >= 46 && peso <=60){
        alert("senior medio")
    }else{
        alert("senior pesado")
    }
}else{
    alert("veterano")
}