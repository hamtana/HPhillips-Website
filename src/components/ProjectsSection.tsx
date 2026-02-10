//List of projects:

import { ArrowRight, ExternalLink, Github } from "lucide-react";

// List of software projects
const projects = [
  {
    id: 1,
    title: "Address Verifier",
    description:
      "Developing an API that integrates with LINZ (Land Information New Zealand) data to verify addresses across New Zealand. When queried, the API returns JSON-formatted address data including street address, suburb, and city, which can be used to pre-populate form fields.",
    image: "/projects/InDevelopment.png",
    tags: ["Java Springboot", "Docker", "Kubernetes"],
    demoUrl: "#",
  },

  {
    id: 1,
    title: "Southern Paediatrics Website",
    description:
      "Designed and built a website for Southern Paediatrics Ltd, a private specialist healthcare service operating across Dunedin and Central Otago, New Zealand. This project strengthened my practical knowledge of CSS and the Tailwind framework, particularly in building clean, responsive layouts.",
    image: "/projects/sp-flat-logo.png",
    tags: ["NextJs", "TailwindCSS", "Vercel"],
    demoUrl: "https://southernpaediatrics.co.nz",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Monthly File Copier",
    description:
      "A simple yet impactful automation tool created after noticing the manual workload within the Nursing Bureau at Wellington Hospital. Staff were manually copying and renaming daily spreadsheets — so I built an application to automate the process. Users can input the month and year and choose from four tailored copying options.",
    tags: ["Java"],
    image: "/projects/imageNotAvailable.png",
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Review Engine",
    description:
      "A lightweight feedback system designed to help businesses receive and act on low-star reviews privately. If a user submits a rating below three stars, they’re prompted to send an email instead — reducing negative public reviews while improving customer experience.",
    image: "/projects/reviewEngine.png",
    tags: ["Docker", "React+Vite", "NodeJS Express", "TailwindCSS"],
    demoUrl: "https://review-engine.phillipsmusictech.co.nz",
    githubUrl: "https://github.com/hamtana/Review-Engine",
  },

  {
    id: 4,
    title: "Email Verifier",
    description:
      "As part of my contract work, I often send emails containing multiple links. To avoid broken or outdated URLs, I developed a Python script that parses a .eml file, extracts every link, and returns the HTTP response codes — saving time and ensuring reliability.",
    image: "/projects/imageNotAvailable.png",
    tags: ["Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/hamtana/EmailVerifier",
  },

  {
    id: 5,
    title: "HPhillips-CV",
    description:
      "Forked a repository containing a Latex CV template and customized it to create a polished, professional CV. This project allowed me to learn the basics of LaTeX and produce a visually appealing document that effectively showcases my skills and experience.",
    image: "/projects/CV.png",
    tags: ["LaTeX"],
    demoUrl: "#",
    githubUrl: "https://github.com/hamtana/HPhillips-CV",
  },

  {
    id: 6,
    title: "PantryPal",
    description:
      "A website developed with a team from University which uses AI to produce recipes, based off items that you have added to your Pantry.",
    image: "/projects/project1.png",
    tags: ["React", "Django Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/hamtana/PantryPal/tree/master",
  },

  {
    id: 7,
    title: "Phillips Music & Tech Website",
    description:
      "A website developed to show my portfolio of work, and let people get in contact with me regarding my self-employed work.",
    image: "/projects/project2.png",
    tags: ["Vite+React", "Vercel", "TailwindCSS"],
    demoUrl: "https://phillipsmusictech.co.nz",
    githubUrl: "https://github.com/hamtana/HPhillips-Website",
  },

  {
    id: 8,
    title: "CCDHB Uniform Tracker",
    description:
      "In development, building an inventory, uniform issuing and management system for Wellington Regional Hospital.",
    image: "/projects/InDevelopment.png",
    tags: ["React", "Java Springboot", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/hamtana/Uniform-Tracker",
  },
];

// List of music projects
const musicProjects = [
  {
    id: 1,
    title: "Floating",
    description:
      "Song for my band, DownsideUp to be released in 2025. Progress mix available here.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/Floating.mp3",
  },

  {
    id: 2,
    title: "What Goes Around",
    description: "Song recorded in 2024 as part of a university project.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/WhatGoesAround.mp3",
  },

  {
    id: 3,
    title: "Runaway",
    description:
      "Song produced for my band DownsideUp, to be released in 2025.",
    tags: ["Logic Pro", "Pro Tools"],
    audioSrc: "/audio/Runaway.mp3",
  },
];

// Software Management Projects Section
const softwareManagementProjects = [
  {
    id: 1,
    title: "Nichol's Website",
    description:
      "A website I manage for a New Zealand business based in the lower South Island, I have been maintaining this website for the past three years.",
    image: "/projects/nichols.png",
    tags: ["DNM Framework", "HTML", "CSS"],
    demoUrl: "https://nichols.co.nz",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {" "}
          Featured{" "}
          <span className="text-primary"> Software Projects </span>{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Here are some of my recent and current software projects
        </p>
        {/* Projects to be displayed below */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Adding Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Adding Project Tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Project Links*/}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Adding GitHub Link */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/hamtana/"
            target="_blank"
          >
            Check out my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Software Management Projects Section */}
      <div className="container mx-auto max-w-5xl py-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {" "}
          Featured{" "}
          <span className="text-primary">
            {" "}
            Software Management Projects{" "}
          </span>{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Here are some of my current software management projects
        </p>

        {/* Projects to be displayed below */}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {softwareManagementProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Adding Project Image */}
              <div className="scale-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Adding Project Tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Project Links*/}
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Music Production Project Section */}
      <div className="container py-8 px-4 mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {" "}
          Featured <span className="text-primary"> Music Projects </span>{" "}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          Here are some of my recent and current music projects
        </p>
        {/* Projects to be displayed below */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              {/* Project Audio Player */}
              <div className="mt-4">
                <audio controls className="w-full rounded">
                  <source src={project.audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Adding Project Tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
