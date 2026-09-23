export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  highlight?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  thesisTitle: string;
  thesisDetails: string;
  skills: string[];
}

export const PROFILE = {
  name: "Mauro Julien Brochier",
  title: "Game Designer & Gameplay Programmer",
  subheading: "Ingegnere Informatico specializzato in Game Design, Gameplay Systems e Calcolo ad Alte Prestazioni.",
  email: "MAURO.BROCHIER97@GMAIL.COM",
  github: "https://github.com/MauroTheB/projects-preview",
  graduationStatus: "Laurea Magistrale in Informatica (Game Design) — Ottobre 2026",
  languages: [
    { name: "Francese", level: "Madrelingua" },
    { name: "Italiano", level: "C2 (Madrelingua / Eccellente)" },
    { name: "Inglese", level: "B2 (Professionale)" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "pomegranade",
    title: "Pomegranade: Limbo",
    tagline: "Co-op Survival Game (2–4 giocatori) in forest limbo",
    role: "Team Leader, Lead Designer, Game Programmer",
    period: "2025",
    description: "I giocatori alternano combattimenti frenetici (usando munizioni estratte da melograni magici) e fasi strategiche di riparazione rifugi e gestione del falò prima dell'alba pietrificante. Presentato e testato con demo hands-on davanti a studi leader del settore come Ubisoft, Milestone e Nacon all'evento New Game Designer.",
    tags: ["Unity3D", "C#", "Co-op Multiplayer", "Game Design", "Team Leadership"],
    githubUrl: "https://github.com/MauroTheB/projects-preview#pomegranade",
    highlight: "Showcased a Milestone, Ubisoft e Nacon"
  },
  {
    id: "puppeteer",
    title: "A Child's Tale: Whisper of the Puppeteer",
    tagline: "First-Person Psychological Horror & Exploration",
    role: "Game Designer, Programmer",
    period: "2025",
    description: "Avventura horror in prima persona in una villa abbandonata. Il giocatore segue una voce femminile raccogliendo indizi e documenti, eludendo il Burattinaio: uno stregone che muta le sue vittime in marionette viventi. Meccaniche di evasione, gestione dell'ansia e puzzle narrativo.",
    tags: ["Unity3D", "C#", "Horror Exploration", "AI Stealth", "Atmospheric Audio"],
    githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale"
  },
  {
    id: "water-sim",
    title: "Real-Time Water Simulation (OpenGL + CUDA)",
    tagline: "Fluid Dynamic Simulation con accelerazione hardware su GPU",
    role: "Graphics / Systems Programmer",
    period: "2024",
    description: "Simulazione fluidodinamica in tempo reale sviluppata in C++ e OpenGL, con calcoli fisici accelerati tramite kernel CUDA. Gestione delle interazioni fisiche tra corpi rigidi di forme arbitrarie e propagazione della superficie del fluido.",
    tags: ["C++", "CUDA", "OpenGL", "GPGPU", "Physics Simulation", "Low-Level"],
    githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water"
  },
  {
    id: "murder-mystery",
    title: "Murder Mystery Incorporated",
    tagline: "2D Strategy-Puzzle per PC & Web",
    role: "AI Programmer, Game Designer",
    period: "2025",
    description: "Nei panni di un agente alle prime armi di un'agenzia segreta, il giocatore pianifica ed esegue l'omicidio perfetto disponendo azioni e oggetti su una linea temporale strategica per eliminare il target senza destare sospetti.",
    tags: ["2D Strategy", "AI Systems", "Timeline Mechanics", "Puzzle Design"],
    githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery"
  },
  {
    id: "mazes-soul",
    title: "Maze’s Soul",
    tagline: "Spatial Cognitive 3D/2D Maze Game (Mobile)",
    role: "Game Designer & Programmer",
    period: "2021",
    description: "Gioco basato sulla memoria visuo-spaziale: 30 secondi per memorizzare la pianta del labirinto in 2D, seguiti dalla navigazione reale in terza persona 3D con mercanti nascosti, pozioni e gestione risorse.",
    tags: ["Unity3D", "C#", "Mobile Development", "Cognitive Mechanics"],
    githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "edison",
    role: "Game Design & Programming Instructor",
    company: "Edison School",
    period: "10/2025 — Presente",
    location: "Roma",
    description: "Docente di Game Design e programmazione su Unity3D. Progettazione ed erogazione di moduli didattici strutturati, dal livello base a quello avanzato, coprendo logiche di gameplay in C#, architettura delle scene e game balance.",
    skills: ["Unity3D", "C#", "Mentoring", "Game Design Education"]
  },
  {
    id: "cristaltec",
    role: "Game Designer & Programmer",
    company: "Cristaltec SpA",
    period: "02/2022 — 08/2022",
    location: "Roma",
    description: "Sviluppo integrale di giochi su sistemi proprietari. Apprendimento e implementazione di logiche di gioco avanzate, ottimizzazione delle risorse e rilascio software in ambiente industriale regolamentato.",
    skills: ["Game Programming", "Proprietary Languages", "Industrial Gaming Systems"]
  },
  {
    id: "nextrek",
    role: "Videogame Designer & Programmer",
    company: "Nextrek S.r.l.",
    period: "03/2021 — 08/2021",
    location: "Roma",
    description: "Sviluppo completo e autonomo di un videogioco 3D per dispositivi mobile/multipiattaforma su Unity3D con programmazione nativa C#. Collaborazione successiva all'interno di team di sviluppo organizzato su repository condivisi.",
    skills: ["Unity3D", "C#", "Mobile Optimization", "Git Workflow"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "master",
    degree: "Laurea Magistrale in Informatica — Videogame Design & Programming (LM-18)",
    institution: "Università degli Studi di Milano",
    period: "2023 — 2026",
    thesisTitle: "Design and Evaluation of Heuristic Dynamic Difficulty Adjustment Systems for Maintaining Flow in Indie Development Contexts",
    thesisDetails: "Ricerca e implementazione di algoritmi euristici di Dynamic Difficulty Adjustment (DDA) per preservare lo stato di Flow nel giocatore nei giochi indie. Relatrice: Prof.ssa Laura Ripamonti.",
    skills: ["Dynamic Difficulty Adjustment (DDA)", "Flow Theory", "Heuristic Systems", "AI for Games"]
  },
  {
    id: "bachelor",
    degree: "Laurea Triennale in Ingegneria Informatica (L-8)",
    institution: "Università degli Studi Roma Tre",
    period: "2015 — 2021",
    thesisTitle: "Player's memory, from 2d to 3d",
    thesisDetails: "Studio e analisi della cognizione spaziale e della memoria del giocatore nella transizione tra mappe bidimensionali e visuali tridimensionali. Relatore: Prof. Giuseppe Di Battista.",
    skills: ["Computer Engineering", "Algoritmi & Strutture Dati", "Architettura dei Calcolatori", "Reti"]
  }
];

export const TECH_SKILLS = [
  {
    category: "Game Dev & Engines",
    items: ["Unity (Avanzato/C#)", "Gameplay Architecture", "FMOD Studio (Audio Dinamico)", "Level Design & Prototyping"]
  },
  {
    category: "Graphics & High-Performance Computing",
    items: ["OpenGL", "CUDA (Parallel Computing)", "C++", "C", "Assembly", "Shaders & Physics Simulation"]
  },
  {
    category: "Game Design & Metodologia",
    items: ["GDD / TDD / LDD Writing", "Dynamic Difficulty Adjustment (DDA)", "Artificial Intelligence for Games", "Git & Version Control"]
  },
  {
    category: "Linguaggi & Altre Tecnologie",
    items: ["C#", "C++", "C", "Python", "Java", "SQL", "OCaml", "Eiffel"]
  }
];