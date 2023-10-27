function empezar() {
    window.location.href = 'maps/load.html';
}

function back() {
    window.location.href = 'index.html';
}

function extra() {
    // Crear un contenedor para el gif
    var gifContainer = document.createElement('div');
    gifContainer.id = 'gifContainer';
    gifContainer.style.border = '5px solid orange'; // Ajusta el tamaño y el color del borde según tus preferencias
    gifContainer.style.backgroundColor = "white";

    // Crear la etiqueta img para el gif
    var gifImg = document.createElement('img');
    gifImg.src = 'https://media.tenor.com/Jojpr9QgMLoAAAAd/maxwell-maxwell-spin.gif'; // Reemplaza 'ruta_del_gif.gif' con la ruta real de tu gif
    gifImg.style.width = '100%';
    gifImg.style.height = '100%';

    // Agregar la imagen al contenedor
    gifContainer.appendChild(gifImg);

    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(gifContainer);

    // Inicializar variables para el arrastre
    var isDragging = false;
    var offsetX, offsetY;

    // Función para manejar el evento de inicio de arrastre (clic)
    function startDrag(e) {
        // Si ya está arrastrando y se hace clic, detener el arrastre
        if (isDragging) {
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
            gifContainer.style.cursor = 'grab';
            return;
        }

        // Iniciar el arrastre normalmente si no está arrastrando
        isDragging = true;
        offsetX = e.clientX - gifContainer.getBoundingClientRect().left;
        offsetY = e.clientY - gifContainer.getBoundingClientRect().top;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        gifContainer.style.cursor = 'grabbing';
    }

    // Función para manejar el evento de arrastre
    function drag(e) {
        if (isDragging) {
            gifContainer.style.left = e.clientX - offsetX + 'px';
            gifContainer.style.top = e.clientY - offsetY + 'px';
        }
    }

    // Función para manejar el evento de finalización de arrastre
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
        gifContainer.style.cursor = 'grab';
    }

    // Agregar manejadores de eventos para arrastre (clic)
    gifContainer.addEventListener('click', startDrag);

    // Agregar manejador de eventos para doble clic (cerrar)
    gifContainer.addEventListener('dblclick', function () {
        document.body.removeChild(gifContainer);
    });
}

// Llamar a la función extra para inicializar la reproducción del gif
extra();
