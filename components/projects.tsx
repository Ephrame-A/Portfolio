import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import AnimatedSection from "./animated"
import spotify from "@/app/images/spotify.png"
import clock from '@/app/images/clock.jpeg'
import bank_web from '@/app/images/bank_web.png'
export default function Projects() {
  const projects = [
    {
      title: "spotify clone",
      description: "<ul><li> -Music Playback: Play, pause, skip, and rewind tracks.</li><li> -Playlist Management: Browse a curated list of songs.</li><li> -Custom Audio Player",
      image: spotify,
      liveLink: "https://frontend-spotify-clone-sigma.vercel.app/",
      githubLink: "https://github.com/Ephrame-A/Frontend-Spotify-clone",
    },
    {
      title: "Pomodoro clock",
      description: "<ul><li>A pomodoro study app.</li><li> React useState, useEffect and useRef hooks and CSS styling<li></ul>",
      image: clock,
      liveLink: "#",
      githubLink: "https://github.com/Ephrame-A/Study-clock-app",
    },
    {
      title: "Static bank Ad website",
      description: "A beautiful react app using tailwindcss",
      image: bank_web,
      liveLink: "#",
      githubLink: "https://github.com/Ephrame-A/bank_react_website",
    },
  ]

  return (
    <AnimatedSection id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 " dangerouslySetInnerHTML={{ __html: project.description }}/>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Github size={20} className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

