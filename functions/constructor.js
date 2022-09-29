function Person(name){
    this.name = name
    this.walk = true
    this.drinking = () => {
        return this.name + ' está bebendo'
    }
}

const thiago = new Person('thiago')
const maria = new Person('maria')

console.log(thiago)
console.log(thiago.drinking())

console.log(maria)
console.log('andando:', maria.walk)

let date = new Date('2022-6-23');

console.log(date)