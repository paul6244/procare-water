'use client'

import { useRef } from 'react'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const popupRef = useRef<HTMLDivElement>(null)
  const whatsappNumber = '233203641390'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const togglePopup = () => {
    if (popupRef.current) {
      popupRef.current.classList.toggle('hidden')
    }
  }

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div id="contact">
        <button
          onClick={togglePopup}
          className="fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center z-50"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      <div
        ref={popupRef}
        className="hidden"
      >
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={togglePopup}
        />
        <div className="fixed bottom-6 right-6 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Contact Us</h3>
                <p className="text-white/80 text-sm">PRO-CARE Water</p>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <a
              href="tel:+233597433583"
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Phone</p>
                <p className="text-sm font-semibold text-gray-900">059 743 3583</p>
              </div>
            </a>

            <a
              href="tel:+233203641390"
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Phone</p>
                <p className="text-sm font-semibold text-gray-900">020 364 1390</p>
              </div>
            </a>

            <a
              href="mailto:procarewater@gmail.com"
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Email</p>
                <p className="text-sm font-semibold text-gray-900">procarewater@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="p-4 pt-0">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
