import { CheckCircle, Leaf, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Filtration',
      description: 'Multi-stage purification process including micro-filtration, reverse osmosis, and UV sterilization.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable sourcing and recyclable packaging to protect our environment for future generations.',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Fast, reliable delivery service available 24/7 to meet all your water supply needs.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'ISO certified facilities with regular lab testing to ensure highest purity standards.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About PRO-CARE
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Super quality purified oxygenated mineral water for health-conscious families and businesses. We&apos;re committed to delivering excellence in every drop.
          </p>
        </div>

        <div className="mb-16">
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide premium oxygenated mineral water that supports health and wellness. We believe that if water is life, we provide water with the highest quality standards and fastest delivery service to every household and business.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {['ISO 9001:2015 Certified', 'Laboratory Tested Daily', 'Customer Service Excellence', 'Premium Natural Minerals'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-auto min-h-[400px]">
            <Image
              src="/pro-care-banner.jpg.jpeg"
              alt="PRO-CARE water processing and quality assurance"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Image Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Facility
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/WhatsApp Image 2026-05-21 at 10.23.58 AM.jpeg"
                alt="PRO-CARE facility view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/room.jpeg"
                alt="Production room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ww.jpeg"
                alt="Water processing equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ww2.jpeg"
                alt="Quality control area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
