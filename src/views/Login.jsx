import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="login-wrap">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p>Ingresa tus datos para continuar aprendiendo.</p>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={submitted} required /></label>
          <label>Contraseña<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={submitted} required /></label>
          <button type="submit" disabled={!email.trim() || !password || submitted}>{submitted ? 'Datos enviados' : 'Ingresar'}</button>
          <p className="form-note">Esta es una demostración visual. Los datos no se validan ni se envían a un servidor.</p>
          {submitted && <p className="form-status" role="status">Formulario enviado. Los campos quedaron deshabilitados.</p>}
        </form>
      </div>
    </section>
  )
}

export default Login
