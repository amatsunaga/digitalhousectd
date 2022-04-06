let inputNomeReferencia = document.querySelector("#nome");
let inputSobrenomeReferencia = document.querySelector("#sobrenome");
let buttonEnviarReferencia = document.querySelector("#buttonEnviar");
let controladoresReferencia = document.querySelectorAll(".controlador");
let valoresReferencia = document.querySelector("#valores");

buttonEnviarReferencia.addEventListener("click", function (event) {
  event.preventDefault();
  let nome = inputNomeReferencia.value;
  let sobrenome = inputSobrenomeReferencia.value;

  valoresReferencia.innerHTML = `
  <p>Retorno com trim: ${nome.trim()} ${sobrenome.trim()}</p>
  <p>Retorno com uppercase: ${nome.toUpperCase()} ${sobrenome.toUpperCase()}</p>\n
  <p>Retorno com lowercase: ${nome.toLowerCase()} ${sobrenome.toLowerCase()}</p>\n
  <p>Retorno com concat: ${nome.trim().concat(sobrenome.trim())}</p>\n
  <p>Retorno com replace: ${nome
    .replace(/a/gi, "@")
    .replace(/e/gi, "3")} ${sobrenome
    .replace(/a/gi, "@")
    .replace(/e/gi, "3")} </p
`;
});
