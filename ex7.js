let velocidade = parseInt(prompt("qual a sua velocidade atual?"));
let multa = 5
let i = 0
let somatorioMulta = 0
while (i <= velocidade) {
    if (i > 80) {
     somatorioMulta = somatorioMulta + multa
    }
    i++

}
document.write("voce ganhou R$ " + somatorioMulta + " de multas")