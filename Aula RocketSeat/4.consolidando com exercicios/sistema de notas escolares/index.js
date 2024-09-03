/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 ate 100, A
* de 80 ate 89, B
* de 70 ate 79, C
* de 60 ate 69, D
* menor que 60, F

*/

/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 ate 100, A
* de 80 ate 89, B
* de 70 ate 79, C
* de 60 ate 69, D
* menor que 60, F

*/

const alunos = [
  {
    name: "João",
    nota: 80,
  },
  {
    name: "Maria",
    nota: 90,
  },
  {
    name: "Pedro",
    nota: 50,
  },
  {
    name: "Ana",
    nota: 100,
  },
  {
    name: "Lucas",
    nota: 70,
  },
  {
    name: "Julia",
    nota: 60,
  },
];

alunos.forEach((aluno) => {
  if (aluno.nota >= 90) {
    console.log(`${aluno.name} A`);
  } else if (aluno.nota >= 80) {
    console.log(`${aluno.name} B`);
  } else if (aluno.nota >= 70) {
    console.log(`${aluno.name} C`);
  } else if (aluno.nota >= 60) {
    console.log(`${aluno.name} D`);
  } else {
    console.log(`${aluno.name} F`);
  }
});
