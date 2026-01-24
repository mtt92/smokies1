'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/Button'

export default function SediPage() {
  const sedi = [
    {
      name: "Smokie's Savona",
      address: 'Via Paolo Boselli, 32r, 17100 Savona (SV)',
      phone: '+39 389 1745622',
      phoneRaw: '3891745622',
      hours: 'Lun-Sab: 9:00-13:00 | 15:30-19:30 | Dom: Chiuso',
      mapsUrl: 'https://maps.google.com/?q=Via+Paolo+Boselli+32r+Savona',
      imageUrl: '/images/savona-esterno.jpg',
      city: 'Savona'
    },
    {
      name: "Smokie's Voltri",
      address: 'Via Carlo Camozzini, 23r, Genova',
      phone: '+39 320 6741637',
      phoneRaw: '3206741637',
      hours: 'Lun-Sab: 9:00-13:00 | 15:30-19:30 | Dom: Chiuso',
      mapsUrl: 'https://maps.google.com/?q=Via+Carlo+Camozzini+23r+Genova',
      imageUrl: '/images/voltri-esterno.jpg',
      city: 'Voltri'
    },
    {
      name: "Smokie's Bolzaneto",
      address: 'Via Costantino Reta, 113R, Genova',
      phone: '+39 388 4727981',
      phoneRaw: '3884727981',
      hours: 'Lun-Sab: 9:00-13:00 | 15:30-19:30 | Dom: Chiuso',
      mapsUrl: 'https://maps.google.com/?q=Via+Costantino+Reta+113R+Genova',
      imageUrl: '/images/bolzaneto-interno1.jpg',
      city: 'Bolzaneto'
    },
    {
      name: "Smokie's Foce",
      address: 'Piazza Tommaseo, 18/R, 16100 Genova (GE)',
      phone: '+39 349 2238847',
      phoneRaw: '3492238847',
      hours: 'Lun-Sab: 9:00-13:00 | 15:30-19:30 | Dom: Chiuso',
      mapsUrl: 'https://maps.google.com/?q=Piazza+Tommaseo+18R+Genova',
      imageUrl: '/images/foce-bancone.jpg',
      city: 'Foce'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-zinc-900">
            Le nostre <span className="text-gradient bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">sedi</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Vieni a trovarci in una delle nostre quattro sedi in Liguria: 
            <span className="text-green-600 font-semibold"> Savona, Voltri, Bolzaneto e Foce</span>. 
            Ti aspettiamo per offrirti consulenza professionale e prodotti di qualità.
          </p>
        </motion.div>
      </section>

      {/* Sedi Cards - 4 COLONNE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sedi.map((sede, index) => (
            <motion.div
              key={index}
              className="bg-card hover:bg-card-dark rounded-2xl overflow-hidden transition-all duration-300 card-hover border border-zinc-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Immagine Negozio */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={sede.imageUrl}
                  alt={sede.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badge Città */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {sede.city}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-zinc-900">
                  {sede.name}
                </h3>

                {/* Address */}
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    {sede.address}
                  </p>
                </div>

                {/* Phone - CLICCABILE */}
                <div className="flex items-center space-x-3 mb-4">
                  <Phone size={20} className="text-green-500 flex-shrink-0" />
                  <a 
                    href={`tel:${sede.phoneRaw}`}
                    className="text-zinc-700 hover:text-green-500 transition-colors text-sm font-medium"
                  >
                    {sede.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 mb-6">
                  <Clock size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {sede.hours}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <a
                    href={sede.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm"
                  >
                    <Navigation size={18} />
                    <span>Apri Maps</span>
                  </a>
                  <a
                    href={`tel:${sede.phoneRaw}`}
                    className="flex items-center justify-center space-x-2 bg-white border-2 border-green-500 text-green-600 px-4 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors text-sm"
                  >
                    <PhoneCall size={18} />
                    <span>Chiama</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
