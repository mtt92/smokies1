'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

export default function GalleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: '/images/savona-esterno.jpg',
      alt: 'SMOKIES Savona - Esterno',
      title: 'Savona - Via Paolo Boselli',
      description: 'Il nostro store nel centro di Savona'
    },
    {
      src: '/images/savona-interno.jpg',
      alt: 'SMOKIES Savona - Interno',
      title: 'Savona - Interior Design',
      description: 'Bancone e scaffali con vasta selezione'
    },
    {
      src: '/images/voltri-esterno.jpg',
      alt: 'SMOKIES Voltri - Facciata',
      title: 'Voltri - Via Carlo Camozzini',
      description: 'La nostra sede a Genova Voltri'
    },
    {
      src: '/images/voltri-interno.jpg',
      alt: 'SMOKIES Voltri - Scaffale Liquidi',
      title: 'Voltri - Esposizione Prodotti',
      description: 'Liquidi e dispositivi premium'
    },
    {
      src: '/images/bolzaneto-interno1.jpg',
      alt: 'SMOKIES Bolzaneto - Interior',
      title: 'Bolzaneto - Store Completo',
      description: 'Scaffalature con logo VIP e ampia selezione'
    },
    {
      src: '/images/bolzaneto-interno2.jpg',
      alt: 'SMOKIES Bolzaneto - Bancone',
      title: 'Bolzaneto - Zona Vendita',
      description: 'Bancone centrale con display prodotti'
    },
    {
      src: '/images/foce-bancone.jpg',
      alt: 'SMOKIES Foce - Reception',
      title: 'Foce - Piazza Tommaseo',
      description: 'Bancone con logo SMOKIES'
    },
    {
      src: '/images/foce-scaffale.jpg',
      alt: 'SMOKIES Foce - Display Liquidi',
      title: 'Foce - Esposizione Premium',
      description: 'Scaffale organizzato con liquidi e aromi'
    },
    {
      src: '/images/gallery-foce-display.jpg',
      alt: 'SMOKIES Foce - Vetrina',
      title: 'Foce - Vetrina Prodotti',
      description: 'Display hardware e dispositivi'
    },
    {
      src: '/images/gallery-savona-interior.jpg',
      alt: 'SMOKIES Savona - Vista Completa',
      title: 'Savona - Layout Store',
      description: 'Vista completa del negozio con bancone'
    },
    {
      src: '/images/store-interior.webp',
      alt: 'Store Interior',
      title: 'Interior Design',
      description: 'Dettaglio esposizione prodotti'
    },
    {
      src: '/images/diamond-mint.webp',
      alt: 'Diamond Mint E-liquid',
      title: 'Liquidi Premium',
      description: 'Diamond Mint - Balsamic Flower'
    },
    {
      src: '/images/liquids-collection.webp',
      alt: 'Collezione Liquidi',
      title: 'Sapori Artigianali',
      description: 'Collezione completa liquidi premium'
    }
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

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
          <div className="flex items-center justify-center mb-6">
            <Camera size={48} className="text-green-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            La nostra <span className="text-gradient">galleria</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Scopri i nostri store, i prodotti premium e l'atmosfera unica di SMOKIES.
            Ogni immagine racconta la nostra passione per lo svapo di qualità.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-zinc-300 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add more images CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card rounded-xl p-8 md:p-12 inline-block">
            <Camera size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Seguici sui social</h3>
            <p className="text-zinc-400 mb-6 max-w-md">
              Vuoi vedere altre foto dei nostri prodotti e negozi? 
              Seguici su Instagram per rimanere sempre aggiornato!
            </p>
            <a
              href="https://www.instagram.com/smokiesmarassi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Seguici su Instagram</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-green-500 transition-colors z-10"
          >
            <X size={36} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 text-white hover:text-green-500 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 text-white hover:text-green-500 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            
            {/* Image info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-zinc-400">
                {images[selectedImage].description}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </div>
  )
}
