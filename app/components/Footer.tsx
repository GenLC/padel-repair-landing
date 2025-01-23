import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4 rounded-t-3xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-blue-500 mb-4 md:mb-0">Clinic Padel</div>
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Política de privacidad
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Términos de servicio
          </a>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/clinic_padel?utm_source=qr&igsh=Z2Y1aWhzOWtuMmVt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

