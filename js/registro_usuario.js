const registroForm = document.querySelector('#registroForm');
const correoInput = document.querySelector('#correo');
const nombreInput = document.querySelector('#nombre');
const direccionInput = document.querySelector('#direccion');
const empresaInput = document.querySelector('#empresa');
const edadInput = document.querySelector('#edad');
const sexoInput = document.querySelector('#sexo');
const contrasenaInput = document.querySelector('#contrasena');
const confirmContrasenaInput = document.querySelector('#confirmContrasena');

// SUBMIT
registroForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const correo = correoInput.value;
    const nombre = nombreInput.value;
    const direccion = direccionInput.value;
    const empresa = empresaInput.value;
    const edad = edadInput.value;
    const sexo = sexoInput.value;
    const contrasena = contrasenaInput.value;
    const confirmContrasena = confirmContrasenaInput.value;
  
    if (contrasena !== confirmContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.correo === correo);
    if (usuarioExistente) {
      alert('El usuario ya está registrado');
      return;
    }
    const usuario = {
      correo: correo,
      nombre: nombre,
      direccion: direccion,
      empresa: empresa,
      edad: edad,
      sexo: sexo,
      contrasena: contrasena
    };
    usuariosRegistrados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
    alert('Usuario registrado correctamente');
  
    registroForm.reset();
    window.location.href = 'login.html';

  });