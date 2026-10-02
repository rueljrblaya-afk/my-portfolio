export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-section">
        <p className="small-title">MY GALLERY</p>

        <h1>
          My <span>Gallery.</span>
        </h1>

        <p className="gallery-text">
          A collection of my projects, activities, and experiences.
        </p>

        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-placeholder">Project 01</div>
            <h2>Seat Plan Organizer</h2>
            <p>My web development project.</p>
          </div>

          <div className="gallery-card">
            <div className="gallery-placeholder">Project 02</div>
            <h2>Programming</h2>
            <p>Some of my programming activities.</p>
          </div>

          <div className="gallery-card">
            <div className="gallery-placeholder">Project 03</div>
            <h2>School Projects</h2>
            <p>Different projects I created in college.</p>
          </div>

          <div className="gallery-card">
            <div className="gallery-placeholder">Project 04</div>
            <h2>Web Development</h2>
            <p>My experience learning web development.</p>
          </div>
        </div>
      </section>
    </main>
  );
}