// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let pessoas = 15
let maior = 0
let menor = 0
for (let i = 1; i <= pessoas; i++) {
    let altura = parseFloat(prompt(`digite a altura da ${i}ª pessoa`));
    if (i == 1) {
        maior = altura
        menor = altura
    } else {
        if(altura > maior){
            maior = altura
        }else if(altura < menor){
            menor = altura
        }
    }
}
document.write(`A altura da maior pessoa é ${maior} <br>`)
document.write(`A altura da menor pessoa é ${menor}`)