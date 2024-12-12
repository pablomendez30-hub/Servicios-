const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Usuario configurado en PostgreSQL
    host: 'localhost', // Cambia esto si usas un servidor remoto
    database: 'Servicios', // Nombre de la base de datos
    password: 'Juan.3003', // Contraseña de PostgreSQL
    port: 5432, // Puerto por defecto de PostgreSQL
});

pool.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});
