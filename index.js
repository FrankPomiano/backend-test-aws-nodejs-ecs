// filepath: /mantenimiento-personas/index.js
const express = require('express');
const app = express();
const port = 80;

app.use(express.json());




let personas = [];

// Servicio GET para obtener todas las personas
app.get('/personas', (req, res) => {
    res.json(personas);
});

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Servicio POST para agregar una nueva persona
app.post('/personas', (req, res) => {
    const nuevaPersona = req.body;
    personas.push(nuevaPersona);
    res.status(201).json(nuevaPersona);
});

// Servicio PUT para actualizar una persona existente
app.put('/personas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const personaActualizada = req.body;
    let persona = personas.find(p => p.id === id);
    if (persona) {
        Object.assign(persona, personaActualizada);
        res.json(persona);
    } else {
        res.status(404).send('Persona no encontrada');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
