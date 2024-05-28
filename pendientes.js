//const queryParams = new URLSearchParams(localStorage.getItem("queryParams"));
// Ahora puedes obtener los valores de los parámetros de la misma manera que antes
//const title = queryParams.get('title');
//const subject = queryParams.get('subject');
//const date = queryParams.get('date');
//const time = queryParams.get('time');

export function createPendientes(title, subject, date, time) {
    const container = document.querySelector('.container');
    const pendiente = document.createElement('div');
    pendiente.classList.add('pendiente');
    pendiente.style.position = 'relative';
    pendiente.textContent = title;
    pendiente.style.display = 'flex';
    pendiente.style.justifyContent = 'left';
    pendiente.style.paddingLeft = '40px';
    pendiente.style.alignItems = 'center';
    pendiente.style.fontSize = '35px';
    pendiente.style.color = 'white';
    pendiente.style.width = '1000px';
    pendiente.style.height = '90px';
    pendiente.style.left = '15%';
    pendiente.style.bottom = '-30px';
    pendiente.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    pendiente.style.borderRadius = '20px';
    pendiente.style.boxShadow = '0px 10px 5px 1px rgba(0,0,0,0.40)';

    const pendienteTema = document.createElement('div');
    pendienteTema.style.position = 'absolute';
    pendienteTema.textContent = subject;
    pendienteTema.style.fontSize = '20px';
    pendienteTema.style.justifyContent = 'center';
    pendienteTema.style.alignItems = 'center';
    pendienteTema.style.display = 'flex';
    pendienteTema.style.width = '150px'; // Cambia esto al ancho que desees
    pendienteTema.style.height = '45px'; // Cambia esto a la altura que desees
    pendienteTema.style.right = '20px'; // Cambia esto a la distancia que desees desde la derecha
    pendienteTema.style.bottom = '20px'; // Cambia esto a la distancia que desees desde la parte inferior
    pendienteTema.style.borderRadius = '17px'; // Convierte el cuadrado en un círculo
    pendienteTema.style.boxShadow = '0px 1px 5px 5px rgba(0,0,0,0.20)';
    pendienteTema.style.backgroundColor = darkenRGB(pendiente.style.backgroundColor, 10); // Oscurece el color del fondo

    pendiente.addEventListener('mouseover', () => {
        pendiente.style.transform = 'translateY(-10px)'; // Mueve el elemento 10px hacia arriba
        pendiente.style.boxShadow = '-10px 10px 20px rgba(0, 0, 0, 0.4), 10px 10px 20px rgba(0, 0, 0, 0.4)'; // Aumenta la sombra para dar la ilusión de elevación
        pendiente.style.fontWeight = 'bold';
        pendiente.style.transition = 'all 0.4s'; // Agrega una transición para que el cambio de posición sea más suave
        pendienteTema.style.backgroundColor = darkenRGB(pendiente.style.backgroundColor, 20); // Oscurece el color del fondo
        pendienteTema.style.boxShadow = '5px 4px 0px 1px rgba(0,0,0,0.30)'; // Agrega una sombra
        pendienteTema.style.fontWeight = 'bold';
        pendienteTema.style.transition = 'all 0.4s'; // Agrega una transición para que el cambio de posición sea más suave

    });

    pendiente.addEventListener('mouseout', () => {
        pendiente.style.transform = 'translateY(0px)'; // Devuelve el elemento a su posición original
        pendiente.style.boxShadow = '0px 10px 5px 1px rgba(0,0,0,0.40)'; // Devuelve la sombra a su estado original
        pendiente.style.fontWeight = 'normal';
        pendiente.style.transition = 'all 0.4s'; // Agrega una transición para que el cambio de posición sea más suave
        pendienteTema.style.backgroundColor = darkenRGB(pendiente.style.backgroundColor, 10); // Devuelve el color del fondo a su estado original
        pendienteTema.style.boxShadow = '0px 1px 5px 5px rgba(0,0,0,0.20)'; // Devuelve la sombra a su estado original
        pendienteTema.style.fontWeight = 'normal';
        pendienteTema.style.transition = 'all 0.4s'; // Agrega una transición para que el cambio de posición sea más suave
    });

    container.appendChild(pendiente);
    pendiente.appendChild(pendienteTema);
}

createPendientes(title, subject, date, time);

function darkenRGB(rgb, percent) {
    var rgbValues = rgb.match(/\d+/g);
    var red = Math.floor(rgbValues[0] * (1 - percent / 100));
    var green = Math.floor(rgbValues[1] * (1 - percent / 100));
    var blue = Math.floor(rgbValues[2] * (1 - percent / 100));
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
