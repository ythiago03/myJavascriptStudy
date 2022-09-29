// let altura = 50;
// let largura = 60;

// function calcularArea(altura, largura){
//     return altura * largura;
// }

// console.log(calcularArea(altura, largura))

class Poligono{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    get area(){
        return this.#calcularArea();
    }

    #calcularArea(){
        return this.altura * this.largura;
    }
}

let poligono = new Poligono(60, 40);

console.log(poligono.area);