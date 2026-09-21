import React, { useState } from "react";

// ---- Add a project by copying this shape into the array below ----
// {
//   name: "Project Name",
//   tagline: "One short line describing what it does",
//   description: "A couple of sentences on what it is, what problem it solves, and how it works.",
//   stack: ["React", "TypeScript", "..."],
//   liveUrl: "https://your-live-link.com",
//   codeUrl: "https://github.com/you/your-repo",
// },
const PROJECTS = [
  {
    name: "Aufside",
    tagline: "Squad recommendations for Fantasy Premier League",
    description: "A tool that recommends which players to put in your Fantasy Premier League squad to help maximize points. Built to take the guesswork out of team selection each gameweek.",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://aufside-lpls.vercel.app/",
    codeUrl: "https://github.com/Amey-tmb/aufside",
  },
  {
    name: "Budget Tracker",
    tagline: "Simple category-based expense tracking",
    description: "A budget tracker that lets you allocate money across categories and manually log spending against each one, so you can see at a glance how much you've spent versus what you budgeted.",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://budget-tracker-2-54tkn2n77-ameys-projects-0f5cdba9.vercel.app/",
    codeUrl: "https://github.com/Amey-tmb/budget-tracker-2",
  },
];

function useLineCounter() {
  let n = 0;
  return () => {
    n += 1;
    return String(n).padStart(2, "0");
  };
}

function Line({ number, children, className = "", as: Tag = "div" }) {
  return (
    <div className={`line ${className}`}>
      <span className="gutter mono">{number}</span>
      <Tag className="content">{children}</Tag>
    </div>
  );
}

