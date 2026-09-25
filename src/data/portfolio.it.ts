export const PORTFOLIO_IT = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Game Designer & Gameplay Programmer",
    subheading: "Ingegnere Informatico specializzato in Game Design, gameplay systems, intelligenza artificiale e calcolo ad alte prestazioni.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    graduationStatus: "Laurea Magistrale in Informatica (Game Design) — Laurea Ottobre 2026",
    languages: [
      { name: "Francese", level: "Madrelingua" },
      { name: "Italiano", level: "C2 (Madrelingua / Bilingue)" },
      { name: "Inglese", level: "B2 (Professionale)" },
    ],
  },
  ui: {
    heroBtnGithub: "GitHub Preview",
    heroBtnContact: "Contattami",
    ddaBadge: "DDA RESEARCH // IN PROGRESS",
    hudProjects: "Progetti",
    hudExperience: "Esperienze",
    hudEducation: "Formazione",
    hudSkills: "Competenze",
    projectsHeading: "Showcase Videogiochi & Sistemi",
    projectsSubheading: "Clicca su un progetto per visualizzarne il processo, l'architettura e i dettagli completi.",
    exploreProject: "Esplora Documentazione & Processo",
    backToProjects: "← Torna a tutti i progetti",
    viewSource: "Vedi Repository & Codice Sorgente ↗",
    overviewHeading: "Overview & Game Design",
    mediaHeading: "Media & Showcase Visivo",
    expHeading: "Esperienze Lavorative",
    expSubheading: "Docenza accademica, sviluppo su motori proprietari e produzione Unity.",
    eduHeading: "Formazione Accademica & Ricerca",
    eduSubheading: "Dalla Dynamic Difficulty Adjustment all'Ingegneria Informatica classica.",
    thesisBadge: "Tesi di Laurea",
    skillsHeading: "Tech Inventory & Competenze",
    skillsSubheading: "Il toolkit tecnico: linguaggi a basso livello, motori di gioco e pipeline di design.",
    footerText: "Hostato su GitHub Pages • 0 kB Bloat • Zero-cost Edge CDN",
  },
  projects: [
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      tagline: "Co-op Survival Game (2–4 giocatori) in un limbo incantato",
      role: "Team Leader, Lead Designer, Game Programmer",
      period: "2025",
      description: "I giocatori alternano combattimenti frenetici (usando munizioni estratte da melograni magici) e fasi strategiche di riparazione rifugi e gestione del falò prima dell'alba pietrificante. Presentato e testato con demo hands-on davanti a studi leader del settore come Ubisoft, Milestone e Nacon all'evento New Game Designer.",
      tags: ["Unity3D", "C#", "Co-op Multiplayer", "Game Design", "Team Leadership"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#pomegranade",
      videoUrl: "/videos/pomegranade.mp4",
      highlight: "Showcase a studi leader tra cui Ubisoft, Milestone, Nacon e altri",
      storySteps: [
        {
          tag: "01 // CORE GAMEPLAY LOOP",
          title: "Combattimento Survival & Custodia del Falò",
          description: "I giocatori alternano combattimenti ad alta intensità—usando munizioni estratte da melograni magici—a fasi strategiche di riparazione. Alimentare il falò centrale è indispensabile per respingere l'alba pietrificante e proteggere i rifugi del team.",
          mediaLabel: "[ Gameplay Combat // Crafting Munizioni Melograno & Manutenzione Rifugio ]",
          imageSrc: "/images/immagine_falo_personaggio.png",
          blendMode: "screen"
        },
        {
          tag: "02 // MULTIPLAYER SYSTEMS",
          title: "Architettura Cooperativa (2–4 Giocatori)",
          description: "Progettazione e implementazione della logica multiplayer cooperativa in Unity e C#. I ruoli sono distribuiti dinamicamente: raccogliere risorse, respingere le ondate notturne e coordinare la difesa attorno alla forza vitale del falò.",
          mediaLabel: "[ Schema Tecnico // Sincronizzazione di Stato & Gestione Risorse Co-op ]",
          imageSrc: "/images/players_vs_monsters.png"
        },
        {
          tag: "03 // INDUSTRY SHOWCASE",
          title: "Demo Hands-on a Milestone, Ubisoft e Nacon",
          description: "Selezionato per presentare il gioco a lead developer e publisher di primo piano all'evento New Game Designer. Sessioni di prova dal vivo incentrate su game feel, curva di onboarding e mantenimento del flow cooperativo.",
          mediaLabel: "[ Showcase Event // Sessioni Demo dal Vivo & Valutazione Studi ]",
          imageSrc: "/images/loghi_aziende_pomegranade.png"
        }
      ]
    },
    {
      id: "puppeteer",
      title: "A Child's Tale: Whisper of the Puppeteer",
      tagline: "First-Person Psychological Horror & Exploration",
      role: "Game Designer, Programmer",
      period: "2025",
      description: "Avventura horror in prima persona in una villa abbandonata. Il giocatore segue una voce femminile raccogliendo indizi e documenti, eludendo il Burattinaio: uno stregone che muta le sue vittime in marionette viventi. Meccaniche di evasione, gestione dell'ansia e puzzle narrativo.",
      tags: ["Unity3D", "C#", "Horror Exploration", "AI Stealth", "Atmospheric Audio"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      storySteps: [
        {
          tag: "01 // HORROR ATMOSFERICO",
          title: "Esplorazione Guidata dall'Audio",
          description: "Progettazione della tensione psicologica in una villa abbandonata. Il giocatore si orienta tramite una misteriosa voce guida femminile, indizi acustici e diari per ricostruire la tragedia evitando allarmi rumorosi.",
          mediaLabel: "[ Gameplay Esplorativo // Audio Spaziale & Illuminazione Atmosferica ]"
        },
        {
          tag: "02 // STEALTH & COMPORTAMENTO AI",
          title: "Pattugliamento e Percezione del Burattinaio",
          description: "Implementazione delle meccaniche stealth e degli stati sensoriali dell'IA nemica (Pattuglia, Allerta, Caccia). La fuga richiede spezzare la linea di vista, nascondersi e gestire la stamina dello scatto.",
          mediaLabel: "[ Architettura AI // Macchina a Stati Finiti (FSM) & Gizmo Line of Sight ]"
        },
        {
          tag: "03 // MECCANICHE DI SALVATAGGIO",
          title: "Dilemmi di Rischio e Finali Multipli",
          description: "Integrazione di scenari puzzle basati su rischio/rendimento: scappare subito per salvarsi o rischiare la cattura per liberare altre vittime intrappolate come marionette viventi.",
          mediaLabel: "[ Level Design // Percorsi Multipli & Narrativa Ambientale ]"
        }
      ]
    },
    {
      id: "water-sim",
      title: "Real-Time Water Simulation (OpenGL + CUDA)",
      tagline: "Simulazione fluidodinamica con accelerazione hardware su GPU",
      role: "Graphics / Systems Programmer",
      period: "2024",
      description: "Simulazione fluidodinamica in tempo reale sviluppata in C++ e OpenGL, con calcoli fisici accelerati tramite kernel CUDA. Gestione delle interazioni fisiche tra corpi rigidi di forme arbitrarie e propagazione della superficie del fluido.",
      tags: ["C++", "CUDA", "OpenGL", "GPGPU", "Physics Simulation", "Low-Level"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water",
      storySteps: [
        {
          tag: "01 // CALCOLO GPGPU",
          title: "Kernel Fisici Paralleli in CUDA",
          description: "Implementazione del calcolo parallelo ad alte prestazioni in C++ e CUDA. La griglia del fluido e i campi di velocità vengono elaborati direttamente sulla GPU tramite migliaia di thread hardware concorrenti.",
          mediaLabel: "[ Calcolo Parallelo // Dispatch Kernel CUDA & Gestione Memoria ]"
        },
        {
          tag: "02 // FLUIDODINAMICA",
          title: "Propagazione Onde e Rendering OpenGL",
          description: "Calcolo della propagazione ondosa in tempo reale tramite displacement di height-field e shader OpenGL dedicati, con simulazione di riflessioni realistiche ed effetti caustici.",
          mediaLabel: "[ Motore Grafico // Shaders, Caustiche & Displacement Vertici ]"
        },
        {
          tag: "03 // INTERAZIONE CON CORPI RIGIDI",
          title: "Accoppiamento con Mesh 3D Arbitrarie",
          description: "Simulazione fisica bidirezionale tra corpi rigidi 3D dinamici e la superficie liquida: gli oggetti galleggiano, generano onde concentriche di scia e si spostano coerentemente con il fluido.",
          mediaLabel: "[ Simulazione Fisica // Collisioni Mesh & Generazione Onde di Scia ]"
        }
      ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      tagline: "2D Strategy-Puzzle per PC & Web",
      role: "AI Programmer, Game Designer",
      period: "2025",
      description: "Nei panni di un agente alle prime armi di un'agenzia segreta, il giocatore pianifica ed esegue l'omicidio perfetto disponendo azioni e oggetti su una linea temporale strategica per eliminare il target senza destare sospetti.",
      tags: ["2D Strategy", "AI Systems", "Timeline Mechanics", "Puzzle Design"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      storySteps: [
        {
          tag: "01 // MECCANICHE TEMPORALI",
          title: "Pianificazione Strategica su Timeline",
          description: "Progettazione del core loop puzzle-strategico in cui il giocatore organizza azioni, posiziona oggetti e coordina le traiettorie degli agenti lungo una linea temporale tattica a tracce.",
          mediaLabel: "[ UI & Design // Scrubber Temporale & Griglia di Pianificazione Azioni ]"
        },
        {
          tag: "02 // PATTERN COMPORTAMENTALI AI",
          title: "Sfruttamento delle Routine di Pattuglia",
          description: "Sviluppo di routine deterministiche per gli NPC con coni visivi di allerta. Il giocatore calcola i tempi di ronda delle guardie per orchestrare incidenti fatali senza destare sospetti.",
          mediaLabel: "[ Sistemi AI // Percorsi di Routine, Coni di Sospetto & Trappole ]"
        },
        {
          tag: "03 // FASE DI ESECUZIONE",
          title: "Riproduzione Autonoma e Valutazione",
          description: "Una volta impostata la timeline, avviando il play la scena si svolge autonomamente in tempo reale. Il sistema valuta l'efficacia del piano premiando l'assenza di prove compromettenti.",
          mediaLabel: "[ Gameplay Demo // Sequenza di Esecuzione & Schermata di Debriefing ]"
        }
      ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      tagline: "Spatial Cognitive 3D/2D Maze Game (Mobile)",
      role: "Game Designer & Programmer",
      period: "2021",
      description: "Gioco basato sulla memoria visuo-spaziale: 30 secondi per memorizzare la pianta del labirinto in 2D, seguiti dalla navigazione reale in terza persona 3D con mercanti nascosti, pozioni e gestione risorse.",
      tags: ["Unity3D", "C#", "Mobile Development", "Cognitive Mechanics"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      storySteps: [
        {
          tag: "01 // COGNIZIONE VISIVA",
          title: "Fase di Memorizzazione in Pianta 2D",
          description: "Il giocatore osserva la mappa bidimensionale del labirinto per esattamente 30 secondi con un countdown per memorizzare bivi, vicoli ciechi e punti di interesse.",
          mediaLabel: "[ Meccaniche di Gioco // Mappa Blueprint 2D & Timer di Countdown ]"
        },
        {
          tag: "02 // NAVIGAZIONE SPAZIALE 3D",
          title: "Esplorazione in Terza Persona",
          description: "La visuale passa all'interno del labirinto in 3D in terza persona. Il giocatore deve fare affidamento esclusivamente sulla propria memoria di lavoro visuo-spaziale per ritrovare l'uscita.",
          mediaLabel: "[ Movimento 3D // Controlli Telecamera & Input Touch Mobile ]"
        },
        {
          tag: "03 // GESTIONE DELLE RISORSE",
          title: "Mercanti Nascosti ed Economia delle Pozioni",
          description: "Integrazione di dinamiche di sopravvivenza su mobile: scovare mercanti segreti, gestire l'illuminazione delle torce e utilizzare pozioni di velocità per non restare intrappolati per sempre.",
          mediaLabel: "[ UI Mobile // Inventario, Pozioni & Interazione con i Mercanti ]"
        }
      ]
    }
  ],
  experiences: [
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
  ],
  education: [
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
  ],
  skills: [
    {
      category: "Game Dev & Engines",
      items: ["Unity (Avanzato / C#)", "Gameplay Architecture", "FMOD Studio (Audio Dinamico)", "Level Design & Prototyping"]
    },
    {
      category: "Graphics & High-Performance Computing",
      items: ["OpenGL", "CUDA (Calcolo Parallelo su GPU)", "C++", "C", "Assembly", "Shaders & Physics Simulation"]
    },
    {
      category: "Game Design & Metodologia",
      items: ["GDD / TDD / LDD Technical Writing", "Dynamic Difficulty Adjustment (DDA)", "Artificial Intelligence for Games", "Git & Version Control"]
    },
    {
      category: "Linguaggi & Altre Tecnologie",
      items: ["C#", "C++", "C", "Python", "Java", "SQL", "OCaml", "Eiffel"]
    }
  ]
};