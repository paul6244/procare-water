import Link from 'next/link'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-block text-primary hover:text-primary-dark mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Refund Policy Overview</h2>
            <p className="text-gray-700 mb-4">
              At PRO-CARE Mineral Water, we strive to provide the highest quality products and services. If you are not satisfied with your purchase, please review our refund policy below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligible Refunds</h2>
            <p className="text-gray-700 mb-4">You may be eligible for a refund in the following situations:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Product quality issues (damaged, contaminated, or defective products)</li>
              <li>Incorrect product delivered</li>
              <li>Delivery failures (if we fail to deliver as promised)</li>
              <li>Service subscription cancellations (within 7 days of subscription start)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">The following are generally not eligible for refunds:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Opened or partially used water products (unless quality issues are proven)</li>
              <li>Products returned after 7 days of delivery</li>
              <li>Subscription services after the 7-day cancellation period</li>
              <li>Emergency supply services once delivered</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Process</h2>
            <p className="text-gray-700 mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
              <li>Contact our customer service within 7 days of delivery or service</li>
              <li>Provide your order number and reason for refund request</li>
              <li>If applicable, provide photos of damaged or defective products</li>
              <li>Our team will review your request within 2-3 business days</li>
              <li>Approved refunds will be processed within 5-7 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Method</h2>
            <p className="text-gray-700 mb-4">
              Refunds will be issued using the same payment method used for the original purchase. For MoMo payments, refunds will be processed to the original MoMo number used for payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription Cancellations</h2>
            <p className="text-gray-700 mb-4">
              For subscription services, you may cancel within 7 days of subscription start for a full refund. After 7 days, cancellations will take effect at the end of the current billing period with no refund for the current period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Exchanges</h2>
            <p className="text-gray-700 mb-4">
              We may offer exchanges for defective products instead of refunds, at our discretion. Exchanges will be for the same product or equivalent value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For refund requests or questions, please contact us:
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
