import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Benefits from "./components/Benefits"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

