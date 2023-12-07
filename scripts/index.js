let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#label-nome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#label-usuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#label-senha");
let validSenha = false;

let confirmarSenha = document.querySelector("#confirmar-senha");
let labelConfirmarSenha = document.querySelector("#label-confirmar-senha");
let validConfirmarSenha = false;

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmarSenha) {
    alert("deu bom");
    console.log([validNome, validUsuario, validSenha, validConfirmarSenha]);
  } else {
    alert("Preencha todos os campos corretamente");
    console.log([validNome, validUsuario, validSenha, validConfirmarSenha]);
  }
}

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color:red");
    labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color:red");
    labelUsuario.innerHTML = "Usuário *Insira no mínimo 5 caracteres";
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 7) {
    labelSenha.setAttribute("style", "color:red");
    labelSenha.innerHTML = "Senha *insira no mínimo 8 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmarSenha.addEventListener("keyup", () => {
  if (confirmarSenha.value !== senha.value) {
    labelConfirmarSenha.setAttribute("style", "color:red");
    labelConfirmarSenha.innerHTML = "Confirmar Senha *As senhas não conferem";
    confirmarSenha.setAttribute("style", "border-color: red");
    validConfirmarSenha = false;
  } else {
    labelConfirmarSenha.setAttribute("style", "color: green");
    labelConfirmarSenha.innerHTML = "Confirmar Senha";
    confirmarSenha.setAttribute("style", "border-color: green");
    validConfirmarSenha = true;
  }
});
