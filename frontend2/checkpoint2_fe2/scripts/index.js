let emailReferencia = document.querySelector("#inputEmail");
let senhaReferencia = document.querySelector("#inputPassword");
let spanEmail = document.querySelector("#spanEmail");
let spanSenha = document.querySelector("#spanSenha");
let buttonReferencia = document.querySelector("button");
let emailValido = false;
let senhaValida = false;

function validarFormulario() {
  if (emailValido && senhaValida) {
    buttonReferencia.disabled = false;
  } else {
    buttonReferencia.disabled = true;
  }
}
emailReferencia.addEventListener("keyup", function () {
  emailValido = emailReferencia.checkValidity();
  if (emailValido) {
    spanEmail.classList.remove("show");
    validarFormulario();
  } else spanEmail.classList.add("show");
});

senhaReferencia.addEventListener("keyup", function () {
  senhaValida = senhaReferencia.checkValidity();
  if (senhaValida) {
    spanSenha.classList.remove("show");
    validarFormulario();
  } else spanSenha.classList.add("show");
});

buttonReferencia.addEventListener("click", function (event) {
  event.preventDefault();
});
