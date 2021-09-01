// Mesa de Trabalho - Aula 11

let peliculas = [
  'star wars',
  'totoro',
  'rocky',
  'pulp fiction',
  'la vida es bella'
]
let peliculasMaiusculas = []

// Ex.1
function converterParaMaiusculas(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase()
  }
  return array
}

console.log(converterParaMaiusculas(peliculas))

//Ex. 2 e 3
function passagemDeElemento(array1, array2) {
  let tamanho = array2.length
  let totoroIndex = array2.indexOf('totoro')

  if (totoroIndex >= 0) {
    animacao = array2.splice(totoroIndex, 1)
    tamanho -= 1
  }

  for (let i = 0; i < tamanho; i++) {
    array1.push(array2.pop().toUpperCase())
  }
  return array1
}

console.log(passagemDeElemento(peliculasMaiusculas, peliculas))
console.log(animacao)

// Ex.4
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  for (let i = 0; i < asiaScores.length; i++) {
    if (asiaScores[i] === euroScores[i]) {
      comparacionesAsiaEuropa.push(asiaScores[i])
    }
  }
  return comparacionesAsiaEuropa
}

console.log(compararCalificaciones(asiaScores, euroScores))
