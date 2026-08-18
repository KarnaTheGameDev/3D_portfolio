import { whitetusker, synapse, dsi, mercedes } from "../assets/images";
import {
    contact,
    git,
    github,
    html,
    omniverse,
    css,
    linkedin,
    threads,
    vr,
    unity,
    game,
    ps,
    blender,
    javascript
} from "../assets/icons";

// `imageUrl` is optional — skills without a logo render their short name in
// the tile instead (see About.jsx).
export const skills = [
    { imageUrl: unity, name: "Unity", type: "Game Engine" },
    { shortName: "C#", name: "C#", type: "Programming Language" },
    { shortName: "Py", name: "Python", type: "Programming Language" },
    { shortName: "AR", name: "AR Foundation", type: "AR Framework" },
    { imageUrl: omniverse, name: "NVIDIA Omniverse", type: "3D Simulation Platform" },
    { shortName: "USD", name: "OpenUSD", type: "3D Scene Format" },
    { imageUrl: blender, name: "Blender", type: "3D Modeling Software" },
    { shortName: "SG", name: "Shader Graph", type: "Real-Time Rendering" },
    { shortName: "URP", name: "Universal RP", type: "Render Pipeline" },
    { shortName: "ESP", name: "ESP32", type: "Embedded Hardware" },
    { shortName: "AI", name: "Gemini API", type: "AI Integration" },
    { shortName: "GL", name: "WebGL", type: "Web 3D" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: ps, name: "Photoshop", type: "Photo Editor" }
];

// `id` is the React key — `company_name` is not unique, since the White Tusker
// role was picked back up after the Intelizign deputation.
export const experiences = [
    {
        id: "white-tusker-lead",
        title: "Software Developer — AR & IoT  |  Team Lead",
        company_name: "White Tusker",
        icon: whitetusker,
        iconBg: "#accbe1",
        date: "April 2026 - Present",
        points: [
            "Lead a 5-person team, including 2 junior developers, delivering a complete interactive experience centre end to end — from hardware layout and wiring through to the software controlling it.",
            "Architected CMS-driven control of the venue's physical systems, so displays, audio and air conditioning are all operated from a single in-house content management interface.",
            "Built an ESP32-based RFID product-scanning system: scanning a physical product triggers the matching product video on a connected web display, linking physical merchandise to digital content in real time.",
            "Developed AR applications for Viture Luma Ultra smart glasses — a LEGO build-assistance experience, an interactive Rubik's Cube solver and a virtual chemistry lab — each with a conversational AI layer giving wearers real-time, step-by-step guidance.",
            "Mentor 2 junior developers on Unity, AR interaction patterns and code review standards.",
        ],
    },
    {
        id: "intelizign-mercedes",
        title: "Software Developer — 3D Visualisation",
        company_name: "Intelizign Lifecycle Services",
        client: "Mercedes-Benz Research & Development",
        icon: mercedes,
        iconBg: "#accbe1",
        date: "September 2025 - March 2026",
        points: [
            "Developed the interactive UI layer of a custom NVIDIA Omniverse (Kit) extension, letting engineers click any mesh point on a vehicle model and retrieve the temperature value mapped to that coordinate.",
            "Worked within a senior engineering team on OpenUSD-based visualisation of thermal simulation output, owning the inspection front end that made the converted data usable to engineers.",
            "Gained hands-on exposure to OpenUSD scene workflows and NVIDIA Isaac Sim / Isaac Lab for robotics and digital-twin simulation.",
        ],
    },
    {
        id: "white-tusker-ar",
        title: "Software Developer — Augmented Reality",
        company_name: "White Tusker",
        client: "Collins Aerospace",
        icon: whitetusker,
        iconBg: "#accbe1",
        date: "April 2025 - September 2025",
        points: [
            "Built a five-zone AR walk-through experience for Xreal smart glasses, each zone presenting a different aspect of the product, delivered as the opening exhibit visitors encountered on entry.",
            "Translated Collins Aerospace requirements into spatial AR content and interaction design suited to head-mounted display constraints and a continuous walking user flow.",
            "Tuned rendering and scene loading to hold a stable frame rate on tethered AR glasses throughout an uninterrupted walkthrough.",
        ],
    },
    {
        id: "synapseindia",
        title: "Unity Developer",
        company_name: "SynapseIndia",
        icon: synapse,
        iconBg: "#accbe1",
        date: "August 2024 - April 2025",
        points: [
            "Developed a 2D port-operations simulation integrating the Google Maps platform to provide accurate geospatial context for vessel and terminal activity.",
            "Modelled terminal workflows and vessel movement so operations staff could read real positions against real coordinates rather than an abstract layout.",
            "Participated in code reviews, helping maintain code quality and performance standards across the team.",
        ],
    },
    {
        id: "dreamsoft",
        title: "Unity Developer",
        company_name: "Dreamsoft Innovations",
        icon: dsi,
        iconBg: "#accbe1",
        date: "April 2022 - August 2024",
        points: [
            "Shipped a broad portfolio of AR, VR, WebGL and Windows applications over two years, progressing from junior developer to independently owning client deliverables.",
            "Built an AR children's book series across three titles, with a distinct interactive activity on every page — card games, story animations and guided play.",
            "Developed interactive touch-screen kiosk applications for Absolut and Jameson, including a chatbot for Jameson and dynamic quiz generation to drive in-store engagement.",
            "Created a WebGL drone simulation with AI-driven enemy and interceptor drones, auto-navigation and user-controlled flight modes.",
            "Built a VR home interior walkthrough and a WebAR product-visualisation platform for Roche, letting users scan physical packaging for interactive 3D content.",
            "Improved runtime performance by up to 20% through profiling-driven optimisation of rendering, assets and scene loading.",
        ],
    }
];

