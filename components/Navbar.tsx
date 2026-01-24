'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sedi', label: 'Le Nostre Sedi' },
    { href: '/galleria', label: 'Galleria' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-[#1a1a1a]/98 backdrop-blur-md border-b border-zinc-700/50 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-28">
          {/* Logo - Responsive e Bilanciato */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-10 sm:w-56 sm:h-14 md:w-80 md:h-20 lg:w-96 lg:h-24">
              <Image
                src="/logo-smokies.png"
                alt="SMOKIES Digital Smoke"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-white hover:text-green-500 transition-colors duration-300 text-sm lg:text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - SEMPRE VISIBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-green-500 transition-colors p-2 flex-shrink-0"
            aria-label="Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 space-y-4 border-t border-zinc-700/50 bg-[#1a1a1a]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-green-500 transition-colors duration-300 py-2 text-lg"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