function ProjectCard({ project, lineFn }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="project"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="project-gutter mono">{lineFn()}</div>
      <div className="project-body">
        <div className="project-top">
          <h3 className="project-name display">{project.name}</h3>
          <span className={`marker mono ${hover ? "on" : ""}`}>+ live</span>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>
        <div className="stack">
          {project.stack.map((s) => (
            <span className="tag mono" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            View live <span className="arrow">→</span>
          </a>
          <a href={project.codeUrl} target="_blank" rel="noreferrer">
            Source <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const line = useLineCounter();

  return (
    <div className="pf">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf {
          --paper: #FAF9F7;
          --ink: #17171A;
          --muted: #85848C;
          --accent: #3D3DF5;
          --line: #E7E5E0;

          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', -apple-system, sans-serif;
          min-height: 100%;
        }
        .pf * { box-sizing: border-box; }
        .pf a { color: inherit; text-decoration: none; }
        .pf :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        .display { font-family: 'Fraunces', serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .wrap { max-width: 760px; margin: 0 auto; padding: 0 28px; }

        /* ---- gutter line system ---- */
        .line { display: flex; }
        .gutter {
          flex: 0 0 44px;
          color: var(--muted);
          font-size: 12px;
          padding-top: 3px;
          user-select: none;
        }
        .content { flex: 1; min-width: 0; }

        /* ---- nav ---- */
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 28px;
          max-width: 760px;
          margin: 0 auto;
        }
        .nav-name { font-size: 14px; font-weight: 600; }
        .nav-links { display: flex; gap: 22px; font-size: 13px; color: var(--muted); }
        .nav-links a:hover { color: var(--ink); }

        /* ---- hero ---- */
        .hero { padding: 40px 0 64px; border-bottom: 1px solid var(--line); }
        .hero .content { padding-bottom: 4px; }
        .hero-comment {
          font-size: 12px;
          color: var(--accent);
          margin-bottom: 22px;
        }
        .hero h1 {
          font-size: clamp(38px, 7vw, 58px);
          line-height: 1.08;
          font-weight: 600;
          margin: 0 0 4px;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--accent);
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: var(--accent);
          margin-left: 4px;
          vertical-align: -0.1em;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-bio {
          margin-top: 22px;
          max-width: 46ch;
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
        }

        /* ---- section label ---- */
        .section { padding: 56px 0; border-bottom: 1px solid var(--line); }
        .section:last-of-type { border-bottom: none; }
        .section-label {
          font-size: 12px;
          color: var(--accent);
          margin-bottom: 26px;
        }
        .section-label .tag-name { color: var(--muted); }

        /* ---- projects ---- */
        .project {
          display: flex;
          gap: 0;
          padding: 26px 0;
          border-top: 1px solid var(--line);
        }
        .project:first-child { border-top: none; }
        .project-gutter {
          flex: 0 0 44px;
          color: var(--muted);
          font-size: 12px;
          padding-top: 4px;
        }
        .project-body { flex: 1; min-width: 0; }
        .project-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
        }
        .project-name {
          font-size: 24px;
          font-weight: 600;
          margin: 0;
        }
        .marker {
          font-size: 11px;
          color: var(--line);
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .marker.on { color: var(--accent); }
        .project-tagline {
          font-size: 14px;
          color: var(--accent);
          margin: 6px 0 0;
        }
        .project-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          margin: 14px 0 18px;
          max-width: 56ch;
        }
        .empty-state {
          font-size: 13px;
          color: var(--muted);
          padding: 24px 0;
        }
        .stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
        .tag {
          font-size: 11px;
          border: 1px solid var(--line);
          padding: 4px 9px;
          border-radius: 3px;
          color: var(--muted);
        }
        .links { display: flex; gap: 22px; font-size: 13px; }
        .links a {
          border-bottom: 1px solid var(--ink);
          padding-bottom: 1px;
        }
        .links a:hover { color: var(--accent); border-color: var(--accent); }
        .arrow { display: inline-block; transition: transform 0.15s ease; }
        .links a:hover .arrow { transform: translateX(2px); }

        /* ---- about ---- */
        .about-text {
          font-size: 15.5px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 58ch;
        }
        .about-text strong { color: var(--ink); font-weight: 600; }

        /* ---- footer ---- */
        .footer { padding: 40px 0 56px; }
        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-links { display: flex; gap: 20px; font-size: 13px; }
        .footer-links a { border-bottom: 1px solid var(--line); }
        .footer-links a:hover { color: var(--accent); border-color: var(--accent); }
        .footer-note { font-size: 12px; color: var(--muted); }

        @media (max-width: 520px) {
          .gutter, .project-gutter { flex-basis: 28px; }
          .project-top { flex-direction: column; align-items: flex-start; gap: 4px; }
        }
      `}</style>

      <nav className="nav">
        <span className="nav-name">Amey</span>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="wrap">
        <header className="hero">
          <Line number={line()} className="hero-comment mono">
            {"// developer, currently building"}
          </Line>
          <Line number="">
            <h1>
              I build things, <em>then ship them.</em>
              <span className="cursor" />
            </h1>
            <p className="hero-bio">
              I'm a developer who likes finishing what I start — real, live
              projects over side-project graveyards. Right now that means a
              Fantasy Premier League companion app, with more on the way.
            </p>
          </Line>
        </header>

        <section className="section" id="projects">
          <div className="section-label mono">
            <span className="tag-name">{"// "}</span>01 — projects
          </div>
          {PROJECTS.length === 0 ? (
            <p className="empty-state mono">
              {"// nothing here yet — add your first project above"}
            </p>
          ) : (
            PROJECTS.map((p) => (
              <ProjectCard project={p} lineFn={line} key={p.name} />
            ))
          )}
        </section>

        <section className="section" id="about">
          <div className="section-label mono">
            <span className="tag-name">{"// "}</span>02 — about
          </div>
          <p className="about-text">
           I got into development because I like turning ideas into things people can actually use. I'm comfortable across the stack — Python, TypeScript, React — and I'm most interested in projects where I get to solve a real, specific problem rather than build something generic.
          </p>
        </section>
      </div>

      <div className="wrap">
        <footer className="footer" id="contact">
          <div className="section-label mono">
            <span className="tag-name">{"// "}</span>03 — contact
          </div>
          <div className="footer-row">
            <div className="footer-links">
              <a href="mailto:you@example.com">Email</a>
              <a href="https://github.com/Amey-tmb" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="#">LinkedIn</a>
            </div>
            <span className="footer-note">© 2026 — built, not just planned.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
