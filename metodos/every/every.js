//Retorna um valor booleano.
//Para ser true, todos os elementos precisam atender a condição.

const numbers = [0, 2, 10, 5, 8];

const res = numbers.every((cur) => cur >= 10)
//console.log(res)

const turma = [
    {id: 12, name: 'thiago', age: 19,},
    {id: 21, name: 'evelany', age: 20,},
    {id: 53, name: 'julia', age: 18,},
    {id: 16, name: 'marcos', age: 24,}
];

console.log(turma.every(p => p.age >= 18));//verifica se todos são maiores de idade