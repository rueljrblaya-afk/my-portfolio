export default function Portfolio() {
  return (
    <main className="page">
      <section>
        <h1 className="page-title">My Work</h1>

        <p className="page-subtitle">
          Here are some projects I have worked on while learning
          programming and web development.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <h2>Seat Plan Organizer</h2>
            <p>
              A simple web-based system for organizing classroom
              seating arrangements.
            </p>
          </div>

          <div className="project-card">
            <h2>Personal Portfolio</h2>
            <p>
              A personal website created using Next.js to showcase
              my skills and projects.
            </p>
          </div>

          <div className="project-card">
            <h2>Programming Projects</h2>
            <p>
              Different beginner projects created while learning
              programming and software development.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}