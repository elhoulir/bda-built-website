import Link from 'next/link'
import Image from 'next/image'
import { navigation } from '@/lib/data'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-brand-white">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/bda built logo.svg"
                alt="BDA Built"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-brand-silver">
              Delivering exceptional commercial construction with craftsmanship,
              integrity, and a commitment to excellence.
            </p>
            {/* Social Links - Uncomment when social accounts are set up
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com/company/bdabuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-silver transition-colors hover:text-brand-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bdabuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-silver transition-colors hover:text-brand-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            */}
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services#commercial"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#childcares"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Childcares
                </Link>
              </li>
              <li>
                <Link
                  href="/services#luxury-apartment"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Luxury Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/services#fitouts"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Fitouts
                </Link>
              </li>
              <li>
                <Link
                  href="/services#residential"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#industrial"
                  className="text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  Factories & Warehouses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="tel:+61420777755"
                  className="flex items-center gap-3 text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  <Phone className="h-4 w-4" />
                  0420 777 755
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bdabuilt.com.au"
                  className="flex items-center gap-3 text-sm text-brand-silver transition-colors hover:text-brand-white"
                >
                  <Mail className="h-4 w-4" />
                  info@bdabuilt.com.au
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-brand-silver">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    16 Blenheim Road
                    <br />
                    Newport VIC 3015
                  </span>
                </div>
              </li>
            </ul>
            {/* Licenses */}
            <div className="mt-6 pt-4 border-t border-brand-charcoal">
              <p className="text-[10px] uppercase tracking-wider text-brand-gray mb-2">Builder&apos;s Licenses</p>
              <p className="text-xs text-brand-silver">
                Domestic: DBU69323 / CDBU67965
              </p>
              <p className="text-xs text-brand-silver">
                Commercial: CBL100108
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-charcoal">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-brand-silver">
            &copy; {currentYear} BDA Built. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-brand-silver transition-colors hover:text-brand-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-brand-silver transition-colors hover:text-brand-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
