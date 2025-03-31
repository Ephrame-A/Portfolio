"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

