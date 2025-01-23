/**
 * List of projects data. Each project can be accessed with URL: "/projects/[projectId]".
 *
 * Note: Do not give a project an id of "old", as "/projects/old/[semester]"
 * is used for accessing projects from previous semesters.
 */


const PROJECTS: Project[] = [
  // fall 2024
  {
    id: "fitness-app",
    title: "Fitness App",
    emoji: "💪",
    areas: ["App Dev", "ML"],
    projectManagers: [
      { name: "Aakash Kothari", email: "kots.aakash@gmail.com" },
      { name: "Allison Prabakar", email: "aprab6@illinois.edu" },
      { name: "Pari Patel", email: "parip2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "ehr-system",
    title: "Electronic Health Record System",
    emoji: "🩻",
    areas: ["App Dev"],
    projectManagers: [
      { name: "Kshitij Jalan", email: "kjalan3@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "cv-rankings",
    title: "Computer Vision Model Rankings",
    emoji: "🥈",
    areas: ["Computer Vision", "Web Dev"],
    projectManagers: [
      { name: "Sohum Sharma", email: "sohums3@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "gesture-wand",
    title: "Gesture-Controlled Wand",
    emoji: "🪄",
    areas: ["Hardware", "ML"],
    projectManagers: [
      { name: "Akshat Mehrotra", email: "akshatm4@illinois.edu" },
      { name: "Dash Kamriani Beard", email: "dashpk2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "chess-engine",
    title: "Chess Engine",
    emoji: "♟️",
    areas: ["ML", "Algorithms"],
    projectManagers: [
      { name: "Joshua Chen", email: "jhchen6@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "company-match",
    title: "CompanyMatch",
    emoji: "💼",
    areas: ["NLP", "Web Dev"],
    projectManagers: [
      { name: "Griffin Burke", email: "gjburke2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "investor-sentiment-analysis",
    title: "Investor Sentiment Analysis",
    emoji: "📈",
    areas: ["NLP"],
    projectManagers: [
      { name: "Sohum Shah", email: "sohum1094@gmail.com" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "therapy-chatbot",
    title: "Therapy Chatbot",
    emoji: "💬",
    areas: ["NLP"],
    projectManagers: [
      { name: "Isaac Ang", email: "isaacya2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "fantasy-trading-room",
    title: "Fantasy Trading Room",
    emoji: "🏈",
    areas: ["Web Dev", "App Dev", "NLP", "Data Analytics"],
    projectManagers: [
      { name: "Amaan Bakshi", email: "amaanbakshi777@gmail.com" },
      { name: "Aayan Verma", email: "aayanv2@illinois.edu" },
      { name: "Anmol Shah", email: "anmols3@illinois.edu" },
      { name: "Aruv Dand", email: "aadand2@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "event-matchmaking",
    title: "Event Matchmaking Website",
    emoji: "👥",
    areas: ["Web Dev", "ML"],
    projectManagers: [
      { name: "Anvesha Saraf", email: "anvesha4@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "discord-wiki",
    title: "Discord Search Engine",
    emoji: "🔍",
    areas: ["Web Dev", "NLP"],
    projectManagers: [
      { name: "Nathan Amankwah", email: "nathan37@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "",
    embed: ["https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FJadanPoll%2FDiscord-Wiki%2Fblob%2Fmain%2FBooks_For_Research%2FPR.md&style=default&type=markdown&showLineNumbers=on&showFileMeta=off&showFullPath=on&showCopy=on", '100%', '1435px'],
    highlight: true,
  },
  {
    id: "language-exchange",
    title: "Language Exchange Website",
    emoji: "🗣️",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Shirley Ma", email: "shirleyma2004@gmail.com" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "uiuc-e-commerce",
    title: "UIUC E-Commerce Website",
    emoji: "🛒",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Aishwarya Manoj", email: "am133@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
  {
    id: "music-recommendation",
    title: "Music Recommendation",
    emoji: "🎧",
    areas: ["Web Dev", "NLP", "Data Analytics"],
    projectManagers: [
      { name: "Sidharth Jain", email: "sj54@illinois.edu" }
    ],
    contributors: [],
    started: "fall-2024",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  // pre-2024
  {
    id: "bird-guide",
    title: "Bird Guide",
    emoji: "🐦",
    areas: ["App Dev", "ML"],
    projectManagers: [
      { name: "Ananth Ramaswamy", email: "ananth3@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "mood-tracker",
    title: "Mood Tracker",
    emoji: "😀",
    areas: ["Data Viz", "Web Dev"],
    projectManagers: [{ name: "Gabriel Grais", email: "ggrais2@illinois.edu" }],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: [],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "speech-interpretation",
    title: "Enhancing Speech Interpretation",
    emoji: "🗣️",
    areas: ["ML"],
    projectManagers: [
      { name: "Advay Kadam", email: "advayk2@illinois.edu" },
      { name: "Jay Wagh", email: "jayaw2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "openspace-uiuc",
    title: "OpenSpace UIUC",
    emoji: "🗺️",
    areas: ["Web Dev"],
    projectManagers: [{ name: "Emma Chen", email: "emmahc2@illinois.edu" }],
    contributors: [
      "Kenny Zhou",
      "Sunwoo Baek",
      "Ifra Baig",
      "Raghav Chandrasekar",
      "Andrew Di",
      "Hela Kasibhotla",
      "Rachel Madamba",
      "Kevin Zhou",
    ],
    started: "fall-2023",
    alsoActiveIn: [],
    viewProjectLink: "https://openspace.projectcodeuiuc.org",
    sourceCodeLink: "https://github.com/elddc/openspace",
    description: `This project aggregates and visualizes the occupancy of public spaces on campus.

      Many students have issues finding space on campus in high-demand areas. To help students make more informed decisions, we utilize web scraping and crowdsourcing data to estimate occupancy, and display our estimates in an user-friendly map interface.
      
      Data is currently sourced from Campus Recreation and university libraries.`,
  },

  {
    id: "wikipedia-similarity",
    title: "Wikipedia Similarity Applications",
    emoji: "📊",
    areas: ["Data Science", "Web Dev"],
    projectManagers: [
      { name: "Saket Pochiraju", email: "saketmp2@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "ai-insecurities",
    title: "Insecurities in AI-Generated Code",
    emoji: "🪲",
    areas: ["AI"],
    projectManagers: [
      { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
      { name: "Litao Li", email: "lli205@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },

  {
    id: "housing-listing-platform",
    title: "Housing Listing Platform",
    emoji: "🏠",
    areas: ["Web Dev"],
    projectManagers: [
      { name: "Karthik Bagavathy", email: "kb42@illinois.edu" },
    ],
    contributors: [],
    started: "fall-2023",
    alsoActiveIn: ["spring-2024"],
    viewProjectLink: "",
    sourceCodeLink: "",
    description: "Details coming soon",
  },
];

/**
 * Represents a project.
 */
export interface Project {
  /**
   * Unique identifier for the project.
   * Corresponds to URL "/projects/[id]".
   */
  id: string;

  /**
   * Title of the project.
   */
  title: string;

  /**
   * Fun emoji associated with the project.
   */
  emoji?: string;

  /**
   * Areas or domains associated with the project.
   * Examples: "ML", "Web Dev", etc.
   */
  areas: string[];

  /**
   * List of project managers who led the project.
   */
  projectManagers: ProjectManager[]; // List of PMs who led the project

  /**
   * List of members who contributed to the project.
   */
  contributors?: string[]; // List of members who contributed

  /**
   * Semester project began. Should follow format "spring-2024", "fall-2023", etc.
   */
  started: string;

  /**
   * Additional semesters project has been running. Should follow format "spring-2024", "fall-2023", etc.
   */
  alsoActiveIn: string[];

  /**
   * Link to view project (good for web dev projects, etc.)
   */
  viewProjectLink?: string;

  /**
   * Link to view the project's source code (probably GitHub).
   */
  sourceCodeLink?: string;

  /**
   * Description of the project.
   */
  description?: string | any;

  /**
   * Embed content.
   */
  embed?: string[] | any;

  highlight? : boolean | any;
}

/**
 * Represents a project manager.
 */
export interface ProjectManager {
  /**
   * Name of the project manager.
   */
  name: string;

  /**
   * Email of the project manager (optional).
   */
  email?: string;
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
  // Filter to make sure project was started or is active in this semester
  return PROJECTS.filter(
    (project) =>
      project.started === semester || project.alsoActiveIn.includes(semester)
  );
}

/**
 * Get a single project by its ID.
 *
 * @param id the ID to find a project by (e.g., "bird-guide", "mood-tracker", etc.)
 * @returns the project corresponding to the specified ID
 */
export function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id);
}

/**
 * Print a semester nicely. Convert "spring-2024" to "Spring 2024", etc.
 *
 * @param semester the semester to pretty print ("fall-2023", etc.)
 * @returns a pretty-printed semester ("Fall 2023", etc.)
 */
export function prettyPrintSemester(semester: string) {
  const splitUp = semester.split("-");

  if (splitUp.length !== 2) {
    return semester;
  }

  const [season, year] = splitUp;

  // spring becomes Spring, fall becomes Fall
  const capitalizedSeason = season.charAt(0).toUpperCase() + season.slice(1);

  return capitalizedSeason + " " + year;
}
