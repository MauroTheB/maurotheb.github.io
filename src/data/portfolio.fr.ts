export const PORTFOLIO_FR = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Technical Game Designer",
    subheading: "Technical Game Designer & Systems Engineer. À la croisée du game design systémique, de la psychologie du joueur et de l'implémentation technique en C# et C++.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    cvUrl: "/mauro_brochier_cv.pdf",
    graduationStatus: "Master en Informatique (Conception de Jeux Vidéo) — Diplômé en oct. 2026",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Italien", level: "Langue maternelle" },
      { name: "Anglais", level: "B2 (Maîtrise professionnelle)" },
    ],
  },
  ui: {
    heroBtnGithub: "Aperçu GitHub",
    heroBtnContact: "Me contacter",
    heroBtnCv: "Télécharger le CV (PDF)",
    ddaBadge: "DISPONIBLE",
    hudProjects: "Projets",
    hudExperience: "Expérience",
    hudEducation: "Formation",
    hudSkills: "Compétences",
    projectsHeading: "Jeux Vidéo & Systèmes de Gameplay",
    projectsSubheading: "Cliquez sur un projet pour explorer son breakdown de design, son architecture et ses choix de gameplay.",
    exploreProject: "Explorer le Design & le Processus",
    backToProjects: "Retour aux projets",
    viewSource: "Voir le dépôt & le code source ↗",
    overviewHeading: "Vue d'ensemble & Game Design",
    mediaHeading: "Médias & Aperçu Visuel",
    expHeading: "Expérience Professionnelle",
    expSubheading: "Enseignement académique, développement sur moteurs propriétaires et production sous Unity.",
    eduHeading: "Parcours Académique & Recherche",
    eduSubheading: "Du Dynamic Difficulty Adjustment (DDA) aux fondamentaux de l'ingénierie informatique.",
    thesisBadge: "Mémoire de Master / Licence",
    skillsHeading: "Stack Technique & Outillage",
    skillsSubheading: "Boîte à outils technique : langages bas niveau, moteurs de jeu et pipelines de design.",
    footerText: "Hébergé sur GitHub Pages • 0 kB Bloat • Edge CDN sans surcoût",
    gddButton: "Game Design Document (GDD)",
    tddButton: "Technical Design Document (TDD)",
    watchTrailer: "Voir le Trailer Officiel",
    watchGameplay: "Gameplay Complet",
    teamHeading: "Crédits & Fiche Technique",
    platformLabel: "Plateforme",
    engineLabel: "Moteur & Réseau",
    authorsLabel: "Équipe",
    contributionsHeading: "Contributions & Ownership Technique",
    designedLabel: "Conçu & Implémenté en autonomie",
    implementedLabel: "Implémentation Technique & Systèmes",
    coDevelopedLabel: "Co-développé en équipe",
    docsLabel: "Documentation Design & Technique",
    ipNoticeHeading: "Note de Propriété Intellectuelle & Recherche",
    empiricalStudyLabel: "Validation Empirique & Playtests",
    gradeLabel: "Mention / Note finale",
    supervisorLabel: "Directeur de mémoire",
    subjectLabel: "Domaine",
    footerHeading: "Concevons des systèmes immersifs ensemble",
    footerSubheading: "À l'écoute d'opportunités en Technical Game Design, Gameplay Systems et AI Design à l'international.",
    backToTop: "Haut de page ↑",
    watchDriveVideo: "Voir le gameplay sur Google Drive ↗",
    headphonesBadge: "CASQUE RECOMMANDÉ // AUDIO 3D",
    playDemo: "Jouer à la démo sur itch.io",
  },
  projects: [
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      year: "Avr 2025 – Juil 2025",
      period: "2025",
      category: "Projet Académique en Équipe / Industry Showcase",
      coverImage: "/images/pomegranade_banner.png",
      primaryFocus: "Lead Game & Systems Design · Combat Co-op",
      genrePlatform: "Jeu de Survie Co-op · 2–4 Joueurs · PC",
      tagline: "Jeu de Survie Co-op · 2–4 Joueurs · PC",
      role: "Team Leader · Lead Game & Systems Designer",
      highlight: "Industry Showcase · New Game Designer 2025 · 3e Place",
      gameplaySummary: "Un party-game de survie coopératif pour 2 à 4 joueurs dans une forêt enchantée des limbes. L'équipe jongle en temps réel entre collecte physique de ressources (bois, grenades, réparation des barrières, entretien du feu) et vagues nocturnes intenses, avant que l'aube ne pétrifie les menaces sur place.",
      personalContributionSummary: "Direction du game & systems design en tant que Team Leader, rédaction d'environ 70 % du GDD et 100 % du TDD, conception et co-implémentation du combat, du cycle jour-nuit, de l'IA ennemie et des mécaniques co-op sous Mirror.",
      description: "Un party-game de survie coopératif pour 2 à 4 joueurs dans une forêt enchantée des limbes. L'équipe jongle entre collecte physique de ressources et vagues nocturnes avant que l'aube ne pétrifie les ennemis sur place.",
      tags: ["Game Design", "System Design", "Combat Design", "Co-op Multijoueur", "Unity", "Mirror Networking"],
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
          title: "Rythme Jour-Nuit, Aube Pétrifiante & Économie Physique Co-op",
          scopeBadge: "Prototype Jouable",
          media: {
            type: "image",
            src: "/images/immagine_falo_personaggio.png",
            caption: "Défense du feu de camp et boucle physique de transport des ressources"
          },
          whatAndWhy: "Pour retrouver la tension coopérative d'un Overcooked sans surcharger l'interface, il n'y a aucun inventaire abstrait : porter du bois ou des grenades occupe les mains et déséquipe l'arme, obligeant l'équipe à arbitrer entre tir, réparations et récolte. À l'aube, les créatures se pétrifient sur place au lieu de disparaître, maintenant une pression spatiale constante.",
          processDetails: {
            ideation: "Inspiré du chaos coopératif d'Overcooked et de l'escalade de CoD Zombies, toute l'action se déroule d'un seul tenant dans la même arène sans coupure de mode.",
            mechanicsOrTuning: [
              "Secouage Co-op : deux joueurs coopèrent pour secouer les grenadiers et obtenir des munitions, ou les abattent pour récupérer du bois.",
              "Dilemme du Cycle des Arbres (GDD 5.5.3) : les arbres coupés ne repoussent que le jour à de nouveaux emplacements et ne donnent pas de fruits avant maturité—couper maintenant sacrifie les munitions futures.",
              "Sécurité Feu de Camp & Pétrification : le feu garantit une puissance de feu minimale anti soft-lock, tandis qu'à l'aube les ennemis figés en niveaux de gris restent une menace latente."
            ],
            iterationOrResult: "Validé en sessions live à 4 joueurs lors de New Game Designer 2025 (3e Place), où la limite de portage a généré une vraie coordination spontanée."
          }
        },
        {
          id: "pomegranade-combat",
          discipline: "Combat & Arsenal Design",
          title: "Arsenal à base de Grenades & Différenciation des Rôles",
          scopeBadge: "Prototype (3) + GDD (3)",
          media: {
            type: "video",
            src: "/videos/pomegranade.mp4",
            caption: "Sensations de combat et de tir in-engine dans la vertical slice jouable"
          },
          whatAndWhy: "Le tir est directement lié à l'économie de la carte : les joueurs fendent les grenades récoltées pour en extraire des munitions plutôt que de ramasser des drops génériques. Dans le prototype, trois armes distinctes permettent de répartir les rôles entre couverture des porteurs, tenue des goulets et nettoyage de zone.",
          processDetails: {
            ideation: "Évité les armes hitscan uniformes en donnant à chaque outil sa propre balistique, sa courbe risque-récompense et son utilité d'équipe.",
            mechanicsOrTuning: [
              "Seedshot (Jouable) : pistolet précis à cadence moyenne conçu pour économiser les munitions.",
              "Seedsrusher (Jouable) : fusil à 3 canons à très haute cadence pour couvrir les coéquipiers en pleine réparation.",
              "Pomegranade (Jouable) : grenade explosive en cloche à haut risque/récompense contre les groupes d'ennemis.",
              "Extensions GDD : XBowrter (arbalète parabolique de précision), Firepome (lance-flammes DoT de zone) et S-Axe-Seed (hache boomerang à contrôle de trajectoire)."
            ],
            iterationOrResult: "Ajout de hitboxes dédiées, VFX d'impact et animations de flinch pour garder le combat lisible dans le chaos à 4 joueurs."
          }
        },
        {
          id: "pomegranade-ai",
          discipline: "AI & Encounter Design",
          title: "Logique d'Infiltration Manta & Triangle Tactique des Menaces",
          scopeBadge: "Prototype (Manta) + GDD",
          media: {
            type: "image",
            src: "/images/players_vs_monsters.png",
            caption: "Assaut des Mantas autour du périmètre défensif du refuge"
          },
          whatAndWhy: "Même avec une IA légère de prototype, le ciblage punit le camping passif. Les Mantas implémentées ciblent en priorité les segments de barrière déjà endommagés pour exploiter les points faibles, et contournent automatiquement les brèches ouvertes pour siphonner le feu de camp.",
          processDetails: {
            ideation: "Conçu trois familles d'ennemis complémentaires afin que les vagues mixtes imposent une priorisation constante des cibles.",
            mechanicsOrTuning: [
              "Manta (Jouable) : créature spectrale ignorant le terrain ; priorise les barrières affaiblies, traverse les brèches, draine le feu et se pétrifie à l'aube.",
              "Simian (Extension GDD) : perturbateur agile qui franchit les murs et sabote les ressources au sol en les jetant hors d'atteinte.",
              "Bull (Extension GDD) : tank de siège lourd qui charge plusieurs segments de barrière et abat les arbres à ressources."
            ],
            iterationOrResult: "Garder le comportement des Mantas déterministe et lisible a permis de calibrer la montée en puissance des vagues avant d'élargir le bestiaire."
          }
        },
        {
          id: "pomegranade-coop",
          discipline: "Technical & Co-op UX Design",
          title: "Sync Host-Client Mirror, Caméra Accessible & Roue d'Emotes",
          scopeBadge: "Prototype Jouable",
          media: {
            type: "placeholder",
            src: "",
            alt: "Roue d'Emotes Radiale & Synchronisation Mirror Host-Client",
            caption: "Capture UI in-game et schéma de synchronisation réseau en cours de mise à jour"
          },
          whatAndWhy: "Un party-game nerveux échoue si le joueur se bat contre la caméra ou ne peut pas communiquer sans chat vocal. J'ai conçu une caméra 360° à tangage borné pour réduire la charge cognitive, une Roue d'Emotes avec indicateurs hors-écran et audio dédié, et co-développé la logique co-op Host-Client sous Mirror avec autorité serveur sur les objets physiques.",
          processDetails: {
            ideation: "Associé le ping radial instantané à la League of Legends à une caméra accessible pour une prise en main immédiate.",
            mechanicsOrTuning: [
              "Roue d'Emotes (Jouable) : pings contextuels (« Aide pour secouer l'arbre », « Barrière à réparer », « Feu presque éteint ») avec icônes ancrées aux bords d'écran, SFX uniques et cooldown anti-spam (6 usages → 10s).",
              "Contraintes Caméra : rotation horizontale à 360° avec angle vertical verrouillé pour éviter toute désorientation.",
              "Sync Mirror : états partagés de portage/lancer d'objets et destruction procédurale des barrières codéveloppés avec le programmeur réseau."
            ],
            iterationOrResult: "Présenté en démo live devant les leads de Milestone, Ubisoft et Nacon à New Game Designer 2025 (3e Place)."
          }
        }
      ]
    },
    {
      id: "puppeteer",
      title: "A Child's Tale: Whisper of the Puppeteer",
      year: "Avr 2024 – Juil 2024",
      period: "2024",
      category: "Projet Personnel",
      coverImage: "/images/puppeteer_banner.png",
      primaryFocus: "Game Design Sensoriel & Audio Adaptatif (FMOD / Steam Audio)",
      genrePlatform: "Horreur Psychologique à la 1re Personne · PC & Meta XR VR",
      tagline: "Horreur Psychologique à la 1re Personne · PC & Meta XR VR",
      role: "Développeur Solo · Game & Technical Audio Designer",
      gameplaySummary: "Une expérience d'horreur psychologique (PC & Meta XR VR) où la vue est réduite à l'ouverture étroite d'un monocle, faisant de l'ouïe le sens principal d'orientation. Guidé par une voix féminine éthérée et une onde d'écholocalisation blanche déclenchée en pressant un Cœur, le joueur résout l'énigme du piano tout en évitant les zones d'embuscade du Marionnettiste.",
      personalContributionSummary: "Conception, design et développement intégral en solo : gameplay par privation visuelle, pipeline spatial FMOD/Steam Audio, énigme du piano itérée par playtests, déclencheurs de poursuite A* et contrôles physiques complets en Meta XR VR.",
      description: "Une expérience d'horreur psychologique en première personne (PC & Meta XR VR) où l'ouïe remplace la vue comme outil principal de navigation et de survie.",
      tags: ["Game Design", "FMOD Studio", "Steam Audio", "Meta XR VR", "Audio Technique", "Unity"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      videoUrl: "/videos/puppeteer.mp4",
      platform: "PC & Meta XR VR",
      engine: "Unity · C# · FMOD Studio · Steam Audio",
      authors: "Mauro Brochier",
      teamRoles: "Développeur Solo — Game Designer, Gameplay Programmer",
      gddUrl: "https://docs.google.com/document/d/12cTheqaPUP9HEnYansgj9i_p2kzd_NlF/edit?usp=sharing&ouid=118263974300292559359&rtpof=true&sd=true",
      trailerId: "gVvd9aPJDlY",
      vrBadge: "META XR // BUILD VR COMPLÈTE",
      audioNotice: "Audio binaural 3D avancé — casque vivement recommandé pour le repérage spatial.",
      designFeatures: [
        {
          id: "puppeteer-echolocation",
          discipline: "Design Sensoriel & Core Loop",
          title: "Cécité au Monocle & Écholocalisation Blanche par Battement de Cœur",
          scopeBadge: "Build PC & VR Complète",
          media: {
            type: "video",
            src: "/videos/puppeteer.mp4",
            caption: "Gameplay VR et exploration sensorielle à l'intérieur du manoir"
          },
          whatAndWhy: "Plutôt que d'utiliser l'obscurité comme simple décor, j'ai mécaniquement remplacé la vue par l'ouïe. Dès le début, le joueur est aveuglé et ne perçoit le monde qu'à travers la fente circulaire d'un monocle ; un PNJ lui confie un Cœur qui, une fois pressé, émet une impulsion sonore illuminant brièvement l'architecture en lumière blanche.",
          processDetails: {
            ideation: "Conçu pour contraindre le joueur à écouter l'acoustique des pièces et la Voix Guide au lieu de foncer visuellement dans les couloirs.",
            mechanicsOrTuning: [
              "Contrainte du Monocle : l'ouverture réduite supprime la vision périphérique et impose un repérage auditif actif.",
              "Sonar du Cœur : presser le cœur propage une onde acoustique dessinant les volumes alentour en lumière blanche stylisée.",
              "Voix Guide Dynamique : déplace sa source sonore de pièce en pièce au fil des objectifs—une erreur d'orientation mène droit aux salles d'apparition du Marionnettiste."
            ],
            iterationOrResult: "Crée une boucle de tension ciblée (30 min à 2 h selon l'aisance spatiale et musicale) où l'écoute conditionne la survie."
          }
        },
        {
          id: "puppeteer-fmod",
          discipline: "Audio Adaptatif · FMOD & Steam Audio",
          title: "Calibration 5 Profils HRTF, Filtrage Fenêtres & Auralisation 3e Ordre",
          scopeBadge: "FMOD Studio + Steam Audio",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine3.png",
            caption: "Environnement du manoir piloté par filtrage procédural FMOD et occlusion Steam Audio"
          },
          whatAndWhy: "Quand la survie dépend de la capacité à identifier la pièce d'origine d'un son, un simple panoramique stéréo ne suffit plus. J'ai conçu un pipeline acoustique sous FMOD Studio et Steam Audio—ouvert par un test de calibration sur 5 profils HRTF—pour que pluie extérieure, bruits de pas et menaces traversent murs et portes avec réalisme.",
          processDetails: {
            ideation: "La morphologie auriculaire variant d'une personne à l'autre, proposer un test rapide de 5 profils HRTF assure à chaque joueur une localisation directionnelle fiable.",
            mechanicsOrTuning: [
              "Atténuation par Fenêtres (FMOD) : filtre passe-bas procédural piloté par la distance à la fenêtre la plus proche moyennée avec toutes les autres—atteignant l'étouffement maximal au centre exact de la maison.",
              "Bruits de Pas Procéduraux (FMOD) : variation dynamique sur 5 surfaces (sable, gravier, terre, herbe, bois).",
              "Auralisation Steam Audio : matériaux bois absorbants, occlusion murs/portes sur les pas du Marionnettiste et la Voix, et réverbération calculée jusqu'à la 3e réflexion."
            ],
            iterationOrResult: "Rend l'ouverture d'une porte et la provenance des dangers immédiatement lisibles à l'oreille sans aucun marqueur HUD."
          }
        },
        {
          id: "puppeteer-piano",
          discipline: "Puzzle Design & Itération Playtest",
          title: "Piano Physique Jouable & Équilibrage pour Non-Musiciens",
          scopeBadge: "Itéré par Playtests",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine1.png",
            caption: "Exploration atmosphérique menant à la salle de l'énigme musicale"
          },
          whatAndWhy: "L'énigme centrale repose sur un piano entièrement jouable : le joueur doit relever des indices diégétiques dans la pièce pour rejouer la bonne mélodie. Les premiers playtests ont révélé un mur de difficulté—seuls les musiciens dotés de l'oreille absolue y arrivaient—ce qui a motivé plusieurs itérations de design.",
          processDetails: {
            ideation: "Ancrer l'énigme principale dans la thématique sonore et tactile plutôt que dans une chasse aux clés classique.",
            mechanicsOrTuning: [
              "Instrument Temps Réel : chaque touche émet sa note et répond physiquement sur PC comme avec les mains en VR.",
              "Indices Diégétiques : les repères de séquence sont intégrés au décor de la salle sans tutoriel intrusif."
            ],
            iterationOrResult: "Pivot Playtest : simplification progressive de la mélodie cible et clarification des indices jusqu'à ce que des testeurs non-musiciens résolvent l'énigme de façon fiable (30 min pour musiciens, ~2 h pour joueurs occasionnels)."
          }
        },
        {
          id: "puppeteer-vr-ai",
          discipline: "UX VR & Design de Menace",
          title: "Gestes Physiques Meta XR, Radar Haptique & Poursuite A*",
          scopeBadge: "Release VR Complète",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine2.png",
            caption: "Rencontre avec le Marionnettiste et build interactive Meta XR VR"
          },
          whatAndWhy: "Pour la version VR complète sur Meta XR, chaque interaction a été repensée autour de gestes naturels et de retours haptiques gradués selon la distance aux objectifs—tout en gardant le Marionnettiste comme punition déterministe en cas de perte de la Voix Guide.",
          processDetails: {
            ideation: "Des flèches HUD briseraient l'horreur en VR ; la gestuelle directe et la vibration des manettes prolongent le pilier sensoriel.",
            mechanicsOrTuning: [
              "Interactions Naturelles VR : poussée physique pour ouvrir les portes, geste de saisie vers le bas avec les gâchettes pour ramasser les objets, frappe directe sur les touches du piano.",
              "Radar Haptique de Proximité : l'impulsion vibratoire s'intensifie à l'approche d'un objectif.",
              "IA du Marionnettiste : apparaît sur des points de sanction précis lorsqu'on s'écarte de la Voix Guide, contournant les obstacles via Unity NavMesh (pathfinding A*) jusqu'à la capture."
            ],
            iterationOrResult: "Build VR menée de bout en bout et présentée dans le trailer gameplay de la dernière version."
          }
        }
      ]
    },
    {
      id: "dda-thesis",
      title: "Framework DDA Plug-and-Play & Testbed Soulslike",
      year: "Oct 2025 – Oct 2026",
      period: "2025–2026",
      category: "Mémoire de Master / Projet de Recherche Individuel",
      coverImage: "/images/dda_banner.png",
      primaryFocus: "Système DDA Découplé & Télémétrie (15 Joueurs)",
      genrePlatform: "Prototype Soulslike · Framework de Recherche · PC",
      tagline: "Prototype Soulslike · Framework de Recherche · PC",
      role: "Technical Game Designer · Systems Engineer",
      highlight: "Système Prêt à l'Emploi · Étude Empirique sur 15 Joueurs",
      gameplaySummary: "Un framework de Dynamic Difficulty Adjustment (DDA) plug-and-play et agnostique au genre, développé sous Unity et validé sur un prototype Soulslike conçu sur mesure. Pensé comme module découplé exploitant la télémétrie en temps réel pour moduler le rythme tout en préservant l'exigence punitive du genre.",
      personalContributionSummary: "Architecture complète du module DDA black-box prêt à être intégré sur divers genres, création d'un testbed Soulslike rigoureux (rupture dynamique d'armure et sang en MRT) pour garantir une télémétrie fiable, et validation empirique sur 15 joueurs.",
      description: "Framework DDA agnostique au genre validé par une étude empirique sur 15 joueurs via un testbed Soulslike exigeant développé sous Unity.",
      confidentialityNotice: "Note de Propriété Intellectuelle : Les variables algorithmiques internes, formules mathématiques et pondérations heuristiques sont volontairement omises afin de protéger la recherche.",
      playtestNotice: "Validé via une étude empirique qualitative et quantitative menée auprès de 15 playtesteurs.",
      platform: "PC",
      engine: "Unity · C#",
      authors: "Mauro Brochier (Sous la direction de la Prof. Laura Ripamonti)",
      teamRoles: "Chercheur Solo, Technical Game Designer, Systems Programmer",
      tags: ["Dynamic Difficulty Adjustment", "System Design", "Télémétrie Joueur", "Combat Design", "Technical Art (MRT)", "Unity"],
      designFeatures: [
        {
          id: "dda-architecture",
          discipline: "Architecture Système · Plug & Play",
          title: "Framework DDA Découplé & Agnostique au Genre (Prêt à Intégrer)",
          scopeBadge: "Module Production-Ready",
          media: {
            type: "image",
            src: "/images/dda_immagine2.png",
            caption: "Testbed de combat de boss piloté par le module DDA découplé"
          },
          whatAndWhy: "Un système de difficulté échoue en production s'il est codé en dur dans les scripts ennemis. J'ai conçu le logiciel DDA comme un module Unity autonome, totalement séparé du testbed Soulslike : il consomme une télémétrie normalisée et pilote des leviers exposés au designer, le rendant intégrable sur n'importe quel jeu d'action ou de survie.",
          processDetails: {
            ideation: "Traiter le Soulslike strictement comme un client de stress-test garantit la portabilité du package et une séparation nette des responsabilités.",
            mechanicsOrTuning: [
              "Séparation Black-Box : capteurs de télémétrie et hooks de paramètres gameplay sont isolés du cœur adaptatif protégé.",
              "Bornes de Sécurité Designer : des plages min/max exposées garantissent que la modulation ne trahit jamais l'identité punitive du jeu.",
              "Protection IP : les formules heuristiques et poids internes restent strictement encapsulés."
            ],
            iterationOrResult: "Livré sous forme de module Unity autonome prêt à l'intégration et éprouvé en charge de combat réelle."
          }
        },
        {
          id: "dda-telemetry",
          discipline: "Validation Empirique · Données",
          title: "Étude sur 15 Joueurs : Maintien du Flow & Équité Perçue",
          scopeBadge: "Étude sur 15 Playtesteurs",
          media: {
            type: "image",
            src: "/images/dda_immagine3.png",
            caption: "Affrontement Soulslike exigeant évalué lors de l'étude de Flow sur 15 joueurs"
          },
          whatAndWhy: "Un système adaptatif ne vaut que par ses données terrain. J'ai mené une étude qualitative et quantitative auprès de 15 joueurs aux profils variés afin de vérifier si la modulation temps réel améliorait le maintien du Flow et la durée d'engagement sans que les vétérans ne perçoivent d'aide artificielle.",
          processDetails: {
            ideation: "Croisement entre télémétrie objective in-game (courbes d'échec, rythme d'engagement) et questionnaires psychologiques de Flow post-session.",
            mechanicsOrTuning: [
              "Panel hétérogène allant de joueurs action occasionnels à des habitués de Soulslike.",
              "Mesure de l'équité perçue, de la tenue de la tension et de l'endurance sur des combats de boss punitifs."
            ],
            iterationOrResult: "Gains mesurables sur la rétention du Flow et le sentiment de justesse (travail de Master encadré par la Prof. Laura Ripamonti, Université de Milan)."
          }
        },
        {
          id: "dda-combat-testbed",
          discipline: "Combat Design (Testbed)",
          title: "Système de Combat Soulslike AAA-Like pour Éviter les Données Bruitées",
          scopeBadge: "Testbed Jouable",
          media: {
            type: "image",
            src: "/images/dda_immagine1.png",
            caption: "Boucle de combat Soulslike exigeante conçue pour une télémétrie fiable"
          },
          whatAndWhy: "Un mauvais game design produit des données sales : si les joueurs meurent à cause de contrôles flottants ou de hitboxes imprécises, la télémétrie ne mesure plus la vraie difficulté. J'ai conçu un système de combat lourd, exigeant et lisible afin que chaque défaite reflète fidèlement le niveau d'erreur du joueur.",
          processDetails: {
            ideation: "Construire un testbed aux standards Soulslike était un prérequis méthodologique pour éviter que des défauts de prise en main ne polluent le jeu de données DDA.",
            mechanicsOrTuning: [
              "Attaques engagées à inertie marquée, gestion stricte de l'endurance et fenêtres d'ouverture punitives.",
              "Télégraphie claire des patterns de boss et détection précise des impacts."
            ],
            iterationOrResult: "Suppression du bruit dû aux contrôles durant les playtests, garantissant la propreté des relevés sur les 15 participants."
          }
        },
        {
          id: "dda-mrt-gore",
          discipline: "Technical Art & Feedback Diégétique",
          title: "Rupture Dynamique d'Armure & Rendu du Sang via MRT",
          scopeBadge: "Technical Craft",
          media: {
            type: "placeholder",
            src: "",
            alt: "Rupture Dynamique d'Armure & Pipeline Sang MRT sur Mesh Animé",
            caption: "Comparatif avant/après fracture d'armure et passes MRT en cours de mise à jour"
          },
          whatAndWhy: "Pour transmettre la brutalité des impacts sans surcharger le HUD, j'ai implémenté une rupture dynamique d'armure avec altération réelle des textures ainsi qu'un rendu du sang par Multiple Render Targets (MRT), évitant le glissement des décalcomanies pendant les animations du personnage.",
          processDetails: {
            ideation: "Les Decal Projectors classiques d'Unity (boîtes de projection) glissent visiblement sur les SkinnedMeshRenderers lors des animations rapides.",
            mechanicsOrTuning: [
              "Rupture d'Armure : les dégâts accumulés fracturent progressivement les pièces et mettent à jour les textures en temps réel.",
              "Pipeline Sang MRT : dessine le sang directement dans l'espace render target du personnage pour que les traces restent ancrées aux membres en mouvement."
            ],
            iterationOrResult: "Un feedback viscéral net et réaliste qui renforce l'immersion durant les combats de boss."
          }
        }
      ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      year: "Oct 2023 – Fév 2024",
      period: "2024",
      category: "Projet Académique en Équipe / Industry Showcase",
      coverImage: "/images/murder_banner.png",
      primaryFocus: "IA Déterministe (Behavior Trees) & Outil Custom Unity Editor",
      genrePlatform: "Puzzle-Stratégie 2D · PC & Navigateur Web",
      tagline: "Puzzle-Stratégie 2D · PC & Navigateur Web",
      role: "AI Systems Designer · Tools & Gameplay Programmer",
      highlight: "New Game Designer 2025 · 3e Place · Game Design & Programming",
      gameplaySummary: "Un jeu de puzzle-stratégie 2D en deux temps (Planification & Exécution) où le joueur orchestre des « meurtres parfaits » sur un graphe de pièces interconnectées. Il exploite les routines déterministes des PNJ, place leurres et armes et séquence les actions des agents sur une timeline sans dépasser le seuil de suspicion.",
      personalContributionSummary: "Conception et implémentation de l'IA déterministe des invités via un Behavior Tree modulaire à décorateurs de traits, création d'un éditeur visuel nodal de Behavior Trees intégré à Unity pour l'équipe, et intégration complète du Scénario 1.",
      description: "Puzzle-stratégie 2D à timeline et graphes de pièces avec IA déterministe basée sur Behavior Trees et outil d'édition nodal sous Unity.",
      tags: ["Behavior Trees", "Editor Tooling", "AI Design", "Systems Design", "Unity", "C#"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      platform: "PC & Navigateur Web",
      engine: "Unity (2D) / WebGL",
      authors: "Mauro Brochier, Matteo Mangioni, Anthony Baiamonte, Christian Colombo",
      teamRoles: "Game Programmer, AI Programmer, Game Designer (Systèmes IA)",
      gddUrl: "https://github.com/MauroTheB/MurderMysteryInfo/blob/main/Documents/GameDesignDocument.md",
      demoUrl: "https://polimi-game-collective.itch.io/murder-mystery-incorporated",
      trailerId: "ZpdFg5MHrdI",
      gameplayId: "wDj0Gx3CgIQ",
      designFeatures: [
        {
          id: "murder-bt-editor",
          discipline: "Technical Design · Tooling Custom",
          title: "Éditeur Visuel Nodal de Behavior Trees Intégré à Unity",
          scopeBadge: "Outil Custom Unity Editor",
          media: {
            type: "image",
            src: "/images/murder_immagine2.png",
            caption: "IA déterministe des invités pilotée par l'éditeur Behavior Tree conçu sous Unity"
          },
          whatAndWhy: "Coder en dur des arbres de décision en C# freine les itérations de design et masque les intentions IA. J'ai développé un éditeur graphique à nœuds et liaisons directement dans l'éditeur Unity—gérant Selectors, Conditions et Tasks—afin de créer, lire et déboguer les comportements visuellement.",
          processDetails: {
            ideation: "Conçu pour fluidifier les itérations d'une équipe de 5 personnes sur un sprint de 8 semaines en séparant la logique visuelle de l'arbre du code des verbes d'action.",
            mechanicsOrTuning: [
              "Édition Nodale : création et connexion graphique de Selectors, nœuds de Condition et Action Tasks.",
              "Lisibilité en Production : inspection directe de la hiérarchie IA sans fouiller dans des blocs conditionnels imbriqués."
            ],
            iterationOrResult: "A accéléré le prototypage et le débogage de tous les archétypes d'invités jusqu'à la release WebGL sur itch.io."
          }
        },
        {
          id: "murder-deterministic-ai",
          discipline: "AI & Systems Design",
          title: "IA Horlogère des Invités & Traits de Personnalité par Décorateurs",
          scopeBadge: "Architecture IA Core",
          media: {
            type: "image",
            src: "/images/murder_immagine1.png",
            caption: "Phase de planification tactique sur timeline entre les nœuds de pièces"
          },
          whatAndWhy: "Dans un puzzle sur timeline, une IA aléatoire ruine la stratégie : un bon plan ne doit pas dépendre de la chance. J'ai conçu un Behavior Tree de base 100 % déterministe partagé par tous les invités, modulé par des décorateurs de traits (Suspicious, Greedy, Alcoholic) qui rendent chaque réaction prévisible et déductible.",
          processDetails: {
            ideation: "Préféré aux patrouilles aléatoires afin que chaque échec explique clairement au joueur quel événement a déclenché la suspicion.",
            mechanicsOrTuning: [
              "Hiérarchie Selector Déterministe : Leurre dans la pièce → Leurre dans une pièce voisine → Événement planifié → Déplacement pondéré (score d'intérêt de la salle).",
              "Décorateurs de Traits : Greedy considère le Cash comme leurre ; Alcoholic boit le Vin uniquement sans témoin ; Suspicious ajoute +2 points de suspicion face aux anomalies.",
              "Économie de Suspicion (seuil 0–10) : Cadavre (+4), Sang (+2), Agent armé (+2) évalués par nœud de pièce."
            ],
            iterationOrResult: "Pilier de la boucle d'essais-erreurs récompensée par la 3e Place à New Game Designer 2025."
          }
        },
        {
          id: "murder-scenario-flow",
          discipline: "Intégration Systèmes & Scénario",
          title: "Interactions sur Graphe de Pièces, Modificateurs & Scénario 1",
          scopeBadge: "Jouable sur itch.io",
          media: {
            type: "image",
            src: "/images/murder_immagine3.png",
            caption: "Lecture autonome de l'exécution et bilan de suspicion de la mission"
          },
          whatAndWhy: "Pour garder la phase de planification lisible sans surcharge de grille, les entités interagissent au niveau du nœud-pièce tandis que les descripteurs d'objets modifient le coût en slots et la portée sonore. J'ai intégré l'IA, les déclencheurs de suspicion et le flux puzzle complet du Scénario 1.",
          processDetails: {
            ideation: "L'abstraction par nœuds de salle garantit des interactions instantanées et sans ambiguïté dès que deux entités partagent une pièce.",
            mechanicsOrTuning: [
              "Couplage Verbes/Objets : les armes Slow ajoutent +1 slot à l'action Kill ; les objets Loud alertent les pièces voisines (+2 suspicion par invité alerté).",
              "Intégration Scénario 1 : câblage des pièges, seuils d'alerte et transitions d'état pour la build navigateur WebGL."
            ],
            iterationOrResult: "Publié en version jouable sur navigateur via itch.io et présenté en live à New Game Designer 2025."
          }
        }
      ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      year: "Mar 2021 – Avr 2021",
      period: "2021",
      category: "Projet de Stage Individuel",
      coverImage: "/images/maze_banner.png",
      primaryFocus: "Boucle Cognitive 2D→3D & Mécaniques Runner Mobile",
      genrePlatform: "Jeu de Mémoire Spatiale & Parcours · Android Mobile",
      tagline: "Jeu de Mémoire Spatiale & Parcours · Android Mobile",
      role: "Développeur Solo · Game Designer & Programmeur",
      gameplaySummary: "Un runner mobile en vue à la 3e personne issu d'une recherche sur la mémoire visuo-spatiale. Le joueur dispose de jusqu'à 30 secondes pour mémoriser le plan 2D d'un labyrinthe avant une transition fluide via Cinemachine vers la vue 3D de couloir, guidé au swipe tactile et par les potions de marchands cachés.",
      personalContributionSummary: "Premier projet complet en solo (stage de 238 h chez Nextrek S.r.l., mémoire de licence à Roma Tre). Conception de la transition 2D→3D, de 3 labyrinthes jouables, de l'économie des potions, de la réactivité liée aux PV et développement intégral sous Unity.",
      description: "Runner mobile de mémoire spatiale en vue à la 3e personne issu d'une étude cognitive sur le passage de la carte 2D à la navigation 3D.",
      tags: ["Mobile Game Design", "Cognition Spatiale", "Cinemachine", "Android", "Unity", "C#"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      platform: "Android Mobile",
      isMobile: true,
      engine: "Unity · C#",
      authors: "Mauro Brochier (Stage Nextrek S.r.l.)",
      teamRoles: "Développeur Solo — Game Designer, Gameplay Programmer",
      trailerId: "OP1fEbdZbjk",
      gameplayId: "WI-OsY6SoKs",
      thesisBadge: "R&D COGNITIVE // MÉMOIRE DE LICENCE",
      designFeatures: [
        {
          id: "maze-cognitive-loop",
          discipline: "Design Cognitif & Caméra",
          title: "Fenêtre Mnésique 2D & Transition Fluide Cinemachine vers la 3D",
          scopeBadge: "Recherche Licence",
          media: {
            type: "image",
            src: "/images/maze_immagine1.png",
            caption: "Phase de mémorisation 2D vue de dessus avec départ et sortie indiqués"
          },
          whatAndWhy: "Pour observer comment le joueur transpose une carte mentale 2D en navigation 3D, chaque niveau débute par une vue aérienne chronométrée (jusqu'à 30 secondes sur le labyrinthe le plus complexe) avant de fondre via Cinemachine vers une vue 3e personne restreinte au couloir.",
          processDetails: {
            ideation: "Supprimer toute minimap dès le départ transforme la mémoire de travail spatiale en cœur de la tension.",
            mechanicsOrTuning: [
              "Timer Adaptatif : fenêtre réduite sur les premiers niveaux, jusqu'à 30s sur le 3e labyrinthe.",
              "Blend Cinemachine : descente continue de la caméra vers l'épaule du personnage au point de départ pour conserver les repères."
            ],
            iterationOrResult: "Les tests ont confirmé que le principe de mémorisation 2D→3D fonctionnait efficacement sur les 3 labyrinthes finalisés."
          }
        },
        {
          id: "maze-economy-health",
          discipline: "Systèmes & Survie",
          title: "Marchands Cachés, Potions d'Orientation & Réactivité liée aux PV",
          scopeBadge: "3 Labyrinthes Jouables",
          media: {
            type: "image",
            src: "/images/maze_immagine3.png",
            caption: "Interface mobile des marchands, potions et survie"
          },
          whatAndWhy: "La mémorisation pure demandait des choix risque-récompense. Des marchands dissimulés vendent des potions (vitesse, boussole temporaire vers la sortie, soin), tandis que la santé restante affecte directement la réactivité des swipes : moins le joueur a de PV, plus ses virages répondent lentement.",
          processDetails: {
            ideation: "Lier les points de vie à la nervosité des commandes transforme les dégâts en friction tactile immédiate plutôt qu'en simple barre passive.",
            mechanicsOrTuning: [
              "Potions Implémentées : boost de vitesse, indication temporaire du bon chemin durant quelques secondes, et soin pour restaurer la réactivité des contrôles.",
              "Transparence Scope : les marchands affichent aussi des armes prévues en design pour repousser de futurs ennemis poursuivants."
            ],
            iterationOrResult: "Crée un dilemme clair entre foncer sur le trajet mémorisé ou dévier pour récupérer des potions."
          }
        },
        {
          id: "maze-controls-postmortem",
          discipline: "Contrôles Mobile & Post-Mortem",
          title: "Locomotion Runner Tactile & Retour Critique d'Architecture (2021)",
          scopeBadge: "Premier Projet Solo",
          media: {
            type: "image",
            src: "/images/maze_immagine2.png",
            caption: "Parcours dans les couloirs 3D et commandes tactiles mobile"
          },
          whatAndWhy: "Conçu exclusivement pour mobile avec course continue façon Maze Runner, swipes gauche/droite pour tourner et boutons d'arrêt manuel aux intersections. Avec le recul sur ce premier stage de 2021, ce projet a été mon école fondatrice sur l'ergonomie des contrôles.",
          processDetails: {
            ideation: "Viser l'immédiateté mobile à une main adaptée aux bifurcations en couloir.",
            mechanicsOrTuning: [
              "Locomotion Prototype : avancée pilotée par un NavMeshAgent suivant une cible mobile (« carotte ») placée juste devant le joueur.",
              "Freinage Manuel : boutons dédiés pour stopper l'élan et analyser un carrefour."
            ],
            iterationOrResult: "Post-Mortem Honnête : les tests ont révélé une jouabilité limitée et des commandes perfectibles liées à l'approche « carotte » sur NavMeshAgent. Aujourd'hui, je passerais par un CharacterController dédié avec input buffering sur les swipes—une leçon directement appliquée dans mes jeux suivants."
          }
        }
      ]
    },
    {
      id: "water-sim",
      title: "Simulation d'Eau Temps Réel en OpenGL avec Accélération CUDA",
      year: "Fév 2025 – Avr 2025",
      period: "2025",
      category: "Projet Académique Individuel",
      coverImage: "/images/water_banner.png",
      primaryFocus: "Accélération GPU CUDA (Grille 4× à 90+ FPS)",
      genrePlatform: "Simulation Fluide Temps Réel · GPGPU · PC",
      tagline: "Simulation Fluide Temps Réel · GPGPU · PC",
      role: "Graphics & Simulation Programmer",
      gameplaySummary: "Simulation fluide sur grille en temps réel développée de zéro en C++ et OpenGL, puis accélérée via GPGPU NVIDIA CUDA. Des objets 3D de géométrie arbitraire interagissent avec la surface en générant des ondes cohérentes avec leur forme, tout en maintenant plus de 90 FPS avec une résolution de grille 4× supérieure.",
      personalContributionSummary: "Développement intégral en autonomie : formulation de la propagation d'ondes sur champ de hauteur en OpenGL et couplage géométrique arbitraire, puis déport des calculs lourds sur kernels GPU CUDA pour quadrupler la résolution au-dessus de 90 FPS.",
      description: "Simulation fluide temps réel en C++, OpenGL et NVIDIA CUDA avec interaction de géométries 3D arbitraires à plus de 90 FPS.",
      tags: ["C++", "NVIDIA CUDA", "OpenGL", "GPGPU", "Simulation Physique", "Mathématiques 3D"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water",
      platform: "PC (Windows / Linux)",
      engine: "Moteur Custom C++ + OpenGL",
      networking: "Architecture NVIDIA CUDA",
      authors: "Mauro Brochier",
      teamRoles: "Graphics Programmer, Systems Engineer",
      driveVideoUrl: "https://drive.google.com/file/d/1SSt9NNn0LSsy904b9N3yUaVozUVa0Y7O/view?usp=sharing",
      localVideoUrl: "/videos/water_sim.mp4",
      designFeatures: [
        {
          id: "water-cuda-gpgpu",
          discipline: "Optimisation GPGPU · CUDA",
          title: "Physique des Vagues sur GPU : Grille 4× à 90+ FPS Constants",
          scopeBadge: "Benchmark 90+ FPS",
          media: {
            type: "image",
            src: "/images/water_immagine1.png",
            caption: "Grille fluide haute densité accélérée par CUDA en temps réel"
          },
          whatAndWhy: "La première version CPU sous OpenGL atteignait vite ses limites dès qu'on augmentait la densité du maillage. En transférant la propagation des sommets de vagues vers des kernels NVIDIA CUDA, la simulation a gagné une résolution 4× supérieure tout en restant au-dessus de 90 FPS dans les scènes les plus chargées.",
          processDetails: {
            ideation: "Optimisation ciblée strictement sur le vrai goulot d'étranglement (mise à jour par sommet de la grille fluide) sans réécrire le moteur de rendu.",
            mechanicsOrTuning: [
              "Passage CPU → GPGPU : exécution parallèle de la propagation ondosa sur des milliers de threads GPU via CUDA.",
              "Gain Mesuré : densité de grille 4× supérieure à la version OpenGL pré-CUDA, tout en conservant 90+ FPS stables."
            ],
            iterationOrResult: "Démontre une sensibilité concrète au budget frame et au profilage temps réel."
          }
        },
        {
          id: "water-mesh-coupling",
          discipline: "Physique & Interaction Géométrique",
          title: "Couplage avec Objets 3D Arbitraires & Ondes Fidèles à la Forme",
          scopeBadge: "Moteur Custom C++",
          media: {
            type: "image",
            src: "/images/water_immagine3.png",
            caption: "Ondes de sillage temps réel générées par des géométries 3D immergées"
          },
          whatAndWhy: "Au lieu de simuler de fausses ondulations circulaires uniformes, le champ de hauteur réagit à la géométrie réelle de n'importe quel objet 3D immergé, produisant un déplacement d'eau et des sillages fidèles à sa silhouette.",
          processDetails: {
            ideation: "Règles de propagation conçues pour s'adapter automatiquement à des formes variées sans paramétrage par asset.",
            mechanicsOrTuning: [
              "Déplacement guidé par la Géométrie : lecture du volume immergé pour des objets de dimensions et formes arbitraires.",
              "Propagation Temps Réel : solveur itératif répartissant l'onde sur les sommets voisins de la grille."
            ],
            iterationOrResult: "Interaction immédiate quel que soit l'objet déposé dans la sandbox."
          }
        },
        {
          id: "water-opengl-render",
          discipline: "Pipeline Graphique · OpenGL",
          title: "Pipeline Simulation-Rendu Découplé & Shaders de Surface",
          scopeBadge: "OpenGL & GLSL",
          media: {
            type: "image",
            src: "/images/water_immagine2.png",
            caption: "Rendu de la surface en OpenGL avec reflets et déplacement de sommets"
          },
          whatAndWhy: "Architecture séparant nettement l'état physique de la simulation et la couche de rendu OpenGL, permettant d'injecter les mises à jour CUDA dans le déplacement de sommets et les shaders de surface sans friction.",
          processDetails: {
            ideation: "Le découplage calcul/rendu a permis de passer du solveur CPU initial à CUDA sans modifier la couche graphique.",
            mechanicsOrTuning: [
              "Pipeline C++ / OpenGL alimentant dynamiquement le vertex displacement depuis la grille.",
              "Shaders GLSL de surface offrant reflets de Fresnel et lecture nette du relief des vagues."
            ],
            iterationOrResult: "Architecture modulaire documentée dans le cadre du cursus à l'Université de Milan."
          }
        }
      ]
    }
  ],
  experiences: [
    {
      id: "edison",
      role: "Formateur en Game Design & Programmation",
      company: "Edison School",
      period: "Oct 2025 – Présent",
      location: "Rome, Italie",
      course: "Cours : Game Developer – Unity 3D",
      description: "Enseignement des principes du game design et de la programmation gameplay technique auprès de groupes de niveaux variés, des bases jusqu'aux pipelines de production.",
      bullets: [
        "Enseignement du Game Design et du Game Programming auprès d'élèves de tous âges et niveaux, de débutant à avancé.",
        "Formation pratique et encadrée sous Unity, C# et Visual Scripting.",
        "Mentorat de projets de jeu individuels de bout en bout, du concept initial à l'implémentation technique.",
        "9 promotions formées à ce jour avec suivi complet du programme."
      ],
      skills: ["Unity 3D", "C#", "Visual Scripting", "Architecture Gameplay", "Mentorat", "Pédagogie"]
    },
    {
      id: "cristaltec",
      role: "Game Designer & Programmeur",
      company: "Cristaltec SpA",
      period: "Fév 2022 – Août 2022",
      location: "Rome, Italie",
      description: "Développement de systèmes de gameplay et équilibrage mathématique au sein d'un environnement industriel établi.",
      bullets: [
        "Conception et implémentation d'une mécanique de chute de cartes (rolling-card), définissant conditions, timings et machines à états.",
        "Prise en main rapide d'un langage propriétaire et d'outils internes directement appliqués à la production de fonctionnalités gameplay."
      ],
      skills: ["Gameplay Systems", "Langage Propriétaire", "Machines à États", "Logique de Jeu", "Timing & Équilibrage"]
    },
    {
      id: "nextrek-social",
      role: "Videogame Designer & Programmeur",
      company: "Nextrek S.r.l.",
      period: "Juil 2021 – Août 2021",
      location: "Rome, Italie",
      description: "Architecture IA et simulation sociale pour un jeu 3D sous Unity inspiré des Sims.",
      bullets: [
        "Conception et implémentation d'un système complet d'interactions sociales entre PNJ sous Unity, combinant Machines à États Finis (FSM) et Behavior Trees.",
        "Développement de comportements autonomes variés : dialogues contextuels, séduction, danse, réactions émotionnelles, partage d'informations entre PNJ, mémoire à court terme et dynamiques de groupe."
      ],
      skills: ["Unity 3D", "C#", "Behavior Trees", "Machines à États (FSM)", "IA PNJ", "Simulation Sociale"]
    },
    {
      id: "nextrek-internship",
      role: "Game Designer & Programmeur (Stage Universitaire)",
      company: "Nextrek S.r.l.",
      period: "Mar 2021 – Avr 2021",
      location: "Rome, Italie",
      description: "Idéation, design et livraison complète du jeu Maze's Soul en autonomie dans le cadre d'un stage universitaire.",
      bullets: [
        "Conception, design et développement en solo du jeu Maze's Soul durant un stage professionnel de 238 heures.",
        "Gestion autonome de tout le cycle de production, du pitch initial et du design cognitif à l'implémentation mobile en C#."
      ],
      skills: ["Unity 3D", "C#", "Développement Mobile", "Prototypage Rapide", "Livraison Solo"]
    }
  ],
  education: [
    {
      id: "master",
      degree: "Master en Informatique – Videogame Design and Programming (LM-18)",
      institution: "Université de Milan (Università degli Studi di Milano)",
      period: "2023 – Oct 2026",
      grade: "106 / 110",
      supervisor: "Prof. Anna Laura Ripamonti",
      thesisSubject: "Videogame Design",
      thesisTitle: "Framework Euristico per il Dynamic Difficulty Adjustment (DDA), mediante un'Architettura 'Glass-Box' a supporto del Game Designer",
      thesisDetails: "Conception, modélisation mathématique et validation empirique d'un framework heuristique de Dynamic Difficulty Adjustment. Développement d'une architecture transparente offrant aux game designers visibilité et contrôle manuel sur la modulation du Flow dans les jeux d'action exigeants.",
      skills: ["Dynamic Difficulty Adjustment (DDA)", "Théorie du Flow", "Télémétrie Joueur", "Équilibrage", "Architecture Modulaire", "Psychologie du Joueur"]
    },
    {
      id: "bachelor",
      degree: "Licence en Ingénierie Informatique (L-8)",
      institution: "Université Roma Tre (Università degli Studi Roma Tre)",
      period: "2015 – 2021",
      supervisor: "Prof. Giuseppe Di Battista",
      thesisSubject: "Game Design & Psychologie",
      thesisTitle: "Player's memory, from 2d to 3d [Videogame – Maze's Soul]",
      thesisDetails: "Étude empirique de la rétention visuo-spatiale lors de transitions en temps réel d'un plan 2D vu de dessus vers une navigation 3D à la 3e personne, formalisée et démontrée à travers le jeu mobile Maze's Soul.",
      skills: ["Ingénierie Informatique", "Structures de Données & Algorithmes", "Architecture des Ordinateurs", "Cognition Spatiale", "Systèmes d'Exploitation", "Réseaux"]
    }
  ],
  skills: [
    {
      category: "Gameplay & Technical Design",
      level: "Avancé",
      icon: "⚡",
      items: [
        "System & Gameplay Design",
        "Implémentation Technique Gameplay",
        "Contrôles & Game Feel",
        "Prototypage Rapide",
        "Itération & Équilibrage (Balancing)",
        "Rédaction GDD / TDD / LDD",
        "Tableaux d'équilibrage (Spreadsheets)"
      ]
    },
    {
      category: "IA, PNJ & Systèmes de Combat",
      level: "Spécialisé",
      icon: "🧠",
      items: [
        "Architecture IA & Comportements PNJ",
        "Behavior Trees & Outils Custom Editor",
        "Machines à États Finis (FSM)",
        "Combat Design (Mêlée & Projectiles)",
        "Logique Déterministe & Décorateurs",
        "Rythme des Vagues & Courbes de Difficulté"
      ]
    },
    {
      category: "Moteurs de Jeu & Programmation",
      level: "Avancé",
      icon: "🎮",
      items: [
        "Unity Engine (3D & 2D Avancé)",
        "C# (Programmation Gameplay Native)",
        "Programmation Orientée Objet (POO)",
        "Architecture par Composants",
        "Visual Scripting",
        "Optimisation Mobile Android & Meta XR VR"
      ]
    },
    {
      category: "Réseau Multijoueur & Versioning",
      level: "Avancé",
      icon: "🌐",
      items: [
        "Mirror Networking (Co-op Multijoueur)",
        "Architecture Client-Serveur / Host-Client",
        "Synchronisation d'État & RPC",
        "Git (Workflows avancés & Branches)",
        "Pipelines Collaboratifs en Équipe"
      ]
    },
    {
      category: "Audio Interactif & Spatial 3D",
      level: "Avancé",
      icon: "🎧",
      items: [
        "FMOD Studio (Architecture & Paramètres Temps Réel)",
        "Steam Audio (HRTF & Auralisation Binaurale 3D)",
        "Musique & Ambiances Adaptatives",
        "Intégration Audio 3D sous Unity",
        "Occlusion Acoustique Environnementale"
      ]
    },
    {
      category: "Graphismes, GPGPU & Systèmes",
      level: "Ingénierie",
      icon: "⚙️",
      items: [
        "C++ (Programmation Système)",
        "NVIDIA CUDA (Physique Parallèle GPGPU)",
        "OpenGL & Shaders GLSL Custom",
        "Simulation Fluide Temps Réel",
        "Shaders Optiques de Fresnel",
        "Python, Java, C"
      ]
    }
  ]
};