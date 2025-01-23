import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Reparación Funcional de Paletas de Pádel
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Recupera el rendimiento óptimo de tu paleta con nuestra tecnología de vanguardia y expertos especializados.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full">
          <a href="https://wa.me/5493572541471" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Contactar por WhatsApp <Phone className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}

