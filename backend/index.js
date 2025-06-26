const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3001;
const db = new sqlite3.Database('./songday.db');

app.use(cors());
app.use(express.json());

// Crear tablas si no existen
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT, correo TEXT, password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS respuestas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER, pregunta TEXT, respuesta TEXT, timestamp TEXT
  )`);
});

// Registro de usuario
app.post('/registro', (req, res) => {
  const { nombre, correo, password } = req.body;
  db.run('INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)', [nombre, correo, password], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send({ id: this.lastID });
  });
});

// Login de usuario
app.post('/login', (req, res) => {
  const { correo, password } = req.body;
  db.get('SELECT * FROM usuarios WHERE correo = ? AND password = ?', [correo, password], (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(401).send('Credenciales inválidas');
    res.send({ id: row.id, nombre: row.nombre });
  });
});

// Guardar respuesta del quiz
app.post('/quiz-response', (req, res) => {
  const { user_id, pregunta, respuesta } = req.body;
  const timestamp = new Date().toISOString();
  db.run('INSERT INTO respuestas (user_id, pregunta, respuesta, timestamp) VALUES (?, ?, ?, ?)', [user_id, pregunta, respuesta, timestamp], function (err) {
    if (err) return res.status(500).send(err.message);
    res.send({ id: this.lastID });
  });
});

// Obtener historial
app.get('/inventory/:userId', (req, res) => {
  const userId = req.params.userId;
  db.all('SELECT * FROM respuestas WHERE user_id = ?', [userId], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
