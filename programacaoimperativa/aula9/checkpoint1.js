function meuMicroondas(comida, tempoUsuario) {
  switch (comida) {
    case 1:
      tempoPadrao = 10
      console.log('Pipoca')
      break
    case 2:
      tempoPadrao = 8
      console.log('Macarrão')
      break
    case 3:
      tempoPadrao = 15
      console.log('Carne')
      break
    case 4:
      tempoPadrao = 12
      console.log('Feijão')
      break
    case 5:
      tempoPadrao = 8
      console.log('Brigadeiro')
      break
    default:
      console.log('Prato inexistente')
  }
  calculaTempo(tempoPadrao, tempoUsuario)
}

function calculaTempo(tempoPadrao, tempoUsuario) {
  if (tempoUsuario > 3 * tempoPadrao) {
    console.log('Kabummm!')
  } else if (tempoUsuario > 2 * tempoPadrao) {
    console.log('A comida queimou.')
  } else if (tempoUsuario < tempoPadrao) {
    console.log('Tempo insuficiente.')
  }
  console.log('Prato pronto, bom apetite!!!')
}

/*
Menu:
1 - Pipoca
2 - Macarrão
3 - Carne
4 - Feijão
5 - Brigadeiro
*/

meuMicroondas(2, 44)
