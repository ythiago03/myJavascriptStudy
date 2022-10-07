const myString = ' Está é uma string qualquer. '
let otherString;


myString.includes('uma')//Verifica se a string inclue o valor indicado.(retorna um boolean)
myString.startsWith('Está')//Verifica se a string começa com o valor indicado
myString.endsWith('qualquer.')//Verifica se a string termina com o valor indicado



otherString = myString.repeat(3);//Método repeat, repete a string pelo número passado.
otherString = myString.concat('Essa é outra string qualquer.')//Método contat, concatena uma string na outra.
otherString = myString.replace('Está', 'Essa')//Replace troca a parte indicada por outra.
otherString = myString.slice(0, 5)//Slice fatia a string começando pelo índice do primeiro parâmetro e termina no segundo parâmetro.
otherString = myString.split(' ')//Separa a string pelo valor indicado e transforma em um array. No caso está sendo separado pelo espaço vazio (" ").
otherString = myString.split(' ').map(val => val + 'ola').join(' ')//Join ao contrário do split, junta a string pelo valor indicado
otherString = myString.substring(0, 5)//Muito parecido com o slice, ele também separa a string pelos parâmetros indicados.
otherString = myString.toLowerCase()//Coloca a string toda em letras minúsculas.
otherString = myString.toUpperCase()//Coloca a string toda em letras maiúsculas.
otherString = myString.trim()//Corta os pedaços das extremidades da string.
otherString = myString.trimStart()//Corta o pedaço da frente da string.
otherString = myString.trimEnd//Corta o pedaço do final da string.
