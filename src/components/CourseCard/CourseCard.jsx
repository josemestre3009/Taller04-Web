import './CourseCard.css'

function CourseCard({ icon, title, description, level }) {
  return (
    <article className="course-card">
      <span className="course-icon" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="level">{level}</span>
    </article>
  )
}

export default CourseCard
