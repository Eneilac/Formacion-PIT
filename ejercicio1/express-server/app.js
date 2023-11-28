const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Importar la función de generación de UUID

const app = express();

app.use(express.json());
app.use(cors());

const datosFichero = "db/players.json";
let datos = [];

try {
    const datosLeidos = fs.readFileSync(datosFichero, 'utf-8');
    datos = JSON.parse(datosLeidos);
} catch (error) {
    console.error('Error al leer el archivo:', error);
}

// Función para generar una ID única
function generateUniqueId() {
    return uuidv4();
}

app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"));

/***Funcion post del servidor*/
app.post('/players', (req, res) => {
    const nuevosDatos = req.body;

    if (nuevosDatos) {
        // Generar una ID única y agregarla a los nuevos datos
        nuevosDatos.id = generateUniqueId();

        datos.push(nuevosDatos);
        fs.writeFileSync(datosFichero, JSON.stringify(datos, null, 2));
        res.json({ mensaje: 'Datos agregados correctamente', id: nuevosDatos.id });
    } else {
        res.status(400).json({ error: 'Datos no válidos en la solicitud' });
    }
});


/***Funcion get del servidor*/
app.get('/players', (req, res) => {
    let datos = [];

    try {
        const datosLeidos = fs.readFileSync(datosFichero, 'utf-8');
        datos = JSON.parse(datosLeidos);
    } catch (error) {
        console.error('Error al leer el archivo:', error);
    }

    res.json(datos);
});