export const socialLinks = [
    { name: 'Contact', iconUrl: contact, link: '/contact' },
    { name: 'GitHub', iconUrl: github, link: 'https://github.com/notoriousraj' },
    { name: 'LinkedIn', iconUrl: linkedin, link: 'https://www.linkedin.com/in/suman-raj-shetty-84070b178/' }
];

export const PROJECT_CATEGORIES = [
    { key: 'client', label: 'Client & Product Work' },
    { key: 'personal', label: 'Personal Projects' },
];

// `link` is optional — client work without a public URL renders without a
// link rather than pointing at a dead page.
export const projects = [
    {
        category: 'client',
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Travis AI — Assistant for AR Glasses',
        description: "A talking AI assistant built on the Google Gemini API, combining natural-language conversation with real-time face recognition to identify and respond to individual users. A bridge layer connects the Python AI service to a Unity application running on Viture Luma Ultra smart glasses, keeping recognition and reasoning off-device while returning results at conversational speed. It now acts as the intelligence layer behind the AR build-assistance and puzzle-solving experiences, interpreting the scene in front of the wearer and returning spoken step-by-step guidance.",
    },
    {
        category: 'client',
        iconUrl: vr,
        theme: 'btn-back-blue',
        name: 'Viture AR Experience Suite',
        description: "Three AR applications for Viture Luma Ultra smart glasses, each pairing spatial content with a conversational AI layer: a LEGO build-assistance experience that guides the wearer through an assembly step by step, an interactive Rubik's Cube solver that reads the cube in front of you and overlays the next move, and a virtual chemistry lab for hands-on experimentation without the reagents.",
    },
    {
        category: 'client',
        iconUrl: threads,
        theme: 'btn-back-orange',
        name: 'Experience Centre — CMS & IoT Control',
        description: "The software backbone of a full interactive experience centre. A custom in-house CMS drives the venue's physical systems — displays, audio and air conditioning all operated from one interface — alongside an ESP32-based RFID product-scanning system where scanning a physical product triggers the matching video on a connected web display. Delivered end to end with a 5-person team, from hardware layout and wiring through to the control software.",
    },
    {
        category: 'client',
        iconUrl: vr,
        theme: 'btn-back-yellow',
        name: 'Collins Aerospace AR Walkthrough',
        description: 'A five-zone AR walk-through experience for Xreal smart glasses, each zone presenting a different aspect of the product. Built as the opening exhibit visitors encountered on entry, with spatial content and interaction design shaped around head-mounted display constraints and a continuous walking user flow.',
    },
    {
        category: 'client',
        iconUrl: omniverse,
        theme: 'btn-back-green',
        name: 'Omniverse Thermal Inspection Tool',
        description: 'The interactive UI layer of a custom NVIDIA Omniverse (Kit) extension built for Mercedes-Benz R&D. Engineers click any mesh point on a vehicle model and retrieve the temperature value mapped to that coordinate, turning OpenUSD-converted thermal simulation output into something directly inspectable in the scene.',
    },
    {
        category: 'personal',
        iconUrl: game,
        theme: 'btn-back-yellow',
        name: 'Xreal Chess',
        description: 'An augmented reality chess game built for Xreal glasses, rendering an interactive board and pieces directly into your real-world environment. A lightweight AI opponent provides a basic but engaging solo play experience, making it both a tech demo and a casual AR game.',
        link: 'https://github.com/notoriousraj/XRealChess',
    },
    {
        category: 'personal',
        iconUrl: game,
        theme: 'btn-back-blue',
        name: 'JumpTag',
        description: 'A prototype where a bot runs and jumps across platforms while the player chases and catches it. The challenge is how many times you can catch the bot within a limited time, testing reaction speed and timing.',
        link: 'https://github.com/notoriousraj/JumpTag.git',
    },
    {
        category: 'personal',
        iconUrl: game,
        theme: 'btn-back-red',
        name: 'Online Gun Game',
        description: 'An online multiplayer shooter built with Photon Fusion. Players join or create a room by name, with real-time synchronization for movement, shooting and hit detection, and respawning to keep the action continuous. Supports free-for-all or team-based modes with score tracking.',
        link: 'https://github.com/notoriousraj/Gun-Game-Online',
    },
    {
        category: 'personal',
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Monopoly Online',
        description: 'The classic board game rebuilt in Unity with Netcode for multiplayer. Players compete in real time buying properties, collecting rent and working to bankrupt their opponents, with bot opponents available for solo play and strategy practice.',
        link: 'https://github.com/notoriousraj/Monopoly',
    },
    {
        category: 'personal',
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'ObjectPlace AR',
        description: 'An AR application that lets users scan their environment and place 3D objects into it in real time. Objects are sourced from a dynamic online library, so the catalogue can be extended without touching any code — useful for design, education or straightforward visualisation of an object in a real space.',
        link: 'https://youtu.be/uL5I-6yjmu4',
    },
    {
        category: 'personal',
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'PoseAR',
        description: "Real-time full-body tracking in AR using Google's BlazePose model, overlaying a digital skeleton on the user's body and capturing movement with low latency. Built toward fitness, virtual try-on, dance training and interactive gaming use cases by mapping body movement onto AR objects and avatars.",
        link: 'https://github.com/notoriousraj/dev.dsi.blazepose',
    },
    {
        category: 'personal',
        iconUrl: vr,
        theme: 'btn-back-black',
        name: 'VRXplore Spaces',
        description: 'A collaborative VR platform for exploring architectural spaces in immersive detail. Hosted from a mobile or VR device, multiple users join and navigate 3D architectural environments together — bringing blueprints to life for designers and architects and supporting remote walkthroughs in real time.',
        link: 'https://youtu.be/BmAqyxWQL9M',
    },
    {
        category: 'personal',
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Drone Sim',
        description: 'A defense simulation where players protect a base under attack by hostile drones. Commanding a fleet of interceptors, you intercept and eliminate threats before they breach the perimeter, against dynamic drone AI and escalating waves of enemies.',
        link: 'https://youtu.be/rQ6SJDfvHQI',
    },
];
