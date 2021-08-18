// Mesa de trabalho - Aula 5

// Micro desafio 1
function teste1(x, y) {
  return y - x
}

teste1(10, 40)
// A função teste1 irá retornar y - x = 40 - 10 = 30.

// Micro desafio 2
function teste2(x, y) {
  return x * 2
  console.log(x)
  return x / 2
}

teste2(10)
//A função teste2 irá retornar 20, pois aceita o valor 10 como argumento para o x e, após calcular x * 2 = 10 * 2 = 20, encerra a função.

// Funções simples 1
function inchesToCm(inches) {
  return (cm = inches * 2.54)
}

inchesToCm(2)
console.log(cm)

// Funções simples 2
function stringToUrl(string) {
  return (url = 'http://www.' + string + '.com.br')
}

stringToUrl('digitalhouse')
console.log(url)

//Funções simples 3
function withExclamation(string) {
  return (stringWithExclamation = string + '!')
}

withExclamation('Uhuuuu')
console.log(stringWithExclamation)

// Funções simples 4
let idadeCachorro = function (anos) {
  return anos * 7
}

console.log(idadeCachorro(3))

// Funções simples 5
function horaDeTrabalho(salario) {
  return (valorPorHora = salario / 160)
}

console.log(horaDeTrabalho(10000))

// Funções simples 6
let calcularImc = function (altura, peso) {
  return (imc = peso / altura ** 2)
}

calcularImc(1.6, 50)
console.log(imc)

// Funções simples 7
function transformaEmMaiusculas(string) {
  return string.toUpperCase()
}

console.log(transformaEmMaiusculas('playground'))

// Funções simples 8
function tipoDeDado(parametro) {
  return typeof parametro
}

console.log(tipoDeDado('Programação Imperativa'))
console.log(tipoDeDado(true))
console.log(tipoDeDado(37))

// Funções simples 9
let calcularCircunferencia = function (raio) {
  return (circunferencia = Math.PI * raio ** 2)
}

calcularCircunferencia(3)
console.log(circunferencia)
