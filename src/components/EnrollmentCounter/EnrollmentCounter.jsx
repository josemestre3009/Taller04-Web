import { useState } from 'react'
import './EnrollmentCounter.css'

function EnrollmentCounter() {
  const [students, setStudents] = useState(0)

  return (
    <section className="enrollment" id="nosotros">
      <h2>¿Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número.</p>
      <div className="counter-box" aria-label="Contador de estudiantes">
        <button type="button" aria-label="Restar estudiante" disabled={students === 0} onClick={() => setStudents((current) => current - 1)}>-</button>
        <strong aria-live="polite">{students}</strong>
        <button type="button" aria-label="Sumar estudiante" onClick={() => setStudents((current) => current + 1)}>+</button>
      </div>
      <span className="counter-caption">estudiantes inscritos</span>
    </section>
  )
}

export default EnrollmentCounter
