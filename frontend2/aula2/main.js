// Usuário faz a sua escolha (pedra, papel ou tesoura) e ela é exibida em seguida.
function chooseOption() {
  let userChoice = parseInt(
    prompt("Escolha seu número:\n1 - Pedra\n2 - Papel\n3 - Tesoura")
  );

  switch (userChoice) {
    case 1:
      alert("Você escolheu pedra.");
      break;
    case 2:
      alert("Você escolheu papel.");
      break;
    case 3:
      alert("Você escolheu tesoura.");
      break;
    default:
      alert("Escolha inválida!");
      chooseOption();
  }
  return userChoice;
}

// Escolha aleatória pela máquina (pedra, papel ou tesoura) e exibição dela para o usuário.
function randomOption() {
  let botChoice = parseInt(Math.random() * 3 + 1);

  switch (botChoice) {
    case 1:
      alert("Eu escolho pedra.");
      break;
    case 2:
      alert("Eu escolho papel.");
      break;
    case 3:
      alert("Eu escolho tesoura.");
      break;
  }
  return botChoice;
}

// Função que consolida o jogo
function jokenpo() {
  // Início da contagem de pontos zerada
  let userPoints = 0;
  let botPoints = 0;

  // Contagem até que alguém ganhe 2 rodadas e o jogo se encerre
  function countPoints() {
    while (userPoints < 2 && botPoints < 2) {
      let userChoice = chooseOption();
      let botChoice = randomOption();

      // Pedra vence tesoura
      if (userChoice === 1 && botChoice === 3) {
        userPoints++;
        alert("Ponto pra você!");
      } else if (botChoice === 1 && userChoice === 3) {
        botPoints++;
        alert("Ponto pra mim.");
      } // Papel vence pedra e tesoura vence papel
      else if (userChoice > botChoice) {
        userPoints++;
        alert("Ponto pra você!");
      } else if (userChoice < botChoice) {
        botPoints++;
        alert("Ponto pra mim.");
      } // Escolhas iguais não pontuam
      else alert("Empate.");
      // Pontuação a cada rodada
      alert(`PLACAR\nSeus pontos: ${userPoints}\nMeus pontos: ${botPoints}.`);
      countPoints();
    }
    return (points = { userPoints: userPoints, botPoints: botPoints });
  }

  countPoints();

  // Vence quem chegar a 2 pontos primeiro
  if (points.userPoints > points.botPoints) {
    alert("Parabéns, você venceu o jogo!");
  } else alert("Que pena, não foi dessa vez. Você perdeu.");

  // Possibilidade de jogar novamente ou encerrar, ao término do jogo
  if (confirm("Gostaria de jogar de novo?")) {
    jokenpo();
  } else if (confirm("Tem certeza de que deseja sair do jogo?")) {
    window.close();
  } else jokenpo();
}

jokenpo();
