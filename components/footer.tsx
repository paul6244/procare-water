import { Droplet, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Home Delivery', href: '#' },
        { label: 'Commercial Supply', href: '#' },
        { label: 'Bottled Water', href: '#' },
        { label: 'Water Coolers', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Refund Policy', href: '/refund-policy' },
        { label: 'Cookie Policy', href: '/cookie-policy' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">PRO-CARE</p>
                <p className="text-xs text-gray-400">Oxygenated Mineral Water</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium oxygenated mineral water delivered 24/7. Laboratory tested, ISO certified, and trusted by families and businesses. If water is life, we provide water.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom Info */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-sm font-semibold text-white mb-2">Phone</p>
              <a href="tel:+233546875031" className="text-primary hover:text-secondary transition text-sm">
                054 687 5031 / 053 250 2516<br/>020 364 1390
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">MoMo</p>
              <a href="tel:+233597433583" className="text-primary hover:text-secondary transition text-sm">
                059 743 3583
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Email</p>
              <a href="mailto:procarewater@gmail.com" className="text-primary hover:text-secondary transition">
                procarewater@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">Hours</p>
              <p className="text-gray-400">24/7 Delivery Service Available</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} PRO-CARE Mineral Water. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 sm:mt-0">
              Made with <span className="text-primary">♥</span> for clean water
            </p>
          </div>
        </div>
      </div>

      {/* Top Badge */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center">
            ISO 9001:2015 Certified | FDA Approved | Laboratory Tested | 100% Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  )
}
