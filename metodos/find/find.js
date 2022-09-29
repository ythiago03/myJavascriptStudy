//Find() retorna o primeiro elemento encontrado que atende a condição.

const pizzas = ['mussarela','calabresa','portuguesa','chocolate'];

const pizzaFind = pizzas.find( p => p.startsWith( 'p' ))//procura no array a pizza que começa com a letra p

const fruits = [
    {
    nome: 'maça',
    quantidade: 3 ,        
    },
    {
    nome: 'banana',
    quantidade: 5,
    },
    {
    nome: 'cereja',
    quantidade: 7,
    }];

const findFruits = fruits.find( f => f.nome === 'cereja');//retorna a fruta de nome cereja.

//console.log(findFruits);