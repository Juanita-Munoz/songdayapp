import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Quiz from '../pages/Quiz';
import Inventory from '../pages/Inventory';
import Navbar from '../Components/Navbar'; // ✅ NUEVO

export default function AppRouter() {
  return (
    <Router>
      <Navbar /> {/* ✅ NUEVO */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}
