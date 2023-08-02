export const metadata = {
  title: 'Home - Kelly Irvin Consulting',
  description: 'Technology Consulting Services',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ContactForm />
    </>
  )
}
