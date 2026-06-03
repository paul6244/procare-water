import { Truck, Building2, Users, Package, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Package,
      title: '500ml Bottles',
      description: 'PRO-CARE Natural Mineral Water in 500ml bottles. Super quality purified drinking water produced under strict hygienic conditions.',
      price: 'Available in Cases',
    },
    {
      icon: Package,
      title: 'Bulk Orders',
      description: 'Large quantity orders for events, weddings, and corporate functions. Special pricing available for bulk purchases.',
      price: 'Bulk Discounts',
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Regular water delivery directly to your home with flexible subscription plans. Order online and get fresh water within 24 hours.',
      price: 'From ₵150/month',
    },
    {
      icon: Building2,
      title: 'Commercial Supply',
      description: 'Bulk water supply for offices, restaurants, and industries. Custom solutions tailored to your business needs with guaranteed consistency.',
      price: 'Custom Pricing',
    },
    {
      icon: Users,
      title: 'Corporate Coolers',
      description: 'Water cooler rental and maintenance for offices. Includes regular refills, cleaning, and technical support.',
      price: 'From ₵300/month',
    },
    {
      icon: Zap,
      title: 'Emergency Supply',
      description: 'Priority water supply service for emergencies, natural disasters, or urgent water shortage situations available 24/7.',
      price: 'Call for Quote',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium oxygenated mineral water delivery solutions for every need—home, office, or business. Fast, reliable, 24/7 service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 hover:border-primary/30"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <button className="text-primary hover:text-primary-dark font-medium text-sm transition">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t see exactly what you need? Our team specializes in creating custom water solutions for unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
