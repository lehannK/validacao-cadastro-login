let usuario = document.querySelector("#usuario");
let userLabel = document.querySelector("#user-label");
let senha = document.querySelector("#senha");
let senhaLabel = document.querySelector("#senha-label");
let msgError = document.querySelector("#msg-error");

function closeAlarmBtn() {
  msgError.setAttribute("style", "display: none");
  msgError.innerHTML = "";
}

function entrar() {
  let userList = [];

  let userValid = {
    nome: null,
    usuario: null,
    senha: null,
  };

  let storedList = localStorage.getItem("userList");

  if (storedList) {
    userList = JSON.parse(storedList);

    userList.forEach((i) => {
      if (usuario.value == i.usuario && senha.value == i.senha) {
        userValid = {
          nome: i.nome,
          usuario: i.usuario,
          senha: i.senha,
        };
      }
    });
  }

  if (usuario.value == userValid.usuario && senha.value == userValid.senha) {
    msgError.setAttribute("style", "display: none");
    window.location.href = "../pages/homepage.html";

    let token =
      Math.random().toString(16).substring(2) +
      Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);

    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    userLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senhaLabel.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "Usuário e/ou senha incorretos <button onclick='closeAlarmBtn()' id='close-alarm-btn'>x</button>";
    usuario.focus();
  }
}
