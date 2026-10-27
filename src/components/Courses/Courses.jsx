import CourseCard from '../CourseCard/CourseCard'
import './Courses.css'

const courses = [
  { id: 1, icon: 'RB', title: 'React Básico', description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.', level: 'Principiante' },
  { id: 2, icon: 'HK', title: 'React Hooks', description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.', level: 'Intermedio' },
  { id: 3, icon: 'EG', title: 'Estado Global', description: 'Gestiona el estado con Context API y aprende cuándo usarlo.', level: 'Intermedio' },
  { id: 4, icon: 'RA', title: 'React Avanzado', description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.', level: 'Avanzado' },
]

function Courses() {
  return (
    <section className="courses" id="cursos">
      <div className="section-heading">
        <h2>Nuestros cursos</h2>
        <p>Elige el camino que mejor se adapte a ti.</p>
      </div>
      <div className="course-grid">
        {courses.map((course) => <CourseCard key={course.id} {...course} />)}
      </div>
    </section>
  )
}

export default Courses
