const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database'); 
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'irapues', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'..')));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'profile.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM usuarios WHERE correo = ? AND password = ?';

  db.query(query, [email, password], (error, results) => {
    if (error) {
      console.log('Database query error:', error);
      res.status(500).json({ success: false, message: 'Database query error' });
    } else if (results.length > 0) {
      req.session.user = results[0];
      console.log('Login successful:', results);
      res.json({ success: true, message: 'Login successful' });
    } else {
      console.log('Invalid email or password');
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});

function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

app.get('/materias', checkAuth, (req, res) => {
  const userId = req.session.user.id_usuario; 

  const query = 'SELECT * FROM materias WHERE usuarios_id_usuario = ?';
  db.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ success: false, message: 'Database query error' });
    }
    res.json({ success: true, subjects: results });
  });
});

app.get('/materias', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pagina_materia.html'));
});

app.post('/materias', (req, res) => {
  const { nombre_materia } = req.body;
  const user = req.session.user;

  if (!user) {
    return res.status(400).json({ success: false, message: 'User not authenticated' });
  }

  const userId = user.id_usuario;

  const query = 'INSERT INTO materias (nombre_materia, usuarios_id_usuario) VALUES (?, ?)';
  db.query(query, [nombre_materia, userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.status(200).json({ success: true });
  });
});

app.post('/borrar-materia', (req, res) => {
  const nombre_materia = req.body.subjectName;

  const query = 'DELETE FROM materias WHERE nombre_materia = ?';
  db.query(query, [nombre_materia], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      return res.status(500).json({ success: false, message: 'Database query error' });
    }

    res.status(200).json({ success: true, message: 'Subject deleted successfully', nombre_materia });
  });
});

module.exports = app;
