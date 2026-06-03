'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Droplet, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/pc 2.png',
      title: 'Producing Quality & the Purest Oxygenated Water For All',
      description: 'Super quality purified drinking water produced under strict hygienic conditions. Ghana Standards Authority certified premium mineral water for healthier living.',
    },
    {
      image: '/pc 3.png',
      title: 'Natural Mineral Water',
      description: 'Premium 500ml bottles produced in Ghana by Pro-Care Mineral Water. A subsidiary of Procure Charter Limited.',
    },
    {
      image: '/pc 4.png',
      title: 'Healthiest Water Solutions',
      description: 'We maintain the finest standards to produce the purest drinking water. Hygiene, sanitizing and processing since our first production.',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Droplet className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Natural Mineral Water</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition font-semibold"
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition font-semibold"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary">GSA</p>
                <p className="text-sm text-gray-600">Certified</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500ml</p>
                <p className="text-sm text-gray-600">Premium Bottles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600">Delivery Service</p>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative h-96 md:h-[500px] z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
            <img
              src={slides[currentSlide].image}
              alt="PRO-CARE water bottles"
              className="w-full h-full object-cover rounded-3xl transition-opacity duration-500"
            />
            
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-20"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition z-20"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
