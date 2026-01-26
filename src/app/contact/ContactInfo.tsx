'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="lg:pl-12"
    >
      {/* Contact Details */}
      <div className="bg-brand-cream p-8 md:p-10">
        <h2 className="font-display text-2xl font-semibold text-brand-black">
          Contact Details
        </h2>

        <div className="mt-8 space-y-6">
          <a
            href="tel:+61420777755"
            className="flex items-start gap-4 transition-colors hover:text-accent-copper"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-brand-black">
              <Phone className="h-5 w-5 text-brand-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-gray">
                Phone
              </p>
              <p className="mt-1 text-lg text-brand-black">0420 777 755</p>
            </div>
          </a>

          <a
            href="mailto:info@bdabuilt.com.au"
            className="flex items-start gap-4 transition-colors hover:text-accent-copper"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-brand-black">
              <Mail className="h-5 w-5 text-brand-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-gray">
                Email
              </p>
              <p className="mt-1 text-lg text-brand-black">info@bdabuilt.com.au</p>
            </div>
          </a>

          <a
            href="https://maps.google.com/?q=16+Blenheim+Road,+Newport+VIC+3015"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 transition-colors hover:text-accent-copper"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-brand-black">
              <MapPin className="h-5 w-5 text-brand-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-gray">
                Address
              </p>
              <p className="mt-1 text-lg text-brand-black">
                16 Blenheim Road
                <br />
                Newport VIC 3015
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-brand-black">
              <Clock className="h-5 w-5 text-brand-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-gray">
                Office Hours
              </p>
              <p className="mt-1 text-lg text-brand-black">
                Monday - Friday
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 border-t border-brand-light pt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-gray">
            Follow Us
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center bg-brand-black text-brand-white transition-colors hover:bg-brand-charcoal"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center bg-brand-black text-brand-white transition-colors hover:bg-brand-charcoal"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8 aspect-video bg-brand-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8936!2d144.8833!3d-37.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f1c3b8d7b9f%3A0x0!2s16%20Blenheim%20Rd%2C%20Newport%20VIC%203015!5e0!3m2!1sen!2sau!4v1706000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BDA Built Office Location - Newport VIC"
        />
      </div>
    </motion.div>
  )
}
