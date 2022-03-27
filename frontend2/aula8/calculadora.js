import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";

let somarButtonReference = document.querySelector("#somarButton");
let subtrairButtonReference = document.querySelector("#subtrairButton");
let multiplicarButtonReference = document.querySelector("#multiplicarButton");
let dividirButtonReference = document.querySelector("#dividirButton");

let num1Reference = document.querySelector("#num1");
let num2Reference = document.querySelector("#num2");

let resultadoReference = document.querySelector("#result");

somarButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = somar(
    Number(num1Reference.value),
    Number(num2Reference.value)
  );
});

subtrairButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = subtrair(
    Number(num1Reference.value),
    Number(num2Reference.value)
  );
});

multiplicarButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = multiplicar(
    Number(num1Reference.value),
    Number(num2Reference.value)
  );
});

dividirButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = dividir(
    Number(num1Reference.value),
    Number(num2Reference.value)
  );
});

// Código do professor

// function calcular(operacao) {
//   let num1 = Number(num1Reference.value);
//   let num2 = Number(num2Reference.value);

//   switch (operacao) {
//     case "somar":
//       resultadoReference.innerHTML = somar(num1, num2);
//       break;
//     case "subtrair":
//       resultadoReference.innerHTML = subtrair(num1, num2);
//       break;
//     case "multiplicar":
//       resultadoReference.innerHTML = multiplicar(num1, num2);
//       break;
//     case "dividir":
//       resultadoReference.innerHTML = dividir(num1, num2);
//       break;
//     default:
//       alert("Valores inválidos! Tente novamente.");
//       calcular(operacao);
//       break;
//   }
// }

// window.onload = function () {
//   somarButtonReference.addEventListener("click", function (event) {
//     event.preventDefault();
//     calcular("somar");
//   });

//   subtrairButtonReference.addEventListener("click", function (event) {
//     event.preventDefault();
//     calcular("subtrair");
//   });

//   multiplicarButtonReference.addEventListener("click", function (event) {
//     event.preventDefault();
//     calcular("multiplicar");
//   });

//   dividirButtonReference.addEventListener("click", function (event) {
//     event.preventDefault();
//     calcular("dividir");
//   });
// };
