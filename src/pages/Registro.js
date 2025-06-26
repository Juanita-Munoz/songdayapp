import React, { useState } from 'react';
import axios from 'axios';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async () => {
    try {
      const res = await axios.post('http://localhost:3001/registro', { nombre, correo, password });
      alert('Usuario registrado con éxito');
    } catch (err) {
      alert('Error en el registro');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
}
