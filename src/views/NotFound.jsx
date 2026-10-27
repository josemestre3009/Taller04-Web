import { Link } from 'react-router-dom'

function NotFound() {
  return <section className="not-found"><strong>404</strong><h1>Página no encontrada</h1><p>La dirección que escribiste no existe.</p><Link className="page-button" to="/">Volver al inicio</Link></section>
}

export default NotFound
