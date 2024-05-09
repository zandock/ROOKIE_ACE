// Obtén los elementos de entrada
var correo = document.querySelector('.Correo');
var password = document.querySelector('.password');
var entrar = document.querySelector('#entrar');

// Al enfocar, borra el marcador de posición
correo.addEventListener('focus', function() {
    this.placeholder = '';
});

password.addEventListener('focus', function() {
    this.placeholder = '';
});

// Al perder el foco, vuelve a poner el marcador de posición
correo.addEventListener('blur', function() {
    this.placeholder = ' Hotmail o gmail';
});

password.addEventListener('blur', function() {
    this.placeholder = ' Contraseña';
});

entrar.addEventListener('click', function() {
    window.open('index.html');
});