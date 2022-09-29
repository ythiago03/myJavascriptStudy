//Filter() percorre o array original, filtra os elementos da condição e armazena em um novo array. 

const arrayNotFiltered = [1, 3 ,5 ,7 ,4 ,2 ,1 , 5, 4]

const arrayFiltered = arrayNotFiltered.filter((elem, index, arr) => arr.indexOf( elem ) == index );//Filtra os elementos não repetidos.
//console.log(arrayFiltered)

const arrayFiltered2 = arrayFiltered.filter((elem) => elem >= 5 );
//console.log(arrayFiltered2); Percorre o array e filtra os elementos da condição

const arr = [ 14, 3, 54, 10, 3, 7, 5, 5, 'ola', 'ola']

const arrTenPlus = arr.filter(element => element >= 10)//filtra elementos maiores q 10
const arrTenMinor = arr.filter(element => element <= 10)//filtra elementos menores q 10
const arrUnique = arr.filter((element, index, arra) => arra.indexOf( element ) != index)//filtra os elementos repetidos. 

console.log(arrUnique);