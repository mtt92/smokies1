'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Star, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const stores = [
    {
      name: "Smokie's Savona",
      location: 'Savona',
      address: 'Via Paolo Boselli, 32r',
      phone: '+39 389 1745622',
      phoneRaw: '3891745622',
      image: '/images/savona-interno-principale.jpg'
    },
    {
      name: "Smokie's Voltri",
      location: 'Voltri',
      address: 'Via Carlo Camozzini, 23r',
      phone: '+39 320 6741637',
      phoneRaw: '3206741637',
      image: '/images/voltri-interno-principale.jpg'
    },
    {
      name: "Smokie's Bolzaneto",
      location: 'Bolzaneto',
      address: 'Via Costantino Reta, 113R',
      phone: '+39 388 4727981',
      phoneRaw: '3884727981',
      image: '/images/bolzaneto-interno1.jpg'
    },
    {
      name: "Smokie's Foce",
      location: 'Foce',
      address: 'Piazza Tommaseo, 18/R',
      phone: '+39 349 2238847',
      phoneRaw: '3492238847',
      image: '/images/foce-bancone.jpg'
    }
  ]

  const features = [
    {
      icon: '🎯',
      title: 'Consulenza Esperta',
      description: 'Il nostro team ti guida nella scelta perfetta per le tue esigenze'
    },
    {
      icon: '✨',
      title: 'Prodotti Premium',
      description: 'Solo i migliori brand internazionali selezionati con cura'
    },
    {
      icon: '💧',
      title: 'Qualità Garantita',
      description: 'Liquidi certificati e hardware di ultima generazione'
    }
  ]

  const reviews = [
    {
      name: 'Marco R.',
      rating: 5,
      text: 'Entrato, spiegato, capito. Professionalità e competenza al top!',
      location: 'Voltri'
    },
    {
      name: 'Giulia T.',
      rating: 5,
      text: 'Finalmente un negozio dove non ti vendono fumo. Consigli onesti e prezzi giusti.',
      location: 'Bolzaneto'
    },
    {
      name: 'Alessandro M.',
      rating: 5,
      text: 'Staff gentilissimo e sempre disponibile. Il mio punto di riferimento a Savona!',
      location: 'Savona'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section con Immagine Fumo dall'Alto */}
   <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-12">
        {/* Immagine Fumo Custom */}
        <div className="absolute inset-0">
          <Image
            src="/images/smoke-hero.png"
            alt="Smoke background"
            fill
            className="object-cover object-top"
            priority
            quality={95}
          />
          {/* Overlay Gradient dall'alto - Verde più forte */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-black/50 to-black/80" />
          
          {/* Effetto movimento verde più visibile */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo Grande al Centro - Solo SMOKIES */}
            <motion.div
              className="flex justify-center mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative w-[1000px] h-44 md:w-[1200px] md:h-60 lg:w-[1200px] lg:h-72">
                <Image
                  src="/logo-smokies-hero.png"
                  alt="SMOKIES"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Il tuo svapo
              <br />
              in{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                Liguria
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-zinc-200 mb-12 max-w-3xl mx-auto drop-shadow-lg px-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Quattro sedi in Liguria.
              <br />
              Consulenza professionale,
              <br />
              hardware premium e liquidi
              <br />
              di qualità certificata.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link href="/sedi">
                <button className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-2xl shadow-green-500/40 flex items-center space-x-2">
                  <MapPin size={20} />
                  <span>Le Nostre Sedi</span>
                </button>
              </Link>
              <Link href="/galleria">
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                  <span>Galleria Foto</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex items-start justify-center p-2">
              <motion.div 
                className="w-1 h-3 bg-green-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sezione Contatti - Tutti i Numeri */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900">
              📞 <span className="text-gradient">Contattaci</span>
            </h2>
            <p className="text-zinc-600 text-lg">Scegli la sede più vicina e chiamaci direttamente</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((store, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">📍</div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900 text-center">
                  {store.location}
                </h3>
                <p className="text-zinc-600 text-sm mb-4 text-center">
                  {store.address}
                </p>
                <a
                  href={`tel:${store.phoneRaw}`}
                  className="block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>{store.phone}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione 4 Store */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900">
              I nostri <span className="text-gradient">4 store</span>
            </h2>
            <p className="text-zinc-600 text-lg">🏪 In Liguria al tuo servizio</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stores.map((store, index) => (
              <motion.div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {store.name}
                  </h3>
                  <p className="text-zinc-300 text-sm">
                    {store.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/sedi">
              <button className="border-2 border-zinc-900 text-zinc-900 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300">
                Scopri tutte le sedi
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900">
              Perché scegliere <span className="text-gradient">SMOKIES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 text-center border border-zinc-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-6xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900">
              ⭐ Cosa dicono i nostri <span className="text-gradient">clienti</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-zinc-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-green-500 fill-green-500" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-6 leading-relaxed italic text-center">
                  "{review.text}"
                </p>
                <div className="text-center">
                  <p className="text-zinc-900 font-semibold">{review.name}</p>
                  <p className="text-zinc-500 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section con Vapore */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Vapore */}
        <div className="absolute inset-0">
          <Image
            src="/images/smoke-hero.png"
            alt="Smoke background"
            fill
            className="object-cover object-center opacity-40"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Hai dubbi sul <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">dispositivo</span> giusto?
            </h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Il nostro team è sempre disponibile per consigliarti e trovare la soluzione perfetta per te
            </p>
            <Link href="/sedi">
              <button className="bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30">
                Vieni a trovarci
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
