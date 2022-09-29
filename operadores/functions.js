function receberNum(){
    const n1 = Number(window.prompt('Digite um número:'));
    const n2 = Number(window.prompt('Digite outro número:')); 

    if(n1 == '' || n2 == ''){
        window.alert('[ERRO] Digite um número válido!')
    }else{
        calculo(n1, n2)
    }
    
}
function calculo(a, b) {
    const calc = a + b;
    const res = document.querySelector('#res');

    if(a != b){
        if(calc >= 10 && calc < 20){
            res.innerHTML = `O número ${a} é diferente de ${b}. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é maior ou igual à 10 e menor do que 20. ` ;
        }else if(calc < 10){
            res.innerHTML = `O número ${a} é diferente de ${b}. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é menor do que 10 e menor do que 20. ` ;
        }else if( calc >= 20){
            res.innerHTML = `O número ${a} é diferente de ${b}. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é maior do que 10 e maior ou igual à 20. ` ;
        }  
    }else{
        if(calc >= 10 && calc < 20){
            res.innerHTML = `Os número são iguais. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é maior ou igual à 10 e menor do que 20. ` ;
        }else if(calc < 10){
            res.innerHTML = `Os número são iguais. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é menor do que 10 e menor do que 20. ` ;
        }else if( calc >= 20){
            res.innerHTML = `Os número são iguais. O resultado da soma entre ${a} + ${b} = ${calc} .O resultado é maior do que 10 e maior ou igual à 20. ` ;
        }  
    }  
}
