export type ExperimentStatus = "Idee" | "WIP" | "Test" | "Stabil";

export type Experiment = {
  title: string;
  description: string;
  status: ExperimentStatus;
  tags: string[];
  preview: "motion" | "grid" | "signal" | "cards";
};

export const experiments: Experiment[] = [
  {
    title: "Hero Motion Test",
    description: "Tests für Ladeanimationen, Text-Reveals und dezente Bewegungen im Hero-Bereich.",
    status: "WIP",
    tags: ["Motion", "Hero", "Animation"],
    preview: "motion",
  },
  {
    title: "Technical Grid Background",
    description: "Spielerei mit technischen Rasterflächen, Glows und Linien für mehr Tiefe im Layout.",
    status: "Test",
    tags: ["UI", "Background", "Visual"],
    preview: "grid",
  },
  {
    title: "Project Signal Flow",
    description: "Ein experimentelles Visual für technische Signalflüsse, z. B. API → ESP32 → Sensoremulation → Zielsystem.",
    status: "Idee",
    tags: ["Projekt", "Visualisierung", "Technik"],
    preview: "signal",
  },
  {
    title: "Card Interaction Lab",
    description: "Hover-, Tilt- und Focus-States für Projektkarten und Blogkarten.",
    status: "WIP",
    tags: ["Cards", "Interaction", "UX"],
    preview: "cards",
  },
];
