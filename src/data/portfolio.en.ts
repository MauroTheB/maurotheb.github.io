export const PORTFOLIO_EN = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Technical Game Designer",
    subheading: "Technical Game Designer & Systems Engineer. Bridging gameplay systems design, player psychology, and technical engine implementation in C# and C++.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    cvUrl: "/cv_mauro_brochier.pdf",
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
    ddaBadge: "DDA RESEARCH // IN PROGRESS",
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
      id: "dda-thesis",
      title: "Heuristic DDA Framework in Soulslike Prototype",
      year: "Oct 2025–Oct 2026",
      period: "2025–2026",
      category: "Master's Thesis / Individual Research Project",
      genrePlatform: "Soulslike Prototype · Research Framework · PC",
      tagline: "Soulslike Prototype · Research Framework · PC",
      role: "Technical Game Designer · Systems Engineer",
      highlight: "Master's Thesis Project · 15-Player Empirical Study",
      gameplaySummary: "A research-informed Soulslike action RPG prototype designed to investigate real-time adaptive challenge. The game monitors player performance telemetry to dynamically modulate friction, preserving the psychological state of Flow without compromising the punishing stakes essential to the genre.",
      personalContributionSummary: "Independently conceived, designed, and developed the complete heuristic DDA architecture in Unity and C#, from psychological flow modeling to gameplay integration. Conducted an empirical study with 15 players to validate difficulty pacing.",
      description: "A research-informed Soulslike action RPG prototype designed to investigate real-time adaptive challenge. The game monitors player performance telemetry to dynamically modulate friction, preserving the psychological state of Flow without compromising the punishing stakes essential to the genre.\n\nIndependently conceived, designed, and developed the complete heuristic DDA architecture in Unity and C#, from psychological flow modeling to gameplay integration. Conducted an empirical study with 15 players to validate difficulty pacing.",
      confidentialityNotice: "Proprietary Intellectual Property Notice: Specific algorithmic variables, mathematical formulas, and internal heuristics are withheld to protect ongoing academic research and potential commercialization.",
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
      tags: ["Unity", "C#", "Dynamic Difficulty Adjustment", "Systems Design", "Player Telemetry"],
      storySteps: [
          {
            tag: "01 // PROBLEM STATEMENT",
            title: "The Hardcore Friction Dilemma",
            description: "Traditional static difficulty in punishing genres frequently leads to high player churn due to anxiety spikes or skill stagnation. The design objective was engineering an adaptive system that preserves genuine tension without ever feeling artificial or patronizing to veteran players.",
            mediaLabel: "[ Research Prototype // Boss Encounter Phase 1 ]",
            imageSrc: "/images/dda_immagine1.png"
          },
          {
            tag: "02 // HEURISTIC ARCHITECTURE",
            title: "Non-Intrusive Challenge Modulation",
            description: "Engineered a modular framework in Unity and native C# evaluating real-time player error rates, engagement velocity, and recovery mechanics. The system modulates environmental and enemy combat parameters within strictly calibrated, imperceptible thresholds.",
            mediaLabel: "[ Adaptive Challenge // Boss Encounter Phase 2 Escalation ]",
            imageSrc: "/images/dda_immagine2.png"
          },
          {
            tag: "03 // EMPIRICAL VALIDATION",
            title: "15-Player Qualitative & Quantitative Study",
            description: "Conducted structured playtesting sessions across diverse skill tiers. In-game telemetry and post-session psychological evaluations demonstrated significant improvements in flow retention, engagement duration, and perceived fairness during high-friction encounters.",
            mediaLabel: "[ High-Level Telemetry Data // Flow Survey Evaluation ]",
            imageSrc: "/images/dda_immagine3.png"
          }
        ]
    },
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      year: "Apr 2025 – Jul 2025",
      period: "2025",
      category: "Academic Team Project / Industry Showcase",
      genrePlatform: "Co-op Survival Game · 2–4 Players · PC",
      tagline: "Co-op Survival Game · 2–4 Players · PC",
      role: "Team Leader · Lead Designer · Game Programmer",
      highlight: "Industry Showcase · New Game Designer 2025 · 3rd Place",
      gameplaySummary: "A cooperative survival game set in an enchanted forest limbo. Players alternate between frantic combat, using ammunition crafted from harvested magical pomegranates, and strategic shelter repair and bonfire maintenance before the petrifying dawn resets the threat.",
      personalContributionSummary: "Led the game's design direction, authored the entire Technical Design Document (TDD) and approximately 70% of the Game Design Document (GDD), and designed and implemented key shooting, combat, and multiplayer gameplay systems.",
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
      tags: ["Unity", "C#", "Mirror Networking", "Co-op Multiplayer", "Combat Design", "Team Leadership"],
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
      storySteps: [
        {
          tag: "01 // CORE GAMEPLAY LOOP",
          title: "Survival Combat & Bonfire Stewardship",
          description: "Players alternate between high-intensity combat—using ammunition crafted from harvested magical pomegranates—and strategic base maintenance. Feeding the central bonfire is essential to keep the petrifying dawn at bay and protect team shelters.",
          mediaLabel: "[ Gameplay Combat // Pomegranate Ammo Crafting & Shelter Building ]",
          imageSrc: "/images/immagine_falo_personaggio.png"
        },
        {
          tag: "02 // MULTIPLAYER SYSTEMS",
          title: "Co-op Architecture (2–4 Players)",
          description: "Engineered shared-state multiplayer logic in Unity and native C#. Players must dynamically divide responsibilities: scouting for fruit, fending off night terrors, and synchronizing defense around the shared campfire life-force.",
          mediaLabel: "[ Technical Breakdown // Multiplayer State Sync & Resource Distribution ]",
          imageSrc: "/images/players_vs_monsters.png"
        },
        {
          tag: "03 // INDUSTRY SHOWCASE",
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
      period: "2026",
      category: "Personal Project",
      genrePlatform: "First-Person Psychological Horror · PC & Meta XR VR",
      tagline: "First-Person Psychological Horror · PC & Meta XR VR",
      role: "Game Designer · Gameplay Programmer · Solo Developer",
      gameplaySummary: "A first-person psychological horror exploration game set inside an abandoned estate. Guided by an enigmatic female voice, the player navigates atmospheric environments, collects scattered documents to reconstruct a hidden tragedy, and evades the Puppeteer—a sorcerer who transforms victims into living marionettes.",
      personalContributionSummary: "Independently conceived the core game concept, gameplay design, and environmental soundscape. Designed and implemented layered adaptive audio systems with FMOD Studio, an AI boss-trigger heuristic system, interactive environmental puzzles, and full VR motion controls.",
      description: "A first-person psychological horror exploration game set inside an abandoned estate. Guided by an enigmatic female voice, the player navigates atmospheric environments, collects scattered documents to reconstruct a hidden tragedy, and evades the Puppeteer—a sorcerer who transforms victims into living marionettes.\n\nIndependently conceived the core game concept, gameplay design, and environmental soundscape. Designed and implemented layered adaptive audio systems with FMOD Studio, an AI boss-trigger heuristic system, interactive environmental puzzles, and full VR motion controls.",
      tags: ["Unity", "C#", "Meta XR", "FMOD Studio", "AI Systems", "Horror Exploration"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      videoUrl: "/videos/puppeteer.mp4",
      platform: "PC (Meta XR VR in development)",
      engine: "Unity · C# · FMOD Studio · Steam Audio",
      authors: "Mauro Brochier",
      teamRoles: "Solo Developer — Game Designer, Gameplay Programmer",
      gddUrl: "https://docs.google.com/document/d/12cTheqaPUP9HEnYansgj9i_p2kzd_NlF/edit?usp=sharing&ouid=118263974300292559359&rtpof=true&sd=true",
      trailerId: "gVvd9aPJDlY",
      vrBadge: "META XR // VR IN PROGRESS",
      audioNotice: "Advanced 3D binaural audio implemented — headphones recommended for spatial cues.",
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
          tag: "01 // ATMOSPHERIC HORROR",
          title: "Audio-Driven Environmental Exploration",
          description: "Engineered tension building inside an abandoned estate. The player relies on a mysterious guiding female voice, acoustic cues, and found journals to reconstruct the tragedy while avoiding sound-triggered alarms.",
          mediaLabel: "[ Gameplay Exploration // Dynamic Audio Panning & Lighting ]",
          imageSrc: "/images/puppeteer_immagine1.png"
        },
        {
          tag: "02 // STEALTH & AI BEHAVIOR",
          title: "The Puppeteer's Patrol & Perception",
          description: "Developed stealth mechanics and sensory AI states (Patrol, Alert, Hunt) for the Puppeteer sorcerer. Evasion requires line-of-sight breaking, hiding spots, and careful sprint stamina management.",
          mediaLabel: "[ AI Architecture // Finite State Machine & Line of Sight Gizmos ]",
          imageSrc: "/images/puppeteer_immagine2.png"
        },
        {
          tag: "03 // ESCAPE MECHANICS",
          title: "Rescue Objections & Multiple Endings",
          description: "Integrated risk-reward puzzle scenarios where players decide whether to sprint straight for escape or risk uncovering additional victims trapped as living marionettes.",
          mediaLabel: "[ Level Design // Branching Paths & Environmental Narrative ]",
          imageSrc: "/images/puppeteer_immagine3.png"
        }
      ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      year: "Oct 2023 – Feb 2024",
      period: "2024",
      category: "Academic Team Project / Industry Showcase",
      genrePlatform: "2D Strategy-Puzzle · PC & Web Browser",
      tagline: "2D Strategy-Puzzle · PC & Web Browser",
      role: "AI Programmer · Gameplay Designer",
      highlight: "New Game Designer 2025 · 3rd Place · Game Design & Programming",
      gameplaySummary: "A 2D puzzle-strategy game where players take the role of an operative orchestrating 'perfect murders'. By manipulating deterministic NPC schedules, exploiting detection cones, and placing items on an interactive timeline, targets are eliminated without raising suspicion.",
      personalContributionSummary: "Independently implemented the complete NPC AI architecture using Behavior Trees and developed a custom Behavior Tree visualizer tool within the Unity Editor. Co-designed NPC routines and integrated the AI into one of the game's five scenarios.",
      description: "A 2D puzzle-strategy game where players take the role of an operative orchestrating 'perfect murders'. By manipulating deterministic NPC schedules, exploiting detection cones, and placing items on an interactive timeline, targets are eliminated without raising suspicion.\n\nIndependently implemented the complete NPC AI architecture using Behavior Trees and developed a custom Behavior Tree visualizer tool within the Unity Editor. Co-designed NPC routines and integrated the AI into one of the game's five scenarios.",
      tags: ["Unity", "C#", "Behavior Trees", "AI Systems", "Editor Tooling", "Puzzle Design"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      platform: "PC & Web Browser",
      engine: "Unity (2D) / WebGL",
      authors: "Mauro Brochier, Matteo Mangioni, Anthony Baiamonte, Christian Colombo",
      teamRoles: "Game Programmer, AI Programmer, Game Designer (AI Systems)",
      gddUrl: "https://github.com/MauroTheB/MurderMysteryInfo/blob/main/Documents/GameDesignDocument.md",
      demoUrl: "https://polimi-game-collective.itch.io/murder-mystery-incorporated",
      trailerId: "ZpdFg5MHrdI",
      gameplayId: "wDj0Gx3CgIQ",
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
            tag: "01 // TEMPORAL MECHANICS",
            title: "Interactive Timeline Scheduling",
            description: "Designed a 2D puzzle-strategy core loop where players schedule actions, place tools, and arrange agent trajectories along a multi-track tactical timeline.",
            mediaLabel: "[ UI & Design // Timeline Scrubber & Action Scheduling Grid ]",
            imageSrc: "/images/murder_immagine1.png"
          },
          {
            tag: "02 // AGENT AI PATTERNS",
            title: "Predictable Routine Exploitation",
            description: "Engineered deterministic NPC routines and detection cones. Players exploit predictable guard movements to orchestrate fatal accidents without raising suspicion meters.",
            mediaLabel: "[ AI Systems // Routine Paths, Suspicion Cones & Trigger Traps ]",
            imageSrc: "/images/murder_immagine2.png"
          },
          {
            tag: "03 // THE EXECUTION PHASE",
            title: "Autonomous Playback & Evaluation",
            description: "Once the timeline is staged, hitting play triggers an autonomous real-time sequence. The agency system grades performance based on clean execution and zero collateral evidence.",
            mediaLabel: "[ Gameplay Demo // Playback Sequence & Mission Debriefing Screen ]",
            imageSrc: "/images/murder_immagine3.png"
          }
        ]
    },
    {
      id: "water-sim",
      title: "Real-Time Water Simulation in OpenGL with CUDA Acceleration",
      year: "Feb 2025 – Apr 2025",
      period: "2025",
      category: "Individual Academic Project",
      genrePlatform: "Real-Time Fluid Simulation · GPGPU · PC",
      tagline: "Real-Time Fluid Simulation · GPGPU · PC",
      role: "Graphics & Simulation Programmer",
      gameplaySummary: "A real-time grid-based fluid simulation and physics sandbox. The system computes surface wave equations and resolves complex two-way dynamic physical coupling with arbitrary 3D rigid bodies, allowing objects to float, drag, and generate natural shape-dependent wake ripples.",
      personalContributionSummary: "Independently proposed, architected, and developed the entire simulation in C++ and OpenGL as an academic project. Parallelized computationally intensive wave physics across GPU hardware threads using NVIDIA CUDA, incorporating Fresnel surface shaders.",
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
            tag: "01 // GPGPU COMPUTING",
            title: "Parallel CUDA Physics Kernels",
            description: "Implemented high-performance parallel computation in C++ and CUDA. Fluid grid state and velocity fields are computed directly on the GPU across thousands of concurrent hardware threads.",
            mediaLabel: "[ High Performance // CUDA Kernel Dispatch & Memory Hierarchy ]",
            imageSrc: "/images/water_immagine1.png"
          },
          {
            tag: "02 // FLUID DYNAMICS",
            title: "Surface Wave Equations in OpenGL",
            description: "Engineered real-time wave propagation through height-field displacement and custom OpenGL shaders, achieving smooth fluid reflections and refractive caustic lighting.",
            mediaLabel: "[ Graphics Engine // Shaders, Caustics & Vertex Displacement ]",
            imageSrc: "/images/water_immagine2.png"
          },
          {
            tag: "03 // RIGID BODY COUPLING",
            title: "Arbitrary 3D Mesh Interaction",
            description: "Simulated two-way physical interaction between dynamic 3D rigid bodies and the fluid surface: objects generate realistic wake ripples, buoyancy, and displacement based on shape.",
            mediaLabel: "[ Physics Simulation // Mesh Collision & Wave Ripple Generation ]",
            imageSrc: "/images/water_immagine3.png"
          }
        ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      year: "Mar 2021 – Apr 2021",
      period: "2021",
      category: "Individual Internship Project",
      genrePlatform: "Spatial Memory & Traversal Game · Android Mobile",
      tagline: "Spatial Memory & Traversal Game · Android Mobile",
      role: "Game Designer · Programmer",
      gameplaySummary: "A mobile third-person spatial memory challenge based on cognitive research. Players are given 30 seconds to study a 2D top-down maze blueprint before smoothly transitioning into a 3D over-the-shoulder perspective, navigating through identical corridors from memory while managing potions.",
      personalContributionSummary: "Independently conceived, designed, and developed the entire title during a 238-hour professional internship at Nextrek S.r.l. Designed the core perspective-transition mechanic, mobile touch controls, and memory-driven pacing.",
      description: "A mobile third-person spatial memory challenge based on cognitive research. Players are given 30 seconds to study a 2D top-down maze blueprint before smoothly transitioning into a 3D over-the-shoulder perspective, navigating through identical corridors from memory while managing potions.\n\nIndependently conceived, designed, and developed the entire title during a 238-hour professional internship at Nextrek S.r.l. Designed the core perspective-transition mechanic, mobile touch controls, and memory-driven pacing.",
      tags: ["Unity", "C#", "Android Development", "Spatial Cognition", "Mobile Controls"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      platform: "Mobile (iOS & Android)",
      isMobile: true,
      engine: "Unity · C#",
      authors: "Mauro Brochier (Nextrek S.r.l. Internship)",
      teamRoles: "Solo Developer — Game Designer, Gameplay Programmer",
      trailerId: "OP1fEbdZbjk",
      gameplayId: "WI-OsY6SoKs",
      thesisBadge: "COGNITIVE R&D // BACHELOR THESIS RESEARCH",
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
          tag: "01 // COGNITIVE MECHANICS",
          title: "2D Memory Memorization Phase",
          description: "Players are presented with a top-down 2D blueprint of the labyrinth for exactly 30 seconds to memorize pathways, dead ends, and point-of-interest markers.",
          mediaLabel: "[ Game Mechanics // 2D Blueprint HUD & Countdown Timer ]",
          imageSrc: "/images/maze_immagine1.png"
        },
        {
          tag: "02 // 3D SPATIAL NAVIGATION",
          title: "Third-Person Perspective Traversal",
          description: "The perspective transitions into full 3D over-the-shoulder navigation. The player must rely purely on visual-spatial working memory to find the exit through identical corridor walls.",
          mediaLabel: "[ Gameplay Traversal // 3D Camera Controls & Mobile Touch Input ]",
          imageSrc: "/images/maze_immagine2.png"
        },
        {
          tag: "03 // RESOURCE MANAGEMENT",
          title: "Hidden Merchants & Potion Economy",
          description: "Integrated survival gameplay mechanics on mobile: finding hidden merchants, managing torches, and utilizing speed or memory potions to avoid being trapped forever in the maze.",
          mediaLabel: "[ Mobile UI // Inventory, Potion Crafting & Merchant Interaction ]",
          imageSrc: "/images/maze_immagine3.png"
        }
      ]
    }
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