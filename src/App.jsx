import { useState } from 'react';

const copy = {
  fr: {
    nav: ['Accueil', 'Expertise', 'Applications', 'Contact'],
    eyebrow: 'SHERBROOKE · QUÉBEC',
    heading: 'L’usinage de précision pour vos défis techniques.',
    intro: 'Électroérosion à fil, tournage CNC et perçage par électroérosion pour les prototypes, les pièces complexes et les petites séries.',
    cta: 'Discuter de votre projet',
    secondary: 'Découvrir notre expertise',
    section: 'Notre expertise',
    sectionIntro: 'Trois procédés complémentaires pour répondre aux besoins de fabrication spécialisés.',
    services: [
      { title: 'Électroérosion à fil', detail: 'Profils complexes, fentes étroites et géométries difficiles à réaliser par usinage conventionnel.', machine: 'Charmilles Robofil 240SL' },
      { title: 'Tournage CNC', detail: 'Composants cylindriques de précision, prototypes et petites séries avec possibilités d’usinage à outils motorisés.', machine: 'Miyano BND-51C2' },
      { title: 'Perçage par électroérosion', detail: 'Perçage de petits diamètres et préparation de trous de départ pour la découpe au fil.', machine: 'Castek SD16' },
    ],
    applications: 'Applications',
    appIntro: 'Nous travaillons avec des concepteurs et des équipes techniques sur des composants exigeant une approche de fabrication adaptée.',
    tags: ['Prototypage', 'Profils complexes', 'Fentes étroites', 'Composants mécaniques de précision', 'Petites séries'],
    projects: 'Réalisations et démonstrations',
    projectsText: 'Notre portfolio technique est en développement. Nous présenterons ici des pièces réelles et des résultats de fabrication documentés.',
    contact: 'Parlons de votre projet.',
    contactText: 'Vous avez une pièce difficile à fabriquer ou souhaitez discuter d’une approche d’usinage? Communiquez avec EDM-TECH pour une première évaluation.',
    email: 'Nous contacter',
    location: 'Sherbrooke, Québec, Canada',
    footer: 'Fabrication de précision · Sherbrooke, Québec',
  },
  en: {
    nav: ['Home', 'Capabilities', 'Applications', 'Contact'],
    eyebrow: 'SHERBROOKE · QUÉBEC',
    heading: 'Precision manufacturing for engineering challenges.',
    intro: 'Wire EDM, CNC turning and EDM drilling for prototypes, complex components and small production runs.',
    cta: 'Discuss your project',
    secondary: 'Explore our capabilities',
    section: 'Our capabilities',
    sectionIntro: 'Three complementary processes for specialized manufacturing requirements.',
    services: [
      { title: 'Wire EDM', detail: 'Complex profiles, narrow slots and geometries that are difficult to produce with conventional machining.', machine: 'Charmilles Robofil 240SL' },
      { title: 'CNC turning', detail: 'Precision cylindrical components, prototypes and small batches, including live-tool machining capabilities.', machine: 'Miyano BND-51C2' },
      { title: 'EDM drilling', detail: 'Small-diameter drilling and starter-hole preparation for wire EDM cutting.', machine: 'Castek SD16' },
    ],
    applications: 'Applications',
    appIntro: 'We work with designers and technical teams on components requiring a thoughtful manufacturing approach.',
    tags: ['Prototyping', 'Complex profiles', 'Narrow slots', 'Precision mechanical components', 'Small batches'],
    projects: 'Work and demonstrations',
    projectsText: 'Our technical portfolio is in development. This section will feature actual machined parts and documented manufacturing results.',
    contact: 'Let’s discuss your project.',
    contactText: 'Have a difficult-to-machine part or want to explore a manufacturing approach? Contact EDM-TECH for an initial discussion.',
    email: 'Contact us',
    location: 'Sherbrooke, Québec, Canada',
    footer: 'Precision manufacturing · Sherbrooke, Québec',
  },
};

