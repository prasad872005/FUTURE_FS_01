import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  Code2,
  Database,
  Server,
  Sparkles,
  Send
} from 'lucide-react';
import './styles.css';

const skills = {
  Frontend: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'TypeScript',
    'Angular'
  ],

  Backend: [
    'Java',
    'Spring Boot',
    'Spring MVC',
    'REST APIs',
    'Node.js',
    'Express.js'
  ],

  Database: [
    'MySQL',
    'MongoDB',
    'Hibernate/JPA'
  ],

  Tools: [
    'Git',
    'GitHub',
    'Maven',
    'Postman',
    'JSON',
    'VS Code',
    'IntelliJ IDEA'
  ]
};

const projects = [
  {
    title: 'Smart Campus Management System',
    type: 'College ERP',

    description:
      'A full-stack campus management platform that digitizes student, attendance and administrative workflows using secure REST APIs and responsive dashboards.',

    tech: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Hibernate/JPA',
      'MySQL',
      'HTML/CSS/JS'
    ],

    github: 'https://github.com/prasad872005',

    highlights: [
      '10+ REST APIs',
      '500+ users supported',
      'Role-based workflows'
    ]
  },

  {
    title: 'AI Deception Detection System',
    type: 'Cybersecurity / AI',

    description:
      'An AI-assisted security system that analyzes firewall and network-log behavior to identify suspicious insider activity using anomaly detection.',

    tech: [
      'React.js',
      'Node.js',
      'Python',
      'TypeScript',
      'MongoDB'
    ],

    github: 'https://github.com/prasad872005',

    highlights: [
      'Behavioral modeling',
      'Network-log analysis',
      'AI module integration'
    ]
  },

  {
    title: 'Java Backend Task',
    type: 'Backend Engineering',

    description:
      'A Spring Boot backend demonstrating transactional wallet operations, REST controllers, repository locking and reliable database interactions.',

    tech: [
      'Java',
      'Spring Boot',
      'MySQL',
      'JPA',
      'REST API',
      'Maven'
    ],

    github: 'https://github.com/vishwajit-2001/java-backend-task',

    highlights: [
      'Transactional operations',
      'Pessimistic locking',
      'Unit testing'
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 5000);

    e.currentTarget.reset();
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <a
          className="logo"
          href="#home"
          onClick={closeMenu}
        >
          PG<span>.</span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>

          {[
            'Home',
            'About',
            'Skills',
            'Projects',
            'Experience',
            'Contact'
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Hire Me
          </a>

        </nav>

      </header>


      <main>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-copy">

            <p className="eyebrow">
              <Sparkles size={16} />
              Available for opportunities
            </p>

            <h1>
              Hi, I'm <span>Prasad Gadale</span>
            </h1>

            <h2>
              Java Full Stack Developer
            </h2>

            <p className="hero-text">
              I build scalable web applications and REST APIs
              using Java, Spring Boot, React and modern database
              technologies.
            </p>

            <div className="hero-actions">

              <a
                className="btn primary"
                href="#projects"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                className="btn secondary"
                href="#contact"
              >
                Let's Connect
                <Mail size={18} />
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="socials">

              <a
                href="https://github.com/prasad872005"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/prasad-gadale"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="mailto:prasadgadale2005@gmail.com"
              >
                Email
              </a>

            </div>

          </div>


          {/* CODE CARD */}

          <div className="hero-card">

            <div className="code-window">

              <div className="window-top">

                <span></span>
                <span></span>
                <span></span>

                <small>
                  developer.java
                </small>

              </div>

              <pre>
{`public class Developer {

  String name = "Prasad";
  String role = "Java Full Stack";

  String[] stack = {
    "Java", "Spring Boot",
    "React", "MySQL"
  };

  String mindset = "Build. Learn. Improve.";
}`}
              </pre>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              01 — About Me
            </p>

            <h2>
              Building useful software,
              one feature at a time.
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-card">

              <Code2 size={32} />

              <h3>
                Full Stack Development
              </h3>

              <p>
                Comfortable across frontend interfaces,
                Java/Spring Boot backend services,
                REST APIs and databases.
              </p>

            </div>


            <div className="about-card">

              <Server size={32} />

              <h3>
                Backend Focus
              </h3>

              <p>
                Interested in clean architecture,
                secure APIs, transactions, validation
                and reliable database design.
              </p>

            </div>


            <div className="about-card">

              <Database size={32} />

              <h3>
                Data & APIs
              </h3>

              <p>
                Hands-on experience with MySQL,
                MongoDB, JPA/Hibernate, JSON and
                API testing with Postman.
              </p>

            </div>

          </div>


          <div className="about-text">

            <p>
              I am an MCA graduate focused on starting
              my career as a Java Full Stack Developer.
              I enjoy turning requirements into practical
              applications and continuously improving my
              engineering fundamentals.
            </p>

            <p>
              My project work includes a Smart Campus ERP,
              an AI-based cybersecurity project and
              Spring Boot backend development.
            </p>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section dark-section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              02 — Skills
            </p>

            <h2>
              My technical toolkit.
            </h2>

          </div>


          <div className="skills-grid">

            {Object.entries(skills).map(
              ([group, items]) => (

                <div
                  className="skill-card"
                  key={group}
                >

                  <h3>
                    {group}
                  </h3>

                  <div className="chips">

                    {items.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading row-heading">

            <div>

              <p className="eyebrow">
                03 — Projects
              </p>

              <h2>
                Selected work.
              </h2>

            </div>

            <span className="project-count">
              03 PROJECTS
            </span>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <p className="project-type">
                  {project.type}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="highlights">

                  {project.highlights.map(
                    (highlight) => (

                      <span key={highlight}>
                        ✓ {highlight}
                      </span>

                    )
                  )}

                </div>


                <div className="chips project-chips">

                  {project.tech.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                  <ExternalLink size={17} />
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section dark-section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              04 — Experience
            </p>

            <h2>
              Professional journey.
            </h2>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <span className="dot"></span>

              <div>

                <p className="date">
                  FEB 2026 — JUN 2026
                </p>

                <h3>
                  Java Full Stack Developer Intern
                </h3>

                <h4>
                  Quastech
                </h4>

                <p>
                  Worked on full-stack application
                  development with Java, Spring Boot,
                  REST APIs, databases and frontend
                  technologies. Built project features,
                  integrated APIs and practiced Git-based
                  development workflows.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="dot"></span>

              <div>

                <p className="date">
                  2026
                </p>

                <h3>
  Bachelor of Technology (B.Tech)
</h3>

<h4>
  Academic Projects
</h4>

                <p>
                  Developed projects covering full-stack
                  development, AI-assisted cybersecurity,
                  databases and modern web technologies.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-heading">

            <p className="eyebrow">
              05 — Contact
            </p>

            <h2>
              Let's build something together.
            </h2>

            <p>
              Have an opportunity, project or interview
              discussion? Send me a message.
            </p>

          </div>


          <div className="contact-grid">


            {/* CONTACT DETAILS */}

            <div className="contact-info">

              <a
                href="mailto:prasadgadale2005@gmail.com"
              >

                <Mail />

                <div>

                  <strong>
                    Email
                  </strong>

                  <span>
                    prasadgadale2005@gmail.com
                  </span>

                </div>

              </a>


              <a
                href="tel:+917977381123"
              >

                <Phone />

                <div>

                  <strong>
                    Phone
                  </strong>

                  <span>
                    +91 79773 81123
                  </span>

                </div>

              </a>


              <div>

                <MapPin />

                <div>

                  <strong>
                    Location
                  </strong>

                  <span>
                    Maharashtra, India
                  </span>

                </div>

              </div>


              <div className="contact-social">

                <a
                  href="https://github.com/prasad872005"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/prasad-gadale"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

              </div>

            </div>


            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <input
                  name="name"
                  placeholder="Your name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />

              </div>


              <input
                name="subject"
                placeholder="Subject"
                required
              />


              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the opportunity..."
                required
              ></textarea>


              <button
                className="btn primary"
                type="submit"
              >

                {sent
                  ? 'Message Ready ✓'
                  : 'Send Message'
                }

                <Send size={17} />

              </button>


              {sent && (

                <p className="form-note">
                  Your message form is working.
                  Email notification integration
                  will be connected before deployment.
                </p>

              )}

            </form>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © {new Date().getFullYear()} Prasad Gadale.
          Built with React.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);