import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "Sistema de Gestión de un Club",
    description:
      "Proyecto académico orientado a digitalizar la gestión de socios, pagos de cuotas y reservas de canchas de un club social y deportivo.",
    tags: ["C#", "SQL Server", "Análisis de sistemas"],
  },
  {
    title: "Sistema de Base de Datos",
    description:
      "Proyecto académico de modelado y gestión de información mediante una base de datos relacional, trabajando con entidades, relaciones y consultas.",
    tags: ["SQL", "SQL Server", "DER"],
  },
  {
    title: "Portfolio Personal",
    description:
      "Sitio web responsive desarrollado para presentar mi perfil, conocimientos y proyectos de forma clara y profesional.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript"],
  Backend: ["C#", "SQL", "SQL Server"],
  Herramientas: ["Git", "GitHub"],
};

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.currentTarget.checkValidity()) {
      setSent(true);
      event.currentTarget.reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);
    }
  };

  return (
    <div className="app">

      <header className="site-header">
        <nav className="navbar container" aria-label="Navegación principal">

          <a className="brand" href="#inicio" onClick={closeMenu}>
            <span className="brand-mark">LN</span>
            <span>Lautaro Lopez</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>

            <a href="#sobre-mi" onClick={closeMenu}>
              Sobre mí
            </a>

            <a href="#proyectos" onClick={closeMenu}>
              Proyectos
            </a>

            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </div>

          <div className="nav-actions">

            <button
              className="icon-button"
              type="button"
              aria-label="Cambiar tema"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </nav>
      </header>

      <main>

        {/* HERO */}

        <section id="inicio" className="hero section">

          <div className="container hero-grid">

            <div className="hero-copy">

              <p className="eyebrow">
                <span className="status-dot"></span>
                Disponible para oportunidades
              </p>

              <h1>Lautaro Nicolas Lopez</h1>

              <p className="hero-role">
                Frontend Developer <span>·</span> Estudiante de Ingeniería en
                Sistemas
              </p>

              <p className="hero-text">
                Desarrollo interfaces web claras, responsive y centradas en una
                buena experiencia de usuario. Actualmente estoy cursando cuarto
                año de Ingeniería en Sistemas y busco mi primera experiencia
                profesional.
              </p>

              <div className="hero-buttons">

                <a className="button primary" href="#proyectos">
                  Ver proyectos ↓
                </a>

                <a className="button secondary" href="#contacto">
                  Contactarme
                </a>

              </div>

              <div className="hero-meta">

                <span>🎓 4.º año · Ingeniería en Sistemas</span>

                <span>📍 Funes, Santa Fe</span>

              </div>

            </div>

            <div className="hero-card">

              <div className="code-window">

                <div className="window-bar">

                  <span></span>
                  <span></span>
                  <span></span>

                  <small>developer.js</small>

                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">const</span> developer{" "}
                    <span className="blue">=</span> {"{"}
                  </p>

                  <p className="indent">
                    <span className="green">name:</span>{" "}
                    <span className="orange">'Lautaro Lopez'</span>,
                  </p>

                  <p className="indent">
                    <span className="green">role:</span>{" "}
                    <span className="orange">'Frontend Developer'</span>,
                  </p>

                  <p className="indent">
                    <span className="green">location:</span>{" "}
                    <span className="orange">'Santa Fe, Argentina'</span>,
                  </p>

                  <p className="indent">
                    <span className="green">status:</span>{" "}
                    <span className="orange">'Buscando oportunidades'</span>
                  </p>

                  <p>{"};"}</p>

                  <p className="cursor-line">
                    <span className="purple">let</span>{" "}
                    <span className="blue">nextStep</span>{" "}
                    <span className="purple">=</span>{" "}
                    <span className="orange">'seguir aprendiendo'</span>;
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* SOBRE MI */}

        <section id="sobre-mi" className="section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                01 · Sobre mí
              </p>

              <h2>
                Construyendo una base sólida para crecer.
              </h2>

            </div>

            <div className="about-grid">

              <div className="about-text">

                <p>
                  Soy Lautaro Nicolas Lopez, tengo 21 años y soy estudiante de
                  cuarto año de Ingeniería en Sistemas. Me interesa
                  principalmente el desarrollo frontend y la creación de
                  interfaces web simples, modernas y fáciles de utilizar.
                </p>

                <p>
                  Durante mi formación académica trabajé con desarrollo web,
                  programación, bases de datos y control de versiones.
                  Actualmente busco mi primera experiencia profesional para
                  seguir aprendiendo y creciendo como desarrollador.
                </p>

              </div>

              <div className="skills-panel">

                {Object.entries(skills).map(([category, items]) => (

                  <div className="skill-group" key={category}>

                    <h3>{category}</h3>

                    <div className="skill-list">

                      {items.map((skill) => (

                        <span className="skill" key={skill}>
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* PROYECTOS */}

        <section id="proyectos" className="section projects-section">

          <div className="container">

            <div className="section-heading">

              <p className="section-label">
                02 · Proyectos
              </p>

              <h2>
                Trabajo académico, práctica y desarrollo.
              </h2>

              <p className="section-intro">
                Algunos proyectos que representan los conocimientos que fui
                adquiriendo durante la carrera.
              </p>

            </div>

            <div className="project-grid">

              {projects.map((project, index) => (

                <article className="project-card" key={project.title}>

                  <div className="project-top">

                    <span className="project-number">
                      0{index + 1}
                    </span>

                    <span>⌨</span>

                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                  <a
                    className="project-link"
                    href="https://github.com/LautaroLopez-13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en GitHub ↗
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* CONTACTO */}

        <section id="contacto" className="section contact-section">

          <div className="container contact-grid">

            <div>

              <p className="section-label">
                03 · Contacto
              </p>

              <h2>
                ¿Trabajamos juntos?
              </h2>

              <p className="contact-copy">
                Estoy interesado en oportunidades donde pueda aplicar mis
                conocimientos, aprender de un equipo y seguir creciendo como
                desarrollador.
              </p>

              <div className="contact-links">

                <a href="mailto:loplautylolo13@gmail.com">

                  <span className="contact-icon">
                    ✉
                  </span>

                  <span>
                    <small>Email</small>
                    loplautylolo13@gmail.com
                  </span>

                </a>

                <a
                  href="https://github.com/LautaroLopez-13"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="contact-icon">
                    &lt;/&gt;
                  </span>

                  <span>
                    <small>GitHub</small>
                    LautaroLopez-13
                  </span>

                </a>

                <div>

                  <span className="contact-icon">
                    in
                  </span>

                  <span>
                    <small>LinkedIn</small>
                    Perfil a completar
                  </span>

                </div>

              </div>

            </div>


            {/* FORMULARIO */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <label>

                Nombre

                <input
                  name="name"
                  type="text"
                  required
                  minLength="2"
                  placeholder="Tu nombre"
                />

              </label>

              <label>

                Email

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                />

              </label>

              <label>

                Mensaje

                <textarea
                  name="message"
                  required
                  minLength="10"
                  rows="5"
                  placeholder="Escribime un mensaje..."
                ></textarea>

              </label>

              <button
                className="button primary submit-button"
                type="submit"
              >
                Enviar mensaje ↗
              </button>

              {sent && (

                <p
                  className="success-message"
                  role="status"
                >
                  ✓ Formulario validado correctamente.
                </p>

              )}

            </form>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div className="container footer-inner">

          <span>
            © 2026 Lautaro Nicolas Lopez
          </span>

          <span>
            Desarrollado con React
          </span>

          <a
            href="#inicio"
            aria-label="Volver al inicio"
          >
            ↑
          </a>

        </div>

      </footer>

    </div>
  );
}


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);