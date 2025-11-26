import "./Hero.css";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">

        <h1 className="hero-title">
          Hi, my name is <span>Umid</span>
        </h1>

        <p className="hero-sub">
          I’m a Full-stack Web Developer. I build modern, scalable and high-quality web applications.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
          </button>

          <button onClick={scrollToFooter} className="btn-secondary">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
