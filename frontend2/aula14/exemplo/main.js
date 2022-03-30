let inputCepRef = document.querySelector("#inputCep");
let inputRuaRef = document.querySelector("#inputRua");
let subtituloCidadeRef = document.querySelector("b");
let botaoSubmitRef = document.querySelector("button");

botaoSubmitRef.addEventListener("click", event => {
  event.preventDefault();
  // console.log(inputCepRef.value);

  fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`).then(
    response => {
      console.log(response);
      response.json().then(address => {
        if (address.erro) {
          alert("CEP não encontrado");
        } else {
          inputRuaRef.value = address.logradouro;
          subtituloCidadeRef.innerHTML = address.localidade;
        }
      });
    }
  );
});
