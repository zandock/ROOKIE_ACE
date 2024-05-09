const sideBar = document.querySelector("#sidebar");

sideBar.addEventListener("mouseover", function () {
  sideBar.classList.add("expand");
});

sideBar.addEventListener("mouseout", function () {
  sideBar.classList.remove("expand");
});


var containers = [];
var addButton = document.querySelector('.fa-regular.fa-square-plus');

addButton.addEventListener('mouseover', function() {
  addButton.style.transform = 'scale(1.2)';
});

addButton.addEventListener('mouseout', function() {
  addButton.style.transform = 'scale(1)';
});

addButton.addEventListener('click', function() {
  var container;
  if (containers.length === 0 || containers[containers.length - 1].children.length === 7) {
    container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.width = '120px';
    container.style.marginRight = '60px';
    container.style.marginLeft = '20px';
    container.style.marginTop = '100px';
    document.querySelector('.main').appendChild(container);
    containers.push(container);
  } else {
    container = containers[containers.length - 1];
  }

  Swal.fire({
    title: 'Ingresa el nombre de la asignatura:',
    input: 'text',
    inputPlaceholder: 'Nombre de la asignatura',
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    customClass:{
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
      var name = result.value;
      var newElement = document.createElement('div');
      newElement.textContent = name;

      var newListItem = document.createElement('li');
      newListItem.className = 'sidebar-item';
      var newLink = document.createElement('a');
      newLink.href = '#';
      newLink.className = 'sidebar-link';
      newLink.textContent = name;
      newListItem.appendChild(newLink);

      document.querySelector('#auth').appendChild(newListItem);

      newElement.style.width = '170px';
      newElement.style.height = '100px';
      newElement.style.padding = '10px';
      newElement.style.position = 'relative';
      newElement.style.marginTop = '-30px';
      newElement.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
      newElement.style.fontFamily = 'Cantata One, sans-serif';
      newElement.style.fontSize = '20px';
      newElement.style.color = 'white';
      newElement.style.boxShadow = '0px 20px 40px rgba(0, 0, 0, 0.19), 0px 16px 6px rgba(0, 0, 0, 0.23)';
      newElement.className = 'elevate'; 

      newElement.addEventListener('click', function() {
        window.location.href = 'http://www.example.com';
      });

      var deleteButton = document.createElement('button');
      deleteButton.style.position = 'absolute';
      deleteButton.style.right = '0';
      deleteButton.style.top = '0';
      deleteButton.style.backgroundColor = 'transparent';
      deleteButton.style.border = 'none';

      deleteButton.addEventListener('mouseover', function() {
        deleteButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
      });

      deleteButton.addEventListener('mouseout', function() {
        deleteButton.style.boxShadow = '';
      });

      var icon = document.createElement('i');
      icon.className = 'fa-solid fa-x';
      icon.style.color = 'white';

      deleteButton.appendChild(icon);

      deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        Swal.fire({
          title: '¿Estás seguro de querrer borrarlo?',
          text: "Ya no hay vuelta atras !",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: 'red',
          cancelButtonColor: '#daa520',
          confirmButtonText: 'Borrar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            newElement.remove();
            newListItem.remove();
            if (container.children.length === 0) {
              container.remove();
              containers.pop();
            }
            Swal.fire(
              'Eliminado!',
              'El elemento ha sido eliminado.',
              'success'
            )
          }
        })
      });

      newElement.appendChild(deleteButton);

      container.appendChild(newElement);
    }
  });
});