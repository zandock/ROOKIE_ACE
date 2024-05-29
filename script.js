const sideBar = document.querySelector("#sidebar");

sideBar.addEventListener("mouseover", function () {
  sideBar.classList.add("expand");
});

sideBar.addEventListener("mouseout", function () {
  sideBar.classList.remove("expand");
});

var containers = [];
var addButton = document.querySelector('.fa-regular.fa-square-plus');
addButton.style.position = 'absolute';
addButton.style.top = '16px';
addButton.style.fontSize = '40px';

addButton.addEventListener('mouseover', function () {
  addButton.style.transform = 'scale(1.2)';
});

addButton.addEventListener('mouseout', function () {
  addButton.style.transform = 'scale(1)';
});

document.addEventListener('DOMContentLoaded', function () {
  fetch('/materias', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const subjects = data.subjects;
        subjects.forEach(subject => {
          displaySubject(subject.nombre_materia);
        });
      } else {
        console.error('Error fetching subjects:', data.message);
      }
    })
    .catch(error => console.error('Error:', error));
});

function displaySubject(name) {
  const container = getOrCreateContainer();

  var newElement = document.createElement('div');
  newElement.textContent = name;
  newElement.setAttribute('data-subject-name', name); 

  var newListItem = document.createElement('li');
  newListItem.className = 'sidebar-item';
  var newLink = document.createElement('a');
  newLink.href = 'pagina_materia.html';
  newLink.className = 'sidebar-link';
  newLink.textContent = name;
  newListItem.appendChild(newLink);

  document.querySelector('#auth').appendChild(newListItem);

  styleNewElement(newElement);

  newElement.addEventListener('click', function () {
    const bgColor = encodeURIComponent(newElement.style.backgroundColor);
    const subjectName = encodeURIComponent(name);
    window.location.href = `pagina_materia.html?color=${bgColor}&name=${subjectName}`;
  });

  var deleteButton = createDeleteButton(newElement, newListItem);
  newElement.appendChild(deleteButton);
  container.appendChild(newElement);
}

function getOrCreateContainer() {
  var container;
  const main = document.querySelector('.main');
  main.style.display = 'flex';
  main.style.flexDirection = 'row';
  main.style.flexWrap = 'nowrap';
  main.style.overflowX = 'auto';

  if (containers.length === 0 || containers[containers.length - 1].children.length === 4) {
    container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.width = '120px';
    container.style.marginRight = '300px';
    container.style.marginTop = '120px';
    main.appendChild(container);
    containers.push(container);
  } else {
    container = containers[containers.length - 1];
  }

  return container;
}

function styleNewElement(element) {
  element.style.width = '400px';
  element.style.height = '200px';
  element.style.padding = '10px';
  element.style.position = 'relative';
  element.style.marginTop = '-30px';
  element.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  element.style.fontFamily = 'Cantata One, sans-serif';
  element.style.fontSize = '20px';
  element.style.color = 'white';
  element.style.boxShadow = '0px 20px 40px rgba(0, 0, 0, 0.19), 0px 16px 6px rgba(0, 0, 0, 0.23)';
  element.style.fontSize = '40px';
  element.className = 'elevate';
}

function createDeleteButton(newElement, newListItem) {
  var deleteButton = document.createElement('button');
  deleteButton.style.position = 'absolute';
  deleteButton.style.right = '0';
  deleteButton.style.top = '0';
  deleteButton.style.backgroundColor = 'transparent';
  deleteButton.style.border = 'none';

  deleteButton.addEventListener('mouseover', function () {
    deleteButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  });

  deleteButton.addEventListener('mouseout', function () {
    deleteButton.style.boxShadow = '';
  });

  var icon = document.createElement('i');
  icon.className = 'fa-solid fa-x';
  icon.style.color = 'white';

  deleteButton.appendChild(icon);

  deleteButton.addEventListener('click', function(event) {
    event.stopPropagation();
    const subjectName = newElement.textContent;
    Swal.fire({
      title: '¿Estás seguro de querrer borrarlo?',
      text: "Ya no hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: '#daa520',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('/borrar-materia', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ subjectName: subjectName })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            newElement.remove();
            newListItem.remove();
            Swal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
          } else {
            console.error('Error deleting subject:', data.message);
          }
        })
        .catch(error => console.error('Error:', error));
      }
    });
  });

  return deleteButton;
}

addButton.addEventListener('click', function () {
  const container = getOrCreateContainer();

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
      popup: 'my-popup'
    },
    buttonsStyling: false,
    preConfirm: (nombreMateria) => {
      if (!nombreMateria) {
        Swal.showValidationMessage('El nombre de la asignatura es obligatorio');
      }
      return nombreMateria;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      var newElement = document.createElement('div');
      newElement.textContent = result.value;
      newElement.setAttribute('data-subject-name', result.value);

      var newListItem = document.createElement('li');
      newListItem.className = 'sidebar-item';
      var newLink = document.createElement('a');
      newLink.href = 'pagina_materia.html';
      newLink.className = 'sidebar-link';
      newLink.textContent = result.value;
      newListItem.appendChild(newLink);

      document.querySelector('#auth').appendChild(newListItem);

      styleNewElement(newElement);

      newElement.addEventListener('click', function () {
        const bgColor = encodeURIComponent(newElement.style.backgroundColor);
        const subjectName = encodeURIComponent(result.value);
        window.location.href = `pagina_materia.html?color=${bgColor}&name=${subjectName}`;
      });

      var deleteButton = createDeleteButton(newElement, newListItem);
      newElement.appendChild(deleteButton);
      container.appendChild(newElement);

      fetch('/materias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre_materia: result.value })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Subject added successfully:', data.nombre_materia);
          } else {
            console.error('Error adding subject:', data.message);
          }
        })
        .catch(error => console.error('Error:', error));
    }
  });
});