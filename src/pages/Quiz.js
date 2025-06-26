import React, { useState } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [respuesta, setRespuesta] = useState('');

  const enviarRespuesta = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return alert('Debes iniciar sesión');
    await axios.post('http://localhost:3001/quiz-response', {
      user_id: userId,
      pregunta: '¿Cómo te sientes hoy?',
      respuesta
    });
    alert('Respuesta guardada');
  };

  return (
    <div>
      <h2>Quiz del día</h2>
      <p>¿Cómo te sientes hoy?</p>
      <input value={respuesta} onChange={e => setRespuesta(e.target.value)} />
      <button onClick={enviarRespuesta}>Enviar</button>
    </div>
  );
}
