let numerolimit = 250

for (let i = 0; i < numerolimit; i++) {
    if (i%3==0 && i%5==0){
        console.log("é multiplo de 3 e 5")
        console.log(i)
    }
    else if (i%3==0){
        console.log("multiplo de 3")
        console.log(i)
    }
    else if (i%5==0){
        console.log("multiplo de 5")
        console.log(i)
    }else{
        console.log(i)
    }
}