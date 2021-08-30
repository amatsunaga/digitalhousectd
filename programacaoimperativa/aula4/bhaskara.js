/* Resolução de uma equação de 2o grau
   ax**2 + bx + c = 0
   x = [-b+-(b**2-4ac)**1/2]/2a */

function solveEquation(a, b, c) {
  const delta = Math.abs(b ** 2 - 4 * a * c)
  // console.log('delta = ' + delta)
  const raizDeDelta = Math.sqrt(delta)
  // console.log('raiz de delta = ' + raizDeDelta)
  let x1 = (-b + raizDeDelta) / (2 * a)
  let x2 = (-b - raizDeDelta) / (2 * a)
  // console.log(`x' = ` + x1)
  // console.log(`x'' = ` + x2)
  return (raizes = [x1, x2])
}

console.log(solveEquation(1, -1, -12))
console.log("As raízes são: x' = " + raizes[0] + " e x'' = " + raizes[1] + '.')
