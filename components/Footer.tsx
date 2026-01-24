'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrizione */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-zinc-100">smokie</span>
                <span className="text-green-500">'</span>
                <span className="text-zinc-100">s</span>
              </div>
              <span className="text-xs text-green-500 uppercase tracking-widest">
                Digital Smoke
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Il punto di riferimento per lo svapo in Liguria. Tre sedi a tua disposizione con consulenza professionale, hardware premium e liquidi di qualità.
            </p>
            
            {/* Social */}
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/smokiesmarassi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/smokiesturla/?locale=it_IT" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Link Rapidi */}
          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-green-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sedi" className="text-zinc-400 hover:text-green-500 transition-colors text-sm">
                  Le Nostre Sedi
                </Link>
              </li>
              <li>
                <Link href="/galleria" className="text-zinc-400 hover:text-green-500 transition-colors text-sm">
                  Galleria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-zinc-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Voltri, Bolzaneto, Savona</span>
              </li>
              <li className="flex items-center space-x-2 text-zinc-400 text-sm">
                <Phone size={18} />
                <a href="tel:+393123456789" className="hover:text-green-500 transition-colors">
                  +39 312 345 6789
                </a>
              </li>
              <li className="flex items-center space-x-2 text-zinc-400 text-sm">
                <Mail size={18} />
                <a href="mailto:info@smokies.it" className="hover:text-green-500 transition-colors">
                  info@smokies.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {currentYear} SMOKIES Digital Smoke. Tutti i diritti riservati.
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            Vietata la vendita ai minori di 18 anni
          </p>
        </div>
      </div>
    </footer>
  )
}
