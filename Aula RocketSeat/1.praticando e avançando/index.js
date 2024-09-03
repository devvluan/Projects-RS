// 1. Declare uma variável de nome weight
// let weight

// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    name: string
    age: number (integer)
    stars: number
    isSubscribed: boolean
*/

// let name = 'João'
// let age = 18
// let stars = 4.5
// let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

let student = {
  name: "João",
  age: 18,
  stars: 4.5,
  weight: 80,
  isSubscribed: true,
};

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/*
  5. Declare uma variável do tipo Array, de nome student
  e atribua a ela nenhum valor, ou seja, somente o Array vazio
  */

let students = [];

/*
      6. Reatribua valor para a variável acima, colocando dentro de um objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
  */

students = [{ student }];

// console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
  */

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
  */

const john = {
  name: "John",
  age: 42,
  stars: 4.5,
  weight: 90,
  isSubscribed: true,
};

students[1] = john;

/*
    9. Sem rodar o código responda qual é a reposta do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
  
    console.log(a)
    var a = 1
  
    console.log(a) irá aparecer como undefined. Pois o var a ainda não foi definido.
  */

console.log(a);
var a = 1;
