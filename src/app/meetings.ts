export interface Meeting {
  title: string;
  date?: string;
  location?: string;
  locationLink?: string;
  description?: string;
}

export const MEETINGS: Meeting[] = [
  {
    title: "General Meeting #1 - Info Session",
    date: "Thu, Sep 5, 2024, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Learn more about Project: Code and how to get started on a project this semester!",
  },
  {
    title: "General Meeting #2 - Codeium Tech Talk & Projects Intro",
    date: "Thu, Sep 12, 2024, 6-8 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Learn about the projects being held this semester and select the project you are most interested in working on!",
  },

  {
    title: "General Meeting #3 - Midpoint Presentations",
    date: "Oct TBA, 2024",
    location: "Location TBA",
    locationLink: "",
    description:
      "Hear from project groups about the progress they've made so far this semester!",
  },

  {
    title: "General Meeting #4 - Final Presentations",
    date: "Dec TBA, 2024",
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
