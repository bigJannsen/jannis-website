export type BlogContentSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  contentSections: BlogContentSection[];
  status?: "draft" | "published";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "datacenter-abwaerme",
    title: "Warum Abwärme aus Rechenzentren spannender ist, als es klingt",
    excerpt: "Ein kurzer Blick darauf, wie Rechenzentren ihre Abwärme sinnvoller nutzen können – und warum die Idee erst dann spannend wird, wenn sie praktisch umgesetzt wird.",
    date: "2026-06-18",
    category: "Technik",
    tags: ["Datacenter", "Energie", "Abwärme", "Innovation"],
    readingTime: "4 Min.",
    status: "published",
    contentSections: [
      {
        heading: "Mehr als nur warme Luft",
        body: "Bei Rechenzentren denkt man schnell an Serverracks, Kühlung und hohe Lasten. Die entstehende Wärme wirkt dabei oft wie ein Nebenprodukt, das möglichst effizient weg muss. Interessant wird es, wenn man sie nicht nur als Problem betrachtet, sondern als Energiequelle mit klaren technischen Grenzen.",
      },
      {
        heading: "Die Praxis entscheidet",
        body: "Abwärme ist nur dann wertvoll, wenn Temperatur, Standort und Abnehmer zusammenpassen. Eine gute Idee reicht nicht aus, wenn Leitungswege zu lang sind oder die Wärme genau dann anfällt, wenn sie niemand braucht. Genau an dieser Stelle wird aus einem Buzzword eine echte technische Aufgabe.",
      },
      {
        heading: "Schnittstellen sind der Knackpunkt",
        body: "Spannend finde ich vor allem die Schnittstelle zwischen IT-Infrastruktur, Gebäudetechnik und Energiekonzept. Dort müssen Messwerte, Regelung und Betriebssicherheit zusammenspielen. Ohne saubere Daten und nachvollziehbare Regelstrategien bleibt viel Potenzial liegen.",
      },
      {
        heading: "Bodenständig betrachtet",
        body: "Für mich ist das Thema ein gutes Beispiel dafür, dass Innovation oft nicht im spektakulären Einzelbauteil steckt. Sie entsteht eher dadurch, vorhandene Energieflüsse sauber zu verstehen und robust nutzbar zu machen.",
      },
    ],
  },
  {
    slug: "sensoremulation-technikerprojekt",
    title: "Sensoremulation: Wenn ein System glaubt, es misst echte Werte",
    excerpt: "Warum emulierte Sensorsignale in Tests hilfreich sein können und was daran technisch interessanter ist als nur einen Wert zu setzen.",
    date: "2026-05-29",
    category: "Projekt",
    tags: ["ESP32", "Sensorik", "Technikerprojekt", "Automatisierung"],
    readingTime: "5 Min.",
    status: "published",
    contentSections: [
      {
        heading: "Warum überhaupt emulieren?",
        body: "Wenn ein System später echte Sensorwerte verarbeitet, ist es hilfreich, schon vorher reproduzierbare Testsignale zu haben. So lassen sich Grenzwerte, Fehlerfälle und Regelverhalten prüfen, ohne jedes Mal eine reale Messumgebung aufbauen zu müssen.",
      },
      {
        heading: "Nicht nur eine Zahl ausgeben",
        body: "Technisch wird es interessanter, sobald ein Signal glaubwürdig wirken soll. Ein Messwert hat Dynamik, Rauschen, Verzögerungen und manchmal auch unplausible Sprünge. Genau diese Eigenschaften entscheiden oft, ob ein Test wirklich etwas über das Zielsystem aussagt.",
      },
      {
        heading: "ESP32 als flexible Basis",
        body: "Ein Mikrocontroller wie der ESP32 eignet sich gut, um verschiedene Szenarien kompakt abzubilden. Er kann Werte berechnen, Schnittstellen bedienen und Testabläufe wiederholbar machen. Wichtig ist dabei, die Emulation nachvollziehbar zu halten und nicht mehr Komplexität einzubauen als nötig.",
      },
      {
        heading: "Lerneffekt für Automatisierung",
        body: "Für ein Technikerprojekt ist Sensoremulation ein schönes Thema, weil Hardware, Software und Dokumentation zusammenkommen. Man muss verstehen, was das Zielsystem erwartet, und diese Erwartung sauber nachbilden.",
      },
    ],
  },
  {
    slug: "frontend-spielwiese",
    title: "Warum diese Website auch eine kleine Frontend-Spielwiese ist",
    excerpt: "Diese Website soll nicht nur Visitenkarte sein, sondern auch ein Ort, an dem neue Layouts, Animationen und Interaktionen ausprobiert werden können.",
    date: "2026-04-12",
    category: "Website",
    tags: ["Next.js", "UI", "Animation", "Experiment"],
    readingTime: "3 Min.",
    status: "published",
    contentSections: [
      {
        heading: "Mehr als eine digitale Visitenkarte",
        body: "Eine persönliche Website kann statisch sein und trotzdem nützlich. Für mich darf sie aber zusätzlich ein Ort sein, an dem ich Layouts, Komponenten und kleine Interaktionen ausprobiere, ohne daraus direkt ein großes Produkt zu machen.",
      },
      {
        heading: "Design mit technischem Bezug",
        body: "Das dunkle, technische Erscheinungsbild passt zu den Themen der Seite. Gleichzeitig ist es eine gute Grundlage, um mit Rasterflächen, Glows und Bewegungen zu arbeiten. Wichtig bleibt, dass der Inhalt lesbar und die Bedienung ruhig bleibt.",
      },
      {
        heading: "Experimente sauber trennen",
        body: "Nicht jede Idee gehört direkt auf die Startseite. Deshalb ist ein separater Experimental-Bereich sinnvoll: Dort dürfen Dinge unfertiger sein, während die Hauptseiten stabil und klar bleiben.",
      },
    ],
  },
];

export const publishedBlogPosts = blogPosts.filter((post) => post.status !== "draft");

export function getBlogPost(slug: string) {
  return publishedBlogPosts.find((post) => post.slug === slug);
}
