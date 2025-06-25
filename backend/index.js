const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = new sqlite3.Database('./songday.db', (err) => {
  if (err) console.error('Error al conectar la BD:', err.message);
  else console.log('Conectado a la base de datos SQLite');
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS preguntas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pregunta TEXT NOT NULL,
    opcion1 TEXT NOT NULL,
    opcion2 TEXT NOT NULL,
    opcion3 TEXT NOT NULL,
    opcion4 TEXT NOT NULL,
    opcionCorrecta TEXT NOT NULL
  )
`);

// Ruta para obtener preguntas
app.get('/preguntas', (req, res) => {
  db.all('SELECT * FROM preguntas', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Error al obtener preguntas' });
    } else {
      res.json(rows);
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
