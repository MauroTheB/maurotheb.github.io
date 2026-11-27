export const PORTFOLIO_IT = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Technical Game Designer",
    subheading: "Technical Game Designer & Systems Engineer. Unione tra design dei sistemi di gameplay, psicologia del giocatore e implementazione tecnica nativa su motore in C# e C++.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    cvUrl: "/mauro_brochier_cv.pdf",
    graduationStatus: "Laurea Magistrale in Informatica (Game Design) — Conseguita a Ottobre 2026",
    languages: [
      { name: "Francese", level: "Madrelingua" },
      { name: "Italiano", level: "Madrelingua" },
      { name: "Inglese", level: "B2 (Professionale)" },
    ],
  },
  ui: {
    heroBtnGithub: "GitHub Preview",
    heroBtnContact: "Contattami",
    heroBtnCv: "Scarica CV (PDF)",
    ddaBadge: "AVAILABLE",
    hudProjects: "Progetti",
    hudExperience: "Esperienze",
    hudEducation: "Formazione",
    hudSkills: "Competenze",
    projectsHeading: "Showcase Videogiochi & Sistemi",
    projectsSubheading: "Clicca su un progetto per visualizzarne il processo, l'architettura e i dettagli completi.",
    exploreProject: "Esplora Documentazione & Processo",
    backToProjects: "Torna a tutti i progetti",
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
    gddButton: "Game Design Document (GDD)",
    tddButton: "Technical Design Document (TDD)",
    watchTrailer: "Guarda il Trailer Ufficiale",
    watchGameplay: "Gameplay Walkthrough Completo",
    teamHeading: "Crediti & Specifiche Tecniche",
    platformLabel: "Piattaforma",
    engineLabel: "Motore & Networking",
    authorsLabel: "Team di Sviluppo",
    contributionsHeading: "Contributi Personali & Ownership Tecnica",
    designedLabel: "Progettato & Implementato Autonomamente",
    implementedLabel: "Implementazione Tecnica & Sistemi",
    coDevelopedLabel: "Co-Sviluppato con il Team",
    docsLabel: "Documentazione Tecnica & di Design",
    ipNoticeHeading: "Ricerca Proprietaria & Tutela della Proprietà Intellettuale",
    empiricalStudyLabel: "Validazione Empirica & Playtest",
    gradeLabel: "Votazione",
    supervisorLabel: "Relatore / Relatrice",
    subjectLabel: "Materia",
    footerHeading: "Creiamo Sistemi di Gameplay Immersivi",
    footerSubheading: "Disponibile per posizioni di Technical Game Designer, Gameplay Systems e AI Design a livello internazionale.",
    backToTop: "Torna in cima ↑",
    watchDriveVideo: "Guarda il Gameplay su Google Drive ↗",
    headphonesBadge: "CUFFIE CONSIGLIATE // AUDIO 3D",
    playDemo: "Gioca alla Demo su itch.io",
  },
  projects: [
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      year: "Apr 2025 – Lu 2025",
      period: "2025",
      category: "Progetto Accademico di Team / Industry Showcase",
      coverImage: "/images/pomegranade_banner.png", // O il nome dello screenshot 16:9 che preferisci
      primaryFocus: "Lead Game & Systems Design · Combat Co-op",
      genrePlatform: "Gioco Survival Co-op · 2–4 Giocatori · PC",
      tagline: "Gioco Survival Co-op · 2–4 Giocatori · PC",
      role: "Team Leader · Lead Game & Systems Designer",
      highlight: "Industry Showcase · New Game Designer 2025 · 3° Posto",
      gameplaySummary: "Un survival party-game cooperativo per 2–4 giocatori ambientato in una foresta nel limbo. Il team si divide tra raccolta fisica di risorse (legna, frutti, riparazione barriere, cura del falò) e ondate notturne frenetiche, prima che l'alba pietrifichi temporaneamente i nemici sul posto.",
      personalContributionSummary: "Ho guidato la direzione di game & systems design come Team Leader, redatto ~70% del GDD e 100% del TDD, e progettato e co-implementato combattimento, ciclo giorno-notte, IA nemica e meccaniche co-op su Mirror.",
      detailedContributions: {
      designed: [
        "Meccaniche centrali di shooting e fisica dei proiettili basate sui semi di melograno magico come munizioni dinamiche.",
        "Comportamenti di attacco dei nemici e regole di interazione con i giocatori.",
        "Parametri di bilanciamento del gioco: pacing delle ondate, scaling del danno e obiettivo nemico di spegnere il falò.",
        "Ciclo giorno-notte che bilancia la sopravvivenza notturna ad alta intensità con la calma strategica diurna."
      ],
      coDeveloped: [
        "Funzionalità di gameplay multiplayer cooperativo con Mirror, collaborando direttamente con il programmatore responsabile dell'infrastruttura di rete sottostante."
      ],
      authoredDocs: [
        "100% del Technical Design Document (TDD) con definizione di architetture di sistema, componenti e gestione degli stati.",
        "Circa il 70% del Game Design Document (GDD) con formalizzazione di core loop, tipologie di nemici e meccaniche."
      ]
    },
      description: "Un survival cooperativo ambientato in una foresta incantata sospesa nel limbo. I giocatori alternano combattimenti frenetici, usando munizioni ricavate da melograni magici raccolti, a fasi strategiche di riparazione rifugi e cura del falò prima che l'alba pietrificante resetti la minaccia.\n\nHo guidato la direzione di design del gioco, redatto l'intero Technical Design Document (TDD) e circa l'80% del Game Design Document (GDD), e progettato e implementato i sistemi chiave di shooting, combattimento e gameplay multiplayer.",
      tags: ["Game Design", "System Design", "Combat Design", "Co-op Multiplayer", "Unity", "Mirror Networking"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#pomegranade",
      videoUrl: "/videos/pomegranade.mp4",
      platform: "PC",
      engine: "Unity · C#",
      networking: "Mirror Networking",
      authors: "Mauro Brochier, Leandro Bognanni, Luca Iovine",
      teamRoles: "Team Leader, Lead Designer, Game Programmer",
      gddUrl: "https://docs.google.com/document/d/1fpTVNtxRZRQjRUyuJGvLJ1n6yKNfx2OF602rzuBqSH0/edit?usp=sharing",
      tddUrl: "https://docs.google.com/document/d/1gKfPVzjNPmzunMLUdYsWIt6gt6_uNcVJ67uM8Jx2o3Q/edit?usp=sharing",
      trailerId: "iTNlmDLAY84",
      gameplayId: "KJZ43R5dVLI",
      designFeatures: [
        {
          id: "pomegranade-economy",
          discipline: "System & Loop Design",
          title: "Ciclo Giorno-Notte, Alba Pietrificante ed Economia Fisica Co-op",
          scopeBadge: "Prototipo Giocabile",
          media: {
            type: "image",
            src: "/images/immagine_falo_personaggio.png",
            caption: "Difesa del falò e loop fisico risorse (anteprima temporanea — da sostituire con schema Giorno-Notte)"
          },
          whatAndWhy: "Per creare tensione cooperativa stile Overcooked senza ingombrare la UI, non esiste inventario astratto: trasportare legna o melograni occupa le mani e disequipaggia l'arma, obbligando a scegliere tra sparare, riparare o raccogliere. All'alba i nemici si pietrificano sul posto invece di sparire, mantenendo pressione spaziale in una breve finestra di respiro.",
          processDetails: {
            ideation: "Ispirato al caos cooperativo di Overcooked e alle ondate di CoD Zombies, ogni azione avviene senza stacchi nella stessa arena forestale.",
            mechanicsOrTuning: [
              "Scuotimento Cooperativo: due giocatori collaborano per scuotere gli alberi e far cadere melograni, oppure li abbattono per ottenere legna.",
              "Trade-off Ciclo Alberi (GDD 5.5.3): gli alberi abbattuti ricrescono solo di giorno in nuove zone e non producono frutti finché non maturano—abbatterli ora significa rinunciare a munizioni future.",
              "Fallback Falò & Pietrificazione: il falò garantisce fuoco minimo anti soft-lock, mentre all'alba i nemici congelati in grayscale restano un pericolo latente."
            ],
            iterationOrResult: "Validato dal vivo in sessioni a 4 giocatori a New Game Designer 2025 (3° Posto), dove il limite di trasporto fisico ha generato coordinazione spontanea."
          }
        },
        {
          id: "pomegranade-combat",
          discipline: "Combat & Arsenal Design",
          title: "Arsenale da Melograni & Differenziazione dei Ruoli in Squadra",
          scopeBadge: "Prototipo (3) + GDD (3)",
          media: {
            type: "video",
            src: "/videos/pomegranade.mp4",
            caption: "Combat e feeling di shooting dal vivo nello vertical slice giocabile"
          },
          whatAndWhy: "Lo shooting è legato all'economia della mappa: i giocatori aprono i melograni raccolti per ricavare munizioni invece di trovare drop pronti. Nel prototipo giocabile tre armi distinte permettono di coprire ruoli complementari tra chi trasporta risorse, chi tiene i varchi e chi pulisce i gruppi.",
          processDetails: {
            ideation: "Evitate armi hitscan tutte uguali progettando balistiche, consumo risorse e curve rischio-ricompensa ben separate.",
            mechanicsOrTuning: [
              "Seedshot (Giocabile): pistola precisa a cadenza media per gestire in modo efficiente le munizioni.",
              "Seedsrusher (Giocabile): fucile a 3 canne ad alta cadenza per fuoco di copertura continuo mentre i compagni riparano.",
              "Pomegranade (Giocabile): granata ad arco ad alto rischio/ricompensa per rompere i cluster nemici.",
              "Espansione GDD: XBowrter (balestra parabolica di precisione), Firepome (lanciafiamme DoT ravvicinato) e S-Axe-Seed (ascia boomerang a controllo traiettoria)."
            ],
            iterationOrResult: "Aggiunti hitbox dedicati, particellari di impatto e animazioni di flinch nel prototipo per mantenere leggibile il combat nel caos a 4 giocatori."
          }
        },
        {
          id: "pomegranade-ai",
          discipline: "AI & Encounter Design",
          title: "Logica di Targeting Manta & Triangolo Tattico delle Ondate",
          scopeBadge: "Prototipo (Manta) + GDD",
          media: {
            type: "image",
            src: "/images/players_vs_monsters.png",
            caption: "Assalto delle Mante al perimetro (da sostituire con flowchart IA e tabella comparativa nemici)"
          },
          whatAndWhy: "Anche con un'IA snella da prototipo, il targeting è progettato per punire il camping passivo. Le Mante implementate danno priorità ai segmenti di barriera già danneggiati per aprire brecce e, se il varco è rotto, puntano direttamente a drenare il falò—trasformando ogni riparazione trascurata in emergenza immediata.",
          processDetails: {
            ideation: "Progettate tre famiglie nemiche complementari affinché le ondate miste impongano scelte di priorità al team.",
            mechanicsOrTuning: [
              "Manta (Giocabile): creatura fluttuante che ignora il terreno; attacca le barriere già ferite, bypassa quelle distrutte, drena il falò e pietrifica all'alba.",
              "Simian (Espansione GDD): disturbatore veloce che scavalca i muri e sabota le risorse a terra lanciandole lontano.",
              "Bull (Espansione GDD): tank d'assedio che sfonda più barriere in carica e abbatte gli alberi da risorse."
            ],
            iterationOrResult: "Mantenere la logica della Manta deterministica e leggibile ha permesso di calibrare le curve delle ondate prima di introdurre i nemici secondari."
          }
        },
        {
          id: "pomegranade-coop",
          discipline: "Technical & Co-op UX Design",
          title: "Sync Host-Client Mirror, Camera Casual & Ruota Emote Non-Verbale",
          scopeBadge: "Prototipo Giocabile",
          media: {
            type: "image",
            src: "/images/pomegranate_preview.png",
            caption: "Leggibilità arena e inquadratura co-op (da sostituire con screenshot Ruota Emote & schema Mirror)"
          },
          whatAndWhy: "Un party-game frenetico fallisce se la telecamera disorienta o se serve per forza la chat vocale. Ho progettato una camera a 360° con pitch bloccato per ridurre il carico cognitivo, una Ruota Emote con indicatori agganciati ai bordi schermo e audio dedicati, e co-sviluppato la logica di gioco Host-Client su Mirror sugli oggetti fisici condivisi.",
          processDetails: {
            ideation: "Uniti i ping radiali rapidi stile League of Legends a una camera ad origine fissa per rendere l'onboarding immediato anche ai giocatori casual.",
            mechanicsOrTuning: [
              "Ruota Emote (Giocabile): ping contestuali ('Aiutami a scuotere l'albero', 'Ripara barriera', 'Falò si spegne') con icone ancorate ai bordi fuori schermo, SFX unici e cooldown anti-spam (6 usi → 10s).",
              "Vincoli Camera: rotazione orizzontale 360° completa con blocco verticale per evitare inquadrature su cielo vuoto o occlusioni del terreno.",
              "Sincronizzazione Mirror: stati condivisi di raccolta/passaggio/lancio oggetti e distruzione procedurale delle barriere sviluppati col programmatore di rete."
            ],
            iterationOrResult: "Testato dal vivo con lead di Milestone, Ubisoft e Nacon a New Game Designer 2025, conquistando il 3° posto."
          }
        }
      ],
      storySteps: [
        {
          tag: "CORE GAMEPLAY LOOP",
          title: "Combattimento Survival & Custodia del Falò",
          description: "I giocatori alternano combattimenti ad alta intensità—usando munizioni estratte da melograni magici—a fasi strategiche di riparazione. Alimentare il falò centrale è indispensabile per respingere l'alba pietrificante e proteggere i rifugi del team.",
          mediaLabel: "[ Gameplay Combat // Crafting Munizioni Melograno & Manutenzione Rifugio ]",
          imageSrc: "/images/immagine_falo_personaggio.png"
        },
        {
          tag: "MULTIPLAYER SYSTEMS",
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
      year: "Apr 2024 – Lu 2024",
      period: "2024",
      category: "Progetto Personale",
      coverImage: "/images/puppeteer_banner.png",
      primaryFocus: "Sensory Game Design & Audio Adattivo (FMOD / Steam Audio)",
      genrePlatform: "Horror Psicologico in Prima Persona · PC & Meta XR VR",
      tagline: "Horror Psicologico in Prima Persona · PC & Meta XR VR",
      role: "Sviluppatore Unico · Game & Technical Audio Designer",
      gameplaySummary: "Un horror psicologico in prima persona (PC & Meta XR VR) in cui la vista è ridotta alla fessura di un monocolo e l'udito diventa il senso principale per orientarsi. Guidato da una voce eterea e da un impulso di ecolocalizzazione a luce bianca generato dal Cuore, il giocatore deve risolvere l'enigma del pianoforte evitando le stanze-trappola del Burattinaio.",
      personalContributionSummary: "Ideazione, design e sviluppo completo in solitaria: dal gameplay a deprivazione visiva alla pipeline spaziale FMOD/Steam Audio, fino al puzzle del pianoforte iterato su playtest, ai trigger A* del nemico e alle interazioni fisiche complete in Meta XR VR.",
      description: "Un'avventura horror psicologica in prima persona ambientata in una villa abbandonata. Guidato da un'enigmatica voce femminile, il giocatore esplora scenari suggestivi, raccoglie documenti per ricostruire una tragedia nascosta ed elude il Burattinaio: uno stregone che muta le sue vittime in marionette viventi.\n\nIdeazione autonoma del concept, gameplay design e soundscape ambientale. Progettazione e implementazione di sistemi audio adattivi stratificati con FMOD Studio, logica euristica di comparsa del boss AI, enigmi interattivi e controlli di movimento VR completi.",
      tags: ["Game Design", "FMOD Studio", "Steam Audio", "Meta XR VR", "Technical Audio", "Unity"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      videoUrl: "/videos/puppeteer.mp4",
      platform: "PC & Meta XR VR",
      engine: "Unity · C# · FMOD Studio · Steam Audio",
      authors: "Mauro Brochier",
      teamRoles: "Sviluppatore Unico — Game Designer, Gameplay Programmer",
      gddUrl: "https://docs.google.com/document/d/12cTheqaPUP9HEnYansgj9i_p2kzd_NlF/edit?usp=sharing&ouid=118263974300292559359&rtpof=true&sd=true",
      trailerId: "gVvd9aPJDlY",
      vrBadge: "META XR // BUILD VR COMPLETA",
      audioNotice: "Implementate tecniche audio avanzate e spazializzazione binaurale 3D — consigliato l'uso delle cuffie.",
      designFeatures: [
        {
          id: "puppeteer-echolocation",
          discipline: "Sensory & Core Loop Design",
          title: "Cecità da Monocolo & Ecolocalizzazione a Luce Bianca del Cuore",
          scopeBadge: "Build PC & VR Completa",
          media: {
            type: "video",
            src: "/videos/puppeteer.mp4",
            caption: "Gameplay VR ed esplorazione sensoriale (da affiancare o sostituire con clip dell'impulso di ecolocalizzazione)"
          },
          whatAndWhy: "Invece di usare il buio come semplice atmosfera, ho sostituito meccanicamente la vista con l'udito. All'inizio il giocatore viene accecato e vede solo attraverso la fessura circolare di un monocolo; un NPC gli dona un Cuore che, se schiacciato, emette un impulso sonoro che illumina la casa con una silhouette stilizzata a luce bianca.",
          processDetails: {
            ideation: "Progettato per obbligare il giocatore ad affidarsi all'acustica delle stanze e alla Voce Guida, eliminando minimappe o indicatori visivi classici.",
            mechanicsOrTuning: [
              "Vincolo del Monocolo: l'apertura circolare ridotta taglia la visione periferica e impone una scansione ambientale attiva.",
              "Impulso del Cuore (Sonar): schiacciare il Cuore propaga un'onda sonora che rivela temporaneamente i volumi circostanti con sola luce bianca.",
              "Voce Guida Dinamica: sposta la propria sorgente nella stanza corretta al completamento degli obiettivi—sbagliare direzione porta a trappole o allo spawn del Burattinaio."
            ],
            iterationOrResult: "Genera un'esperienza tesa e mirata (30 minuti – 2 ore a seconda della dimestichezza musicale/spaziale) in cui l'orientamento acustico è sopravvivenza."
          }
        },
        {
          id: "puppeteer-fmod",
          discipline: "Audio Systems · FMOD & Steam Audio",
          title: "Calibrazione 5 Profili HRTF, Filtro Finestre & Auralization 3ª Riflessione",
          scopeBadge: "FMOD Studio + Steam Audio",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine1.png",
            caption: "Esplorazione spaziale (da sostituire con screenshot parametri FMOD Studio & geometrie Steam Audio)"
          },
          whatAndWhy: "Se per sopravvivere devi capire da quale stanza arriva una voce, un panning stereo standard non basta. Ho costruito una pipeline in FMOD Studio e Steam Audio—aperta da un test iniziale su 5 profili HRTF—affinché pioggia esterna, passi e minacce reagiscano fisicamente a muri, porte e materiali.",
          processDetails: {
            ideation: "Poiché ogni persona percepisce la spazialità in modo diverso, il test preliminare con 5 profili HRTF permette al giocatore di scegliere il profilo più preciso per il proprio udito.",
            mechanicsOrTuning: [
              "Ovattamento Finestre (FMOD): il rumore esterno è attenuato da un filtro procedurale calcolato sulla distanza dalla finestra più vicina mediata con tutte le altre—massimo ovattamento esattamente al centro della casa.",
              "Passi Procedurali (FMOD): variazione automatica su 5 superfici (sabbia, ghiaia, terriccio, erba, legno).",
              "Steam Audio Auralization: materiali lignei assorbenti, occlusione di muri e porte su passi del Burattinaio e Voce, più riverbero di stanza fino alla 3ª riflessione."
            ],
            iterationOrResult: "Rende leggibili a orecchio porte aperte/chiuse e provenienza delle minacce senza bisogno di indicatori a schermo."
          }
        },
        {
          id: "puppeteer-piano",
          discipline: "Puzzle & Playtest Iteration",
          title: "Pianoforte Fisico Suonabile & Iterazione di Accessibilità da Playtest",
          scopeBadge: "Iterato su Playtest",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine3.png",
            caption: "Stanza del pianoforte e indizi (da sostituire con clip/screenshot del pianoforte in azione)"
          },
          whatAndWhy: "L'enigma centrale per avanzare nella casa ruota attorno a un pianoforte interamente suonabile: il giocatore deve decifrare gli indizi sparsi nella stanza per riprodurre la melodia corretta. I primi playtest avevano evidenziato un blocco netto—ci riuscivano solo musicisti con orecchio assoluto—portandomi a iterare il design.",
          processDetails: {
            ideation: "Volevo un puzzle radicato nel tema acustico e tattile del gioco anziché un classico enigma a chiavi o lucchetti.",
            mechanicsOrTuning: [
              "Strumento Suonabile in Tempo Reale: ogni tasto genera la propria nota ed è suonabile direttamente sia su PC che toccando i tasti in VR.",
              "Indizi Diegetici: gli aiuti per individuare la sequenza sono integrati nell'ambiente della stanza senza tutorial invasivi."
            ],
            iterationOrResult: "Svolta dai Playtest: ho progressivamente semplificato la melodia e reso più leggibili gli indizi finché anche i tester non musicisti sono riusciti a completare l'enigma (portando la durata tra i 30 min e le ~2h)."
          }
        },
        {
          id: "puppeteer-vr-ai",
          discipline: "VR UX & Threat Design",
          title: "Gesti Fisici Meta XR, Radar Aptico & Inseguimento A* del Burattinaio",
          scopeBadge: "Build VR Completa",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine2.png",
            caption: "Incontro col Burattinaio e controlli VR (da sostituire con clip interazioni VR / pathfinding A*)"
          },
          whatAndWhy: "Per la build VR completa su Meta XR ho ripensato le interazioni attorno a gesti naturali e sostituito l'HUD con un feedback aptico proporzionale alla distanza dagli obiettivi—mantenendo il Burattinaio come punizione deterministica se si perde l'orientamento acustico.",
          processDetails: {
            ideation: "I prompt testuali o le frecce HUD distruggono l'immersione in VR; gestualità fisica e vibrazione aptica mantengono coerente il pilastro sensoriale.",
            mechanicsOrTuning: [
              "Gesti Naturali Meta XR: spinta fisica per aprire le porte, movimento di presa verso il basso coi trigger per raccogliere oggetti, pressione diretta sui tasti del piano.",
              "Radar Aptico: impulso di vibrazione sui controller che cresce all'avvicinarsi a un obiettivo.",
              "IA del Burattinaio: spawna in punti specifici se il giocatore non segue correttamente la Voce Guida ed evita gli ostacoli tramite Unity NavMesh (pathfinding A*) fino alla cattura (trasformazione in marionetta)."
            ],
            iterationOrResult: "Porting VR completato dall'inizio alla fine e mostrato nel gameplay trailer dell'ultima release."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Concept horror originale, premessa narrativa e curva di tensione che bilancia l'esplorazione ambientale con l'ansia psicologica.",
          "Regole di ingaggio del boss basate su euristiche di comparsa dinamica nelle stanze per spezzare le routine sicure del giocatore.",
          "Meccaniche di navigazione guidate da indizi audio, bivi di fuga e puzzle interattivi, incluso un pianoforte interamente suonabile via fisica."
        ],
        implemented: [
          "Pipeline audio adattiva a strati in Unity con FMOD Studio e Steam Audio, basata su crossfade in tempo reale guidati da parametri e spazializzazione binaurale 3D.",
          "Macchina a stati finiti (FSM) per l'IA sensoriale (Pattuglia, Allerta, Caccia) con gestione del cono visivo, soglie uditive e meccaniche stealth.",
          "Architettura di controllo e interazione VR per Meta XR, convertendo manipolazione fisica di oggetti, porte e dialoghi con PNG da PC a visore."
        ],
        authoredDocs: [
          "Game Design Document (GDD - Versione Sintetica) con formalizzazione delle curve di tensione, mappe degli indizi audio e logica dei puzzle."
        ]
      },
      storySteps: [
        {
          tag: "HORROR ATMOSFERICO",
          title: "Esplorazione Guidata dall'Audio",
          description: "Progettazione della tensione psicologica in una villa abbandonata. Il giocatore si orienta tramite una misteriosa voce guida femminile, indizi acustici e diari per ricostruire la tragedia evitando allarmi rumorosi.",
          mediaLabel: "[ Gameplay Esplorativo // Audio Spaziale & Illuminazione Atmosferica ]",
          imageSrc: "/images/puppeteer_immagine1.png"
        },
        {
          tag: "STEALTH & COMPORTAMENTO AI",
          title: "Pattugliamento e Percezione del Burattinaio",
          description: "Implementazione delle meccaniche stealth e degli stati sensoriali dell'IA nemica (Pattuglia, Allerta, Caccia). La fuga richiede spezzare la linea di vista, nascondersi e gestire la stamina dello scatto.",
          mediaLabel: "[ Architettura AI // Macchina a Stati Finiti (FSM) & Gizmo Line of Sight ]",
          imageSrc: "/images/puppeteer_immagine2.png"
        },
        {
          tag: "MECCANICHE DI SALVATAGGIO",
          title: "Dilemmi di Rischio e Finali Multipli",
          description: "Integrazione di scenari puzzle basati su rischio/rendimento: scappare subito per salvarsi o rischiare la cattura per liberare altre vittime intrappolate come marionette viventi.",
          mediaLabel: "[ Level Design // Percorsi Multipli & Narrativa Ambientale ]",
          imageSrc: "/images/puppeteer_immagine3.png"
        }
      ]
    },
    {
      id: "dda-thesis",
      title: "Framework DDA Plug-and-Play & Testbed Soulslike",
      year: "Ott 2025– Ott 2026",
      period: "2025–2026",
      category: "Tesi Magistrale / Progetto di Ricerca Individuale",
      coverImage: "/images/dda_banner.png",
      primaryFocus: "Sistema DDA Disaccoppiato & Telemetria (15 Giocatori)",
      genrePlatform: "Prototipo Soulslike · Framework di Ricerca · PC",
      tagline: "Prototipo Soulslike · Framework di Ricerca · PC",
      role: "Technical Game Designer · Systems Engineer",
      highlight: "Sistema Pronto all'Uso · Studio Empirico su 15 Giocatori",
      gameplaySummary: "Un framework di Dynamic Difficulty Adjustment (DDA) plug-and-play e indipendente dal genere, sviluppato in Unity e validato su un prototipo Soulslike costruito ad hoc. Progettato come modulo disaccoppiato che legge la telemetria in tempo reale per modulare il ritmo della sfida preservando intatta la tensione punitiva.",
      personalContributionSummary: "Architettura completa del software DDA disaccoppiato pronto all'integrazione su più generi, costruzione di un testbed Soulslike accurato (con rottura dinamica armatura e sangue via MRT) per garantire dati telemetrici puliti, e validazione empirica su 15 giocatori.",
      description: "Un prototipo action RPG Soulslike progettato per sperimentare l'adattamento dinamico della sfida in tempo reale. Il sistema monitora la telemetria delle performance del giocatore per modulare la frizione di gioco, preservando lo stato psicologico di Flow senza intaccare l'alto livello di sfida punitivo tipico del genere.\n\nIdeazione, progettazione e sviluppo integrale autonomo dell'architettura DDA euristica in Unity e C#, dalla modellazione teorica del Flow all'integrazione nel gameplay. Conduzione di uno studio empirico con 15 giocatori per validare il bilanciamento della difficoltà.",
      confidentialityNotice: "Nota di Riservatezza e Proprietà Intellettuale: Variabili algoritmiche specifiche, formule matematiche e parametri euristici interni sono omessi a tutela della ricerca.",
      playtestNotice: "Validato attraverso uno studio empirico qualitativo e quantitativo su 15 playtester.",
      detailedContributions: {
        designed: [
          "Architettura integrale del framework DDA euristico, progettata per modulare la frizione in tempo reale preservando la sfida del genere Soulslike.",
          "Modellazione teorica e matematica dello stato di Flow basata su psicologia del giocatore, telemetria degli errori e ritmo di recupero.",
          "Bilanciamento dinamico dei parametri: soglie adattive di aggressività dei nemici, scaling del danno e rilascio risorse.",
          "Meccaniche centrali di combattimento e loop di scontro del prototipo Soulslike in Unity e C# nativo."
        ],
        authoredDocs: [
          "Tesi di Ricerca di Laurea Magistrale sotto la supervisione della Prof.ssa Laura Ripamonti (Università degli Studi di Milano).",
          "Report completo di analisi telemetrica quantitativa e qualitativa sulla ritenzione del Flow nei giocatori."
        ]
      },
      platform: "PC",
      engine: "Unity · C#",
      authors: "Mauro Brochier (Relatrice: Prof.ssa Laura Ripamonti)",
      teamRoles: "Ricercatore Unico, Technical Game Designer, Systems Programmer",
      tags: ["Dynamic Difficulty Adjustment", "System Design", "Telemetria Giocatore", "Combat Design", "Technical Art (MRT)", "Unity"],
      designFeatures: [
        {
          id: "dda-architecture",
          discipline: "System Architecture · Plug & Play",
          title: "Framework DDA Disaccoppiato & Genre-Agnostic (Pronto all'Uso)",
          scopeBadge: "Modulo Production-Ready",
          media: {
            type: "image",
            src: "/images/dda_immagine2.png",
            caption: "Testbed scontro boss (da sostituire con schema Black-Box Input/Output & agganci Inspector)"
          },
          whatAndWhy: "Un sistema di difficoltà fallisce in produzione se è cablato dentro gli script dei nemici. Ho ingegnerizzato il software DDA come modulo Unity indipendente e non vincolato al Soulslike di test: riceve telemetria normalizzata e pilota leve esposte al designer, risultando integrabile su generi diversi.",
          processDetails: {
            ideation: "Trattare il Soulslike solo come client di stress-test garantisce portabilità immediata e netta separazione delle responsabilità.",
            mechanicsOrTuning: [
              "Architettura Black-Box: sensori di telemetria e hook dei parametri di gioco sono separati dal nucleo adattivo protetto.",
              "Limiti di Sicurezza per il Designer: range min/max configurabili assicurano che l'adattamento non rompa mai l'identità punitiva del gioco.",
              "Tutela IP: variabili interne, pesi e formule euristiche restano interamente incapsulate."
            ],
            iterationOrResult: "Consegnato come pacchetto modulare pronto all'integrazione, verificato sotto carico reale di combattimento."
          }
        },
        {
          id: "dda-telemetry",
          discipline: "Validazione Empirica · Dati",
          title: "Studio su 15 Giocatori: Ritenzione del Flow & Equità Percepita",
          scopeBadge: "Studio su 15 Playtester",
          media: {
            type: "image",
            src: "/images/dda_immagine3.png",
            caption: "Validazione empirica (da sostituire con grafici aggregati di telemetria e punteggi Flow)"
          },
          whatAndWhy: "Un sistema adattivo vale quanto i suoi dati reali. Ho condotto uno studio qualitativo e quantitativo su 15 giocatori di abilità diverse per verificare se la modulazione in tempo reale migliorasse lo stato di Flow e la tenuta della sessione senza far percepire ai veterani alcun aiuto artificiale.",
          processDetails: {
            ideation: "Incrocio tra telemetria oggettiva in-game (curve di errore, ritmo di ingaggio) e questionari psicologici post-sessione sul Flow.",
            mechanicsOrTuning: [
              "Campione eterogeneo dai giocatori action occasionali ai veterani dei Soulslike.",
              "Analisi su equità percepita, sostenibilità della tensione e durata dell'ingaggio negli scontri boss."
            ],
            iterationOrResult: "Evidenziati miglioramenti misurabili in ritenzione del Flow e percezione di equità (ricerca di Tesi Magistrale con la Prof.ssa Laura Ripamonti, UniMi)."
          }
        },
        {
          id: "dda-combat-testbed",
          discipline: "Combat Design (Testbed)",
          title: "Combat System Soulslike AAA-Like per Evitare Dati Telemetrici Sporchi",
          scopeBadge: "Testbed Giocabile",
          media: {
            type: "image",
            src: "/images/dda_immagine1.png",
            caption: "Combattimento nel testbed Soulslike (da sostituire con breve GIF/clip del combat)"
          },
          whatAndWhy: "Un cattivo game design genera dati sporchi: se i giocatori muoiono per controlli imprecisi o hitbox confuse, la telemetria non misura la vera difficoltà. Ho progettato un combat system Soulslike pesante e leggibile, curato con standard AAA-like affinché ogni errore riflettesse solo la reale abilità del giocatore.",
          processDetails: {
            ideation: "Costruire un testbed solido era prerequisito scientifico per isolare la vera frizione di gameplay da frustrazioni tecniche.",
            mechanicsOrTuning: [
              "Attacchi pesanti con animazioni impegnative, gestione rigorosa della stamina e finestre punitive.",
              "Telegraphing chiaro dei pattern boss e rilevazione precisa dei colpi per garantire telemetria affidabile."
            ],
            iterationOrResult: "Eliminato il rumore dovuto ai controlli durante lo studio sui 15 tester, rendendo pulito il dataset empirico."
          }
        },
        {
          id: "dda-mrt-gore",
          discipline: "Technical Art & Feedback Diegetico",
          title: "Rottura Dinamica Armatura & Rendering Sangue su Player via MRT",
          scopeBadge: "Technical Craft",
          media: {
            type: "image",
            src: "/images/dda_front.png",
            caption: "Usura armatura e feedback visivo (da sostituire con prima/dopo rottura armatura & sangue MRT)"
          },
          whatAndWhy: "Per restituire la brutalità degli scontri senza sovraccaricare l'HUD, ho implementato un sistema gore con rottura dinamica dell'armatura e modifica reale delle texture, risolvendo lo slittamento delle decal sulle animazioni tramite disegno diretto del sangue con Multiple Render Targets (MRT).",
          processDetails: {
            ideation: "I classici Decal Projector di Unity (scatole di proiezione) slittano visibilmente sulle SkinnedMeshRenderer durante le animazioni rapide.",
            mechanicsOrTuning: [
              "Spezzamento Dinamico Armatura: i colpi subiti fratturano progressivamente l'armatura aggiornandone le texture in tempo reale.",
              "Pipeline Sangue MRT: il sangue viene disegnato direttamente nello spazio render target del personaggio restando ancorato a corazza e arti in movimento."
            ],
            iterationOrResult: "Feedback visivo reattivo e realistico che ha sostenuto l'immersione ad alta tensione durante tutta la sperimentazione."
          }
        }
      ],
      storySteps: [
          {
            tag: "ORMULAZIONE DEL PROBLEMA",
            title: "Il Dilemma della Frizione nei Soulslike",
            description: "La difficoltà statica convenzionale nei generi punitivi causa spesso abbandono a causa di picchi d'ansia o frustrazione prolungata. L'obiettivo di design è stato ingegnerizzare un sistema adattivo capace di preservare la tensione autentica senza mai sembrare artificiale o paternalistico agli occhi dei veterani.",
            mediaLabel: "[ Prototipo di Ricerca // Scontro Boss in Fase 1 ]",
            imageSrc: "/images/dda_immagine1.png"
          },
          {
            tag: "ARCHITETTURA EURISTICA",
            title: "Modulazione Non Invasiva della Sfida",
            description: "Sviluppo di un framework modulare in Unity e C# nativo che valuta in tempo reale frequenza d'errore, ritmo d'ingaggio e meccaniche di recupero. Il sistema modula parametri ambientali e di aggressività nemica entro soglie impercettibili rigorosamente calibrate.",
            mediaLabel: "[ Sfida Adattiva // Escalation Boss in Fase 2 ]",
            imageSrc: "/images/dda_immagine2.png"
          },
          {
            tag: "VALIDAZIONE EMPIRICA",
            title: "Studio Qualitativo e Quantitativo su 15 Giocatori",
            description: "Conduzione di sessioni di playtest strutturate su diversi livelli di abilità. La telemetria in-game e le valutazioni psicologiche post-sessione hanno evidenziato miglioramenti significativi nel mantenimento del Flow, durata della sessione e percezione di equità durante gli scontri più ostici.",
            mediaLabel: "[ Dati di Telemetria Sintetici // Risultati Questionari Flow ]",
            imageSrc: "/images/dda_immagine3.png"
          }
        ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      year: "Ott 2023 – Feb 2024",
      period: "2024",
      category: "Progetto Accademico di Team / Industry Showcase",
      coverImage: "/images/murder_banner.png", // O lo screenshot di copertina che preferisci
      primaryFocus: "IA Deterministica (Behavior Trees) & Tool Custom Unity Editor",
      genrePlatform: "Strategia-Puzzle 2D · PC e Browser Web",
      tagline: "Strategia-Puzzle 2D · PC e Browser Web",
      role: "AI Systems Designer · Tools & Gameplay Programmer",
      highlight: "New Game Designer 2025 · 3° Posto · Game Design & Programming",
      gameplaySummary: "Un puzzle-strategico 2D a fasi Planning & Execution in cui orchestrare 'omicidi perfetti' su mappe a grafo di stanze. Il giocatore sfrutta le routine deterministiche dei PNG, piazza esche e armi e sincronizza le azioni su una timeline senza superare la soglia di sospetto.",
      personalContributionSummary: "Progettazione e implementazione dell'IA deterministica dei Guest tramite Behavior Tree base + tratti a Decoratori, sviluppo di un Editor visuale a nodi per Behavior Trees dentro Unity e integrazione completa dello Scenario 1.",
      description: "Un puzzle game strategico in 2D in cui il giocatore impersona un operativo incaricato di orchestrare 'omicidi perfetti'. Manipolando le routine deterministiche dei PNG, sfruttando i coni visivi e disponendo oggetti su una linea temporale tattica, i bersagli vengono eliminati senza destare sospetti.\n\nImplementazione autonoma dell'architettura AI dei PNG tramite Behavior Trees e sviluppo di un tool visuale personalizzato per l'Editor di Unity per ispezionare i BT. Co-progettazione delle routine dei PNG e integrazione dell'IA in uno dei cinque scenari di gioco.",
      tags: ["Behavior Trees", "Editor Tooling", "AI Design", "Systems Design", "Unity", "C#"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      platform: "PC & Browser Web",
      engine: "Unity (2D) / WebGL",
      authors: "Mauro Brochier, Matteo Mangioni, Anthony Baiamonte, Christian Colombo",
      teamRoles: "Game Programmer, AI Programmer, Game Designer (Sistemi AI)",
      gddUrl: "https://github.com/MauroTheB/MurderMysteryInfo/blob/main/Documents/GameDesignDocument.md",
      demoUrl: "https://polimi-game-collective.itch.io/murder-mystery-incorporated",
      trailerId: "ZpdFg5MHrdI",
      gameplayId: "wDj0Gx3CgIQ",
      designFeatures: [
        {
          id: "murder-bt-editor",
          discipline: "Technical Design · Custom Tooling",
          title: "Editor Visuale a Nodi per Behavior Trees Integrato in Unity",
          scopeBadge: "Tool Custom Unity Editor",
          media: {
            type: "image",
            src: "/images/murder_immagine2.png",
            caption: "Anteprima sistemi AI (da sostituire con screenshot reale del tuo Editor visuale a nodi in Unity!)"
          },
          whatAndWhy: "Scrivere alberi decisionali direttamente dentro script C# rallenta le iterazioni di design e nasconde la logica. Ho costruito un Editor grafico a nodi e archi direttamente dentro Unity—con Selector, Condition e Task—per creare, leggere e debuggare i Behavior Tree in modo visivo.",
          processDetails: {
            ideation: "Progettato per velocizzare l'iterazione su un team di 5 persone separando il flusso visuale dell'IA dal codice dei singoli verbi di gioco.",
            mechanicsOrTuning: [
              "Authoring a Nodi & Archi: creazione e collegamento grafico di Selector, nodi Condition e Action Task.",
              "Leggibilità Immediata: ispezione visiva della struttura decisionale al posto di catene di if/switch annidate."
            ],
            iterationOrResult: "Ha permesso di iterare rapidamente su tutti gli archetipi di Guest fino alla release giocabile su Itch.io."
          }
        },
        {
          id: "murder-deterministic-ai",
          discipline: "AI & Systems Design",
          title: "IA Deterministica dei Guest & Tratti Comportamentali a Decoratori",
          scopeBadge: "Architettura AI Core",
          media: {
            type: "image",
            src: "/images/murder_immagine1.png",
            caption: "Fase di pianificazione su timeline (da sostituire con schema BT + Decoratori Suspicious / Greedy / Alcoholic)"
          },
          whatAndWhy: "In un puzzle su timeline l'IA casuale distrugge la strategia: un buon piano non deve dipendere dalla fortuna. Ho progettato un Behavior Tree base 100% deterministico condiviso da tutti i Guest, applicando i tratti caratteriali (Suspicious, Greedy, Alcoholic) come Decoratori modulari così le reazioni risultano leggibili come un orologio.",
          processDetails: {
            ideation: "Scelto al posto di pattuglie casuali affinché ogni fallimento insegni con precisione al giocatore dove il piano ha generato sospetto.",
            mechanicsOrTuning: [
              "Gerarchia Selector Deterministica: Esca nella stanza → Esca in stanza adiacente → Evento in Timeline → Esplorazione pesata (punteggio d'interesse stanza).",
              "Modificatori a Decoratori: Greedy insegue Cash come esca; Alcoholic beve il Vino solo se non visto; Suspicious aggiunge +2 punti sospetto alle anomalie.",
              "Economia Sospetto (soglia 0–10): Cadavere (+4), Sangue (+2), Agente Armato (+2) valutati per nodo stanza."
            ],
            iterationOrResult: "Cuore del loop trial-and-error premiato con il 3° Posto a New Game Designer 2025."
          }
        },
        {
          id: "murder-scenario-flow",
          discipline: "Systems Integration & Level Flow",
          title: "Interazioni su Room-Graph, Descrittori Oggetti & Scenario 1",
          scopeBadge: "Giocabile su Itch.io",
          media: {
            type: "image",
            src: "/images/murder_immagine3.png",
            caption: "Esecuzione autonoma & debriefing (da sostituire con GIF di esecuzione con icone '!', '?' e barra sospetto)"
          },
          whatAndWhy: "Per mantenere leggibile la pianificazione senza griglie dispersive, le entità interagiscono a livello di nodo-stanza mentre i descrittori degli oggetti modificano durata e propagazione del rumore. Ho integrato l'IA, i trigger di sospetto e il flusso puzzle nello Scenario 1 lasciando piena libertà di soluzione.",
          processDetails: {
            ideation: "L'astrazione a nodi di stanza garantisce che se un Guest entra dove c'è un cadavere la reazione sia immediata e chiara.",
            mechanicsOrTuning: [
              "Accoppiamento Verbi/Oggetti: le armi Slow aggiungono +1 slot alla durata di Kill; gli oggetti Loud allertano le stanze adiacenti (+2 sospetto per Guest allertato).",
              "Integrazione Scenario 1: collegati trigger, trappole e soglie di sospetto nella build WebGL giocabile."
            ],
            iterationOrResult: "Pubblicato e giocabile direttamente da browser su Itch.io e presentato dal vivo a New Game Designer 2025."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Co-progettazione dei sistemi di comportamento dei PNG, coni di percezione sensoriale e reazioni ambientali insieme al team di design.",
          "Progettazione e bilanciamento dei tratti caratteriali dei PNG che influenzano il processo decisionale autonomo e le deviazioni dalle routine.",
          "Design dei puzzle temporali, delle trappole di distrazione delle guardie e della timeline interattiva per uno dei cinque scenari del gioco."
        ],
        implemented: [
          "Implementazione autonoma dell'architettura AI completa dei PNG tramite Behavior Trees in Unity e C# nativo.",
          "Sviluppo di un tool visuale personalizzato integrato direttamente nell'Editor di Unity per ispezionare e fare il debug live degli alberi di comportamento.",
          "Programmazione delle routine di pattugliamento autonomo, scambio d'informazioni tra PNG e risposte dinamiche di allerta.",
          "Ingegnerizzazione e integrazione della logica di gameplay, trappole e transizioni di stato AI per uno dei cinque scenari giocabili."
        ],
        authoredDocs: [
          "Redazione delle sezioni del Game Design Document (GDD) relative a logiche di stato dei PNG, modificatori di tratti e meccaniche della timeline."
        ]
      },
      storySteps: [
          {
            tag: "MECCANICHE TEMPORALI",
            title: "Pianificazione Strategica su Timeline",
            description: "Progettazione del core loop puzzle-strategico in cui il giocatore organizza azioni, posiziona oggetti e coordina le traiettorie degli agenti lungo una linea temporale tattica a tracce.",
            mediaLabel: "[ UI & Design // Scrubber Temporale & Griglia di Pianificazione Azioni ]",
            imageSrc: "/images/murder_immagine1.png"
          },
          {
            tag: "PATTERN COMPORTAMENTALI AI",
            title: "Sfruttamento delle Routine di Pattuglia",
            description: "Sviluppo di routine deterministiche per gli NPC con coni visivi di allerta. Il giocatore calcola i tempi di ronda delle guardie per orchestrare incidenti fatali senza destare sospetti.",
            mediaLabel: "[ Sistemi AI // Percorsi di Routine, Coni di Sospetto & Trappole ]",
            imageSrc: "/images/murder_immagine2.png"
          },
          {
            tag: "FASE DI ESECUZIONE",
            title: "Riproduzione Autonoma e Valutazione",
            description: "Una volta impostata la timeline, avviando il play la scena si svolge autonomamente in tempo reale. Il sistema valuta l'efficacia del piano premiando l'assenza di prove compromettenti.",
            mediaLabel: "[ Gameplay Demo // Sequenza di Esecuzione & Schermata di Debriefing ]",
            imageSrc: "/images/murder_immagine3.png"
          }
        ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      year: "Mar 2021 – Apr 2021",
      period: "2021",
      category: "Progetto di Tirocinio Individuale",
      coverImage: "/images/maze_banner.png",
      primaryFocus: "Transizione Prospettica 2D→3D & Meccaniche Mobile",
      genrePlatform: "Gioco di Navigazione e Memoria Spaziale · Android Mobile",
      tagline: "Gioco di Navigazione e Memoria Spaziale · Android Mobile",
      role: "Game Designer · Programmer",
      gameplaySummary: "Una sfida mobile in terza persona basata sulla ricerca sulla memoria visuo-spaziale. I giocatori hanno 30 secondi per studiare la mappa 2D del labirinto prima di passare fluidamente a una visuale 3D alle spalle, navigando a memoria attraverso corridoi identici e gestendo risorse e pozioni.",
      personalContributionSummary: "Ideazione, design e sviluppo integrale autonomo del titolo durante un tirocinio professionale di 238 ore presso Nextrek S.r.l. Progettazione della meccanica centrale di transizione prospettica, controlli touch per dispositivi mobili e bilanciamento della memoria.",
      description: "Una sfida mobile in terza persona basata sulla ricerca sulla memoria visuo-spaziale. I giocatori hanno 30 secondi per studiare la mappa 2D del labirinto prima di passare fluidamente a una visuale 3D alle spalle, navigando a memoria attraverso corridoi identici e gestendo risorse e pozioni.\n\nIdeazione, design e sviluppo integrale autonomo del titolo durante un tirocinio professionale di 238 ore presso Nextrek S.r.l. Progettazione della meccanica centrale di transizione prospettica, controlli touch per dispositivi mobili e bilanciamento della memoria.",
      tags: ["Unity", "C#", "Sviluppo Android", "Cognizione Spaziale", "Controlli Mobile"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      platform: "Mobile (iOS & Android)",
      isMobile: true,
      engine: "Unity · C#",
      authors: "Mauro Brochier (Tirocinio Nextrek S.r.l.)",
      teamRoles: "Sviluppatore Unico — Game Designer, Gameplay Programmer",
      trailerId: "OP1fEbdZbjk",
      gameplayId: "WI-OsY6SoKs",
      thesisBadge: "R&D COGNITIVO // RICERCA TESI TRIENNALE",
      detailedContributions: {
        designed: [
          "Ideazione del core loop cognitivo incentrato sullo studio di come la memoria umana memorizza mappe 2D e le applica alla navigazione spaziale 3D.",
          "Progettazione della meccanica di transizione prospettica da una visuale 2D aerea con timer di 30 secondi a una visuale d'esplorazione 3D in terza persona alle spalle.",
          "Bilanciamento della conformazione dei labirinti, gestione delle risorse, economia delle pozioni con mercanti segreti e curve di affaticamento mnemonico."
        ],
        implemented: [
          "Ingegnerizzazione e sviluppo integrale autonomo del videogioco in Unity e C# durante un tirocinio professionale di 238 ore presso Nextrek S.r.l.",
          "Programmazione dei controlli touch mobile per smartphone, interpolazione fluida della telecamera da 2D ortografica a 3D prospettica e generazione delle griglie del labirinto.",
          "Implementazione dei sistemi di inventario mobile, logiche di interazione con i mercanti nascosti e meccaniche di consumo delle pozioni."
        ],
        authoredDocs: [
          "Tesi di Laurea Triennale in Ingegneria Informatica ('Player's memory, from 2d to 3d') presso l'Università degli Studi Roma Tre.",
          "Relazione tecnica finale di tirocinio e documentazione di game design consegnata a Nextrek S.r.l."
        ]
      },
      storySteps: [
        {
          tag: "COGNIZIONE VISIVA",
          title: "Fase di Memorizzazione in Pianta 2D",
          description: "Il giocatore osserva la mappa bidimensionale del labirinto per esattamente 30 secondi con un countdown per memorizzare bivi, vicoli ciechi e punti di interesse.",
          mediaLabel: "[ Meccaniche di Gioco // Mappa Blueprint 2D & Timer di Countdown ]",
          imageSrc: "/images/maze_immagine1.png"
        },
        {
          tag: "NAVIGAZIONE SPAZIALE 3D",
          title: "Esplorazione in Terza Persona",
          description: "La visuale passa all'interno del labirinto in 3D in terza persona. Il giocatore deve fare affidamento esclusivamente sulla propria memoria di lavoro visuo-spaziale per ritrovare l'uscita.",
          mediaLabel: "[ Movimento 3D // Controlli Telecamera & Input Touch Mobile ]",
          imageSrc: "/images/maze_immagine2.png"
        },
        {
          tag: "GESTIONE DELLE RISORSE",
          title: "Mercanti Nascosti ed Economia delle Pozioni",
          description: "Integrazione di dinamiche di sopravvivenza su mobile: scovare mercanti segreti, gestire l'illuminazione delle torce e utilizzare pozioni di velocità per non restare intrappolati per sempre.",
          mediaLabel: "[ UI Mobile // Inventario, Pozioni & Interazione con i Mercanti ]",
          imageSrc: "/images/maze_immagine3.png"
        }
      ]
    },
    {
      id: "water-sim",
      title: "Real-Time Water Simulation in OpenGL with CUDA Acceleration",
      year: "Feb 2025 – Apr 2025",
      period: "2025",
      category: "Progetto Accademico Individuale",
      coverImage: "/images/water_banner.png",
      primaryFocus: "Parallelizzazione Fisica Onde in CUDA & Shader OpenGL Fresnel",
      genrePlatform: "Simulazione Fluidodinamica in Tempo Reale · GPGPU · PC",
      tagline: "Simulazione Fluidodinamica in Tempo Reale · GPGPU · PC",
      role: "Graphics & Simulation Programmer",
      gameplaySummary: "Una simulazione fluidodinamica basata su griglia e sandbox fisico in tempo reale. Il sistema calcola le equazioni di propagazione delle onde superficiali e risolve la complessa interazione fisica bidirezionale con corpi rigidi 3D arbitrari, consentendo agli oggetti di galleggiare, creare attrito e generare onde di scia realistiche.",
      personalContributionSummary: "Ideazione, progettazione e sviluppo autonomo dell'intera simulazione in C++ e OpenGL come progetto d'esame accademico. Parallelizzazione dei calcoli fisici intensivi delle onde su thread GPU tramite NVIDIA CUDA, con shader superficiali basati su ottica di Fresnel.",
      description: "Una simulazione fluidodinamica basata su griglia e sandbox fisico in tempo reale. Il sistema calcola le equazioni di propagazione delle onde superficiali e risolve la complessa interazione fisica bidirezionale con corpi rigidi 3D arbitrari, consentendo agli oggetti di galleggiare, creare attrito e generare onde di scia realistiche.\n\nIdeazione, progettazione e sviluppo autonomo dell'intera simulazione in C++ e OpenGL come progetto d'esame accademico. Parallelizzazione dei calcoli fisici intensivi delle onde su thread GPU tramite NVIDIA CUDA, con shader superficiali basati su ottica di Fresnel.",
      tags: ["C++", "NVIDIA CUDA", "OpenGL", "GPGPU", "Simulazione Fisica", "Matematica 3D"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water",
      platform: "PC (Windows / Linux)",
      engine: "Motore Custom C++ + OpenGL",
      networking: "Architettura NVIDIA CUDA",
      authors: "Mauro Brochier",
      teamRoles: "Graphics Programmer, Systems Engineer",
      driveVideoUrl: "https://drive.google.com/file/d/1SSt9NNn0LSsy904b9N3yUaVozUVa0Y7O/view?usp=sharing",
      localVideoUrl: "/videos/water_sim.mp4",
      detailedContributions: {
        designed: [
          "Ideazione e formulazione del framework matematico per le equazioni di propagazione delle onde di superficie basate su griglia (height-field wave physics).",
          "Progettazione delle regole di accoppiamento dinamico bidirezionale tra fluido e corpi rigidi 3D arbitrari, consentendo galleggiamento, attrito e generazione di onde di scia realistiche.",
          "Architettura modulare della pipeline, disaccoppiando in modo pulito il calcolo fisico parallelo su GPU dal rendering grafico in tempo reale."
        ],
        implemented: [
          "Parallelizzazione della pipeline di simulazione fisica in C++ tramite kernel NVIDIA CUDA dedicati, eseguendo il calcolo delle onde su migliaia di thread GPU concorrenti.",
          "Ingegnerizzazione del rendering realistico della superficie dell'acqua in OpenGL moderno con shader GLSL basati su riflessione di Fresnel, rifrazione e caustiche.",
          "Sviluppo di algoritmi per condizioni al contorno 3D per calcolare la spinta idrostatica di galleggiamento e lo spostamento volumetrico per corpi rigidi di forma arbitraria."
        ],
        authoredDocs: [
          "Relazione tecnica accademica (Università degli Studi di Milano) con formalizzazione matematica del fluido, ottimizzazione della memoria CUDA e profilazione dei benchmark."
        ]
      },
      storySteps: [
          {
            tag: "CALCOLO GPGPU",
            title: "Kernel Fisici Paralleli in CUDA",
            description: "Implementazione del calcolo parallelo ad alte prestazioni in C++ e CUDA. La griglia del fluido e i campi di velocità vengono elaborati direttamente sulla GPU tramite migliaia di thread hardware concorrenti.",
            mediaLabel: "[ Calcolo Parallelo // Dispatch Kernel CUDA & Gestione Memoria ]",
            imageSrc: "/images/water_immagine1.png"
          },
          {
            tag: "FLUIDODINAMICA",
            title: "Propagazione Onde e Rendering OpenGL",
            description: "Calcolo della propagazione ondosa in tempo reale tramite displacement di height-field e shader OpenGL dedicati, con simulazione di riflessioni realistiche ed effetti caustici.",
            mediaLabel: "[ Motore Grafico // Shaders, Caustiche & Displacement Vertici ]",
            imageSrc: "/images/water_immagine2.png"
          },
          {
            tag: "INTERAZIONE CON CORPI RIGIDI",
            title: "Accoppiamento con Mesh 3D Arbitrarie",
            description: "Simulazione fisica bidirezionale tra corpi rigidi 3D dinamici e la superficie liquida: gli oggetti galleggiano, generano onde concentriche di scia e si spostano coerentemente con il fluido.",
            mediaLabel: "[ Simulazione Fisica // Collisioni Mesh & Generazione Onde di Scia ]",
            imageSrc: "/images/water_immagine3.png"
          }
        ]
    }
  ],
  experiences: [
    {
      id: "edison",
      role: "Docente di Game Design & Programmazione",
      company: "Edison School",
      period: "Ott 2025 – Presente",
      location: "Roma, Italia",
      course: "Corso: Game Developer – Unity 3D",
      description: "Insegnamento dei principi di game design e programmazione tecnica di gameplay a studenti di diverse fasce d'età e livelli di competenza, dalle basi ai workflow avanzati.",
      bullets: [
        "Insegnamento di Game Design e Game Programming a studenti con diversi background, dal livello base a quello avanzato.",
        "Erogazione di formazione pratica su Unity, C# e Visual Scripting.",
        "Mentoring degli studenti durante l'intero ciclo di sviluppo dei loro progetti individuali di gioco, dall'idea iniziale all'implementazione tecnica.",
        "Docenza erogata a 9 classi differenti ad oggi con copertura completa del programma."
      ],
      skills: ["Unity 3D", "C#", "Visual Scripting", "Architettura Gameplay", "Mentoring", "Didattica"]
    },
    {
      id: "cristaltec",
      role: "Game Designer & Programmer",
      company: "Cristaltec SpA",
      period: "Feb 2022 – Ago 2022",
      location: "Roma, Italia",
      description: "Sviluppo di sistemi di gameplay e bilanciamento matematico all'interno di un ambiente industriale regolamentato.",
      bullets: [
        "Progettazione e implementazione della feature di gameplay rolling-card, definendo condizioni logiche, timing e comportamenti di caduta delle carte.",
        "Apprendimento e applicazione rapida di un linguaggio di programmazione e tool proprietari, impiegandoli direttamente nello sviluppo di logiche di gioco in pipeline industriale."
      ],
      skills: ["Sistemi di Gameplay", "Linguaggi Proprietari", "Comportamenti di Stato", "Logica di Gioco", "Timing & Bilanciamento"]
    },
    {
      id: "nextrek-social",
      role: "Videogame Designer & Programmer",
      company: "Nextrek S.r.l.",
      period: "Lug 2021 – Ago 2021",
      location: "Roma, Italia",
      description: "Ingegnerizzazione dell'architettura AI e simulazione sociale per un titolo 3D in Unity ispirato a The Sims.",
      bullets: [
        "Progettazione e implementazione di un sistema integrale di interazione sociale per PNG in un gioco 3D su Unity ispirato a The Sims, combinando Finite State Machines (FSM) e Behavior Trees.",
        "Sviluppo di un ampio spettro di comportamenti e interazioni autonome dei PNG: conversazioni contestuali, corteggiamento, ballo, reazioni emotive, scambio d'informazioni, memoria a breve termine e dinamiche di gruppo."
      ],
      skills: ["Unity 3D", "C#", "Behavior Trees", "Finite State Machines (FSM)", "Sistemi AI per PNG", "Simulazione Sociale"]
    },
    {
      id: "nextrek-internship",
      role: "Game Designer & Programmer (Tirocinio Universitario)",
      company: "Nextrek S.r.l.",
      period: "Mar 2021 – Apr 2021",
      location: "Roma, Italia",
      description: "Ideazione, design e sviluppo integrale autonomo di Maze's Soul come titolo individuale durante un tirocinio universitario curriculare.",
      bullets: [
        "Ideazione, progettazione e sviluppo autonomo di Maze's Soul come progetto di gioco individuale durante un tirocinio professionale di 238 ore.",
        "Gestione dell'intero ciclo di vita del titolo in piena autonomia, dal concept iniziale e design cognitivo all'implementazione mobile nativa in C#."
      ],
      skills: ["Unity 3D", "C#", "Sviluppo Mobile", "Prototipazione Rapida", "Sviluppo Autonomo"]
    }
  ],
  education: [
    {
      id: "master",
      degree: "Laurea Magistrale in Informatica – Videogame Design and Programming (LM-18)",
      institution: "Università degli Studi di Milano",
      period: "2023 – Ott 2026",
      grade: "106 / 110",
      supervisor: "Prof.ssa Anna Laura Ripamonti",
      thesisSubject: "Videogame Design",
      thesisTitle: "Framework Euristico per il Dynamic Difficulty Adjustment (DDA), mediante un'Architettura 'Glass-Box' a supporto del Game Designer",
      thesisDetails: "Ideazione, modellazione matematica e validazione empirica di un framework di Dynamic Difficulty Adjustment euristico. Ingegnerizzazione di un'architettura di telemetria trasparente ('glass-box') che fornisce ai game designer visibilità totale e controllo manuale sulla modulazione del Flow in tempo reale in titoli action punitivi.",
      skills: ["Dynamic Difficulty Adjustment (DDA)", "Teoria del Flow", "Telemetria Giocatore", "Game Balance", "Architettura Glass-Box", "Psicologia del Gioco"]
    },
    {
      id: "bachelor",
      degree: "Laurea Triennale in Ingegneria Informatica (L-8)",
      institution: "Università degli Studi Roma Tre",
      period: "2015 – 2021",
      supervisor: "Prof. Giuseppe Di Battista",
      thesisSubject: "Game Design & Psicologia",
      thesisTitle: "Player's memory, from 2d to 3d [Videogame – Maze's Soul]",
      thesisDetails: "Studio empirico sulla ritenzione della memoria visuo-spaziale umana durante la transizione prospettica in tempo reale tra mappe bidimensionali zenitali e navigazione tridimensionale in terza persona, formalmente implementato e dimostrato attraverso il videogioco mobile Maze's Soul.",
      skills: ["Ingegneria Informatica", "Algoritmi e Strutture Dati", "Architettura dei Calcolatori", "Cognizione Spaziale", "Sistemi Operativi", "Reti"]
    }
  ],
  skills: [
    {
      category: "Gameplay & Technical Design",
      level: "Avanzato",
      icon: "⚡",
      items: [
        "Design dei Sistemi di Gameplay",
        "Implementazione Tecnica di Meccaniche",
        "Meccaniche e Controlli del Giocatore",
        "Prototipazione Rapida di Gameplay",
        "Iterazione di Design & Bilanciamento",
        "Redazione Documenti GDD / TDD / LDD",
        "Fogli di Calcolo per il Game Balance"
      ]
    },
    {
      category: "Sistemi AI, PNG & Combattimento",
      level: "Specializzato",
      icon: "🧠",
      items: [
        "Architettura dell'Intelligenza Artificiale per PNG",
        "Behavior Trees (BT) & Custom Editor Tooling",
        "Macchine a Stati Finiti (FSM)",
        "Sistemi di Combattimento (Melee & Shooting)",
        "Coni di Percezione Sensoriale & Line-of-Sight",
        "Pacing dei Nemici & Bilanciamento della Sfida"
      ]
    },
    {
      category: "Motori di Gioco & Programmazione",
      level: "Avanzato",
      icon: "🎮",
      items: [
        "Unity Engine (Avanzato 3D & 2D)",
        "C# (Programmazione Nativa di Gameplay)",
        "Programmazione Orientata agli Oggetti (OOP)",
        "Architettura Component-Based",
        "Visual Scripting",
        "Ottimizzazione per Dispositivi Mobili Android"
      ]
    },
    {
      category: "Networking Multiplayer & Version Control",
      level: "Avanzato",
      icon: "🌐",
      items: [
        "Mirror Networking (Co-op Multiplayer)",
        "Architettura Client-Server",
        "Sincronizzazione di Stato & Chiamate RPC",
        "Git (Branching Avanzato & Workflow di Merge)",
        "Pipeline di Sviluppo Collaborativo in Team"
      ]
    },
    {
      category: "Audio Interattivo & Spaziale 3D",
      level: "Avanzato",
      icon: "🎧",
      items: [
        "FMOD Studio (Architettura Eventi & Routing Parametri)",
        "Steam Audio (Spazializzazione Binaurale HRTF 3D)",
        "Musica Adattiva & Crossfade Guidati da Parametri",
        "Integrazione Audio 3D in Unity",
        "Occlusione Acustica Ambientale"
      ]
    },
    {
      category: "Grafica, GPGPU & Sistemi",
      level: "Ingegneristico",
      icon: "⚙️",
      items: [
        "C++ (Programmazione di Sistemi)",
        "NVIDIA CUDA (Fisica Ondosa Parallela su GPGPU)",
        "OpenGL & Shader GLSL Personalizzati",
        "Simulazione Fluidodinamica in Tempo Reale",
        "Shader Ottici basati su Fresnel",
        "Python, Java, C"
      ]
    }
  ]
};