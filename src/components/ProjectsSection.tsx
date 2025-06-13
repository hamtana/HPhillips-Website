
//List of projects:

import { ArrowRight, ExternalLink, Github } from "lucide-react"

// List of software projects
const projects = [
    {
        id: 1,
        title: "PantryPal",
        description: "A website developed with a team from University which uses AI to produce recipes, based off items that you have added to your Pantry.",
        image: "/projects/project1.png",
        tags: ["React", "Django Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/hamtana/PantryPal/tree/master"
    },

    {
        id: 2,
        title: "Phillips Music & Tech Website",
        description: "A website developed to show my portfolio of work, and let people get in contact with me regarding self-employed work.",
        image: "/projects/project2.png",
        tags: ["Vite+React", "Vercel", "TailwindCSS"],
        demoUrl: "https://phillipsmusictech.co.nz",
        githubUrl: "https://github.com/hamtana/HPhillips-Website"
    },

    {
        id: 3,
        title: "CCDHB Uniform Tracker",
        description: "In development, building an inventory, uniform issuing and management system for Wellington Regional Hospital.",
        image: "/projects/InDevelopment.png",
        tags: ["React", "Java Springboot", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/hamtana/Uniform-Tracker"
    }


]

// List of music projects
const musicProjects = [
    {
        id: 1,
        title: "Floating",
        description: "Song for my band, DownsideUp to be released in 2025. Progress mix available here.",
        tags: ["Logic Pro", "Pro Tools"],
        audioSrc: "/audio/Floating.mp3",
       
    },

    {
        id: 2,
        title: "What Goes Around",
        description: "Song recorded in 2024 as part of a university project.",
        tags: ["Logic Pro", "Pro Tools"],
        audioSrc: "/audio/WhatGoesAround.wav",
        
    },

    {
        id: 3,
        title: "Runaway",
        description: "Song produced for my band DownsideUp, to be released in 2025.",
        tags: ["Logic Pro", "Pro Tools"],
        audioSrc: "/audio/Runaway.mp3",
        
    }


]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold"> Featured <span className="text-primary"> Software Projects </span> </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Here are some of my recent and current software projects</p>
            {/* Projects to be displayed below */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        {/* Adding Project Image */}
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        {/* Adding Project Tags */}
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=> (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Project Title */}
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                        {/* Project Description */}
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                        {/* Project Links*/}
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>     
                        </div>
                    
                    
                    </div>
                ))}
            </div>

            
            {/* Adding GitHub Link */}
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/hamtana/" target="_blank">Check out my Github <ArrowRight size={16}/></a>
            </div>

        </div>
        
        {/* Music Production Project Section */}
        <div className="container py-24 px-4 mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold"> Featured <span className="text-primary"> Music Projects </span> </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Here are some of my recent and current music projects</p>
            {/* Projects to be displayed below */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {musicProjects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">


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
                                {project.tags.map((tag)=> (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>
                        

                        {/* Project Description */}
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>


                    
                    </div>
                ))}
            </div>
        </div>


         

    </section>
}