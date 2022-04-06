let inputNomeReference = document.querySelector("#inputNome");
let inputTermosReference = document.querySelector("#inputTermos");
let botaoConcluirCadastroReference = document.querySelector(
  "#botaoConcluirCadastro"
);
let inputsTipoPessoaReference = document.getElementsByName("tipoPessoa");
let selectCidadesReference = document.querySelector("#selectCidade");

let usuario = {};

botaoConcluirCadastroReference.addEventListener("click", function (event) {
  event.preventDefault();

  usuario.nome = inputNomeReference.value.trim();
  usuario.aceitouTermos = inputTermosReference.checked;
  usuario.cidade = selectCidadesReference.value;

  for (let inputTipoPessoa of inputsTipoPessoaReference) {
    if (inputTipoPessoa.checked) {
      usuario.tipoPessoa = inputTipoPessoa.value;
    }
  }

  console.log(usuario);
});
