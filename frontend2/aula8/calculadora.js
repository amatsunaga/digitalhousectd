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
    parseFloat(num1Reference.value),
    parseFloat(num2Reference.value)
  );
});

subtrairButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = subtrair(
    parseFloat(num1Reference.value),
    parseFloat(num2Reference.value)
  );
});

multiplicarButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = multiplicar(
    parseFloat(num1Reference.value),
    parseFloat(num2Reference.value)
  );
});

dividirButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  resultadoReference.innerHTML = dividir(
    parseFloat(num1Reference.value),
    parseFloat(num2Reference.value)
  );
});
