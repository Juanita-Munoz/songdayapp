import React, { useState } from 'react';

function Quiz() {
  const [pregunta, setPregunta] = useState('');
  const [opcion1, setOpcion1] = useState('');
  const [opcion2, setOpcion2] = useState('');
  const [opcion3, setOpcion3] = useState('');
  const [opcion4, setOpcion4] = useState('');
  const [opcionCorrecta, setOpcionCorrecta] = useState('opcion1');

  const handleGuardar = () => {
    fetch('http://localhost:4000/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pregunta,
        opcion1,
        opcion2,
        opcion3,
        opcion4,
        opcionCorrecta,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('Pregunta guardada con éxito');
          // Limpia los campos
          setPregunta('');
          setOpcion1('');
          setOpcion2('');
          setOpcion3('');
          setOpcion4('');
          setOpcionCorrecta('opcion1');
        } else {
          alert('Error al guardar la pregunta');
        }
      })
      .catch(error => {
        console.error('Error al enviar la pregunta:', error);
        alert('Error de conexión con el servidor');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Crear Pregunta</h2>
      <input
        type="text"
        placeholder="Escribe la pregunta"
        value={pregunta}
        onChange={(e) => setPregunta(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Opción 1"
          value={opcion1}
          onChange={(e) => setOpcion1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Opción 2"
          value={opcion2}
          onChange={(e) => setOpcion2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Opción 3"
          value={opcion3}
          onChange={(e) => setOpcion3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Opción 4"
          value={opcion4}
          onChange={(e) => setOpcion4(e.target.value)}
        />
      </div>
      <div>
        <label>Opción correcta:</label>
        <select
          value={opcionCorrecta}
          onChange={(e) => setOpcionCorrecta(e.target.value)}
        >
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion4">Opción 4</option>
        </select>
      </div>
      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );
}

export default Quiz;
