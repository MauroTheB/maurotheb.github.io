export const PORTFOLIO_EN = {
  profile: {
    name: "Mauro Julien Brochier",
    title: "Game Designer & Gameplay Programmer",
    subheading: "Computer Engineer specialized in Game Design, gameplay systems, AI, and high-performance computing.",
    email: "MAURO.BROCHIER97@GMAIL.COM",
    github: "https://github.com/MauroTheB/projects-preview",
    graduationStatus: "Master's Degree in Computer Science (Game Design) — Graduating Oct 2026",
    languages: [
      { name: "French", level: "Native" },
      { name: "Italian", level: "C2 (Native / Bilingual)" },
      { name: "English", level: "B2 (Professional Working)" },
    ],
  },
  ui: {
    heroBtnGithub: "GitHub Preview",
    heroBtnContact: "Get in touch",
    ddaBadge: "DDA RESEARCH // IN PROGRESS",
   hudProjects: "Projects",
    hudExperience: "Experience",
    hudEducation: "Education",
    hudSkills: "Skills",
    projectsHeading: "Video Games & Systems Showcase",
    projectsSubheading: "Click on any project to inspect technical breakdown, architecture, and gameplay design.",
    exploreProject: "Explore Documentation & Process",
    backToProjects: "← Back to all projects",
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
  },
  projects: [
    {
      id: "pomegranade",
      title: "Pomegranade: Limbo",
      tagline: "Co-op Survival Game (2–4 players) set in an enchanted forest limbo",
      role: "Team Leader, Lead Designer, Game Programmer",
      period: "2025",
      description: "Players alternate between frantic combat (using ammunition crafted from harvested magical pomegranates) and strategic shelter repair and bonfire maintenance before the petrifying dawn resets the threat. Pitched and showcased with hands-on demo sessions to industry studios including Ubisoft, Milestone, and Nacon at the New Game Designer event.",
      tags: ["Unity3D", "C#", "Co-op Multiplayer", "Game Design", "Team Leadership"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#pomegranade",
      videoUrl: "/videos/pomegranade.mp4",
      highlight: "Industry Showcase: Ubisoft, Milestone, Nacon & more",
      storySteps: [
        {
          tag: "01 // CORE GAMEPLAY LOOP",
          title: "Survival Combat & Bonfire Stewardship",
          description: "Players alternate between high-intensity combat—using ammunition crafted from harvested magical pomegranates—and strategic base maintenance. Feeding the central bonfire is essential to keep the petrifying dawn at bay and protect team shelters.",
          mediaLabel: "[ Gameplay Combat // Pomegranate Ammo Crafting & Shelter Building ]",
          imageSrc: "/images/immagine_falo_personaggio.png",
          blendMode: "screen"
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
      tagline: "First-Person Psychological Horror & Exploration",
      role: "Game Designer, Programmer",
      period: "2025",
      description: "First-person horror exploration inside an abandoned estate. The player follows a guiding voice, collects clues and documents, while eluding the Puppeteer—a sorcerer who transforms victims into living marionettes. Features stealth mechanics, anxiety management, and narrative puzzles.",
      tags: ["Unity3D", "C#", "Horror Exploration", "AI Stealth", "Atmospheric Audio"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#a-childs-tale",
      storySteps: [
        {
          tag: "01 // ATMOSPHERIC HORROR",
          title: "Audio-Driven Environmental Exploration",
          description: "Engineered tension building inside an abandoned estate. The player relies on a mysterious guiding female voice, acoustic cues, and found journals to reconstruct the tragedy while avoiding sound-triggered alarms.",
          mediaLabel: "[ Gameplay Exploration // Dynamic Audio Panning & Lighting ]"
        },
        {
          tag: "02 // STEALTH & AI BEHAVIOR",
          title: "The Puppeteer's Patrol & Perception",
          description: "Developed stealth mechanics and sensory AI states (Patrol, Alert, Hunt) for the Puppeteer sorcerer. Evasion requires line-of-sight breaking, hiding spots, and careful sprint stamina management.",
          mediaLabel: "[ AI Architecture // Finite State Machine & Line of Sight Gizmos ]"
        },
        {
          tag: "03 // ESCAPE MECHANICS",
          title: "Rescue Objections & Multiple Endings",
          description: "Integrated risk-reward puzzle scenarios where players decide whether to sprint straight for escape or risk uncovering additional victims trapped as living marionettes.",
          mediaLabel: "[ Level Design // Branching Paths & Environmental Narrative ]"
        }
      ]
    },
    {
      id: "water-sim",
      title: "Real-Time Water Simulation (OpenGL + CUDA)",
      tagline: "Fluid dynamics simulation with hardware GPU acceleration",
      role: "Graphics / Systems Programmer",
      period: "2024",
      description: "Real-time fluid simulation developed in C++ and OpenGL with physics computed via CUDA parallel kernels. Handles physical interactions between arbitrary 3D rigid bodies and fluid surface wave propagation.",
      tags: ["C++", "CUDA", "OpenGL", "GPGPU", "Physics Simulation", "Low-Level"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#real-time-water",
      storySteps: [
        {
          tag: "01 // GPGPU COMPUTING",
          title: "Parallel CUDA Physics Kernels",
          description: "Implemented high-performance parallel computation in C++ and CUDA. Fluid grid state and velocity fields are computed directly on the GPU across thousands of concurrent hardware threads.",
          mediaLabel: "[ High Performance // CUDA Kernel Dispatch & Memory Hierarchy ]"
        },
        {
          tag: "02 // FLUID DYNAMICS",
          title: "Surface Wave Equations in OpenGL",
          description: "Engineered real-time wave propagation through height-field displacement and custom OpenGL shaders, achieving smooth fluid reflections and refractive caustic lighting.",
          mediaLabel: "[ Graphics Engine // Shaders, Caustics & Vertex Displacement ]"
        },
        {
          tag: "03 // RIGID BODY COUPLING",
          title: "Arbitrary 3D Mesh Interaction",
          description: "Simulated two-way physical interaction between dynamic 3D rigid bodies and the fluid surface: objects generate realistic wake ripples, buoyancy, and displacement based on shape.",
          mediaLabel: "[ Physics Simulation // Mesh Collision & Wave Ripple Generation ]"
        }
      ]
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery Incorporated",
      tagline: "2D Strategy-Puzzle for PC & Web",
      role: "AI Programmer, Game Designer",
      period: "2025",
      description: "Playing as a rookie operative in a shadowy intelligence agency, plan and execute 'perfect murders' by coordinating agent actions and placing items on an interactive tactical timeline without raising suspicion.",
      tags: ["2D Strategy", "AI Systems", "Timeline Mechanics", "Puzzle Design"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#murder-mystery",
      storySteps: [
        {
          tag: "01 // TEMPORAL MECHANICS",
          title: "Interactive Timeline Scheduling",
          description: "Designed a 2D puzzle-strategy core loop where players schedule actions, place tools, and arrange agent trajectories along a multi-track tactical timeline.",
          mediaLabel: "[ UI & Design // Timeline Scrubber & Action Scheduling Grid ]"
        },
        {
          tag: "02 // AGENT AI PATTERNS",
          title: "Predictable Routine Exploitation",
          description: "Engineered deterministic NPC routines and detection cones. Players exploit predictable guard movements to orchestrate fatal accidents without raising suspicion meters.",
          mediaLabel: "[ AI Systems // Routine Paths, Suspicion Cones & Trigger Traps ]"
        },
        {
          tag: "03 // THE EXECUTION PHASE",
          title: "Autonomous Playback & Evaluation",
          description: "Once the timeline is staged, hitting play triggers an autonomous real-time sequence. The agency system grades performance based on clean execution and zero collateral evidence.",
          mediaLabel: "[ Gameplay Demo // Playback Sequence & Mission Debriefing Screen ]"
        }
      ]
    },
    {
      id: "mazes-soul",
      title: "Maze’s Soul",
      tagline: "Spatial Cognitive 3D/2D Maze Game (Mobile)",
      role: "Game Designer & Programmer",
      period: "2021",
      description: "Game centered on visuo-spatial memory: 30 seconds to memorize the maze layout in 2D, followed by real 3D third-person navigation with hidden merchants, potions, and resource management.",
      tags: ["Unity3D", "C#", "Mobile Development", "Cognitive Mechanics"],
      githubUrl: "https://github.com/MauroTheB/projects-preview#mazes-soul",
      storySteps: [
        {
          tag: "01 // COGNITIVE MECHANICS",
          title: "2D Memory Memorization Phase",
          description: "Players are presented with a top-down 2D blueprint of the labyrinth for exactly 30 seconds to memorize pathways, dead ends, and point-of-interest markers.",
          mediaLabel: "[ Game Mechanics // 2D Blueprint HUD & Countdown Timer ]"
        },
        {
          tag: "02 // 3D SPATIAL NAVIGATION",
          title: "Third-Person Perspective Traversal",
          description: "The perspective transitions into full 3D over-the-shoulder navigation. The player must rely purely on visual-spatial working memory to find the exit through identical corridor walls.",
          mediaLabel: "[ Gameplay Traversal // 3D Camera Controls & Mobile Touch Input ]"
        },
        {
          tag: "03 // RESOURCE MANAGEMENT",
          title: "Hidden Merchants & Potion Economy",
          description: "Integrated survival gameplay mechanics on mobile: finding hidden merchants, managing torches, and utilizing speed or memory potions to avoid being trapped forever in the maze.",
          mediaLabel: "[ Mobile UI // Inventory, Potion Crafting & Merchant Interaction ]"
        }
      ]
    }
  ],
  experiences: [
    {
      id: "edison",
      role: "Game Design & Programming Instructor",
      company: "Edison School",
      period: "10/2025 — Present",
      location: "Rome, Italy",
      description: "Teaching game design and C# gameplay programming using Unity3D. Designed and delivered structured syllabi across all skill tiers (beginner to advanced), covering gameplay loops, scene architecture, and game balance.",
      skills: ["Unity3D", "C#", "Mentoring", "Game Design Education"]
    },
    {
      id: "cristaltec",
      role: "Game Designer & Programmer",
      company: "Cristaltec SpA",
      period: "02/2022 — 08/2022",
      location: "Rome, Italy",
      description: "Full-cycle game development on proprietary gaming platforms. Mastered proprietary scripting languages, implemented advanced game logic, optimized resource allocation, and deployed software in regulated industrial gaming environments.",
      skills: ["Game Programming", "Proprietary Languages", "Industrial Gaming Systems"]
    },
    {
      id: "nextrek",
      role: "Videogame Designer & Programmer",
      company: "Nextrek S.r.l.",
      period: "03/2021 — 08/2021",
      location: "Rome, Italy",
      description: "Independently engineered and developed a complete 3D multiplatform/mobile game using Unity3D with native C#. Subsequently collaborated within an organized production team using shared version-controlled repositories.",
      skills: ["Unity3D", "C#", "Mobile Optimization", "Git Workflow"]
    }
  ],
  education: [
    {
      id: "master",
      degree: "Master's Degree in Computer Science — Videogame Design & Programming (LM-18)",
      institution: "University of Milan (UNIMI)",
      period: "2023 — 2026",
      thesisTitle: "Design and Evaluation of Heuristic Dynamic Difficulty Adjustment Systems for Maintaining Flow in Indie Development Contexts",
      thesisDetails: "Research and algorithmic implementation of heuristic Dynamic Difficulty Adjustment (DDA) to preserve player Flow state in indie gaming contexts. Supervisor: Prof. Laura Ripamonti.",
      skills: ["Dynamic Difficulty Adjustment (DDA)", "Flow Theory", "Heuristic Systems", "AI for Games"]
    },
    {
      id: "bachelor",
      degree: "Bachelor's Degree in Computer Engineering (L-8)",
      institution: "Roma Tre University",
      period: "2015 — 2021",
      thesisTitle: "Player's memory, from 2d to 3d",
      thesisDetails: "Study and formal analysis of player spatial cognition and memory during transitions between 2D floor plans and 3D third-person exploration. Supervisor: Prof. Giuseppe Di Battista.",
      skills: ["Computer Engineering", "Data Structures & Algorithms", "Computer Architecture", "Networks"]
    }
  ],
  skills: [
    {
      category: "Game Dev & Engines",
      items: ["Unity (Advanced / C#)", "Gameplay Architecture", "FMOD Studio (Adaptive Audio)", "Level Design & Prototyping"]
    },
    {
      category: "Graphics & High-Performance Computing",
      items: ["OpenGL", "CUDA (Parallel GPU Computing)", "C++", "C", "Assembly", "Shaders & Physics Simulation"]
    },
    {
      category: "Game Design & Methodologies",
      items: ["GDD / TDD / LDD Technical Writing", "Dynamic Difficulty Adjustment (DDA)", "Artificial Intelligence for Games", "Git & CI/CD Workflows"]
    },
    {
      category: "Languages & Technologies",
      items: ["C#", "C++", "C", "Python", "Java", "SQL", "OCaml", "Eiffel"]
    }
  ]
};