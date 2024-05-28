const urlParams = new URLSearchParams(window.location.search);

// Obtén el valor del parámetro 'name'
const subjectName = urlParams.get('name');


const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

const ColorUrl = getQueryParam('color') || 'white';  // Valor por defecto es 'white'

function darkenRGB(rgb, percent) {
    var rgbValues = rgb.match(/\d+/g);
    var red = Math.floor(rgbValues[0] * (1 - percent / 100));
    var green = Math.floor(rgbValues[1] * (1 - percent / 100));
    var blue = Math.floor(rgbValues[2] * (1 - percent / 100));
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}


const  panel = document.createElement('div');

panel.style.position = 'fixed';
panel.style.top = '5%';
panel.style.right = '55px';
panel.style.left = '8%';
panel.style.display = 'flex';
panel.style.width = '90%';
panel.style.height = '90%';
panel.style.backgroundColor = ColorUrl;
panel.style.borderRadius = '25px';
panel.style.boxShadow = '1px 10px 10px 3px rgba(0,0,0,0.40)';

// Crear el texto
const text = document.createElement('p');
text.textContent = subjectName;  // Reemplaza esto con tu texto
text.style.position = 'absolute';
text.style.color = 'white';  // Ajusta esto para cambiar el color del texto
text.style.top = '30px';  // Ajusta esto para cambiar la posición vertical del texto
text.style.left = '5%';  // Ajusta esto para cambiar la posición horizontal del texto
text.style.fontSize = '70px';  // Ajusta esto para cambiar el tamaño del texto

// Crear la figura
const figure = document.createElement('div');
figure.style.position = 'absolute';
figure.style.top = '3%';
figure.style.left = '45%';
figure.style.width = '50%';  // Ajusta esto para cambiar el ancho del tramo
figure.style.height = '11%';
figure.style.borderRadius = '23px';
figure.style.backgroundColor = darkenRGB(ColorUrl, 10);  // Ajusta esto para cambiar el color de la figura
figure.style.boxShadow = '0px 5px 2px 1px rgba(0,0,0,0.40)';
figure.style.overflow = 'hidden';  // Oculta cualquier contenido que se desborde
figure.style.itemAlign = 'center';
figure.style.alignContent = 'center';
figure.style.justifyContent = 'center';
figure.style.color = 'white';



const text5 = document.createElement('div');
text5.textContent = 'Tu texto aquí';
text5.style.fontSize = '40px';
text5.style.position = 'relative';
text5.style.whiteSpace = 'nowrap'; //
text5.style.animation = 'scroll 13s cubic-bezier(0.3, 0, 1, 1) infinite';



//Boton de agregar
const button5 = document.createElement('button');
button5.className = 'fa-solid fa-pen-to-square';
button5.style.position = 'absolute';
button5.style.top = '7.7%';  // Ajusta esto para cambiar la posición vertical del texto
button5.style.left = '24%';  // Ajusta esto para cambiar la posición horizontal del texto
button5.style.fontSize = '50px';  // Ajusta esto para cambiar el tamaño del texto
button5.style.color = 'white';  // Ajusta esto para cambiar el color del texto
button5.style.backgroundColor = 'transparent';  // Ajusta esto para cambiar el color del texto
button5.style.border = 'none';  // Ajusta esto para cambiar el color del texto
button5.style.cursor = 'pointer';  // Ajusta esto para cambiar el color del texto

// Agregar animación de agitación
button5.style.transition = '0.5s';  // Ajusta esto para cambiar la duración de la animación
button5.onmouseover = function() {
    this.style.transform = 'rotate(9deg)';
    this.style.transition = 'transform 0.3s';  // Ajusta esto para cambiar la duración de la animación
};
button5.onmouseout = function() {
    this.style.transform = 'rotate(0deg)';
};
figure.appendChild(text5);

