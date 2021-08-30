function meuMicroondas(comida, tempoUsuario) {
  switch (comida) {
    case 'Pipoca':
      const tempoPadraoPipoca = 10
      calculaTempo(tempoPadraoPipoca, tempoUsuario)
      break
    case 'Macarrão':
      const tempoPadraoMacarrao = 8
      calculaTempo(tempoPadraoMacarrao, tempoUsuario)
      break
    case 'Carne':
      const tempoPadraoCarne = 15
      calculaTempo(tempoPadraoCarne, tempoUsuario)
      break
    case 'Feijão':
      const tempoPadraoFeijao = 12
      calculaTempo(tempoPadraoFeijao, tempoUsuario)
      break
    case 'Brigadeiro':
      const tempoPadraoBrigadeiro = 8
      calculaTempo(tempoPadraoBrigadeiro, tempoUsuario)
      break
    default:
      console.log('Prato inexistente')
  }

  function calculaTempo(tempoPadrao, tempoUsuario) {
    if (tempoUsuario > 3 * tempoPadrao) {
      console.log('Kabumm!')
    } else if (tempoUsuario > 2 * tempoPadrao) {
      console.log('A comida queimou.')
    } else if (tempoUsuario < tempoPadrao) {
      console.log('Tempo insuficiente.')
    }
    console.log('Prato pronto, bom apetite!!!')
  }
}

/*
Menu:
- Pipoca
- Macarrão
- Carne
- Feijão
- Brigadeiro
*/

meuMicroondas('Pipoca', 12)
