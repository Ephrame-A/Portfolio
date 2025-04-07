import { ArrowRight } from "lucide-react"
import AnimatedSection from "./animated"

export default function Hero() {
  return (
    <AnimatedSection className="bg-gradient-to-br from-sky-600 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-800 dark:to-red-800 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Hi, I{"'"}m Ephrame</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          A Junior Front-End Developer specializing in React and Tailwind CSS
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors animate-fade-in-up animation-delay-400"
        >
          Get in touch
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </AnimatedSection>
  )
}

