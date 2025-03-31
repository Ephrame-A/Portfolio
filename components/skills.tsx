import { Code, PaintBucket, Layout } from "lucide-react"
import AnimatedSection from "./animated"

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <Code className="text-blue-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">
              Front-End Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">React, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <PaintBucket className="text-blue-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">Styling</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Tailwind CSS, Responsive Design, CSS Modules, bootstrap</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <Layout className="text-blue-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">Tools & Workflow</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">Git, npm, VS Code</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

