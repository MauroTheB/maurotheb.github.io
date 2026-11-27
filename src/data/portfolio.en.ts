export const PORTFOLIO_EN = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Technical Game Designer",
    subheading: "Technical Game Designer & Systems Engineer. Bridging gameplay systems design, player psychology, and technical engine implementation in C# and C++.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    cvUrl: "/mauro_brochier_cv.pdf",
    graduationStatus: "Master's Degree in Computer Science (Game Design) — Graduated Oct 2026",
    languages: [
      { name: "French", level: "Mother Tongue / Native" },
      { name: "Italian", level: "Mother Tongue / Native" },
      { name: "English", level: "B2 (Professional Working Proficiency)" },
    ],
  },
  ui: {
    heroBtnGithub: "GitHub Preview",
    heroBtnContact: "Get in touch",
    heroBtnCv: "Download CV (PDF)",
    ddaBadge: "AVAILABLE",
    hudProjects: "Projects",
    hudExperience: "Experience",
    hudEducation: "Education",
    hudSkills: "Skills",
    projectsHeading: "Video Games & Systems Showcase",
    projectsSubheading: "Click on any project to inspect technical breakdown, architecture, and gameplay design.",
    exploreProject: "Explore Documentation & Process",
    backToProjects: "Back to all projects",
    viewSource: "View Repository & Source Code ↗",
    overviewHeading: "Overview & Game Design",
    mediaHeading: "Media & Visual Showcase",
    expHeading: "Work Experience",
    expSubheading: "Academic lecturing, development on proprietary engines, and Unity production.",
    eduHeading: "Academic Background & Research",
    eduSubheading: "From Dynamic Difficulty Adjustment (DDA) to Computer Engineering foundations.",
    thesisBadge: "Master / Bachelor Thesis",
    skillsHeading: "Tech Inventory & Tooling",
    skillsSubheading: "Technical toolset: low-level languages, game engines, and design pipelines.",
    footerText: "Hosted on GitHub Pages • 0 kB Bloat • Zero-cost Edge CDN",
    gddButton: "Game Design Document (GDD)",
    tddButton: "Technical Design Document (TDD)",
    watchTrailer: "Watch Official Trailer",
    watchGameplay: "Full Gameplay Walkthrough",
    teamHeading: "Credits & Tech Specs",
    platformLabel: "Platform",
    engineLabel: "Engine & Networking",
    authorsLabel: "Core Team",
    contributionsHeading: "Personal Contributions & Technical Ownership",
    designedLabel: "Independently Designed & Implemented",
    implementedLabel: "Technical Implementation & Systems",
    coDevelopedLabel: "Co-Developed with Team",
    docsLabel: "Design & Technical Documentation",
    ipNoticeHeading: "Proprietary Research & IP Notice",
    empiricalStudyLabel: "Empirical Validation & Playtest",
    gradeLabel: "Final Grade",
    supervisorLabel: "Thesis Supervisor",
    subjectLabel: "Subject Area",
    footerHeading: "Let's Build Immersive Systems Together",
    footerSubheading: "Open to Technical Game Designer, Gameplay Systems, and AI Design positions worldwide.",
    backToTop: "Back to top ↑",
    watchDriveVideo: "Watch Gameplay on Google Drive ↗",
    headphonesBadge: "HEADPHONES RECOMMENDED // 3D AUDIO",
    playDemo: "Play Demo on itch.io",
    
  },
  projects: [
    
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      year: "Apr 2025 – Jul 2025",
      period: "2025",
      category: "Academic Team Project / Industry Showcase",
      coverImage: "/images/pomegranade_banner.png", // O il nome dello screenshot 16:9 che preferisci
      primaryFocus: "Lead Game & Systems Design · Co-op Combat",
      genrePlatform: "Co-op Survival Game · 2–4 Players · PC",
      tagline: "Co-op Survival Game · 2–4 Players · PC",
      role: "Team Leader · Lead Game & Systems Designer",
      highlight: "Industry Showcase · New Game Designer 2025 · 3rd Place",
      gameplaySummary: "A 2–4 player co-op survival party game set in an enchanted limbo forest. Teams juggle real-time physical resource gathering (wood, fruit, shelter repairs, bonfire stewardship) against frantic nighttime waves before dawn temporarily petrifies surviving threats in place.",
      personalContributionSummary: "Directed game & systems design as Team Leader, authored ~70% of the GDD and 100% of the TDD, and designed and co-implemented combat, day-night pacing, enemy AI, and Mirror co-op mechanics.",
      detailedContributions: {
      designed: [
        "Core shooting mechanics and projectile physics using harvested pomegranate seeds as dynamic ammo.",
        "Enemy attack behaviours and player-enemy interaction loops.",
        "Game balance parameters: wave pacing, damage scaling, and the campfire-extinguishing enemy objective.",
        "Day-night environmental cycle balancing frantic nighttime survival against daytime resource calm."
      ],
      coDeveloped: [
        "Core multiplayer co-op gameplay features using Mirror, collaborating directly with the dedicated networking programmer responsible for the underlying transport architecture."
      ],
      authoredDocs: [
        "100% of the Technical Design Document (TDD) defining system architectures, components, and state management.",
        "Approximately 70% of the Game Design Document (GDD) formalizing core loops, enemy types, and mechanics."
      ]
    },
      description: "A cooperative survival game set in an enchanted forest limbo. Players alternate between frantic combat, using ammunition crafted from harvested magical pomegranates, and strategic shelter repair and bonfire maintenance before the petrifying dawn resets the threat.\n\nLed the game's design direction, authored the entire Technical Design Document (TDD) and approximately 70% of the Game Design Document (GDD), and designed and implemented key shooting, combat, and multiplayer gameplay systems.",
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
          title: "Day-Night Pacing, Petrifying Dawn & Physical Co-op Economy",
          scopeBadge: "Playable Prototype",
          media: {
            type: "image",
            src: "/images/immagine_falo_personaggio.png",
            caption: "Bonfire defense & physical resource-carrying loop in the forest arena"
          },
          whatAndWhy: "To create Overcooked-style cooperative tension without UI clutter, there is no abstract inventory: carrying wood or enchanted pomegranates occupies your hands and unequipped weapons, forcing players to constantly trade off firefighting, repairs, and harvesting. At dawn, surviving creatures petrify in place instead of vanishing, preserving spatial pressure while opening a tight recovery window.",
          processDetails: {
            ideation: "Inspired by Overcooked's chaotic task-juggling and CoD Zombies' wave escalation, every action lives in a single seamless forest arena with zero mode switches.",
            mechanicsOrTuning: [
              "Co-op Tree Shaking: players pair up to shake pomegranate trees for ammo fruit, or chop them down for repair/bonfire wood.",
              "Tree Lifecycle Trade-off (GDD 5.5.3): felled trees respawn elsewhere only by day, take time to mature, and yield no fruit until fully grown—making wood vs. future ammo a real strategic dilemma.",
              "Bonfire Fallback & Dawn Petrification: the flame ensures teams never hard-lock out of firepower, while dawn freezes enemies in a grayscale state where they remain a positional threat."
            ],
            iterationOrResult: "Validated live in 4-player sessions at New Game Designer 2025 (3rd Place), where physical carry limits naturally sparked verbal/ping coordination."
          }
        },
        {
          id: "pomegranade-combat",
          discipline: "Combat & Arsenal Design",
          title: "Pomegranate-Crafted Arsenal & Squad Role Differentiation",
          scopeBadge: "Prototype (3) + GDD (3)",
          media: {
            type: "video",
            src: "/videos/pomegranade.mp4",
            caption: "In-engine combat & shooting feel in the playable vertical slice"
          },
          whatAndWhy: "Shooting is tied directly to the world economy: players split harvested pomegranates into ammo rather than picking up generic drops. In the playable prototype, three distinct weapons let teammates specialize between covering carriers, holding chokepoints, and clearing clustered threats.",
          processDetails: {
            ideation: "Avoided homogeneous hitscan guns by giving every weapon clear projectile physics, risk-reward curves, and distinct squad utility.",
            mechanicsOrTuning: [
              "Seedshot (Playable): medium RoF, high accuracy pistol for disciplined ammo conservation.",
              "Seedsrusher (Playable): high-RoF, triple-barrel rifle built for sustained suppressive fire while teammates repair.",
              "Pomegranade (Playable): high-risk arcing explosive grenade rewarding trajectory prediction against clusters.",
              "GDD Arsenal Expansion: XBowrter (high-velocity parabolic sniper), Firepome (close-range DoT area denial), and S-Axe-Seed (boomerang path-control axe)."
            ],
            iterationOrResult: "Added enemy-specific hitboxes, impact VFX, and flinch animations in the prototype to make each weapon archetype readable in chaotic 4-player waves."
          }
        },
        {
          id: "pomegranade-ai",
          discipline: "AI & Encounter Design",
          title: "Manta Breach Logic & Asymmetric Wave Threat Triangle",
          scopeBadge: "Prototype (Manta) + GDD",
          media: {
            type: "image",
            src: "/images/players_vs_monsters.png",
            caption: "Manta wave assault pressure around the shelter perimeter"
          },
          whatAndWhy: "Even with a lean prototype AI, enemy targeting was designed to punish passive camping. Implemented Manta enemies scan for already-damaged barrier segments to exploit weak spots, and automatically bypass broken tiles to siphon the bonfire—turning neglected repairs into immediate danger.",
          processDetails: {
            ideation: "Designed three complementary creature families so mixed waves force constant target prioritization rather than single-lane defense.",
            mechanicsOrTuning: [
              "Manta (Playable): spectral floater ignoring terrain; prioritizes damaged barriers, bypasses destroyed ones, drains the bonfire, and petrifies in grayscale at dawn.",
              "Simian (GDD Expansion): agile trickster that leaps walls and sabotages uncollected wood/fruit by throwing resources out of reach.",
              "Bull (GDD Expansion): heavy siege tank that smashes multiple barriers and knocks down resource-bearing trees."
            ],
            iterationOrResult: "Keeping Manta logic deterministic and readable allowed the team to test wave escalation curves reliably in the vertical slice before expanding enemy variety."
          }
        },
        {
          id: "pomegranade-coop",
          discipline: "Technical & Co-op UX Design",
          title: "Server-Authoritative Co-op Sync, Casual Camera & Emote Wheel",
          scopeBadge: "Playable Prototype",
          media: {
            type: "placeholder",
            src: "",
            alt: "Radial Emote Ping Wheel & Mirror Host-Client Sync",
            caption: "In-engine UI & networking capture currently being prepared for archive update"
          },
          whatAndWhy: "A chaotic party game fails if players fight the camera or can't coordinate without voice chat. I designed a pitch-clamped 360° camera for low cognitive load, an edge-clamped Emote Ping Wheel with audio cues, and co-developed Mirror Host-Client gameplay logic with server authority on shared physical items.",
          processDetails: {
            ideation: "Combined League of Legends-style fast radial pinging with a fixed-origin casual camera so newcomers grasp spatial threats within seconds.",
            mechanicsOrTuning: [
              "Emote Wheel (Playable): context-sensitive pings ('Help shaking tree', 'Barrier repair needed', 'Fire burning out') with off-screen directional edge indicators, unique SFX, and 6-use / 10s anti-spam cooldown.",
              "Camera Constraints: full 360° horizontal view with locked vertical pitch bounds to prevent disorientation or sky/ground clipping.",
              "Mirror Host-Client Sync: co-developed synchronized carry/drop/throw states and procedural barrier destruction with the networking programmer."
            ],
            iterationOrResult: "Presented hands-on to senior leads from Milestone, Ubisoft, and Nacon at New Game Designer 2025, earning 3rd Place."
          }
        }
      ],
      storySteps: [
        {
          tag: "CORE GAMEPLAY LOOP",
          title: "Survival Combat & Bonfire Stewardship",
          description: "Players alternate between high-intensity combat—using ammunition crafted from harvested magical pomegranates—and strategic base maintenance. Feeding the central bonfire is essential to keep the petrifying dawn at bay and protect team shelters.",
          mediaLabel: "[ Gameplay Combat // Pomegranate Ammo Crafting & Shelter Building ]",
          imageSrc: "/images/immagine_falo_personaggio.png"
        },
        {
          tag: "MULTIPLAYER SYSTEMS",
          title: "Co-op Architecture (2–4 Players)",
          description: "Engineered shared-state multiplayer logic in Unity and native C#. Players must dynamically divide responsibilities: scouting for fruit, fending off night terrors, and synchronizing defense around the shared campfire life-force.",
          mediaLabel: "[ Technical Breakdown // Multiplayer State Sync & Resource Distribution ]",
          imageSrc: "/images/players_vs_monsters.png"
        },
        {
          tag: "INDUSTRY SHOWCASE",
          title: "Hands-on Pitch to Milestone, Ubisoft & Nacon",
          description: "Selected to pitch and showcase the playable build directly to senior talent and studio leads at the New Game Designer event. Conducted live demo sessions focusing on game feel, onboarding curve, and cooperative flow state.",
          mediaLabel: "[ Industry Event // Live Gameplay Demos & Evaluation Feedback ]",
          imageSrc: "/images/loghi_aziende_pomegranade.png"
        }
      ]
    },
    {
      id: "puppeteer",
      title: "A Child's Tale: Whisper of the Puppeteer",
      year: "Apr 2024 – Jul 2024",
      period: "2024",
      category: "Personal Project",
      coverImage: "/images/puppeteer_banner.png",
      primaryFocus: "Sensory Game Design & Adaptive Audio (FMOD / Steam Audio)",
      genrePlatform: "First-Person Psychological Horror · PC & Meta XR VR",
      tagline: "First-Person Psychological Horror · PC & Meta XR VR",
      role: "Solo Developer · Game & Technical Audio Designer",
      gameplaySummary: "A first-person psychological horror game (PC & Meta XR VR) where sight is stripped down to a narrow monocle slit and hearing becomes your primary navigation tool. Guided by an ethereal female voice and a heart-triggered white-light echolocation pulse, players solve the manor's piano puzzle while avoiding the Puppeteer's lethal ambush zones.",
      personalContributionSummary: "Conceived, designed, and solo-developed the entire experience—from sensory-deprivation gameplay and FMOD/Steam Audio spatialization to playtest-iterated puzzle design, A* threat triggers, and complete Meta XR physical VR controls.",
      description: "A first-person psychological horror exploration game set inside an abandoned estate. Guided by an enigmatic female voice, the player navigates atmospheric environments, collects scattered documents to reconstruct a hidden tragedy, and evades the Puppeteer—a sorcerer who transforms victims into living marionettes.\n\nIndependently conceived the core game concept, gameplay design, and environmental soundscape. Designed and implemented layered adaptive audio systems with FMOD Studio, an AI boss-trigger heuristic system, interactive environmental puzzles, and full VR motion controls.",
      tags: ["Game Design", "FMOD Studio", "Steam Audio", "Meta XR VR", "Technical Audio", "Unity"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      videoUrl: "/videos/puppeteer.mp4",
      platform: "PC & Meta XR VR",
      engine: "Unity · C# · FMOD Studio · Steam Audio",
      authors: "Mauro Brochier",
      teamRoles: "Solo Developer — Game Designer, Gameplay Programmer",
      gddUrl: "https://docs.google.com/document/d/12cTheqaPUP9HEnYansgj9i_p2kzd_NlF/edit?usp=sharing&ouid=118263974300292559359&rtpof=true&sd=true",
      trailerId: "gVvd9aPJDlY",
      vrBadge: "META XR // FULL VR BUILD",
      audioNotice: "Advanced 3D binaural audio implemented — headphones recommended for spatial cues.",
      designFeatures: [
        {
          id: "puppeteer-echolocation",
          discipline: "Sensory & Core Loop Design",
          title: "Monocle Blindness & Heartbeat White-Light Echolocation",
          scopeBadge: "Complete PC & VR Build",
          media: {
            type: "video",
            src: "/videos/puppeteer.mp4",
            caption: "VR gameplay & sensory exploration inside the manor"
          },
          whatAndWhy: "Rather than treating darkness as passive atmosphere, I mechanically replaced sight with sound. Early in the game the player is blinded and restricted to a tiny circular monocle slit; an NPC grants a Heart that, when squeezed, emits an acoustic pulse rendered as stylized white-light echolocation across the house.",
          processDetails: {
            ideation: "Designed to force players to actually listen to room acoustics and the Guiding Voice instead of rushing visually through corridors.",
            mechanicsOrTuning: [
              "Monocle Constraint: narrow circular aperture removes peripheral awareness and forces deliberate auditory scanning.",
              "Heart Echolocation Pulse: squeezing the heart sends a propagating sound wave that briefly silhouettes walls and geometry in stark white light.",
              "Dynamic Guiding Voice: shifts audio sources room-by-room as objectives complete—misreading its direction leads straight into lethal Puppeteer spawn rooms."
            ],
            iterationOrResult: "Produced a focused 30-minute to 2-hour tension loop where audio cues directly govern survival and route choice."
          }
        },
        {
          id: "puppeteer-fmod",
          discipline: "Audio Systems · FMOD & Steam Audio",
          title: "5-Profile HRTF Calibration, Window Filtering & 3rd-Order Auralization",
          scopeBadge: "FMOD Studio + Steam Audio",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine3.png",
            caption: "Manor environment driven by FMOD procedural filtering & Steam Audio occlusion"          },
          whatAndWhy: "When navigation depends on hearing which room a sound comes from, basic stereo panning fails. I engineered a physically grounded audio pipeline in FMOD Studio and Steam Audio—starting with an interactive 5-profile HRTF calibration test—so exterior rain, footsteps, and threats behave realistically across walls, doors, and materials.",
          processDetails: {
            ideation: "Because ear geometry varies per person, offering 5 selectable HRTF profiles via a quick test lets each player maximize directional accuracy before entering the manor.",
            mechanicsOrTuning: [
              "Weighted Window Low-Pass (FMOD): exterior weather audio is procedurally muffled based on distance to the nearest window averaged with all other windows—reaching peak muffling at the exact center of the house.",
              "Procedural Footsteps (FMOD): dynamic surface-driven footsteps across sand, gravel, dirt, grass, and wood.",
              "Steam Audio Auralization: absorptive wood materials, wall/door occlusion on Puppeteer footsteps and voice cues, and room reverb computed up to 3rd-order reflections."
            ],
            iterationOrResult: "Made door states and room layout audibly readable, letting players judge safe vs. dangerous rooms purely by ear."
          }
        },
        {
          id: "puppeteer-piano",
          discipline: "Puzzle & Playtest Iteration",
          title: "Playable Physics Piano Puzzle & Non-Musician Balancing",
          scopeBadge: "Playtested & Iterated",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine1.png",
            caption: "Atmospheric exploration leading toward the manor's puzzle room"          },
          whatAndWhy: "The manor's central progression blocker is a fully playable piano: players must gather environmental clues in the room to deduce and perform the right melody. Early playtests revealed an accessibility wall—only musicians with absolute pitch could solve it—leading to structured design iterations.",
          processDetails: {
            ideation: "Built the main puzzle around active listening and musical interaction rather than standard key-and-lock backtracking.",
            mechanicsOrTuning: [
              "Fully Playable Instrument: every key produces real-time notes and reacts physically to input on both PC and Meta XR hands.",
              "Diegetic Clues: solution hints are embedded in the piano room itself rather than explicit UI tutorials."
            ],
            iterationOrResult: "Playtest Pivot: progressively simplified the target melody and sharpened clue clarity across test rounds until non-musician players could reliably solve it (30m for musicians, up to ~2h for casual testers)."
          }
        },
        {
          id: "puppeteer-vr-ai",
          discipline: "VR UX & Threat Design",
          title: "Meta XR Physical Gestures, Haptic Radar & A* Puppeteer Traps",
          scopeBadge: "Full VR Release",
          media: {
            type: "image",
            src: "/images/puppeteer_immagine2.png",
            caption: "Puppeteer pursuit encounter & Meta XR VR interaction build"
          },
          whatAndWhy: "For the complete Meta XR VR version, I redesigned interactions around natural physical gestures and replaced visual HUD markers with distance-scaled controller haptics—while keeping the Puppeteer as a clean, deterministic punishment threat for losing the Guiding Voice.",
          processDetails: {
            ideation: "Floating HUD arrows would ruin blindfolded horror; tactile haptics and natural gestures keep immersion intact from start to finish.",
            mechanicsOrTuning: [
              "Natural VR Interactions: physical push gestures to swing doors open, downward trigger-grab gestures to pick up items, and direct hand presses on piano keys.",
              "Haptic Proximity Radar: controller vibration pulse grows stronger as the player nears key objectives.",
              "Puppeteer Threat AI: spawns at specific danger zones when straying from the Guiding Voice, navigating obstacles via Unity NavMesh (A* pathfinding) to catch and turn the player into a marionette."
            ],
            iterationOrResult: "Shipped as a complete start-to-finish VR build featured in the release gameplay trailer."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Original psychological horror game concept, narrative premise, and tension curve balancing exploration against acute anxiety.",
          "Heuristic-driven boss encounter rules triggering the Puppeteer dynamically across house sectors to disrupt safe player routing.",
          "Environmental audio-driven navigation mechanics, branching escape dilemmas, and interactive puzzles including a physics-driven playable piano."
        ],
        implemented: [
          "Layered adaptive audio pipeline in Unity using FMOD Studio and Steam Audio with real-time parameter-driven crossfades and binaural 3D spatialization.",
          "Sensory AI finite state machine (Patrol, Alert, Hunt) governing line-of-sight perception, hearing thresholds, and stealth evasion mechanics.",
          "Full VR motion control and physics interaction architecture for Meta XR, adapting object handling, door manipulation, and dialogue-driven NPC interactions from PC to headset."
        ],
        authoredDocs: [
          "Game Design Document (GDD - Light Version) formalizing environmental pacing, audio cue mapping, and puzzle progression logic."
        ]
      },
      storySteps: [
        {
          tag: "ATMOSPHERIC HORROR",
          title: "Audio-Driven Environmental Exploration",
          description: "Engineered tension building inside an abandoned estate. The player relies on a mysterious guiding female voice, acoustic cues, and found journals to reconstruct the tragedy while avoiding sound-triggered alarms.",
          mediaLabel: "[ Gameplay Exploration // Dynamic Audio Panning & Lighting ]",
          imageSrc: "/images/puppeteer_immagine1.png"
        },
        {
          tag: "STEALTH & AI BEHAVIOR",
          title: "The Puppeteer's Patrol & Perception",
          description: "Developed stealth mechanics and sensory AI states (Patrol, Alert, Hunt) for the Puppeteer sorcerer. Evasion requires line-of-sight breaking, hiding spots, and careful sprint stamina management.",
          mediaLabel: "[ AI Architecture // Finite State Machine & Line of Sight Gizmos ]",
          imageSrc: "/images/puppeteer_immagine2.png"
        },
        {
          tag: "ESCAPE MECHANICS",
          title: "Rescue Objections & Multiple Endings",
          description: "Integrated risk-reward puzzle scenarios where players decide whether to sprint straight for escape or risk uncovering additional victims trapped as living marionettes.",
          mediaLabel: "[ Level Design // Branching Paths & Environmental Narrative ]",
          imageSrc: "/images/puppeteer_immagine3.png"
        }
      ]
    },
    {
      id: "dda-thesis",
      title: "Plug-and-Play DDA Framework & Soulslike Testbed",
      year: "Oct 2025–Oct 2026",
      period: "2025–2026",
      category: "Master's Thesis / Individual Research Project",
      coverImage: "/images/dda_banner.png",
      primaryFocus: "Decoupled DDA System & 15-Player Telemetry",
      genrePlatform: "Soulslike Prototype · Research Framework · PC",
      tagline: "Soulslike Prototype · Research Framework · PC",
      role: "Technical Game Designer · Systems Engineer",
      highlight: "Ready-to-Use System · 15-Player Empirical Study",
      gameplaySummary: "A genre-agnostic, drop-in Dynamic Difficulty Adjustment (DDA) framework built in Unity and validated on a custom high-stakes Soulslike combat testbed. Designed as a decoupled module that reads gameplay telemetry to modulate pacing smoothly while preserving genuine genre tension.",
      personalContributionSummary: "Architected the decoupled black-box DDA system ready for cross-genre integration, built a tight AAA-style Soulslike combat testbed (with dynamic armor breakage and MRT blood rendering) to ensure clean telemetry, and validated results through a 15-player study.",
      description: "A research-informed Soulslike action RPG prototype designed to investigate real-time adaptive challenge. The game monitors player performance telemetry to dynamically modulate friction, preserving the psychological state of Flow without compromising the punishing stakes essential to the genre.\n\nIndependently conceived, designed, and developed the complete heuristic DDA architecture in Unity and C#, from psychological flow modeling to gameplay integration. Conducted an empirical study with 15 players to validate difficulty pacing.",
      confidentialityNotice: "Proprietary Intellectual Property Notice: Specific algorithmic variables, mathematical formulas, and internal heuristics are withheld to protect academic research.",
      playtestNotice: "Validated through an empirical qualitative and quantitative study involving 15 playtesters.",
      detailedContributions: {
        designed: [
          "Complete heuristic DDA framework architecture designed to modulate friction in real time without breaking Soulslike genre stakes.",
          "Mathematical flow-state modeling based on player psychology, error-rate telemetry, and recovery momentum.",
          "Dynamic parameter balance: adaptive enemy attack aggression thresholds, damage scaling, and resource drop pacing.",
          "Core combat mechanics and encounter loops of the research Soulslike prototype in Unity and native C#."
        ],
        authoredDocs: [
          "Master's Degree Research Thesis under the supervision of Prof. Laura Ripamonti (University of Milan).",
          "Comprehensive quantitative & qualitative telemetry analysis report validating player flow retention."
        ]
      },
      platform: "PC",
      engine: "Unity · C#",
      authors: "Mauro Brochier (Supervisor: Prof. Laura Ripamonti)",
      teamRoles: "Solo Researcher, Technical Game Designer, Systems Programmer",
      tags: ["Dynamic Difficulty Adjustment", "System Design", "Player Telemetry", "Combat Design", "Technical Art (MRT)", "Unity"],
      designFeatures: [
        {
          id: "dda-architecture",
          discipline: "System Architecture · Plug & Play",
          title: "Decoupled, Genre-Agnostic DDA Framework (Ready to Integrate)",
          scopeBadge: "Production-Ready Module",
          media: {
            type: "image",
            src: "/images/dda_immagine2.png",
            caption: "Boss encounter testbed driven by the decoupled DDA module"
          },
          whatAndWhy: "Difficulty systems fail in production when hardcoded into enemy scripts. I engineered the DDA software as an independent, decoupled Unity module—completely separate from the Soulslike testbed—so it can ingest normalized telemetry and drive designer-exposed difficulty levers in virtually any action or survival game.",
          processDetails: {
            ideation: "Treating the Soulslike strictly as a stress-test client rather than part of the core package guarantees portability and clean separation of responsibilities.",
            mechanicsOrTuning: [
              "Black-Box Separation: telemetry sensors and gameplay parameter hooks are decoupled from the protected adaptive core.",
              "Designer Safety Bounds: exposed min/max envelopes ensure adaptive modulation never breaks intended genre identity or feels patronizing.",
              "IP Protection: internal heuristic logic, weights, and mathematical formulas remain strictly encapsulated."
            ],
            iterationOrResult: "Delivered as a self-contained, integration-ready Unity framework tested end-to-end under live combat load."
          }
        },
        {
          id: "dda-telemetry",
          discipline: "Empirical Validation · Data",
          title: "15-Player Study: Flow Retention & Perceived Fairness Metrics",
          scopeBadge: "15-Player Empirical Study",
          media: {
            type: "image",
            src: "/images/dda_immagine3.png",
            caption: "High-friction Soulslike encounter evaluated during the 15-player Flow study"
          },
          whatAndWhy: "An adaptive system is only as good as real player data. I conducted a structured qualitative and quantitative study across 15 players of varying skill levels to verify whether real-time modulation improved Flow retention and session engagement without veterans noticing artificial help.",
          processDetails: {
            ideation: "Cross-referenced objective in-game telemetry (failure curves, engagement pacing) with post-session psychological Flow evaluations.",
            mechanicsOrTuning: [
              "Tested across mixed skill tiers from casual action players to Soulslike veterans.",
              "Evaluated perceived fairness, tension sustainability, and engagement duration across punishing boss encounters."
            ],
            iterationOrResult: "Demonstrated measurable improvements in Flow retention and perceived fairness (Master's research supervised by Prof. Laura Ripamonti, University of Milan)."
          }
        },
        {
          id: "dda-combat-testbed",
          discipline: "Combat Design (Testbed)",
          title: "AAA-Style Soulslike Combat Built for Uncorrupted Telemetry",
          scopeBadge: "Playable Testbed",
          media: {
            type: "image",
            src: "/images/dda_immagine1.png",
            caption: "Punishing Soulslike combat loop built for uncorrupted telemetry"
          },
          whatAndWhy: "Poor combat feel produces noisy data: if players die to clunky controls or unfair hitboxes, telemetry cannot measure true difficulty friction. I designed and built a weighty, punishing Soulslike combat loop with readable boss tells so every mistake reflected authentic gameplay challenge.",
          processDetails: {
            ideation: "Built the combat testbed to strict AAA Soulslike standards specifically to prevent bad game design from polluting the DDA validation dataset.",
            mechanicsOrTuning: [
              "Deliberate, animation-committed combat pacing, stamina pressure, and high-stakes boss windows.",
              "Consistent telegraphing and tight hit validation so recorded deaths reflect genuine player decision and timing."
            ],
            iterationOrResult: "Isolated real skill friction cleanly during playtests, keeping telemetry datasets reliable across all 15 participants."
          }
        },
        {
          id: "dda-mrt-gore",
          discipline: "Technical Art & Diegetic Feedback",
          title: "Dynamic Armor Breakage & MRT Animated Blood Rendering",
          scopeBadge: "Technical Craft",
          media: {
            type: "placeholder",
            src: "",
            alt: "Dynamic Armor Breakage & MRT Animated Blood Pipeline",
            caption: "Before/after armor fracture & MRT render target capture queued for archive update"
          },
          whatAndWhy: "To communicate combat lethality viscerally without cluttering the screen, I implemented dynamic armor breakage with real-time texture damage and a custom blood-rendering pipeline using Multiple Render Targets (MRT), preventing blood decals from sliding during player animations.",
          processDetails: {
            ideation: "Standard Unity Decal Projectors slide awkwardly across deforming SkinnedMeshRenderers during fast combat animations, breaking immersion.",
            mechanicsOrTuning: [
              "Dynamic Armor Breakage: progressive structural damage triggers real-time armor fracturing and texture wear.",
              "MRT Blood Pipeline: paints blood directly onto the character's render target space so stains stay locked to animated armor and limbs."
            ],
            iterationOrResult: "Delivered crisp, non-sliding visceral feedback that reinforced high-stakes Soulslike immersion throughout testing."
          }
        }
      ],
      storySteps: [
          {
            tag: "PROBLEM STATEMENT",
            title: "The Hardcore Friction Dilemma",
            description: "Traditional static difficulty in punishing genres frequently leads to high player churn due to anxiety spikes or skill stagnation. The design objective was engineering an adaptive system that preserves genuine tension without ever feeling artificial or patronizing to veteran players.",
            mediaLabel: "[ Research Prototype // Boss Encounter Phase 1 ]",
            imageSrc: "/images/dda_immagine1.png"
          },
          {
            tag: "HEURISTIC ARCHITECTURE",
            title: "Non-Intrusive Challenge Modulation",
            description: "Engineered a modular framework in Unity and native C# evaluating real-time player error rates, engagement velocity, and recovery mechanics. The system modulates environmental and enemy combat parameters within strictly calibrated, imperceptible thresholds.",
            mediaLabel: "[ Adaptive Challenge // Boss Encounter Phase 2 Escalation ]",
            imageSrc: "/images/dda_immagine2.png"
          },
          {
            tag: "EMPIRICAL VALIDATION",
            title: "15-Player Qualitative & Quantitative Study",
            description: "Conducted structured playtesting sessions across diverse skill tiers. In-game telemetry and post-session psychological evaluations demonstrated significant improvements in flow retention, engagement duration, and perceived fairness during high-friction encounters.",
            mediaLabel: "[ High-Level Telemetry Data // Flow Survey Evaluation ]",
            imageSrc: "/images/dda_immagine3.png"
          }
        ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      year: "Oct 2023 – Feb 2024",
      period: "2024",
      category: "Academic Team Project / Industry Showcase",
      coverImage: "/images/murder_banner.png", // O lo screenshot di copertina che preferisci
      primaryFocus: "Deterministic AI (Behavior Trees) & Custom Unity Editor Tool",
      genrePlatform: "2D Strategy-Puzzle · PC & Web Browser",
      tagline: "2D Strategy-Puzzle · PC & Web Browser",
      role: "AI Systems Designer · Tools & Gameplay Programmer",
      highlight: "New Game Designer 2025 · 3rd Place · Game Design & Programming",
      gameplaySummary: "A 2D planning-and-execution puzzle strategy game where operatives orchestrate 'perfect murders' across interconnected room graphs. Players read deterministic NPC schedules, place lures and weapons, and sequence agent actions along a timeline without breaching the suspicion limit.",
      personalContributionSummary: "Designed and implemented the deterministic Guest Behavior Tree architecture with decorator-driven personality traits, built a custom visual node-based Behavior Tree Editor inside Unity for the team, and integrated Scenario 1 gameplay.",
      description: "A 2D puzzle-strategy game where players take the role of an operative orchestrating 'perfect murders'. By manipulating deterministic NPC schedules, exploiting detection cones, and placing items on an interactive timeline, targets are eliminated without raising suspicion.\n\nIndependently implemented the complete NPC AI architecture using Behavior Trees and developed a custom Behavior Tree visualizer tool within the Unity Editor. Co-designed NPC routines and integrated the AI into one of the game's five scenarios.",
      tags: ["Behavior Trees", "Editor Tooling", "AI Design", "Systems Design", "Unity", "C#"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      platform: "PC & Web Browser",
      engine: "Unity (2D) / WebGL",
      authors: "Mauro Brochier, Matteo Mangioni, Anthony Baiamonte, Christian Colombo",
      teamRoles: "Game Programmer, AI Programmer, Game Designer (AI Systems)",
      gddUrl: "https://github.com/MauroTheB/MurderMysteryInfo/blob/main/Documents/GameDesignDocument.md",
      demoUrl: "https://polimi-game-collective.itch.io/murder-mystery-incorporated",
      trailerId: "ZpdFg5MHrdI",
      gameplayId: "wDj0Gx3CgIQ",
      designFeatures: [
        {
          id: "murder-bt-editor",
          discipline: "Technical Design · Custom Tooling",
          title: "Visual Node-Based Behavior Tree Editor Built Inside Unity",
          scopeBadge: "Custom Unity Editor Tool",
          media: {
            type: "image",
            src: "/images/murder_immagine2.png",
            caption: "Deterministic guest AI driven by the custom Unity Behavior Tree Editor"
          },
          whatAndWhy: "Hardcoding NPC decision trees in C# slows down design iteration and hides AI intent. I engineered a graphical node-and-edge Behavior Tree Editor directly inside the Unity Editor—supporting Selectors, Conditions, and Tasks—so behavior logic could be authored, read, and debugged visually.",
          processDetails: {
            ideation: "Built to empower fast team iteration across an 8-week production cycle by separating visual AI flow authoring from underlying gameplay verb code.",
            mechanicsOrTuning: [
              "Node-Graph Authoring: visual creation and linking of Selectors, Condition nodes, and Action Tasks via nodes and edges.",
              "Runtime Clarity: clean visual inspection of tree structure rather than digging through nested switch/if scripts."
            ],
            iterationOrResult: "Enabled rapid AI prototyping and debugging across all guest archetypes up to the live WebGL release on Itch.io."
          }
        },
        {
          id: "murder-deterministic-ai",
          discipline: "AI & Systems Design",
          title: "Clockwork Guest AI & Decorator-Driven Personality Traits",
          scopeBadge: "Core AI Architecture",
          media: {
            type: "image",
            src: "/images/murder_immagine1.png",
            caption: "Tactical timeline planning phase across interconnected room nodes"
          },
          whatAndWhy: "In a timeline puzzle game, random AI ruins strategy—a good plan shouldn't fail due to luck. I designed a 100% deterministic base Behavior Tree shared by all guests and layered personality traits (Suspicious, Greedy, Alcoholic) as modular Decorators, turning NPC reactions into readable puzzles.",
          processDetails: {
            ideation: "Chosen over randomized patrol routes so players can diagnose exactly why a plan raised suspicion and refine it iteratively.",
            mechanicsOrTuning: [
              "Deterministic Selector Hierarchy: Lure in current room → Lure in adjacent room → Scheduled Timeline Event → Weighted Room Wander (interest score).",
              "Decorator Traits: Greedy treats Cash as a Lure; Alcoholic drinks Wine only when unobserved; Suspicious adds +2 suspicion on witnessed anomalies.",
              "Suspicion Economy (0–10 cap): Corpse (+4), Blood (+2), Armed Agent (+2) evaluated deterministically per room node."
            ],
            iterationOrResult: "Anchored the trial-and-error puzzle loop showcased at New Game Designer 2025 (3rd Place)."
          }
        },
        {
          id: "murder-scenario-flow",
          discipline: "Systems Integration & Level Flow",
          title: "Room-Graph Interactions, Verb/Item Modifiers & Scenario 1",
          scopeBadge: "Playable on Itch.io",
          media: {
            type: "image",
            src: "/images/murder_immagine3.png",
            caption: "Autonomous execution playback & mission suspicion evaluation"
          },
          whatAndWhy: "To keep planning readable without grid clutter, entities interact strictly at the room-node level while item descriptors modify timeline costs and noise propagation. I integrated the AI, suspicion triggers, and distraction flow into Scenario 1 with open-ended puzzle solutions.",
          processDetails: {
            ideation: "Room-node abstraction ensures that if a guest enters a room with a corpse, reaction is instant and unambiguous—keeping player focus on timing and routing.",
            mechanicsOrTuning: [
              "Verb & Item Coupling: Slow weapons add +1 timeline slot to Kill actions; Loud items alert neighbouring rooms (+2 suspicion per guest alerted).",
              "Scenario 1 Integration: wired trap triggers, suspicion thresholds, and deterministic guest transitions for live WebGL play."
            ],
            iterationOrResult: "Shipped as a playable browser build on Itch.io and pitched live at New Game Designer 2025."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Co-designed NPC behaviour systems, sensory perception cones, and environmental reaction logic with team designers.",
          "Designed and balanced NPC behavioral traits influencing autonomous decision-making and routine deviations.",
          "Designed interactive timing puzzles, patrol distraction traps, and obstacle timelines for one of the game's five scenarios."
        ],
        implemented: [
          "Independently implemented the complete NPC AI architecture using Behavior Trees in Unity and native C#.",
          "Engineered a custom Behavior Tree visualizer tool directly integrated into the Unity Editor to inspect and debug live AI nodes.",
          "Programmed autonomous NPC patrol routines, peer-to-peer information exchange, and dynamic alert responses.",
          "Engineered and integrated the full gameplay logic, trigger traps, and AI state transitions for Scenario 1 of the game's five scenarios."
        ],
        authoredDocs: [
          "Authored technical Game Design Document (GDD) sections on NPC state machines, trait modifiers, and tactical timeline mechanics."
        ]
      },
      storySteps: [
          {
            tag: "TEMPORAL MECHANICS",
            title: "Interactive Timeline Scheduling",
            description: "Designed a 2D puzzle-strategy core loop where players schedule actions, place tools, and arrange agent trajectories along a multi-track tactical timeline.",
            mediaLabel: "[ UI & Design // Timeline Scrubber & Action Scheduling Grid ]",
            imageSrc: "/images/murder_immagine1.png"
          },
          {
            tag: "AGENT AI PATTERNS",
            title: "Predictable Routine Exploitation",
            description: "Engineered deterministic NPC routines and detection cones. Players exploit predictable guard movements to orchestrate fatal accidents without raising suspicion meters.",
            mediaLabel: "[ AI Systems // Routine Paths, Suspicion Cones & Trigger Traps ]",
            imageSrc: "/images/murder_immagine2.png"
          },
          {
            tag: "THE EXECUTION PHASE",
            title: "Autonomous Playback & Evaluation",
            description: "Once the timeline is staged, hitting play triggers an autonomous real-time sequence. The agency system grades performance based on clean execution and zero collateral evidence.",
            mediaLabel: "[ Gameplay Demo // Playback Sequence & Mission Debriefing Screen ]",
            imageSrc: "/images/murder_immagine3.png"
          }
        ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      year: "Mar 2021 – Apr 2021",
      period: "2021",
      category: "Individual Internship Project",
      coverImage: "/images/maze_banner.png",
      primaryFocus: "2D→3D Cognitive Loop & Mobile Runner Mechanics",
      genrePlatform: "Spatial Memory & Traversal Game · Android Mobile",
      tagline: "Spatial Memory & Traversal Game · Android Mobile",
      role: "Solo Developer · Game Designer & Programmer",
      gameplaySummary: "A mobile third-person spatial memory runner inspired by cognitive research. Players study a 2D top-down labyrinth blueprint for up to 30 seconds before a smooth Cinemachine transition drops them into corridor-level 3D traversal, navigating by memory with swipe turns and merchant potions.",
      personalContributionSummary: "First complete solo project (238-hour internship at Nextrek S.r.l., Roma Tre Bachelor's thesis). Conceived the 2D-to-3D memory hook, designed 3 complete labyrinths, merchant economy, and health-linked swipe responsiveness, and built the full Unity mobile app.",
      description: "A mobile third-person spatial memory challenge based on cognitive research. Players are given 30 seconds to study a 2D top-down maze blueprint before smoothly transitioning into a 3D over-the-shoulder perspective, navigating through identical corridors from memory while managing potions.\n\nIndependently conceived, designed, and developed the entire title during a 238-hour professional internship at Nextrek S.r.l. Designed the core perspective-transition mechanic, mobile touch controls, and memory-driven pacing.",
      tags: ["Mobile Game Design", "Spatial Cognition", "Cinemachine", "Android", "Unity", "C#"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      platform: "Android Mobile",
      isMobile: true,
      engine: "Unity · C#",
      authors: "Mauro Brochier (Nextrek S.r.l. Internship)",
      teamRoles: "Solo Developer — Game Designer, Gameplay Programmer",
      trailerId: "OP1fEbdZbjk",
      gameplayId: "WI-OsY6SoKs",
      thesisBadge: "COGNITIVE R&D // BACHELOR THESIS RESEARCH",
      designFeatures: [
        {
          id: "maze-cognitive-loop",
          discipline: "Cognitive & Camera Design",
          title: "2D Blueprint Memory Window & Smooth Cinemachine 3D Blend",
          scopeBadge: "Bachelor's Thesis R&D",
          media: {
            type: "image",
            src: "/images/maze_immagine1.png",
            caption: "2D top-down memorization phase with start and exit markers"
          },
          whatAndWhy: "To test how players translate allocentric map memory into egocentric navigation, each stage opens with a timed top-down 2D view (scaling up to 30 seconds on the hardest labyrinth) highlighting start and exit—before smoothly blending via Cinemachine into a tight over-the-shoulder 3D corridor view.",
          processDetails: {
            ideation: "Removing the minimap once traversal begins turns spatial recall itself into the core gameplay tension.",
            mechanicsOrTuning: [
              "Timed Study Phase: shorter memorization windows on early mazes, up to 30s on the 3rd and hardest labyrinth.",
              "Cinemachine Blend: seamless camera drop from overhead overview straight onto the starting corridor so spatial orientation stays grounded."
            ],
            iterationOrResult: "Playtests confirmed the 2D-to-3D memorization hook genuinely engaged players' spatial memory across all 3 completed levels."
          }
        },
        {
          id: "maze-economy-health",
          discipline: "Systems & Survival Design",
          title: "Hidden Merchants, Exit-Hint Potions & HP-Linked Responsiveness",
          scopeBadge: "3 Playable Labyrinths",
          media: {
            type: "image",
            src: "/images/maze_immagine3.png",
            caption: "Mobile merchant & potion survival UI"
          },
          whatAndWhy: "Pure memorization needed risk-reward detours. Hidden merchants scattered off the main path sell potions (speed boost, temporary exit-path guidance, healing)—while player health directly governs swipe responsiveness, making low-HP turns noticeably sluggish.",
          processDetails: {
            ideation: "Tying health to control responsiveness rather than an instant game-over bar turns survival pressure into tactile friction.",
            mechanicsOrTuning: [
              "Implemented Potions: Speed boost for fast traversal, temporary Exit Compass revealing the right path for a few seconds, and Healing to restore crisp swipe turning.",
              "Scope Transparency: merchant inventories also showcase planned weapons designed for future chaser enemies intended to jostle players off-route."
            ],
            iterationOrResult: "Created a clear dilemma between rushing the memorized shortest path vs. risking detours for navigation potions."
          }
        },
        {
          id: "maze-controls-postmortem",
          discipline: "Mobile Controls & Post-Mortem",
          title: "Swipe Runner Locomotion & Early Career Architecture Reflection",
          scopeBadge: "2021 First Solo Build",
          media: {
            type: "image",
            src: "/images/maze_immagine2.png",
            caption: "3D corridor traversal & mobile touch controls"
          },
          whatAndWhy: "Built for mobile with continuous forward runner pacing, left/right directional swipes, and manual halt buttons to pause and rethink turns. Looking back at this 2021 internship project, it also served as my foundational lesson in control ergonomics and movement architecture.",
          processDetails: {
            ideation: "Aimed for one-handed Maze Runner immediacy adapted to grid-like corridor turns.",
            mechanicsOrTuning: [
              "Rapid-Prototype Locomotion: implemented forward motion using a NavMeshAgent chasing a dynamic 'carrot' target positioned just ahead of the player.",
              "Manual Brake Input: dedicated stop buttons let players halt momentum at tricky intersections."
            ],
            iterationOrResult: "Honest Post-Mortem: testing exposed clunky touch ergonomics and limits of the 'carrot-target' NavMeshAgent hack. While the memory hook worked strongly, refactoring into a dedicated CharacterController and tighter swipe buffering would be my top priority today—a lesson directly applied in later titles."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Conceived the cognitive gameplay loop investigating how players retain 2D top-down blueprints and translate them into 3D third-person navigation.",
          "Designed the perspective-transition mechanic smoothly shifting from a 30-second 2D maze overview into an over-the-shoulder 3D traversal view.",
          "Formulated maze labyrinth layouts, mobile survival pacing, hidden merchant economy, and speed/memory potion consumption loops."
        ],
        implemented: [
          "Independently conceived, architected, and developed the complete game in Unity and C# during a 238-hour professional internship at Nextrek S.r.l.",
          "Programmed mobile touch navigation controls, real-time camera perspective interpolation (2D orthographic to 3D perspective), and maze grid generation.",
          "Engineered mobile inventory data structures, merchant interaction routines, and status-modifying potion mechanics."
        ],
        authoredDocs: [
          "Bachelor's Degree Thesis ('Player's memory, from 2d to 3d') at Roma Tre University analyzing spatial memory retention across visual perspectives.",
          "Technical internship final report and game design documentation delivered to Nextrek S.r.l."
        ]
      },
      storySteps: [
        {
          tag: "COGNITIVE MECHANICS",
          title: "2D Memory Memorization Phase",
          description: "Players are presented with a top-down 2D blueprint of the labyrinth for exactly 30 seconds to memorize pathways, dead ends, and point-of-interest markers.",
          mediaLabel: "[ Game Mechanics // 2D Blueprint HUD & Countdown Timer ]",
          imageSrc: "/images/maze_immagine1.png"
        },
        {
          tag: "3D SPATIAL NAVIGATION",
          title: "Third-Person Perspective Traversal",
          description: "The perspective transitions into full 3D over-the-shoulder navigation. The player must rely purely on visual-spatial working memory to find the exit through identical corridor walls.",
          mediaLabel: "[ Gameplay Traversal // 3D Camera Controls & Mobile Touch Input ]",
          imageSrc: "/images/maze_immagine2.png"
        },
        {
          tag: "RESOURCE MANAGEMENT",
          title: "Hidden Merchants & Potion Economy",
          description: "Integrated survival gameplay mechanics on mobile: finding hidden merchants, managing torches, and utilizing speed or memory potions to avoid being trapped forever in the maze.",
          mediaLabel: "[ Mobile UI // Inventory, Potion Crafting & Merchant Interaction ]",
          imageSrc: "/images/maze_immagine3.png"
        }
      ]
    },
    {
      id: "water-sim",
      title: "Real-Time Water Simulation in OpenGL with CUDA Acceleration",
      year: "Feb 2025 – Apr 2025",
      period: "2025",
      category: "Individual Academic Project",
      coverImage: "/images/water_banner.png", // Lo screenshot con riflessi e caustiche OpenGL (o quello che preferisci)
      primaryFocus: "CUDA GPU Wave Acceleration (4× Grid @ 90+ FPS)",
      genrePlatform: "Real-Time Fluid Simulation · GPGPU · PC",
      tagline: "Real-Time Fluid Simulation · GPGPU · PC",
      role: "Graphics & Simulation Programmer",
      gameplaySummary: "A real-time grid-based fluid simulation built from scratch in C++ and OpenGL, later upgraded with NVIDIA CUDA GPGPU acceleration. Arbitrary 3D rigid bodies interact dynamically with the surface, generating geometry-driven wave propagation while maintaining 90+ FPS at 4× grid density.",
      personalContributionSummary: "Built solo from the ground up: designed the OpenGL height-field wave propagation and arbitrary-shape geometry coupling, then offloaded heavy vertex-wave physics onto CUDA GPU kernels for a 4× resolution jump above 90 FPS.",
      description: "A real-time grid-based fluid simulation and physics sandbox. The system computes surface wave equations and resolves complex two-way dynamic physical coupling with arbitrary 3D rigid bodies, allowing objects to float, drag, and generate natural shape-dependent wake ripples.\n\nIndependently proposed, architected, and developed the entire simulation in C++ and OpenGL as an academic project. Parallelized computationally intensive wave physics across GPU hardware threads using NVIDIA CUDA, incorporating Fresnel surface shaders.",
      tags: ["C++", "NVIDIA CUDA", "OpenGL", "GPGPU", "Physics Simulation", "3D Mathematics"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water",
      platform: "PC (Windows / Linux)",
      engine: "Custom C++ Engine + OpenGL",
      networking: "NVIDIA CUDA Architecture",
      authors: "Mauro Brochier",
      teamRoles: "Graphics Programmer, Systems Engineer",
      driveVideoUrl: "https://drive.google.com/file/d/1SSt9NNn0LSsy904b9N3yUaVozUVa0Y7O/view?usp=sharing",
      localVideoUrl: "/videos/water_sim.mp4",
      designFeatures: [
        {
          id: "water-cuda-gpgpu",
          discipline: "GPGPU Optimization · CUDA",
          title: "Offloading Wave Physics to GPU: 4× Grid Density at 90+ FPS",
          scopeBadge: "90+ FPS Benchmark",
          media: {
            type: "image",
            src: "/images/water_immagine1.png",
            caption: "High-density CUDA-accelerated fluid grid running smoothly in real time"
          },
          whatAndWhy: "The initial pure-OpenGL CPU prototype hit performance bottlenecks when scaling water grid density. By moving the heaviest wave-vertex propagation calculations onto NVIDIA CUDA kernels, the simulation gained 4× grid resolution while staying steadily above 90 FPS even in chaotic scenes.",
          processDetails: {
            ideation: "Focused optimization strictly on the true bottleneck—per-vertex wave propagation across dense grids—rather than prematurely rewriting the entire render path.",
            mechanicsOrTuning: [
              "CPU vs. GPGPU Upgrade: transitioned from single-threaded/CPU wave updates to parallel CUDA kernel execution across GPU threads.",
              "Measured Gain: 4× higher mesh grid resolution compared to the pre-CUDA OpenGL build, holding 90+ FPS under heavy multi-object ripples."
            ],
            iterationOrResult: "Proved practical real-time profiling instincts—delivering higher visual fidelity without sacrificing frame budget."
          }
        },
        {
          id: "water-mesh-coupling",
          discipline: "Physics & Geometry Interaction",
          title: "Arbitrary 3D Geometry Coupling & Shape-Driven Ripples",
          scopeBadge: "C++ Custom Engine",
          media: {
            type: "image",
            src: "/images/water_immagine3.png",
            caption: "Real-time wake ripples driven by arbitrary immersed 3D geometry"
          },
          whatAndWhy: "Instead of faking ripples with flat radial circles, the water height-field responds directly to the actual geometry of any immersed 3D object—allowing arbitrary shapes and sizes to displace fluid and trigger coherent wake waves.",
          processDetails: {
            ideation: "Designed the wave propagation rules to react cleanly to diverse collider silhouettes without manual per-asset scripting.",
            mechanicsOrTuning: [
              "Geometry-Aware Displacement: surface height updates account for the immersed profile of arbitrary 3D objects.",
              "Real-Time Wave Propagation: iterative height-field solver distributes ripples smoothly across neighbouring grid vertices."
            ],
            iterationOrResult: "Works out-of-the-box with varied object shapes dropped into the sandbox."
          }
        },
        {
          id: "water-opengl-render",
          discipline: "Graphics Pipeline · OpenGL",
          title: "Decoupled Simulation-to-Render Pipeline & Surface Shading",
          scopeBadge: "OpenGL & GLSL",
          media: {
            type: "image",
            src: "/images/water_immagine2.png",
            caption: "OpenGL water surface shading with real-time reflections and vertex displacement"
          },
          whatAndWhy: "Built a clean separation between physics simulation state and OpenGL surface rendering, allowing CUDA simulation updates to feed real-time vertex displacement and water surface shading smoothly.",
          processDetails: {
            ideation: "Decoupling compute and rendering made it straightforward to swap the initial CPU solver for CUDA without rewriting the graphics layer.",
            mechanicsOrTuning: [
              "Custom C++ / OpenGL pipeline feeding dynamic vertex displacement from the height-field grid.",
              "GLSL surface shading with Fresnel-style reflections and crisp wave highlights."
            ],
            iterationOrResult: "Cleanly modular architecture documented for the University of Milan coursework."
          }
        }
      ],
      detailedContributions: {
        designed: [
          "Conceived and formulated the mathematical physics framework for grid-based height-field wave propagation equations.",
          "Designed two-way dynamic fluid-rigid body coupling rules, allowing arbitrary 3D meshes to float, drag, sink, and generate natural shape-dependent wake ripples.",
          "Architected the modular simulation-to-render pipeline, cleanly decoupling GPU-accelerated physics computation from real-time graphics rendering."
        ],
        implemented: [
          "Parallelized the core fluid simulation pipeline in C++ using NVIDIA CUDA kernels, executing wave physics calculations across thousands of concurrent GPU hardware threads.",
          "Engineered realistic real-time water surface rendering in modern OpenGL with custom GLSL shaders incorporating Fresnel reflection, refraction, and caustic highlights.",
          "Developed 3D boundary-condition algorithms to compute dynamic hydrostatic buoyant forces and surface displacement for arbitrary geometric shapes."
        ],
        authoredDocs: [
          "Academic project report (University of Milan) documenting fluid mathematical derivations, CUDA memory hierarchy optimizations, and benchmark profiling."
        ]
      },
      storySteps: [
          {
            tag: "GPGPU COMPUTING",
            title: "Parallel CUDA Physics Kernels",
            description: "Implemented high-performance parallel computation in C++ and CUDA. Fluid grid state and velocity fields are computed directly on the GPU across thousands of concurrent hardware threads.",
            mediaLabel: "[ High Performance // CUDA Kernel Dispatch & Memory Hierarchy ]",
            imageSrc: "/images/water_immagine1.png"
          },
          {
            tag: "FLUID DYNAMICS",
            title: "Surface Wave Equations in OpenGL",
            description: "Engineered real-time wave propagation through height-field displacement and custom OpenGL shaders, achieving smooth fluid reflections and refractive caustic lighting.",
            mediaLabel: "[ Graphics Engine // Shaders, Caustics & Vertex Displacement ]",
            imageSrc: "/images/water_immagine2.png"
          },
          {
            tag: "RIGID BODY COUPLING",
            title: "Arbitrary 3D Mesh Interaction",
            description: "Simulated two-way physical interaction between dynamic 3D rigid bodies and the fluid surface: objects generate realistic wake ripples, buoyancy, and displacement based on shape.",
            mediaLabel: "[ Physics Simulation // Mesh Collision & Wave Ripple Generation ]",
            imageSrc: "/images/water_immagine3.png"
          }
        ]
    },
  ],
  experiences: [
    {
      id: "edison",
      role: "Game Design & Programming Instructor",
      company: "Edison School",
      period: "Oct 2025 – Present",
      location: "Rome, Italy",
      course: "Course: Game Developer – Unity 3D",
      description: "Teaching game design principles and technical gameplay programming across multiple student tiers, from foundational concepts to advanced production pipelines.",
      bullets: [
        "Teach Game Design and Game Programming to students across different age groups and skill levels, from beginner to advanced.",
        "Deliver practical, hands-on training in Unity, C# and Visual Scripting.",
        "Mentor students through the end-to-end development of individual game projects, from initial concept to technical implementation.",
        "Taught 9 different classes to date with comprehensive syllabus delivery."
      ],
      skills: ["Unity 3D", "C#", "Visual Scripting", "Gameplay Architecture", "Mentorship", "Pedagogy"]
    },
    {
      id: "cristaltec",
      role: "Game Designer & Programmer",
      company: "Cristaltec SpA",
      period: "Feb 2022 – Aug 2022",
      location: "Rome, Italy",
      description: "Gameplay systems development and mathematical balancing within an established industrial gaming environment.",
      bullets: [
        "Designed and implemented a rolling-card gameplay feature, defining the conditions, timing and state behaviour governing how cards fall.",
        "Adapted rapidly to a proprietary programming language and internal development tools, applying them directly to gameplay feature development within a production pipeline."
      ],
      skills: ["Gameplay Systems", "Proprietary Scripting", "State Behaviour", "Game Logic", "Timing & Balancing"]
    },
    {
      id: "nextrek-social",
      role: "Videogame Designer & Programmer",
      company: "Nextrek S.r.l.",
      period: "Jul 2021 – Aug 2021",
      location: "Rome, Italy",
      description: "AI architecture and social simulation engineering for a 3D Unity title inspired by The Sims.",
      bullets: [
        "Designed and implemented a complete NPC social interaction system for a 3D Unity game inspired by The Sims, combining Finite State Machines (FSM) and Behavior Trees.",
        "Developed a diverse range of autonomous NPC interactions and behaviours: contextual conversations, flirting, dancing, emotional reactions, peer-to-peer information exchange, short-term memory buffers, and group dynamics."
      ],
      skills: ["Unity 3D", "C#", "Behavior Trees", "Finite State Machines (FSM)", "NPC AI Systems", "Social Simulation"]
    },
    {
      id: "nextrek-internship",
      role: "Game Designer & Programmer (University Internship)",
      company: "Nextrek S.r.l.",
      period: "Mar 2021 – Apr 2021",
      location: "Rome, Italy",
      description: "Conception, design, and technical delivery of Maze's Soul as an individual title during an accredited university internship.",
      bullets: [
        "Independently conceived, designed and developed Maze's Soul as an individual game project during a 238-hour professional internship.",
        "Managed the entire product lifecycle autonomously, from initial concept pitching and cognitive gameplay design to native C# mobile implementation."
      ],
      skills: ["Unity 3D", "C#", "Mobile Development", "Rapid Prototyping", "Solo Game Delivery"]
    }
  ],
  education: [
    {
      id: "master",
      degree: "MSc in Computer Science – Videogame Design and Programming (LM-18)",
      institution: "University of Milan (Università degli Studi di Milano)",
      period: "2023 – Oct 2026",
      grade: "106 / 110",
      supervisor: "Prof. Anna Laura Ripamonti",
      thesisSubject: "Videogame Design",
      thesisTitle: "Framework Euristico per il Dynamic Difficulty Adjustment (DDA), mediante un'Architettura 'Glass-Box' a supporto del Game Designer",
      thesisDetails: "Conception, mathematical modeling, and empirical validation of a heuristic Dynamic Difficulty Adjustment framework. Engineered a transparent 'glass-box' telemetry architecture giving game designers complete visibility and manual parameter overrides over real-time flow modulation in punishing action titles.",
      skills: ["Dynamic Difficulty Adjustment (DDA)", "Flow State Theory", "Player Telemetry", "Game Balance", "Glass-Box Architecture", "Player Psychology"]
    },
    {
      id: "bachelor",
      degree: "BSc in Computer Engineering (L-8)",
      institution: "Roma Tre University (Università degli Studi Roma Tre)",
      period: "2015 – 2021",
      supervisor: "Prof. Giuseppe Di Battista",
      thesisSubject: "Game Design & Psychology",
      thesisTitle: "Player's memory, from 2d to 3d [Videogame – Maze's Soul]",
      thesisDetails: "Empirical investigation into human visual-spatial memory retention during real-time perspective transitions from top-down 2D floor plans to 3D third-person navigation, formally implemented and demonstrated via the mobile game Maze's Soul.",
      skills: ["Computer Engineering", "Data Structures & Algorithms", "Computer Architecture", "Spatial Cognition", "Operating Systems", "Networking"]
    }
  ],
  skills: [
    {
      category: "Gameplay & Technical Design",
      level: "Advanced",
      icon: "⚡",
      items: [
        "Gameplay Systems Design",
        "Technical Implementation",
        "Gameplay Mechanics & Controls",
        "Rapid Gameplay Prototyping",
        "Design Iteration & Balancing",
        "GDD / TDD / LDD Technical Authoring",
        "Game Balance Spreadsheets"
      ]
    },
    {
      category: "AI, NPC & Combat Systems",
      level: "Specialised",
      icon: "🧠",
      items: [
        "Game AI & NPC Behaviour Architecture",
        "Behavior Trees (BTs) & Custom Editor Tools",
        "Finite State Machines (FSMs)",
        "Combat Systems (Melee & Projectile Mechanics)",
        "Sensory Perception Cones & Line-of-Sight",
        "Enemy Pacing & Difficulty Balancing"
      ]
    },
    {
      category: "Game Engines & Programming",
      level: "Advanced",
      icon: "🎮",
      items: [
        "Unity Engine (Advanced 3D & 2D)",
        "C# (Native Gameplay Programming)",
        "Object-Oriented Programming (OOP)",
        "Component-Based Architecture",
        "Visual Scripting",
        "Android Mobile Optimization"
      ]
    },
    {
      category: "Multiplayer Networking & Version Control",
      level: "Advanced",
      icon: "🌐",
      items: [
        "Mirror Networking (Co-op Multiplayer)",
        "Client-Server Architecture",
        "State Synchronization & Remote Procedure Calls",
        "Git (Advanced Branching & Merge Workflows)",
        "Collaborative Team Development Pipelines"
      ]
    },
    {
      category: "Interactive & Spatial 3D Audio",
      level: "Advanced",
      icon: "🎧",
      items: [
        "FMOD Studio (Event Architecture & Parameter Routing)",
        "Steam Audio (HRTF & Binaural Spatialization)",
        "Adaptive Music & Real-Time Parameter Crossfades",
        "3D Audio Integration in Unity",
        "Acoustic Environmental Occlusion"
      ]
    },
    {
      category: "Graphics, GPGPU & Systems",
      level: "Engineering",
      icon: "⚙️",
      items: [
        "C++ (Systems Programming)",
        "NVIDIA CUDA (Parallel GPGPU Wave Physics)",
        "OpenGL & GLSL Custom Shaders",
        "Real-Time Fluid & Wave Simulation",
        "Fresnel Optical Shaders",
        "Python, Java, C"
      ]
    }
  ]
};