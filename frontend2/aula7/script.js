let submitButtonReference = document.querySelector("#submitButton");
let titleHintReference = document.querySelector("#titleHint");
let titleInputReference = document.querySelector("#titleInput");
let titleInputCount = 0;
let mensagemSucessoReference = document.querySelector("#mensagemSucesso");
let textInputReference = document.querySelector("#textInput");
let h1reference = document.querySelector("h1");
let titleBoxReference = document.querySelector("#titleBox");

window.onload = function () {
  alert("Agora a página está carregada completamente.");
};

function mostrarMensagem() {
  mensagemSucessoReference.classList.toggle("show");
}

function mostrarSugestao() {
  titleHintReference.classList.add("show");
}

function esconderSugestao() {
  titleHintReference.classList.remove("show");
}

function activateColor() {
  h1reference.classList.toggle("active");
}

function changeColor() {
  textInputReference.classList.toggle("typing");
}

function addTitleToHTML() {
  titleBoxReference.innerHTML += `<p>${titleInputReference.value}</p>
  <p>Evento keydown chamado ${titleInputCount} vez(es)</p>`;
}

submitButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  mostrarMensagem();
  addTitleToHTML();
});

titleInputReference.addEventListener("keydown", function () {
  console.log("digitando...");
});

titleInputReference.addEventListener("mouseover", mostrarSugestao);

titleInputReference.addEventListener("mouseout", esconderSugestao);

titleInputReference.addEventListener("keydown", function () {
  titleInputCount++;
});

textInputReference.addEventListener("keydown", changeColor);

h1reference.addEventListener("mouseover", activateColor);

h1reference.addEventListener("mouseout", activateColor);
