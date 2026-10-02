export default function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <p className="small-title">ABOUT ME</p>

        <h1>
          A little about <span>me.</span>
        </h1>

        <p className="about-text">
          Hi, I’m Ruel. I’m a college student who is interested in
          programming, web development, and technology.
        </p>

        <p className="about-text">
          I’m currently learning how to build websites and applications
          while improving my skills through different projects.
        </p>

        <div className="info-box">
          <div>
            <h3>Education</h3>
            <p>College Student</p>
          </div>

          <div>
            <h3>Interest</h3>
            <p>Programming & Web Development</p>
          </div>

          <div>
            <h3>Goal</h3>
            <p>Become a skilled developer</p>
          </div>
        </div>
      </section>
    </main>
  );
}