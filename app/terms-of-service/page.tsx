import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-block text-primary hover:text-primary-dark mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using PRO-CARE Mineral Water&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              PRO-CARE provides oxygenated mineral water delivery services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Home water delivery</li>
              <li>Commercial water supply</li>
              <li>Bottled water sales</li>
              <li>Corporate water cooler rental</li>
              <li>Water filtration systems</li>
              <li>Emergency water supply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ordering and Payment</h2>
            <p className="text-gray-700 mb-4">
              All orders are subject to availability. We reserve the right to refuse or cancel any order for any reason. Payment can be made via MoMo or other accepted payment methods. Prices are subject to change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Delivery Terms</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide 24/7 delivery service. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by circumstances beyond our control including weather, traffic, or other force majeure events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Product Quality</h2>
            <p className="text-gray-700 mb-4">
              Our water is ISO 9001:2015 certified, FDA approved, and laboratory tested daily. We maintain the highest quality standards. If you receive a product that does not meet our quality standards, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Customer Responsibilities</h2>
            <p className="text-gray-700 mb-4">Customers agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide accurate contact and delivery information</li>
              <li>Ensure someone is available to receive deliveries</li>
              <li>Store water products properly after delivery</li>
              <li>Report any issues with products or services promptly</li>
              <li>Pay for all ordered products and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              PRO-CARE shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the product.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to terminate or suspend your access to our services at any time, with or without cause, with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none text-gray-700 mb-4 space-y-1">
              <li>Email: procarewater@gmail.com</li>
              <li>Phone: 054 687 5031 / 053 250 2516 / 020 364 1390</li>
              <li>MoMo: 059 743 3583</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
