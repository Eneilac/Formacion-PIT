/***
 * eventos formulario
 */

function cambiarFondo() {
  let select = document.getElementById("img");
  let url = select.options[select.selectedIndex].value;
  let contenedor = document.getElementById("fondo");

  contenedor.style.backgroundImage= "url('/ejercicio1/"+ url + "')";
}

function cambiarIcono(icono) {
  let input = document.getElementById(icono);
  let label = document.querySelector("label[for="+icono+"] img");

input.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    label.setAttribute('src', reader.result);
  });

  reader.readAsDataURL(file);
});
}




/**Peticiones */
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('miFormulario');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let paisSinRuta= formulario.elements["pais"].value;
    let equipoSinRuta= formulario.elements["equipo"].value;

    let pais="/ejercicio1/assets/images/banderas/"+paisSinRuta.split("\\")[2];
    let equipo="/ejercicio1/assets/images/equipos/"+equipoSinRuta.split("\\")[2];

    console.log(pais)

    let formData = {
      nombre: formulario.elements["nombre"].value,
      equipo: equipo,
      pais: pais,
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

    fetch('http://localhost:3000/players', {
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