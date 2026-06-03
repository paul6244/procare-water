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
            Produced in Ghana by Pro-Care Mineral Water, a subsidiary of Procure Charter Limited. We maintain the highest standards to produce super quality purified drinking water under strict hygienic conditions.
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
                  To provide super quality purified drinking water that supports health and wellness. We believe in producing the best and purest water under strict hygienic conditions, certified by the Ghana Standards Authority, for healthier communities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {['Ghana Standards Authority Certified', 'Produced Under Strict Hygienic Conditions', 'Super Quality Purified Drinking Water', 'Best Before 3 Months After Production'].map((item) => (
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
              src="/naa.png"
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
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-xl transition duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
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
            <div className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/bottt.jpeg"
                alt="PRO-CARE facility view"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/room.jpeg"
                alt="Production room"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ww.jpeg"
                alt="Water processing equipment"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="group relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/ww2.jpeg"
                alt="Quality control area"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
