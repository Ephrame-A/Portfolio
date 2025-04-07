"use client"

import AnimatedSection from "./animated"

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 bg-white dark:bg-gray-900 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-center relative z-20">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            I&apos;m a passionate junior front-end developer with a strong foundation in React, Tailwind CSS, HTML, and CSS.
            I love creating responsive and user-friendly web applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I&apos;m not coding, you can find me exploring new technologies, or
            enjoying a good cup of coffee while reading tech blogs.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}

