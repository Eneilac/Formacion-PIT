document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario'); 
  
    formulario.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
  
      const formData = new FormData(formulario);
  
      // Realiza la petición POST utilizando Fetch
      fetch('/guardar-datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta del servidor:', data);
          // Puedes realizar acciones adicionales aquí, como actualizar la interfaz de usuario, mostrar un mensaje, etc.
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
          // Maneja errores y realiza acciones adicionales si es necesario
        });
    });
  });
  


