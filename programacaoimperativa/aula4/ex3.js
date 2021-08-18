var a = 5
var b = 4
var soma = a + b
console.log('A soma de ' + a + ' e ' + b + ' é ' + soma + '.')

var subtracao = a - b
console.log('A subtração de ' + a + ' e ' + b + ' é ' + subtracao + '.')

a = '1'
b = 1
var aMaisB = a + b
console.log(
  `"1" (string) + 1 (number) resulta em concatenação: ` + aMaisB + `.`
)

a = 1
b = 1
aMaisB = a + b
console.log(`1 (number) + 1 (number) resulta em soma: ` + aMaisB + `.`)

a = 'olá'
b = 23
aMaisB = a + b
console.log(
  `"olá" (string) + 23 (number) resulta em concatenação: ` + aMaisB + `.`
)

var naoNumerico = 'olá' * 23
console.log(
  `"olá" (string) * 23 (number) resulta em valor não numérico: ` +
    naoNumerico +
    `.`
)
