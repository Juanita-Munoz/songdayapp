import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3001/login', { correo, password });
      alert(`Bienvenido, ${res.data.nombre}`);
      localStorage.setItem('userId', res.data.id);
    } catch (err) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
