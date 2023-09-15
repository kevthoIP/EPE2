// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

// Verificar si existe un usuario con el correo ingresado
const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo);

    if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena) {
        // Redirigir al usuario a la página de inicio
        window.location.href = 'vista_compra_logeado.html';
    } else {
        // Mostrar un mensaje de error
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
});