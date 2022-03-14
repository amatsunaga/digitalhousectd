import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";

function getParams() {
  let num = parseInt(prompt("Insira um número"));

  if (isNaN(num)) {
    alert("Valor inválido!");
    return getParams();
  } else return num;
}

function getOperacao() {
  let operacao = parseInt(
    prompt(
      "Escolha a operação a ser realizada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
    )
  );
  return operacao;
}

function calcular(num1, num2) {
  switch (getOperacao()) {
    case 1:
      alert(`${num1} + ${num2} = ${somar(num1, num2)}`);
      break;
    case 2:
      alert(`${num1} - ${num2} = ${subtrair(num1, num2)}`);
      break;
    case 3:
      alert(`${num1} * ${num2} = ${multiplicar(num1, num2)}`);
      break;
    case 4:
      alert(`${num1} / ${num2} = ${dividir(num1, num2)}`);
      break;
    default:
      alert("Escolha inválida!");
      calcular(num1, num2);
      break;
  }

  if (confirm("Deseja realizar um novo cálculo?")) {
    calcular(getParams(), getParams());
  } else if (confirm("Tem certeza de que deseja sair?")) {
    window.close();
  } else calcular(getParams(), getParams());
}

calcular(getParams(), getParams());
