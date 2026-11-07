
import { useEffect, useState } from "react";

const content = {
  fr: {
    nav: ["Accueil", "Expertise", "Applications", "Contact"],
    eyebrow: "SHERBROOKE · QUÉBEC",
    title: "L’usinage de précision pour vos défis techniques.",
    intro: "Électroérosion à fil, tournage CNC et perçage par électroérosion pour les prototypes, les pièces complexes et les petites séries.",
    contactButton: "Discuter de votre projet",
    exploreButton: "Découvrir notre expertise",
    expertise: "Notre expertise",
    expertiseIntro: "Trois procédés complémentaires pour répondre à vos besoins de fabrication spécialisés.",
    services: [
      {
        name: "Électroérosion à fil",
        description: "Profils complexes, fentes étroites et géométries difficiles à réaliser par usinage conventionnel.",
        machine: "Charmilles Robofil 240SL"
      },
      {
        name: "Tournage CNC",
        description: "Composants cylindriques de précision, prototypes et petites séries avec possibilités d’usinage à outils motorisés.",
        machine: "Miyano BND-51C2"
      },
      {
        name: "Perçage par électroérosion",
        description: "Perçage de petits diamètres et préparation de trous de départ pour la découpe au fil.",
        machine: "Castek SD16"
      }
    ],
    applications: "Applications",
    applicationsIntro: "Des solutions de fabrication pour les concepteurs, ingénieurs et équipes techniques.",
    tags: [
      "Prototypage",
      "Profils complexes",
      "Fentes étroites",
      "Composants de précision",
      "Petites séries"
    ],
    showcase: "Réalisations et démonstrations",
    showcaseText: "Notre portfolio technique est en développement. Nous présenterons ici des pièces réellement usinées et des résultats documentés.",
    contactTitle: "Parlons de votre projet.",
    contactText: "Vous avez une pièce difficile à fabriquer ou souhaitez discuter d’une approche d’usinage? Contactez EDM-TECH pour une première évaluation.",
    emailButton: "Nous contacter",
    footer: "Fabrication de précision · Sherbrooke, Québec"
  },
  en: {
    nav: ["Home", "Capabilities", "Applications", "Contact"],
    eyebrow: "SHERBROOKE · QUÉBEC",
    title: "Precision manufacturing for engineering challenges.",
    intro: "Wire EDM, CNC turning and EDM drilling for prototypes, complex components and small production runs.",
    contactButton: "Discuss your project",
    exploreButton: "Explore our capabilities",
    expertise: "Our capabilities",
    expertiseIntro: "Three complementary processes for specialized manufacturing requirements.",
    services: [
      {
        name: "Wire EDM",
        description: "Complex profiles, narrow slots and geometries that are difficult to produce with conventional machining.",
        machine: "Charmilles Robofil 240SL"
      },
      {
        name: "CNC turning",
        description: "Precision cylindrical components, prototypes and small batches, including live-tool machining capabilities.",
        machine: "Miyano BND-51C2"
      },
      {
        name: "EDM drilling",
        description: "Small-diameter drilling and starter-hole preparation for wire EDM cutting.",
        machine: "Castek SD16"
      }
    ],
    applications: "Applications",
    applicationsIntro: "Manufacturing solutions for designers, engineers and technical teams.",
    tags: [
      "Prototyping",
      "Complex profiles",
      "Narrow slots",
      "Precision components",
      "Small batches"
    ],
    showcase: "Work and demonstrations",
    showcaseText: "Our technical portfolio is in development. This section will feature actual machined parts and documented manufacturing results.",
    contactTitle: "Let's discuss your project.",
    contactText: "Have a difficult-to-machine component or want to explore a manufacturing approach? Contact EDM-TECH for an initial discussion.",
    emailButton: "Contact us",
    footer: "Precision manufacturing · Sherbrooke, Québec"
  }
};

