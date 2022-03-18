let tituloReference = document.querySelector("#titulo");
let descricaoReference = document.querySelector("#descricao");
let imagemReference = document.querySelector("#imagem");
let saveButtonReference = document.querySelector("#saveButton");
let postsContainerReference = document.querySelector("#postsContainer");

function getValues() {
  return {
    titulo: tituloReference.value,
    descricao: descricaoReference.value,
    imagem: imagemReference.value
  };
}

function createPost() {
  let post = getValues();

  let postElement = `
  <div class="card">
    <div class="cardImage">
      <img src="${post.imagem}" alt="" />
    </div>
   <div class="cardText">
    <h3>${post.titulo}</h3>
    <p>${post.descricao}</p>
    </div>
  </div>`;

  const objectPost = document.createElement("objectPost");
  objectPost.innerHTML = postElement;

  postsContainerReference.appendChild(objectPost);
}

function clearForm() {
  tituloReference.value = "";
  descricaoReference.value = "";
  imagemReference.value = "";
}

saveButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  createPost();
  clearForm();
});
