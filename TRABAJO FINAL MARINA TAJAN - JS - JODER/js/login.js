const btnLogin = document.getElementById("btn-login");
const btnLogUp = document.getElementById("btn-logup");

const ModalLogIn = document.getElementById("ModalLogIn");
const ModalLogUP = document.getElementById("ModalLogUp");

/* LOGIN  */
const usuarios = [
  {
      id: 1,
      nombre: 'admin', 
      contrasena: '9090'
  }
,];

JSON.parse(sessionStorage.getItem("usuarios")) || sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

class newUsuario{
  constructor(nombre, contrasena){
      this.id = usuarios.length + 1
      this.nombre = nombre
      this.contrasena = contrasena
  }
}

let formulario = document.getElementById("formulario");
let formularioRegister = document.getElementById("formularioRegister");
let msjSession = document.getElementById("msj-session");
let msjLogin = document.getElementById("msj-login");


formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let contrasena = inputs[1].value;
  let loginUsuario;


  for (const usuario of usuarios) {
    if (usuario.contrasena === contrasena && usuario.nombre === nombre ) {
      loginUsuario = usuario;
    }
  }
  if (loginUsuario) {
    let div = document.createElement("div");
    div.innerHTML = `Hola ${nombre}!`;
    msjLogin.append(div);
    ModalLogIn.style.display = "none";
    document.getElementsByClassName("modal-backdrop").remove();
  } else {
    let div = document.createElement("div");
    div.innerHTML = "Usuario o contraseña incorrectas";
    msjSession.append(div);   
  }
  //hacer cierre de sesion
});

  
  
formularioRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[1].value;
  let contrasena = inputs[3].value;
  let registerUsuario;

  for (const usuario of usuarios) {
    if (usuario.contrasena === contrasena && usuario.nombre === nombre ) {
      registerUsuario = usuario;
    }
  }
  if (registerUsuario) {
    let div = document.createElement("div");
    div.innerHTML = `Este usuario ya existe`;
    msjSession.append(div);
  } else {
    const usuario1 = new newUsuario(nombre,contrasena);
    usuarios.push(new newUsuario(nombre,contrasena));
    const usuarioJSON = JSON.stringify(usuario1);
    let div = document.createElement("div");
    div.innerHTML = "Usuario creado con éxito";
    msjSession.append(div);
    sessionStorage.setItem("usuarios", usuarioJSON);
     
  }
  
});

  

