# Project: Code website

Website for Project: Code UIUC created with [React](https://react.dev) and [Next.js](https://nextjs.org).

Hosted at [projectcodeuiuc.org](https://projectcodeuiuc.org).

## Getting Started

### Dependencies

Ensure you have the latest version of [Node.js](https://nodejs.org/en) installed on your machine.

Assuming Node is installed, install required packages by running

```bash
npm install
```

### Running the project

#### Development mode

Run the development server with live reloading:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

#### Production mode

Build and run the optimized, production-ready version:

```bash
npm run build
npm start
```

Access the site at [http://localhost:3000](http://localhost:3000).

## Deployment

The website is currently hosted via [Vercel](https://vercel.com) at [projectcodeuiuc.org](https://projectcodeuiuc.org) and is automatically deployed when changes are pushed to the main branch.

## Contributing

If you'd like to make a contribution, please fork the project, submit a Pull Request with your changes, and tag [@owen-hayes](https://www.github.com/owen-hayes) for review.

### Quick changes

#### Adding or modifying meetings on the home page

- Edit the `MEETINGS` array in [`src/app/meetings.ts`](src/app/meetings.ts)

#### Updating exec board members and Project Managers on the about page

- Update the `EXEC` array in [`src/app/exec.ts`](src/app/exec.ts)
- Update the `PROJECT_MANAGERS` array in [`src/app/project-managers.ts`](src/app/project-managers.ts)

#### Updating projects

- Update the `PROJECTS` array in [`src/app/projects/projects.ts`](src/app/projects/projects.ts)

#### Changing the semester shown on the projects page

- Change `CURRENT_SEMESTER` in [`src/app/projects/page.tsx`](src/app/projects/page.tsx)
- Update `PREVIOUS_SEMESTERS`, also in [`src/app/projects/page.tsx`](src/app/projects/page.tsx)
