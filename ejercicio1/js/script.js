document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('miFormulario');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {
      nombre: formulario.elements["nombre"].value,
      equipo: formulario.elements["equipo"].value,
      pais: formulario.elements["pais"].value,
      habilidades: {
        pac: formulario.elements["pac"].value,
        sho: formulario.elements["sho"].value,
        pas: formulario.elements["pas"].value,
        dri: formulario.elements["dri"].value,
        def: formulario.elements["def"].value,
        phy: formulario.elements["phy"].value,
      },
      imagen: formulario.elements["img"].value,
    };

    console.log('Datos a enviar:', formData);

    fetch('http://localhost:3000/datos', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  });
});