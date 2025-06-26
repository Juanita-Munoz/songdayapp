import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/inventory">Inventory</Link>
    </nav>
  );
}