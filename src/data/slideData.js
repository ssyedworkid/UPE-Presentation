export const meta = {
  title: "From Student to Engineer: What Nobody Tells You",
  presenters: "Suhaan & Siddh",
  club: "UPE",
};

export const suhaan = {
  name: "Suhaan",
  photo: "/assets/photos/suhaan.jpg",
  logo: "/assets/logos/ssc.png",
  bullets: [
    "KU — CS & Math | Minors: BME, Cybersecurity",
    "Software Engineer @ SS&C Technologies",
  ],
  cards: [
    {
      title: "Private Cloud",
      description:
        "Connecting SS&C's products to in-house infrastructure. Security. Ownership. Scale.",
    },
    {
      title: "AI in Finance",
      description:
        "Automating hedge fund transaction reconciliation.",
    },
  ],
  techTags: [
    "Java Spring Boot",
    "Terraform",
    "Kubernetes",
    "GitHub Actions",
  ],
};

export const siddh = {
  name: "Siddh",
  photo: "/assets/photos/siddh.jpg",
  logo: "/assets/logos/t-mobile.png",
  bullets: [
    "KU — CS | Certificate: Cybersecurity",
    "Software Engineer @ T-Mobile",
  ],
  cards: [
    {
      title: "Prepaid Metro Web",
      description: "Building components & features for the .com website — plus analytics for every page and APIs to fetch backend data.",
    },
    {
      title: "Angular → Phoenix Migration",
      description: "Migrating the frontend to Phoenix — making it more brand-agnostic across T-Mobile properties.",
    },
  ],
  techTags: ["AEM", "TypeScript", "Angular", "Phoenix"],
};

export const pieCharts = {
  howWeStarted: {
    title: "Where we put our energy... at first",
    labels: ["Understanding Code", "Team Standards / Processes", "Networking"],
    data: [60, 20, 20],
  },
  shouldHaveDone: {
    title: "Where energy should actually go",
    labels: ["Team & Procedures", "Reading PRs", "Explore / Breathe"],
    data: [70, 20, 10],
    callout: "Code is the easy part. Learn how the team wins.",
  },
  decentEngineer: {
    title: "What a solid engineer's week looks like now",
    labels: ["Coding / Dev", "Learning", "Meetings", "Networking", "Innovation"],
    data: [40, 20, 20, 10, 10],
  },
  codeOnly5: {
    title: "All of that... is still just code.",
    labels: ["Learn", "Network", "Innovate", "Wander / Explore", "Code / Dev"],
    data: [50, 20, 15, 10, 5],
    callout: "Great engineers live outside the editor.",
  },
};

export const timeline = {
  stages: [
    { label: "Now", assigned: 95, self: 5 },
    { label: "Soon", assigned: 90, self: 10 },
    { label: "Goal", assigned: 60, self: 40 },
  ],
  tips: [
    "Show up to open planning meetings — even uninvited",
    "Be a user of your own product — spot bugs, ask questions",
    "Read PRs obsessively — find automation gaps, patterns",
  ],
};

export const claudeSkills = [
  { faIcon: "faClipboardList", name: "/jira", desc: "Pulls your tasks, explains what needs doing" },
  { faIcon: "faDatabase", name: "/database", desc: "Connects to your DB, runs queries, gets you data" },
  { faIcon: "faCheckCircle", name: "/run-tests", desc: "Executes your test suite on command" },
  { faIcon: "faRocket", name: "/deploy-beta", desc: "Ships to beta without manual steps" },
  { faIcon: "faListCheck", name: "/standup", desc: "Tracks your activity, drafts your standup for you" },
  { faIcon: "faFileLines", name: "/docs", desc: "Auto-generates documentation from your work" },
  { faIcon: "faEnvelope", name: "/weekly-email", desc: "Compiles your week, writes the manager email" },
];

export const pipeline = [
  { name: "/jira", desc: "Get problem description" },
  { name: "/spec", desc: "Generate specs, Q&A with Claude" },
  { name: "/builder", desc: "Reads specs, spins up agents, connects to tools" },
  { name: "/run-tests", desc: "End-to-end testing" },
  { name: "/deploy-beta", desc: "Ship" },
];

export const pyramid = [
  { level: 1, label: "Good Engineers", desc: "Assigned tasks, solid execution", tier: "base" },
  { level: 2, label: "", desc: "Spec-driven, AI-augmented, high output", tier: "base" },
  { level: 3, label: "", desc: "Automate, scale, architect across teams", tier: "accent" },
  { level: 4, label: "Amazing Engineers", desc: "Strategic + technical mastery", tier: "accent" },
  { level: 5, label: "", desc: "Build systems and people, not just features", tier: "gold" },
  { level: 6, label: "", desc: "Identify what the org should be building next", tier: "gold" },
  { level: 7, label: "Leaders", desc: "Shape direction, build culture, influence beyond their team", tier: "gold" },
];

export const ladder = [
  "Ask Claude to fix bugs & write code",
  "Use Claude to spec features & design architecture before coding",
  "Build Claude pipelines connecting to your real tools (Jira, DB, cluster)",
  "Automate your workflow — standups, docs, emails, status reports",
  "Use Claude to identify problems worth solving — proactive, not reactive",
  "Use Claude to mentor & scale others — create shared skill sets, onboarding docs, team playbooks",
  "Use Claude to think at org level — identify gaps in strategy, model outcomes, propose roadmaps to leadership",
];

export const closingQuestions = [
  "How do you find problems?",
  "How do you solve them?",
  "What resources do you leverage?",
  "How efficiently do you use them?",
  "How do you advocate for your work?",
];
