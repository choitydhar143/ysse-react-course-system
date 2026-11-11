function CourseCard({ course }) {
  function handleImageError(event) {
    event.currentTarget.style.display = "none";
    event.currentTarget.parentElement.style.background = "#e4eee5";
  }

  return (
    <article className="course-card">
      <div className="course-image">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          onError={handleImageError}
        />
        <span className="category-pill">{course.category}</span>
      </div>

      <div className="course-content">
        <div className="course-meta">
          <span className={`level ${course.level.toLowerCase()}`}>{course.level}</span>
          <span>YSSE LEARNING HUB</span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-bottom">
          <span className="duration">◷ {course.duration}</span>
          <a
            className="course-link"
            href="https://ysseglobal.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${course.title} on the YSSE website`}
          >
            Learn more <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
