import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Inventory() {
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;
    axios.get(`http://localhost:3001/inventory/${userId}`)
      .then(res => setRespuestas(res.data));
  }, []);

  return (
    <div>
      <h2>Historial de Respuestas</h2>
      <ul>
        {respuestas.map(r => (
          <li key={r.id}>{r.pregunta}: {r.respuesta}</li>
        ))}
      </ul>
    </div>
  );
}
