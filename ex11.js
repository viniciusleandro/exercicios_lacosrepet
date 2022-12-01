function isPrime(num) {
    for(let i = 2; i <num; i++){
        if(num % i === 0) {
            return false
        }
    }

    return num > 1;
}

const numTop = parseInt(prompt('Digite um número'))
for( let i=numTop; i>0; i--){
if (isPrime(i)){
    document.write(`[${i}] <br/>`)
}
else{
    document.write(i + '<br />')
}


}