const styles = `
  :root {
    font-family: Arial, Helvetica, sans-serif;
    background: #15191c;
    color: #f4f2ef;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  .site { min-height: 100vh; background: #15191c; }
  .container { width: min(1140px, 92%); margin: auto; }
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: #15191cf5;
    border-bottom: 1px solid #343a3e;
  }
  .header-inner {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
  }
  .brand { display: flex; flex-direction: column; }
  .brand strong { font-size: 25px; letter-spacing: 2px; }
  .brand small {
    font-size: 9px;
    letter-spacing: 2px;
    color: #d49b70;
    margin-top: 4px;
  }
  .nav { display: flex; align-items: center; gap: 23px; }
  .nav a { font-size: 13px; color: #c9cdd0; }
  .nav a:hover { color: #d49b70; }
  .language { display: flex; border: 1px solid #60544b; border-radius: 5px; overflow: hidden; }
  .language button {
    padding: 9px 12px;
    background: transparent;
    color: #e5e0dc;
    border: none;
    cursor: pointer;
  }
  .language button.active { background: #c58a5e; color: #15191c; font-weight: bold; }
  .hero {
    padding: 115px 0 125px;
    background: radial-gradient(ellipse at 80% 40%, #39312b, #202528 48%, #15191c 85%);
  }
  .eyebrow { color: #d49b70; letter-spacing: 3px; font-size: 12px; font-weight: bold; }
  h1 {
    max-width: 850px;
    font-size: clamp(40px, 6vw, 76px);
    line-height: 1.09;
    letter-spacing: -2px;
    margin: 24px 0;
  }
  .intro { max-width: 680px; font-size: 19px; line-height: 1.7; color: #c2c7c9; }
  .buttons { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 34px; }
  .button {
    display: inline-block;
    padding: 15px 22px;
    border: 1px solid #c58a5e;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
  }
  .primary { background: #c58a5e; color: #15191c; }
  .secondary { background: transparent; color: #eee9e4; }
  section { padding: 90px 0; border-bottom: 1px solid #343a3e; }
  h2 { font-size: clamp(30px, 4vw, 43px); margin: 0 0 18px; }
  .lead { color: #b6bdc0; line-height: 1.7; max-width: 730px; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 38px; }
  .card { padding: 30px; background: #22282c; border: 1px solid #3b4347; border-radius: 6px; }
  .accent { width: 40px; height: 3px; background: #c58a5e; margin-bottom: 28px; }
  .card h3 { font-size: 22px; }
  .card p { font-size: 14px; color: #b6bdc0; line-height: 1.7; min-height: 100px; }
  .machine { font-size: 12px; color: #d49b70; }
  .muted { background: #1c2124; }
  .tags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .tag { padding: 12px 16px; border: 1px solid #515a5e; border-radius: 4px; font-size: 13px; }
  .contact { background: linear-gradient(120deg, #302922, #191e21); }
  .contact .button { margin-top: 20px; }
  footer { padding: 30px 0; color: #a6afb2; font-size: 13px; }
  .footer-inner { display: flex; justify-content: space-between; gap: 20px; }
  @media (max-width: 800px) {
    .header-inner { flex-wrap: wrap; padding: 18px 0; }
    .nav { order: 3; width: 100%; flex-wrap: wrap; gap: 15px; }
    .hero { padding: 75px 0; }
    .cards { grid-template-columns: 1fr; }
    .card p { min-height: auto; }
    .footer-inner { flex-direction: column; }
  }
`;

export default function App() {
  const [lang, setLang] = useState(
    () => window.location.pathname.startsWith("/en") ? "en" : "fr"
  );

  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "fr" ? "fr-CA" : "en-CA";
    document.title = lang === "fr"
      ? "EDM-TECH | Usinage de précision"
      : "EDM-TECH | Precision Manufacturing";
  }, [lang]);

  function changeLanguage(next) {
    setLang(next);
    window.history.replaceState(null, "", `/${next}/${window.location.hash}`);
  }

  return (
    <div className="site">
      <style>{styles}</style>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <strong>EDM-TECH</strong>
            <small>PRECISION MANUFACTURING</small>
          </a>

          <nav className="nav">
            {t.nav.map((item, index) => (
              <a
                key={index}
                href={["#home", "#expertise", "#applications", "#contact"][index]}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="language" aria-label="Language">
            <button
              className={lang === "fr" ? "active" : ""}
              onClick={() => changeLanguage("fr")}
            >
              FR
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="intro">{t.intro}</p>

            <div className="buttons">
              <a className="button primary" href="#contact">
                {t.contactButton}
              </a>
              <a className="button secondary" href="#expertise">
                {t.exploreButton}
              </a>
            </div>
          </div>
        </section>

        <section id="expertise">
          <div className="container">
            <h2>{t.expertise}</h2>
            <p className="lead">{t.expertiseIntro}</p>

            <div className="cards">
              {t.services.map((service) => (
                <article className="card" key={service.machine}>
                  <div className="accent"></div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <span className="machine">{service.machine}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="muted" id="applications">
          <div className="container">
            <h2>{t.applications}</h2>
            <p className="lead">{t.applicationsIntro}</p>

            <div className="tags">
              {t.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase">
          <div className="container">
            <h2>{t.showcase}</h2>
            <p className="lead">{t.showcaseText}</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2>{t.contactTitle}</h2>
            <p className="lead">{t.contactText}</p>
            <a className="button primary" href="mailto:info@edm-tech.ca">
              {t.emailButton}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} EDM-TECH</span>
          <span>{t.footer}</span>
          <a href="mailto:info@edm-tech.ca">info@edm-tech.ca</a>
        </div>
      </footer>
    </div>
  );
}
