import { Metadata } from 'next'
import { ContactHero } from './ContactHero'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with BDA Built to discuss your commercial construction project. We're ready to bring your vision to life.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
