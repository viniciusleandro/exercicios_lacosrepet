let n = parseInt(prompt('Digite o multiplicando:'))
        let i = parseInt(prompt('Até qual número deseja miltiplicar?'))
       
        for(let count = 1; count<= i; count++){
            document.write(`${count} X  ${n} = ${count * n}<br />`)
        }