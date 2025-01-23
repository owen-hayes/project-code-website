export interface Meeting {
  title: string;
  date?: string;
  location?: string;
  locationLink?: string;
  description?: string;
}

export const MEETINGS: Meeting[] = [
  {
    title: "Spring General Meeting #1 - Info Session",
    date: "Thu, Jan 23, 2025, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Learn more about Project: Code and how to get started on a project this semester!",
  },
  {
    title: "Spring General Meeting #2 - Projects Intro",
    date: "Thu, Jan 30, 2025, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Learn about the projects being held this semester and select the project you are most interested in working on!",
  },

  {
    title: "Spring General Meeting #3 - Midpoint Presentations",
    date: "Mar TBA, 2025",
    location: "Location TBA",
    locationLink: "",
    description:
      "Hear from project groups about the progress they've made so far this semester!",
  },

  {
    title: "General Meeting #4 - Final Presentations",
    date: "Apr TBA, 2025",
    location: "Location TBA",
    locationLink: "",
    description:
      "Hear from project groups again and see each team's final product!",
  },

  // {
  //   title: "More meetings coming soon!",
  //   // date: "Wed, Jan 24, 2024, 6–7 PM",
  //   description:
  //     "Keep an eye on Discord and this site so you never miss a meeting! You can also subscribe to our calendar with the links above.",
  // },
];
