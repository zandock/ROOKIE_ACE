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

/*entrar.addEventListener('click', function() {
    window.open('index.html');
});*/

document.getElementById('entrar').addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.querySelector('.Correo').value;
    const password = document.querySelector('.password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        const errorMessage = document.getElementById('error-message');
        if (data.success) {
            errorMessage.style.display = 'none';
            errorMessage.textContent = '';
            //alert('Login successful');
            window.location.href = '/index.html';
        } else {
            // Error message
            errorMessage.style.display = 'block';
            errorMessage.textContent = data.message;
        }
    })
    .catch(error => console.error('Error:', error));
});