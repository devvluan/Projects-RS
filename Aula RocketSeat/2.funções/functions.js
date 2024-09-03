// // função é um liquidificador

// function fazerSuco(fruta1, fruta2) {
//   return "suco de: " + fruta1 + fruta2;
// }

// const copo = fazerSuco("banana", "maçã");

// console.log(copo);

// Função construtora
function Person(name) {
    this.name = name;
    this.walk() = function() {
        return this.name + " esta andando";
    }
}

const mayk = new Person("Mayk");
const joao = new Person("João");