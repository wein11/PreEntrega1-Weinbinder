alert('Hola!!! Para ingresar tenes que Crearte una cuenta');

let nombre;
while (true) {
    nombre = prompt("Ingresa tu nombre de usuario:");
    if (nombre == '' || nombre == ' ') {
        alert("No ingresaste un nombre de usuario.");
    } 
    else {
        break;
    }
}

function verificarContrasena(contrasena) {
    if (contrasena.length < 5 || contrasena.length > 13) {
      return false;
    }
    const tieneNumero = /\d/.test(contrasena);
    return tieneNumero;
}

let contrasenaUsuario;

let contrasenaValida = false;
while (!contrasenaValida) {
  contrasenaUsuario = prompt("Ingresa tu contraseña:");
  const contrasenaRepetida = prompt("Ingresa nuevamente tu contraseña:");

  if (contrasenaUsuario === contrasenaRepetida) {
    contrasenaValida = verificarContrasena(contrasenaUsuario);
    if (contrasenaValida) {
      alert("Contraseña válida.");
    } else {
      alert("Contraseña inválida. Asegúrate de que tenga entre 5 y 13 caracteres y al menos un número.");
    }
  } else {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  }
}

alert('Ahora tienes que iniciar sesión');

let intentos = 0;
const intentosMaximos = 4;
for (let i = 0; i < intentosMaximos; i++) {
    let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
    let contrasena2 = prompt("Ingresa tu contraseña:");

    if (nombreUsuario === nombre && contrasena2 === contrasenaUsuario) {
        alert("Iniciaste sesión correctamente.");
        break;
    } else {
        intentos++;
        alert('La contraseña es incorrecta. Intenta nuevamente.');
    }
}

if (intentos === intentosMaximos) {
    alert("Has alcanzado el número máximo de intentos. Acceso denegado.");
}