// Agregar evento click
button5.addEventListener('click', function() {
    Swal.fire({
        title: 'Ingresa el horario de la materia',

        input: 'text',
        inputPlaceholder: 'Ejemplo: 10:00 - 12:00',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        customClass: {
            title: 'my-title',
            input: 'my-input',
            confirmButton: 'my-confirm',
            container: 'my-container',
            popup: 'my-popup',
            cancelButton: 'my-cancel-button'
        },
        preConfirm: (text) => {
            // Solo generar el texto si text no es null
            if (text) {
                text5.textContent = text;
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
});

// Crear la figura
const figure2 = document.createElement('div');
figure2.style.position = 'absolute';
figure2.style.top = '25%';  // Ajusta esto para cambiar la posición vertical de la figura
figure2.style.left = '5%';  // Ajusta esto para cambiar la posición horizontal de la figura
figure2.style.width = '35%';  // Ajusta esto para cambiar el ancho de la figura
figure2.style.height = '65%';  // Ajusta esto para cambiar la altura de la figura
figure2.style.borderRadius = '23px';  // Ajusta esto para cambiar la forma de la figura
figure2.style.backgroundColor = darkenRGB(ColorUrl, 10);    // Ajusta esto para cambiar el color de la figura
figure2.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';  // Ajusta esto para cambiar la sombra de la figura

// Crear el texto
const text2 = document.createElement('p');
text2.textContent = 'Tareas';  
text2.style.position = 'absolute';
text2.style.top = '20px';  // Ajusta esto para cambiar la posición vertical del texto
text2.style.left = '5%';  // Ajusta esto para cambiar la posición horizontal del texto
text2.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
text2.style.color = 'white';  // Ajusta esto para cambiar el color del texto

// Agregar boton
const button = document.createElement('button');

button.className = 'fa-solid fa-circle-plus';
button.style.position = 'absolute';
button.style.top = '6.5%';  // Ajusta esto para cambiar la posición vertical del texto
button.style.left = '87%';  // Ajusta esto para cambiar la posición horizontal del texto
button.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
button.style.color = 'white';  // Ajusta esto para cambiar el color del texto
button.style.backgroundColor = 'transparent';  // Ajusta esto para cambiar el color del texto
button.style.border = 'none';  // Ajusta esto para cambiar el color del texto
button.style.cursor = 'pointer';  // Ajusta esto para cambiar el color del texto

const button_1 = document.createElement('button');
button_1.id = 'button_1';
button_1.className = 'fa-solid fa-pen-to-square';
button_1.style.position = 'absolute';
button_1.style.top = '6%';
button_1.style.left = '75%';
button_1.style.fontSize = '40px';
button_1.style.color = 'white';
button_1.style.backgroundColor = 'transparent';
button_1.style.border = 'none';
button_1.style.cursor = 'pointer';

// Agregar animación de agitación
button_1.style.transition = '0.5s';
button_1.onmouseover = function() {
    this.style.transform = 'rotate(9deg)';
    this.style.transition = 'transform 0.3s';
};
button_1.onmouseout = function() {
    this.style.transform = 'rotate(0deg)';
};





// Contador de figuras
let figureCount = 0;

// Crear el contenedor de figuras
// Crear el contenedor de figuras
const figureContainer = document.createElement('div');
// Añadir una clase al contenedor
figureContainer.classList.add('custom-scrollbar');
figureContainer.style.height = '75%';
figureContainer.style.overflowY = 'scroll';
figureContainer.style.position = 'absolute';
figureContainer.style.width = '86%';
figureContainer.style.left = '6.5%';
figureContainer.style.top = '19%';
figureContainer.style.backgroundColor = 'white';
figureContainer.style.borderRadius = '20px';
figureContainer.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';
figureContainer.style.scrollBehavior = 'smooth';
document.body.appendChild(figureContainer);

// Agregar evento click
button.addEventListener('click', function() {
    
    // Crear la figura
    const newFigure = document.createElement('div');


    Swal.fire({
        title: 'Actividad',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        customClass: {
            title: 'my-title',
            input: 'my-input',
            confirmButton: 'my-confirm',
            container: 'my-container',
            popup: 'my-popup',
            cancelButton: 'my-cancel-button'
        },
        preConfirm: (text) => {
            // Solo generar la figura si text no es null
            if (text) {
                // Agregar el texto al interior de newFigure

                newFigure.style.position = 'relative';
                //newFigure.style.top = (3 + figureCount * 10) + '%';
                newFigure.style.left = '10%';
                newFigure.style.width = '80%';
                newFigure.style.height = '23%';
                newFigure.style.borderRadius = '28px';
                newFigure.style.backgroundColor = darkenRGB(ColorUrl, 20);  
                newFigure.style.margin = '5px';
                newFigure.style.boxShadow = '0px 3px 5px 2px rgba(0,0,0,0.40)';
                newFigure.style.marginTop = '10px';

                newFigure.textContent = text;
                newFigure.style.color = 'white';
                newFigure.style.textAlign = 'left';
                newFigure.style.paddingLeft = '20px';
                newFigure.style.fontSize = '40px';
                newFigure.style.alignContent = 'center';
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });

    // Agregar la figura al documento
    figureContainer.appendChild(newFigure);

    // Incrementar el contador
    figureCount++;
});


// Agregar evento mouseover para agrandar el botón
button.addEventListener('mouseover', function() {
    button.style.transform = 'scale(1.2)';  // Ajusta el valor para cambiar cuánto se agranda el botón
    button.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

// Agregar evento mouseout para volver el botón a su tamaño original
button.addEventListener('mouseout', function() {
    button.style.transform = 'scale(1)';  // Vuelve el botón a su tamaño original
    button.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

figure2.appendChild(text2);
//figure2.appendChild(button_1);
figure2.appendChild(button);
figure2.appendChild(figureContainer);


// Crear la figura
const figure3 = document.createElement('div');
figure3.style.position = 'absolute';
figure3.style.top = '25%';  // Ajusta esto para cambiar la posición vertical de la figura
figure3.style.left = '50%';  // Ajusta esto para cambiar la posición horizontal de la figura
figure3.style.width = '44.5%';  // Ajusta esto para cambiar el ancho de la figura
figure3.style.height = '30%';  // Ajusta esto para cambiar la altura de la figura
figure3.style.borderRadius = '25px';  // Ajusta esto para cambiar la forma de la figura
figure3.style.backgroundColor = darkenRGB(ColorUrl, 10);  // Ajusta esto para cambiar el color de la figura
figure3.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';  // Ajusta esto para cambiar la sombra de la figura
//Agregamos Texto
const text3 = document.createElement('p');
text3.textContent = 'Documentos';  // Reemplaza esto con tu texto
text3.style.position = 'absolute';
text3.style.top = '20px';  // Ajusta esto para cambiar la posición vertical del texto
text3.style.left = '5%';  // Ajusta esto para cambiar la posición horizontal del texto
text3.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
text3.style.color = 'white';  // Ajusta esto para cambiar el color del texto

// Agregar boton
const button2 = document.createElement('button');
button2.className = 'fa-solid fa-circle-plus';
button2.style.position = 'absolute';
button2.style.top = '13%';  // Ajusta esto para cambiar la posición vertical del texto
button2.style.left = '90%';  // Ajusta esto para cambiar la posición horizontal del texto
button2.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
button2.style.color = 'white';  // Ajusta esto para cambiar el color del texto
button2.style.backgroundColor = 'transparent';  // Ajusta esto para cambiar el color del texto
button2.style.border = 'none';  // Ajusta esto para cambiar el color del texto
button2.style.cursor = 'pointer';  // Ajusta esto para cambiar el color del texto

// Agregar evento mouseover para agrandar el botón
button2.addEventListener('mouseover', function() {
    button2.style.transform = 'scale(1.2)';  // Ajusta el valor para cambiar cuánto se agranda el botón
    button2.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

// Agregar evento mouseout para volver el botón a su tamaño original
button2.addEventListener('mouseout', function() {
    button2.style.transform = 'scale(1)';  // Vuelve el botón a su tamaño original
    button2.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

// Crear el contenedor de figuras
const figureContainer3 = document.createElement('div');
// Añadir una clase al contenedor
figureContainer3.classList.add('custom-scrollbar');
figureContainer3.style.height = '105px';
figureContainer3.style.overflowX = 'scroll';
figureContainer3.style.position = 'absolute';
figureContainer3.style.whiteSpace = 'nowrap'; // Evita que los elementos se envuelvan a la siguiente línea
figureContainer3.style.width = '88%';
figureContainer3.style.left = '6%';
figureContainer3.style.top = '40%';
figureContainer3.style.backgroundColor = 'white';
figureContainer3.style.borderRadius = '20px';
figureContainer3.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';
figureContainer3.style.scrollBehavior = 'smooth';
document.body.appendChild(figureContainer3);

// Contador de figuras
let figureCount3 = 0;

figureContainer3.style.display = 'flex';
figureContainer3.style.flexDirection = 'row';
figureContainer3.style.alignItems = 'center';

figureContainer3.addEventListener('wheel', function(e) {
    e.preventDefault();
    figureContainer3.scrollLeft += e.deltaY;
}, { passive: false });


// Agregar evento click
button2.addEventListener('click', function() {
    
    // Crear la figura
    const newFigure3 = document.createElement('div');
    newFigure3.style.display = 'inline-block'; // Cambia a inline-block para que se ajuste al contenido
    newFigure3.style.width = 'auto'; // Cambia a auto para que se ajuste al contenido
    newFigure3.style.height = '65%';
    newFigure3.style.borderRadius = '18px';
    newFigure3.style.backgroundColor = darkenRGB(ColorUrl, 20);  
    newFigure3.style.margin = '2px';
    newFigure3.style.boxShadow = '0px 3px 5px 2px rgba(0,0,0,0.40)';
    newFigure3.style.marginTop = '10px';
    newFigure3.style.cursor = 'pointer';
    newFigure3.style.fontSize = '25px';
    newFigure3.style.alignItems = 'center';
    newFigure3.style.justifyContent = 'center';
    newFigure3.style.alignContent = 'center';
    
    Swal.fire({
        title: 'Documento',
        input: 'file',
        inputAttributes: {
            accept: 'application/pdf'
        },
        showCancelButton: true,
        confirmButtonText: 'OK',
        showLoaderOnConfirm: true,
        cancelButtonText: 'Cancelar',
        customClass: {
            title: 'my-title',
            input: 'my-input',
            confirmButton: 'my-confirm',
            container: 'my-container',
            popup: 'my-popup',
            cancelButton: 'my-cancel-button'
        },
        preConfirm: (file) => {
            // Crear un nuevo FileReader para leer el archivo
            let reader = new FileReader();
    
            reader.onload = (e) => {
                // Establecer el nombre del archivo como el texto de newFigure3
                newFigure3.textContent = file.name;
                newFigure3.style.color = 'black';
                newFigure3.style.textAlign = 'left';
                newFigure3.style.paddingLeft = '10px';
                newFigure3.style.color = 'white';
    
                // Agregar un evento de clic a newFigure3 que abra el archivo PDF
                newFigure3.onclick = () => {
                    // Crear un nuevo enlace con la URL del archivo
                    let link = document.createElement('a');
                    link.href = e.target.result;
    
                    // Establecer el atributo target para abrir el archivo en una nueva pestaña
                    link.target = '_blank';
    
                    // Simular un clic en el enlace
                    link.click();
                };
            };
    
            // Leer el archivo como una URL de datos
            reader.readAsDataURL(file);
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
    // Agregar la figura al documento
    figureContainer3.appendChild(newFigure3);

    // Incrementar el contador
    figureCount++;
});



figure3.appendChild(button2);
figure3.appendChild(text3);
figure3.appendChild(figureContainer3);

const figure4 = document.createElement('div');
figure4.style.position = 'absolute';
figure4.style.top = '60%';  // Ajusta esto para cambiar la posición vertical de la figura
figure4.style.left = '50%';  // Ajusta esto para cambiar la posición horizontal de la figura
figure4.style.width = '44.5%';  // Ajusta esto para cambiar el ancho de la figura
figure4.style.height = '30%';  // Ajusta esto para cambiar la altura de la figura
figure4.style.borderRadius = '25px';  // Ajusta esto para cambiar la forma de la figura
figure4.style.backgroundColor = darkenRGB(ColorUrl, 10);    // Ajusta esto para cambiar el color de la figura
figure4.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';  // Ajusta esto para cambiar la sombra de la figura

//Agregamos Texto
const text4 = document.createElement('p');
text4.textContent = 'Notas';  // Reemplaza esto con tu texto
text4.style.position = 'absolute';
text4.style.top = '20px';  // Ajusta esto para cambiar la posición vertical del texto
text4.style.left = '5%';  // Ajusta esto para cambiar la posición horizontal del texto
text4.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
text4.style.color = 'white';  // Ajusta esto para cambiar el color del texto

// Agregar boton
const button4 = document.createElement('button');
button4.className = 'fa-solid fa-circle-plus';
button4.style.position = 'absolute';
button4.style.top = '13%';  // Ajusta esto para cambiar la posición vertical del texto
button4.style.left = '90%';  // Ajusta esto para cambiar la posición horizontal del texto
button4.style.fontSize = '40px';  // Ajusta esto para cambiar el tamaño del texto
button4.style.color = 'white';  // Ajusta esto para cambiar el color del texto
button4.style.backgroundColor = 'transparent';  // Ajusta esto para cambiar el color del texto
button4.style.border = 'none';  // Ajusta esto para cambiar el color del texto
button4.style.cursor = 'pointer';  // Ajusta esto para cambiar el color del texto

// Agregar evento mouseover para agrandar el botón
button4.addEventListener('mouseover', function() {
    button4.style.transform = 'scale(1.2)';  // Ajusta el valor para cambiar cuánto se agranda el botón
    button4.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

// Agregar evento mouseout para volver el botón a su tamaño original
button4.addEventListener('mouseout', function() {
    button4.style.transform = 'scale(1)';  // Vuelve el botón a su tamaño original
    button4.style.transition = 'transform 0.4s';  // Ajusta el valor para cambiar la
});

// Crear el contenedor de figuras
const figureContainer4 = document.createElement('div');
// Añadir una clase al contenedor
figureContainer4.classList.add('custom-scrollbar');
figureContainer4.style.height = '110px';
figureContainer4.style.overflowX = 'scroll';
figureContainer4.style.position = 'absolute';
figureContainer4.style.width = '88%';
figureContainer4.style.left = '6%';
figureContainer4.style.top = '40%';
figureContainer4.style.backgroundColor = 'white';
figureContainer4.style.borderRadius = '20px';
figureContainer4.style.boxShadow = '0px 5px 5px 5px rgba(0,0,0,0.40)';
figureContainer4.style.scrollBehavior = 'smooth';// Ajusta esto para cambiar la sombra de la figura
figureContainer4.style.whiteSpace = 'nowrap'; // Evita que los elementos se envuelvan a la siguiente línea
figureContainer4.style.alignItems = 'center';
figureContainer4.style.content = 'center';
figureContainer4.style.itemAlign = 'center';
figureContainer4.style.display = 'flex';

document.body.appendChild(figureContainer4);

// Contador de figuras
let figureCount4 = 0;
//Evento click
button4.addEventListener ('click', function(){
const newFigure4 = document.createElement('div');
// Primero, solicita el título de la nota
Swal.fire({
    title: 'Título de la nota',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Siguiente',
    showLoaderOnConfirm: true,
    cancelButtonText: 'Cancelar',
    customClass: {
        title: 'my-title',
        input: 'my-input',
        confirmButton: 'my-confirm',
        container: 'my-container',
        popup: 'my-popup',
        cancelButton: 'my-cancel-button'
    },
    preConfirm: (title) => {
        // Solo continuar si title no es null
        if (title) {
            // Guardar el título en el almacenamiento local
            localStorage.setItem('notaTitulo', title);

            // Luego, solicita el contenido de la nota
            Swal.fire({
                title: 'Contenido de la nota',
                input: 'textarea',
                showCancelButton: true,
                confirmButtonText: 'OK',
                showLoaderOnConfirm: true,
                cancelButtonText: 'Cancelar',
                customClass: {
                    title: 'my-title',
                    input: 'my-input',
                    confirmButton: 'my-confirm',
                    container: 'my-container',
                    popup: 'my-popup',
                    cancelButton: 'my-cancel-button'
                },
                preConfirm: (text) => {
                    // Solo generar la figura si text no es null
                    if (text) {
                        newFigure4.style.position = 'relative';
                        newFigure4.style.width = '45%';
                        newFigure4.style.height = '60%';
                        newFigure4.style.borderRadius = '18px';
                        newFigure4.style.backgroundColor = darkenRGB(ColorUrl, 20);  
                        newFigure4.style.margin = '2px';
                        newFigure4.style.boxShadow = '0px 3px 5px 2px rgba(0,0,0,0.40)';
                        newFigure4.style.marginTop = '10px';
                        newFigure4.style.cursor = 'pointer';
                        newFigure4.style.fontSize = '25px';
                        newFigure4.style.alignItems = 'center';
                        newFigure4.style.justifyContent = 'center';
                        newFigure4.style.alignContent = 'center';
                        // Agregar solo el título al interior de newFigure4
                        newFigure4.textContent = title;
                        newFigure4.style.color = 'white';
                        newFigure4.style.textAlign = 'center';
                        newFigure4.style.color = 'white';
                    
                        // Guardar el contenido de la nota en el almacenamiento local
                        localStorage.setItem('notaContenido', text);
                    
                        // Asegurarse de que figureContainer4 tiene un estilo de flex-direction establecido en column
                        figureContainer4.style.display = 'flex';
                        figureContainer4.style.flexDirection = 'column';
                    
                        // Agregar la figura al documento
                        figureContainer4.appendChild(newFigure4);

                        // Agregar evento de clic a newFigure4 para editar el contenido de la nota
                        newFigure4.addEventListener('click', function() {
                            // Obtener el contenido de la nota del almacenamiento local
                            var notaContenido = localStorage.getItem('notaContenido');
                            // Mostrar el contenido de la nota en un área de texto editable
                            Swal.fire({
                                title: 'Editar nota',
                                input: 'textarea',
                                inputValue: notaContenido,
                                showCancelButton: true,
                                confirmButtonText: 'Guardar',
                                showLoaderOnConfirm: true,
                                cancelButtonText: 'Cancelar',
                                customClass: {
                                    title: 'my-title',
                                    input: 'my-input',
                                    confirmButton: 'my-confirm',
                                    container: 'my-container',
                                    popup: 'my-popup',
                                    cancelButton: 'my-cancel-button'
                                },
                                preConfirm: (newText) => {
                                    // Guardar el contenido editado de la nota en el almacenamiento local
                                    localStorage.setItem('notaContenido', newText);
                                },
                                allowOutsideClick: () => !Swal.isLoading()
                            });
                        });
                        // Incrementar el contador
                        figureCount4++;
                    }
                },
                allowOutsideClick: () => !Swal.isLoading()
            });
        }
    },
    allowOutsideClick: () => !Swal.isLoading()
});
// Agregar la figura al documento
figureContainer4.appendChild(newFigure4);
// Incrementar el contador
figureCount4++;
});




figure4.appendChild(text4);
figure4.appendChild(button4);
figure4.appendChild(figureContainer4);

// Agregar el texto al panel
panel.appendChild(text);
panel.appendChild(button5);
panel.appendChild(figure);
panel.appendChild(figure2);
panel.appendChild(figure3);
panel.appendChild(figure4);
document.body.appendChild(panel);