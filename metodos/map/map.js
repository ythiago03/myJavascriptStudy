/*const numeros = [1, 34, 5, 54, 7,];

const duplicaNum = numeros.map(item => item * 2 ) percorre cada elemento do array e executa a funcão, no caso, multiplica cada item por 2*/
//console.log(duplicaNum);

// ===============

/*const fahrenheit = [0, 32, 102, 40, 75]

const celsius = fahrenheit.map(item => Math.round((item - 32) * 5/9)) percorre cada elemento do array e executa a funcão, no caso, faz o cálculo para converter os valores para celsius*/

//console.log(celsius)
const res = document.querySelector('.res')//div res
const btn = document.querySelector('button')// button

const precoDol = [ 15, 4, 25, 11]//array com precos em dollar

function render(arr){
    res.innerHTML = ''
    arr.forEach((element) => {//loop for criando um span para cada elemento do array
    res.innerHTML += `<span>${element}</span>` 
})
}

render(precoDol)

const precoReal = precoDol.map(element => (element * 5.18).toFixed(2))//o map cria um novo arr fazendo a conta em todos os elementos

btn.addEventListener('click', () => render(precoReal))