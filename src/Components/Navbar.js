import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/registro">Registro</Button>
        <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
        <Button color="inherit" component={Link} to="/inventory">Inventario</Button>
      </Toolbar>
    </AppBar>
  );
}
