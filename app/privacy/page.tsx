'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="text-green-500 hover:text-green-600 transition-colors mb-4 inline-block"
            >
              ← Torna alla Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
              Privacy & Cookie Policy
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-zinc-50 rounded-xl p-8 space-y-6">
              <p className="text-zinc-700 leading-relaxed">
                Questo sito web ha finalità esclusivamente informative e di presentazione dell'attività.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-3">Cookie</h2>
                <p className="text-zinc-700 leading-relaxed">
                  Questo sito non utilizza cookie di profilazione o tracciamento pubblicitario. 
                  Potrebbero essere utilizzati esclusivamente cookie tecnici essenziali per il 
                  corretto funzionamento della navigazione (hosting fornito da Vercel Inc.).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-3">Dati Personali</h2>
                <p className="text-zinc-700 leading-relaxed">
                  Il sito non raccoglie dati personali degli utenti: non sono presenti moduli 
                  di contatto, newsletter o aree di registrazione. Per qualsiasi informazione, 
                  l'utente è invitato a contattare l'attività tramite i recapiti telefonici o 
                  email indicati nella home page.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link href="/">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300">
                Torna alla Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
