import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-b-3xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Clinic Padel</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-blue-400 transition-colors">
            Servicios
          </a>
          <a href="#benefits" className="hover:text-blue-400 transition-colors">
            Beneficios
          </a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">
            Testimonios
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contacto
          </a>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden rounded-full">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

