/**
 * List of projects data. Each project can be accessed with URL: "/projects/[projectId]".
 *
 * Note: Do not give a project an id of "old", as "/projects/old/[semester]"
 * is used for accessing projects from previous semesters.
 */
const PROJECTS: Project[] = [
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
    alsoActiveIn: [],
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
    areas: ["Data Viz"],
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
