import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <h1>Aprende <span>React</span> desde cero</h1>
      <p className="hero-copy">Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
      <Link className="hero-button" to="/cursos">Ver Cursos</Link>
    </section>
  )
}

export default Hero
