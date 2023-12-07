let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let container = document.querySelector(".container");

if (!userLogado || !localStorage.getItem("token")) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../pages/login.html";
} else {
  let welcome = document.createElement("h1");
  welcome.innerText = `Seja bem vindo ${userLogado.nome}`;

  let btnSair = document.createElement("button");
  btnSair.addEventListener("click", () => {
    sair();
  });
  btnSair.innerText = "Sair";

  container.append(welcome, btnSair);
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "../pages/login.html";
}
