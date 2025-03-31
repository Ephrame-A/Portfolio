"use client"

import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Ephrame
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link 
            href="#about" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </Link>
          <Link 
            href="#skills" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Skills
          </Link>
          <Link 
            href="#projects" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden ml-4 text-gray-600 dark:text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

