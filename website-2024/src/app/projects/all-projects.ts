import { ProjectManager } from "./_components/ProjectCard";

const PROJECTS: ProjectsMapping = {
  // "something-new": {
  //   title: "Something New 24",
  //   emoji: "‼️",
  //   projectManagers: [{ name: "Owen Hayes" }],
  //   contributors: ["Evander Wildheart"],
  //   areas: ["ML/AI"],
  //   started: "spring-2024",
  //   alsoActiveIn: [],
  //   // description: "No idea",
  //   // viewProjectLink: "https://google.com",
  //   // sourceCodeLink: "https://github.com",
  // },

  "bird-guide": {
    title: "Bird Guide",
    emoji: "🐦",
    projectManagers: [
      { name: "Ananth Ramaswamy", email: "ananth3@illinois.edu" },
    ],
    contributors: [
      "AAAAA BBBBB",
      "CCCCCC DDDDD",
      "EEEEEE FFFFF",
      "GGGGG HHHHH",
      "IIIII JJJJJ",
      "KKKKK LLLLL",
      "MMMMM NNNNN",
      "OOOOO PPPPP",
      "QQQQQ RRRRR",
      "SSSSS TTTTT"
    ],
    areas: ["App Dev"],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor et purus vel interdum. Maecenas at neque nec mi vestibulum euismod. Vivamus pulvinar, augue eget suscipit pellentesque, nibh justo condimentum enim, quis efficitur dolor nibh non mauris. Quisque hendrerit magna et ligula scelerisque, finibus eleifend orci tempus. Maecenas tempus ultrices dictum. Aenean lacinia lacus neque, eget vehicula tortor placerat sed. Aliquam sagittis mi ac congue hendrerit.",
    viewProjectLink: "https://google.com",
    sourceCodeLink: "https://github.com",
  },

  "mood-tracker": {
    title: "Mood Tracker",
    emoji: "😀",
    projectManagers: [{ name: "Gabriel Grais", email: "ggrais2@illinois.edu" }],
    contributors: [],
    areas: ["Data Viz", "Web Dev"],
    started: "fall-2023",
    alsoActiveIn: [],
  },

  "speech-interpretation": {
    title: "Enhancing Speech Interpretation",
    emoji: "🗣️",
    projectManagers: [
      { name: "Advay Kadam", email: "advayk2@illinois.edu" },
      { name: "Jay Wagh", email: "jayaw2@illinois.edu" },
    ],
    contributors: [],
    areas: ["ML"],
    started: "fall-2023",
    alsoActiveIn: [],
  },

  "openspace-uiuc": {
    title: "OpenSpace UIUC",
    emoji: "🗺️",
    projectManagers: [{ name: "Emma Chen", email: "emmahc2@illinois.edu" }],
    contributors: [],
    areas: ["Web Dev"],
    started: "fall-2023",
    alsoActiveIn: [],
  },

  "wikipedia-similarity": {
    title: "Wikipedia Similarity Applications",
    emoji: "📊",
    projectManagers: [
      { name: "Saket Pochiraju", email: "ssaketmp2@illinois.edu" },
    ],
    contributors: [
      "AAAAA BBBBB",
      "CCCCCC DDDDD",
      "EEEEEE FFFFF",
    ],
    areas: ["Data Viz"],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    sourceCodeLink: "https://gitlab.com",
  },

  "ai-insecurities": {
    title: "Insecurities in AI-Generated Code",
    emoji: "🪲",
    projectManagers: [
      { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
      { name: "Litao Li", email: "lli205@illinois.edu" },
    ],
    contributors: [],
    areas: ["AI"],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
  },
};

export interface ProjectsMapping {
  [id: string]: {
    title: string;
    emoji?: string;
    projectManagers: ProjectManager[];
    contributors: string[];
    areas: string[];
    started: string;
    alsoActiveIn: string[];
    viewProjectLink?: string;
    sourceCodeLink?: string;
    description?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  emoji?: string;
  projectManagers: ProjectManager[];
  contributors: string[];
  areas: string[];
  started: string;
  alsoActiveIn: string[];
  viewProjectLink?: string;
  sourceCodeLink?: string;
  description?: string;
}

/**
 * Get projects that were started during the specified semester or were also
 * active during the specified semester.
 *
 * @param semester the semester to look for projects in (should look like
 * "spring-2024", "fall-2023", etc.)
 * @returns a list of projects
 */
export function getProjectsFromSemester(semester: string) {
  return (
    Object.entries(PROJECTS)
      // Filter to make sure project was started or is active in this semester
      .filter((projectEntry) => {
        const project = projectEntry[1];
        return (
          project.started === semester ||
          project.alsoActiveIn.includes(semester)
        );
      })

      // Add ID so we can link to project from card
      .map((projectEntry) => ({
        id: projectEntry[0],
        ...projectEntry[1],
      }))
  );
}

/**
 * Get a single project by its ID.
 *
 * @param id the ID to find a project by (e.g., "bird-guide", "mood-tracker", etc.)
 * @returns the project corresponding to the specified ID
 */
export function getProjectById(id: string) {
  // Add ID to found project
  return { ...PROJECTS[id], id };
}

/**
 * Print a semester nicely. Convert "spring-2024" to "Spring 2024", etc.
 *
 * @param semester the semester to pretty print ("fall-2023", etc.)
 * @returns a pretty-printed semester ("Fall 2023", etc.)
 */
export function prettyPrintSemester(semester: string) {
  const splitUp = semester.split("-");
  return (
    splitUp[0][0].toUpperCase() + splitUp[0].substring(1) + " " + splitUp[1]
  );
}
