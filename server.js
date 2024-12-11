const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'spa_citas',
    password: 'tu_contraseña', // Cambia esto
    port: 5432
});

app.use(express.json());

// Ruta para obtener servicios
app.get('/servicios', async (req, res) => {
    const result = await pool.query('SELECT * FROM servicios');
    res.json(result.rows);
});

// Ruta para crear una cita
app.post('/citas', async (req, res) => {
    const { usuario_id, servicio_id, fecha, hora } = req.body;
    await pool.query(
        'INSERT INTO citas (usuario_id, servicio_id, fecha, hora) VALUES ($1, $2, $3, $4)',
        [usuario_id, servicio_id, fecha, hora]
    );
    res.json({ mensaje: 'Cita creada exitosamente' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
