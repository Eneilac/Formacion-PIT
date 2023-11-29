/***
 * eventos formulario
 */

function cambiarFondo() {
  let select = document.getElementById("img");
  let url = select.options[select.selectedIndex].value;
  let contenedor = document.getElementById("fondo");

  console.log(url);

  contenedor.style.backgroundImage = "url('" + url + "')";


}

function cambiarIcono(icono) {
  let input = document.getElementById(icono);
  let label = document.querySelector("label[for=" + icono + "] img");

  input.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function () {
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

    let paisSinRuta = formulario.elements["pais"].value;
    let equipoSinRuta = formulario.elements["equipo"].value;

    let pais = "/assets/images/banderas/" + paisSinRuta.split("\\")[2];
    let equipo = "/assets/images/equipos/" + equipoSinRuta.split("\\")[2];

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



fetch('http://localhost:3000/players')
  .then(response => response.json())
  .then(data => {
    console.log('Datos del servidor:', data);


    let contenedor = document.getElementById('tarjetas');

    if (data == '') {
      contenedor.innerHTML = `
            <p>No hay jugadores</p>
                                    `;
    } else {

      let cont=0;
      for (let jugador of data) {


        cont++;

        let puntuaciones = [jugador.habilidades.def, jugador.habilidades.dri, jugador.habilidades.pac, jugador.habilidades.pas, jugador.habilidades.phy, jugador.habilidades.sho];

        let suma = 0;
        let media = 0;
     

        suma = suma = puntuaciones.reduce((total, numero) => total + Number(numero), 0);
        console.log("suma" + suma)
        media = suma / 6;

        console.log(media)
        contenedor.innerHTML += `
        <h3>Jugador ${cont}</h3>
        <div class="tarjeta">
        <div class="grid">
            <div class="arriba">
                <p>MC: ${media.toFixed(0)}</p>
                <img src="${jugador.pais}">
                <img src="${jugador.equipo}">
            </div>
            <div class="foto" id="foto">
              <img src="${jugador.imagen}">
            </div>
        </div>
        <div class="inferior">
            <p>${jugador.nombre}</p>

            <div class="habilidades">
                <div class="block1">
                    <p>Pac:${jugador.habilidades.pac} </p>
                    <p>Sho: ${jugador.habilidades.sho}</p>
                    <p>Pas: ${jugador.habilidades.pas}</p>
                </div>

                <div class="block2">
                    <p>Dri:${jugador.habilidades.dri} </p>
                    <p>Def: ${jugador.habilidades.def}</p>
                    <p>Phy: ${jugador.habilidades.phy}</p>
                </div>
            </div>
        </div>
    </div>
                  `;



      }
    }

  })
  .catch(error => console.error('Error al realizar la solicitud:', error));



