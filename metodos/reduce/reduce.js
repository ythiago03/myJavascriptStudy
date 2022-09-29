//Reduce() reduz em um elemento fazendo a conta que está na função.

const rockets = [{
    nome: 'Usa', 
    lancamentos: 32,
},
    {nome: 'Russia', 
    lancamentos: 27,
},
    {nome: 'Japan', 
    lancamentos: 12,
},
    {nome: 'Brasil', 
    lancamentos: 7,
}];

const totalDeLancamentos = rockets.reduce((acc, cur) => acc + cur.lancamentos, 0)
// reduz os valores em um único valor, o 0 é o valor inicial.
//console.log(totalDeLancamentos)