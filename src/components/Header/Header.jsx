import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <NavLink className="brand" to="/">ReactAcademy</NavLink>
      <nav aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink className="login-link" to="/login">Ingresar</NavLink>
      </nav>
    </header>
  )
}

export default Header
