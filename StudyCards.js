const sideBar = document.querySelector("#sidebar");

sideBar.addEventListener("mouseover", () => {
    sideBar.classList.add("expand");
});

sideBar.addEventListener("mouseout", () => {
    sideBar.classList.remove("expand");
});

var addButton = document.querySelector('.fa-regular.fa-square-plus');

addButton.addEventListener('mouseover', () => {
    addButton.style.transform = 'scale(1.2)';
});

addButton.addEventListener('mouseout', () => {
    addButton.style.transform = 'scale(1)';
});

addButton.addEventListener('click', () => {
    Swal.fire({
        title: 'Ingresa el nombre de la StudyCard:',
        input: 'text',
        inputPlaceholder: 'Nombre de la StudyCard',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        customClass: {
            title: 'my-title',
            input: 'my-input',
            confirmButton: 'my-confirm',
            container: 'my-container',
            popup: 'my-popup',
            cancelButton: 'my-cancel-button'
        },
        onOpen: () => {
            const input = Swal.getInput();
            input.addEventListener('focus', function() {
                this.placeholder = '';
            });
            input.addEventListener('blur', function() {
                this.placeholder = 'Nombre de la StudyCard';
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            var title = result.value;
            Swal.fire({
                title: 'Ingresa el nombre de la asignatura:',
                input: 'text',
                inputPlaceholder: 'Nombre de la asignatura',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                showCancelButton: true,
                customClass: {
                    title: 'my-title',
                    input: 'my-input',
                    confirmButton: 'my-confirm',
                    container: 'my-container',
                    popup: 'my-popup',
                    cancelButton: 'my-cancel-button'
                },
                onOpen: () => {
                    const input = Swal.getInput();
                    input.addEventListener('focus', function() {
                        this.placeholder = '';
                    });
                    input.addEventListener('blur', function() {
                        this.placeholder = 'Nombre de la asignatura';
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    var subject = result.value;
                    createStudyCard(title, subject);
                }
            });
        }
    });
});

function createStudyCard(title, subject) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('study-card');
    newDiv.style.position = "relative";
    newDiv.style.itemAlign = "center";
    newDiv.style.justifyContent = "center";
    newDiv.style.width = "250px";
    newDiv.style.height = "150px";
    newDiv.style.padding = "10px";
    newDiv.style.zIndex = '0';
    newDiv.style.bottom = "-20px";
    newDiv.style.margin = "15px";
    newDiv.style.borderRadius = "20px";
    newDiv.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    newDiv.style.boxShadow = '-10px 10px 20px rgba(0, 0, 0, 0.4), 10px 10px 20px rgba(0, 0, 0, 0.4)';
    newDiv.style.color = 'white';
    newDiv.style.fontWeight = 'normal';
    newDiv.style.transition = 'all 0.3s ease'; // Añade una transición para suavizar el cambio de estilos

    newDiv.addEventListener('mouseover', () => {
        newDiv.style.transform = 'translateY(-10px)'; // Mueve el elemento 10px hacia arriba
        newDiv.style.boxShadow = '-10px 10px 20px rgba(0, 0, 0, 0.4), 10px 10px 20px rgba(0, 0, 0, 0.4)'; // Aumenta la sombra para dar la ilusión de elevación
        newDiv.style.fontWeight = 'bold'; // Aumenta el peso de la fuente para resaltar el texto
        newDiv.style.transition = 'all 0.4s ease'; // Añade una transición para suavizar el cambio de estilos
    });

    newDiv.addEventListener('mouseout', () => {
        newDiv.style.transform = 'translateY(0)'; // Devuelve el elemento a su posición original
        newDiv.style.boxShadow = '-5px 5px 10px rgba(0, 0, 0, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.5)'; // Devuelve la sombra a su tamaño original
        newDiv.style.fontWeight = 'normal'; // Devuelve el peso de la fuente a la normalidad
        newDiv.style.transition = 'all 0.4s ease'; // Añade una transición para suavizar el cambio de estilos
    });

    var subjectElement = document.createElement('p');
    subjectElement.textContent = subject;
    subjectElement.style.position = 'relative'; // Cambiado a 'absolute'
    subjectElement.style.width = "95%";
    subjectElement.style.height = "30px";
    subjectElement.style.marginLeft = "0px";
    subjectElement.style.borderRadius = '50px / 45px';
    subjectElement.style.padding = '10px';
    subjectElement.style.textAlign = 'center';
    subjectElement.style.display = 'flex';
    subjectElement.style.alignItems = 'center';
    subjectElement.style.justifyContent = 'center';
    subjectElement.style.zIndex = '0';
    subjectElement.style.bottom = '-50px'; // Cambiado a 'bottom'
    subjectElement.style.left = '50%'; // Cambiado a 'left' y ajustado el porcentaje
    subjectElement.style.transform = 'translateX(-50%)'; // Centrar horizontalmente
    subjectElement.style.backgroundColor = darkenRGB(newDiv.style.backgroundColor, 10); // Se asume que la función darkenRGB está definida
    subjectElement.style.boxShadow = '-5px 5px 10px rgba(0, 0, 0, 0.2), 5px 5px 10px rgba(0, 0, 0, 0.3)';
    subjectElement.style.color = 'white';

    const contentContainer = document.createElement('div');
    contentContainer.style.position = 'relative';
    contentContainer.style.zIndex = '0';
    
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(subjectElement);
    

    //newDiv.appendChild(contentContainer);



    // Crear un array para almacenar las preguntas y respuestas
    newDiv.questions = newDiv.questions || [];
    const panel = document.createElement('div');
    panel.classList.add('panel'); // Agregar una clase al panel
    panel.style.display = 'none';
    panel.style.position = 'fixed'; // Cambiado a 'fixed' para posicionar en relación con la ventana del navegador 
    panel.style.zIndex = '100';
    panel.style.top = '70%'; 
    panel.style.left = '140%'; 
     //panel.style.transform = `translate(${translateX}px, ${translateY}px)`;
    //panel.style.transform = 'translate(-50%, -50%)';
    panel.style.width = '280%'; // Ancho del panel
    panel.style.height = '280%'; // Alto del panel
    panel.style.padding = '20px';
    panel.style.backgroundColor = newDiv.style.backgroundColor;
    panel.style.borderRadius = '15px';
    panel.style.boxShadow = '-5px 5px 10px rgba(0, 0, 0, 0.4), 5px 5px 10px rgba(0, 0, 0, 0.3)';
    panel.style.color = 'white';
    panel.style.transition = 'all 0.3s ease'; // Añadir una transición para suavizar el cambio de estilos
    panel.style.setProperty('z-index', '9999', 'important');
    panel.style.overflow = 'auto'; // Añadir desplazamiento si el contenido es demasiado grande
    panel.addEventListener('transitionend', () => {
        if (panel.style.display !== 'none') {
            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        } else {
            document.body.style.backgroundColor = 'initial';
        }
    });
    newDiv.panel = panel;
    newDiv.panel.style.position = 'fixed !important';
    newDiv.panel.style.zIndex = '1000 !important';
    newDiv.appendChild(panel);
    newDiv.appendChild(contentContainer);


    //var titleElement = document.createElement('h3');
    //titleElement.textContent = title;
     // Agregar el panel primero
   //newDiv.appendChild(panel);
    //newDiv.appendChild(titleElement);
   // newDiv.appendChild(subjectElement); // Luego agregar subjectElement    
    // Cuando se hace clic fuera del panel, se oculta

    let currentQuestionIndex = 0; // Inicializar el índice de la pregunta actual en 0

    newDiv.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el evento se propague a elementos superiores
        newDiv.panel.style.display = 'block'; // Mostrar el panel
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        disableOtherStudyCards(newDiv); // Deshabilitar la interacción con las demás tarjetas de estudio
    });

    // Agregar un evento click al div para mostrar el panel
    newDiv.addEventListener('click', () => {
        panel.style.zIndex = '1000 !important';
        panel.style.display = 'block';
    });
    
    window.addEventListener('click', (event) => {
        if (!newDiv.contains(event.target)) {
            newDiv.panel.style.display = 'none'; // Ocultar el panel
            enableOtherStudyCards(); // Habilitar la interacción con las demás tarjetas de estudio
        }
    });

    // Crear botones para editar, agregar, borrar, ir a la siguiente o anterior pregunta y salir del panel
    const btnAdd = document.createElement('button');
    btnAdd.style.margin = '5px';
    btnAdd.style.position = 'absolute';
    btnAdd.style.backgroundColor = subjectElement.style.backgroundColor;
    btnAdd.style.border = 'none';
    btnAdd.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnAdd.style.color = 'white';
    btnAdd.style.bottom = '20px';
    btnAdd.style.left = '45px';
    btnAdd.textContent = 'Agregar';
    btnAdd.style.borderRadius = '15px';
    btnAdd.style.fontSize = '30px';
    btnAdd.style.transition = 'transform 0.3s ease'; // Agregar transición para suavizar el cambio de escala

    btnAdd.addEventListener('mouseover', () => {
        btnAdd.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnAdd.addEventListener('mouseout', () => {
        btnAdd.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnAdd.addEventListener('click', () => {
        const question = prompt('Ingresa la pregunta:');
        const answer = prompt('Ingresa la respuesta:');
        newDiv.questions.push({ question, answer });
        currentQuestionIndex = newDiv.questions.length - 1; // Establecer el índice de la pregunta actual en la última pregunta
        updatePanel();
    });

    // Crear botones para editar, agregar, borrar, ir a la siguiente o anterior pregunta y salir del panel
    const btnEdit = document.createElement('button');
    btnEdit.style.margin = '5px';
    btnEdit.style.position = 'absolute';
    btnEdit.style.backgroundColor = subjectElement.style.backgroundColor;
    btnEdit.style.border = 'none';
    btnEdit.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnEdit.style.color = 'white';
    btnEdit.style.bottom = '20px';
    btnEdit.style.left = '245px';
    btnEdit.style.borderRadius = '15px';
    btnEdit.style.fontSize = '30px';
    btnEdit.textContent = 'Editar';
    

    btnEdit.addEventListener('mouseover', () => {
        btnEdit.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnEdit.addEventListener('mouseout', () => {
        btnEdit.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnEdit.addEventListener('click', () => {
    const question = prompt('Ingresa la nueva pregunta:');
    const answer = prompt('Ingresa la nueva respuesta:');
    newDiv.questions[currentQuestionIndex] = { question, answer };
    updatePanel();
    });

    const btnDelete = document.createElement('button');
    btnDelete.style.margin = '5px';
    btnDelete.textContent = 'Borrar';
    btnDelete.style.position = 'absolute';
    btnDelete.style.backgroundColor = subjectElement.style.backgroundColor;
    btnDelete.style.border = 'none';
    btnDelete.style.color = 'white';
    btnDelete.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnDelete.style.bottom = '20px';
    btnDelete.style.left = '400px';
    btnDelete.style.borderRadius = '15px';
    btnDelete.style.fontSize = '30px';

    btnDelete.addEventListener('mouseover', () => {
        btnDelete.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnDelete.addEventListener('mouseout', () => {
        btnDelete.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnDelete.addEventListener('click', () => {
        if (newDiv.questions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < newDiv.questions.length) {
            // Guarda la pregunta que se va a eliminar para depuración
            const deletedQuestion = newDiv.questions[currentQuestionIndex];
            console.log('Borrando pregunta:', deletedQuestion);
    
            // Elimina la pregunta
            newDiv.questions = newDiv.questions.filter((_, index) => index !== currentQuestionIndex);
    
            // Elimina la pregunta y respuesta de la pantalla
            const qaDiv = document.getElementById(`qa-${currentQuestionIndex}`);
            if (qaDiv) {
                qaDiv.parentNode.removeChild(qaDiv);
            }
    
            // Ajusta el índice de la pregunta actual si es necesario
            if (currentQuestionIndex >= newDiv.questions.length) {
                currentQuestionIndex--;
            }
    
            // Actualiza el panel y registra el estado actual de las preguntas para depuración
            console.log('Estado actual de las preguntas:', newDiv.questions);
        } else {
            console.log('No hay preguntas seleccionadas para borrar.');
        }
        updatePanel();
    });

    const btnNext = document.createElement('button');
    btnNext.style.margin = '5px';
    btnNext.textContent = 'Siguiente';
    btnNext.style.position = 'relative';
    btnNext.style.backgroundColor = subjectElement.style.backgroundColor;
    btnNext.style.border = 'none';
    btnNext.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnNext.style.color = 'white';
    btnNext.style.left = '465px';
    btnNext.style.borderRadius = '15px';
    btnNext.style.fontSize = '30px';

    btnNext.addEventListener('mouseover', () => {
        btnNext.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnNext.addEventListener('mouseout', () => {
        btnNext.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnNext.addEventListener('click', () => {
        if (currentQuestionIndex < newDiv.questions.length - 1) {
            currentQuestionIndex++; // Avanzar a la siguiente pregunta
        }
        updatePanel();
    });

    const btnPrev = document.createElement('button');
    btnPrev.style.margin = '5px';
    btnPrev.textContent = 'Anterior';
    btnPrev.style.position = 'relative';
    btnPrev.style.backgroundColor = subjectElement.style.backgroundColor;
    btnPrev.style.border = 'none';
    btnPrev.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnPrev.style.color = 'white';
    btnPrev.style.right = '140px';
    btnPrev.style.borderRadius = '15px';
    btnPrev.style.fontSize = '30px';

    btnPrev.addEventListener('mouseover', () => {
        btnPrev.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnPrev.addEventListener('mouseout', () => {
        btnPrev.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnPrev.addEventListener('click', () => { 
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--; // Retroceder a la pregunta anterior
        }
        updatePanel();
    });

    const btnClose = document.createElement('button');
    btnClose.style.margin = '5px';
    btnClose.textContent = 'Salir';
    btnClose.style.position = 'absolute';
    btnClose.style.backgroundColor = subjectElement.style.backgroundColor;
    btnClose.style.border = 'none';
    btnClose.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.6)';
    btnClose.style.color = 'white';
    btnClose.style.bottom = '20px';
    btnClose.style.left = '560px';
    btnClose.style.borderRadius = '15px';
    btnClose.style.fontSize = '30px';

    btnClose.addEventListener('mouseover', () => {
        btnClose.style.transform = 'scale(1.1)'; // Aumentar el tamaño del botón cuando el cursor pasa por encima
    });

    btnClose.addEventListener('mouseout', () => {
        btnClose.style.transform = 'scale(1.0)'; // Restaurar el tamaño original del botón cuando el cursor se va
    });

    btnClose.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el evento llegue a elementos superiores
        newDiv.panel.style.display = 'none'; // Ocultar el panel
        enableOtherStudyCards(); // Habilitar la interacción con las demás tarjetas de estudio
    });
    
    newDiv.appendChild(btnClose);

    function updatePanel() {
        // Get the current question and answer
        const qa = newDiv.questions[currentQuestionIndex];
    
        // Add the current question and answer to the panel
        const qaDiv = document.createElement('div');
        qaDiv.id = `qa-${currentQuestionIndex}`;
        qaDiv.innerHTML = `<div style="text-align: center;">Q${currentQuestionIndex + 1}: ${qa.question}</div><br><div style="text-align: center; font-weight: bold;">A${currentQuestionIndex + 1}: ${qa.answer}</div>`;
    
        // Clear the question and answer container
        const qaContainer = document.getElementById('qa-container');
        if (qaContainer) {
            qaContainer.innerHTML = '';
            qaContainer.appendChild(qaDiv);
        } else {
            // If the question and answer container doesn't exist, create it
            const qaContainer = document.createElement('div');
            qaContainer.id = 'qa-container';
            qaContainer.appendChild(qaDiv);
            newDiv.panel.appendChild(qaContainer);
        }
    
        // If the button container doesn't exist, create it
        const buttonContainer = document.getElementById('button-container');
        if (!buttonContainer) {
            const buttonContainer = document.createElement('div');
            buttonContainer.id = 'button-container';
            buttonContainer.appendChild(btnAdd);
            buttonContainer.appendChild(btnEdit);
            buttonContainer.appendChild(btnDelete);
            buttonContainer.appendChild(btnNext);
            buttonContainer.appendChild(btnPrev);
            buttonContainer.appendChild(btnClose);
            newDiv.panel.appendChild(buttonContainer);
        }
    }

    // Agregar un evento click al div para mostrar el panel
    newDiv.addEventListener('click', () => {
        panel.style.display = 'block';
    });

        // Agregar los botones al panel
        panel.appendChild(btnAdd);
        panel.appendChild(btnEdit);
        panel.appendChild(btnDelete);
        panel.appendChild(btnNext);
        panel.appendChild(btnPrev);
        panel.appendChild(btnClose);


    // Agregar el nuevo elemento al contenedor principal (reemplaza 'container' con tu contenedor real)
    const container = document.getElementById('container'); // Asume que tienes un contenedor con el id 'container'
    container.style.display = 'flex'; // Asegurarse de que el contenedor es un contenedor flex
    container.style.flexWrap = 'wrap'; // Permite que los elementos se envuelvan a la siguiente línea
    container.style.justifyContent = 'flex-start'; // Alinea los elementos al inicio del contenedor
    container.appendChild(newDiv);
}

// Función para oscurecer un color RGB en un porcentaje dado
function darkenRGB(rgb, percent) {
    var rgbValues = rgb.match(/\d+/g);
    var red = Math.floor(rgbValues[0] * (1 - percent / 100));
    var green = Math.floor(rgbValues[1] * (1 - percent / 100));
    var blue = Math.floor(rgbValues[2] * (1 - percent / 100));
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
// Función para deshabilitar la interacción con otras StudyCards
function disableOtherStudyCards(activeCard) {
    const allStudyCards = document.querySelectorAll('.study-card');
    allStudyCards.forEach(card => {
        if (card !== activeCard) {
            card.style.pointerEvents = 'none';
        }
    });
}

// Función para habilitar la interacción con todas las StudyCards
function enableOtherStudyCards() {
    const allStudyCards = document.querySelectorAll('.study-card');
    allStudyCards.forEach(card => {
        card.style.pointerEvents = ''; // Habilitar la interacción con las demás tarjetas de estudio
    });
}
