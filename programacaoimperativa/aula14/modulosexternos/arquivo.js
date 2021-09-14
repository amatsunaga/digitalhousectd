const readlineSync = require('readline-sync')

let nome = readlineSync.question('Qual seu nome? ')
console.log(`Olá, ${nome}!`)

let nomeMae = readlineSync.question('Qual o nome da sua mae? ', {
  hideEchoBack: true
})
console.log(`Ah, o nome da sua mãe é ${nomeMae}!`)

let gostaDeFutebol = readlineSync.keyInYN('Voce gosta de futebol? ')

if (gostaDeFutebol == true) {
  let time = readlineSync.question('E para qual time voce torce? ')
  console.log(`Boa! ${time} é um timaço!`)
} else {
  let esportes = ['Volei', 'Basquete', 'Tenis', 'Natacao']
  let index = readlineSync.keyInSelect(
    esportes,
    'Hum... qual outro esporte prefere? '
  )
  console.log(`Uau! ${esportes[index]}?! Que legal!`)
}
