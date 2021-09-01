// Micro desafios

/* 1. Programa em Javascript que mostra os números ímpares
Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100. */

// function mostraImpares() {
//   let i = 1
//   while (i <= 100) {
//     if (i % 2 != 0) {
//       console.log(i)
//     }
//     i++
//   }
// }

// mostraImpares()

/* 2. Programa em Javascript que mostra os números pares
Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100. */

// function mostraPares() {
//   let i = 1
//   while (i <= 100) {
//     if (i % 2 == 0) {
//       console.log(i)
//     }
//     i++
//   }
// }

// mostraPares()

/* 3. Programa em Javascript que mostra os números pares e ímpares 
Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro. */

// function paresEImpares(numA) {
//   let i = 1
//   let j = 0
//   let k = 0
//   let paresNumA = []
//   let imparesNumA = []
//   while (i <= numA) {
//     if (i % 2 == 0) {
//       paresNumA[j] = i
//       j++
//     } else {
//       imparesNumA[k] = i
//       k++
//     }
//     i++
//   }
//   console.log(
//     'Os números pares de 1 a ' +
//       numA +
//       ' são: ' +
//       paresNumA +
//       '.\nOs números ímpares de 1 a ' +
//       numA +
//       ' são: ' +
//       imparesNumA +
//       '.'
//   )
// }

// paresEImpares(100)

/* 4. Programa em Javascript que calcula a média das notas de uma turma
Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
Por fim, o programa mostra a média aritmética da turma. */

// function quantosAlunos() {
//   let quantidadeDeAlunos = prompt('Quantos alunos há na sua sala?')
// }

// function notasAlunos() {
//   let i = 0
//   while (i < quantidadeDeAlunos) {
//     let todasAsNotas = prompt(
//       'Digite a nota de todos os seus alunos, um por vez.'
//     )
//     i++
//   }
// }

function calculaMediaDaTurma(todasAsNotas, quantidadeDeAlunos) {
  let i = 0
  let somaDasNotas = 0
  while (i < todasAsNotas.length) {
    somaDasNotas += todasAsNotas[i]
    i++
  }
  console.log('Média da turma = ' + somaDasNotas / quantidadeDeAlunos)
}

let notas = [10, 8, 7, 9, 6, 10, 8, 7, 4, 8]
let numAlunos = notas.length

calculaMediaDaTurma(notas, numAlunos)