export default function App() {
  const [lang, setLang] = useState(() => window.location.pathname.startsWith('/en') ? 'en' : 'fr');
  const t = copy[lang];
  const switchLang = (next) => {
    setLang(next);
    window.history.replaceState({}, '', `/${next}/${window.location.hash}`);
    document.documentElement.lang = next === 'fr' ? 'fr-CA' : 'en-CA';
  };

  return (
    <div className="site">
      <style>{`
        :root { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #f4f2ef; background: #141719; font-synthesis: none; }
        * { box-sizing: border-box; } html { scroll-behavior: smooth; } body { margin: 0; } a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #141719; } .wrap { max-width: 1160px; margin: 0 auto; padding: 0 28px; }
        .header { border-bottom: 1px solid #343a3e; background: #141719f5; position: sticky; top: 0; z-index: 10; }
        .header-inner { min-height: 83px; display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .brand { display: flex; flex-direction: column; gap: 2px; } .brand strong { font-size: 25px; letter-spacing: .095em; font-weight: 750; }
        .brand small { font-size: 9px; letter-spacing: .22em; color: #c99467; }
        .nav { display: flex; gap: 28px; align-items: center; } .nav a { color: #d0d0cf; font-size: 13px; } .nav a:hover { color: #dca67b; }
        .langs { display: flex; border: 1px solid #55504c; border-radius: 5px; overflow: hidden; } .langs button { background: transparent; border: 0; color: #d6d3d0; padding: 9px 11px; cursor: pointer; font-size: 12px; }
        .langs button.active { background: #bc8054; color: #141719; font-weight: 800; }
        .hero { background: radial-gradient(ellipse at 78% 42%, #36312c 0%, #202326 42%, #141719 80%); padding: 110px 0 118px; border-bottom: 1px solid #303538; }
        .eyebrow { font-size: 12px; font-weight: 750; letter-spacing: .22em; color: #d39a6d; text-transform: uppercase; }
        h1 { max-width: 820px; font-size: clamp(39px, 6.3vw, 75px); letter-spacing: -.048em; line-height: 1.08; margin: 22px 0 26px; font-weight: 720; }
        .intro { color: #bfc2c2; max-width: 650px; font-size: clamp(16px, 2vw, 20px); line-height: 1.7; }
        .actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 36px; } .btn { padding: 15px 21px; font-size: 14px; font-weight: 650; border-radius: 4px; border: 1px solid #75563f; }
        .btn-primary { background: #bd835a; color: #151719; border-color: #bd835a; } .btn-secondary { color: #e5ded9; background: #ffffff06; }
        section { padding: 88px 0; border-bottom: 1px solid #303538; } .section-title { font-size: clamp(28px, 4vw, 42px); letter-spacing: -.035em; margin: 12px 0; }
        .section-lead { max-width: 710px; color: #adb4b5; line-height: 1.7; font-size: 16px; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 38px; }
        .card { background: #202528; border: 1px solid #3a4042; border-radius: 7px; padding: 30px 26px; min-height: 260px; }
        .card .line { width: 38px; height: 3px; background: #bc8054; margin-bottom: 28px; } .card h3 { font-size: 21px; margin: 0 0 14px; }
        .card p { color: #adb5b7; line-height: 1.65; font-size: 14px; } .machine { display: block; margin-top: 24px; color: #c9926b; font-size: 12px; }
        .tags { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; } .tag { padding: 11px 15px; border: 1px solid #50575a; border-radius: 4px; color: #d5d5d2; font-size: 13px; }
        .muted-section { background: #1a1e21; } .contact { background: linear-gradient(110deg, #252421, #171b1e); } .contact .btn { display: inline-block; margin-top: 20px; }
        footer { padding: 28px 0; color: #939a9d; font-size: 12px; } .footer-inner { display: flex; justify-content: space-between; gap: 18px; }
        @media (max-width: 760px) { .header-inner { flex-wrap: wrap; padding-top: 17px; padding-bottom: 15px; } .nav { order: 3; width: 100%; gap: 18px; flex-wrap: wrap; } .nav a { font-size: 12px; } .hero { padding: 75px 0 85px; } section { padding: 65px 0; } .cards { grid-template-columns: 1fr; } .card { min-height: auto; } .footer-inner { flex-direction: column; } }
      `}</style>
      <header className="header"><div className="wrap header-inner">
        <a className="brand" href="#home"><strong>EDM-TECH</strong><small>PRECISION MANUFACTURING</small></a>
