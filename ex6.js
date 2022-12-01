let alturaPedro = 1.50;
let cmPedro = 0.02
let cmLucas = 0.03;
let alturaLucas = 1.10;
let anos = 0;

while (alturaPedro >= alturaLucas) {
    alturaPedro = alturaPedro + cmPedro
    alturaLucas = alturaLucas + cmLucas
    anos++
}

document.write("demorou " + (anos-1) + " anos para lucas chegar a altura de pedro <br>")
document.write("demorou " + anos + " anos para lucas ficar maior que pedro")